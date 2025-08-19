export default function AnimatedButton({
  children,
  className = '',
  href,
  animateColor,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  animateColor: string;
}) {
  const commonClasses = `transition-all duration-500 absolute size-0 origin-center group-hover:size-full group-hover:rotate-180 ${animateColor}`;

  const contents = (
    <span className="overflow-hidden">
      <span className={`relative size-full overflow-hidden group ${className}`}>
        <span className="absolute top-0 left-0 size-full overflow-hidden">
          {/* ::before */}
          <span className={`top-0 left-0 ${commonClasses}`}></span>
          {/* ::after */}
          <span className={`bottom-0 right-0 ${commonClasses}`}></span>
        </span>
        {/* Contents */}
        <span className="size-full relative">{children}</span>
      </span>
    </span>
  );

  if (href) {
    return (
      <a>
        {contents}
      </a>
    );
  }

  return (
    <button>
      {contents}
    </button>
  );
};

