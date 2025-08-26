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
  const commonClasses = `transition-all duration-500 relative overflow-hidden rounded-lg ${animateColor}`;

  const rippleClasses = `absolute top-0 left-0 w-full h-full bg-opacity-50 rounded-lg opacity-0 transition-opacity duration-500`;

  if (href) {
    return (
      <a href={href} className={commonClasses}>
        <span className="relative z-10">{children}</span>
        <span
          className={`${rippleClasses} ${animateColor}`}
          style={{
            animation: 'ripple 0.5s ease-in-out',
          }}
        />
      </a>
    );
  }

  return (
    <button className={commonClasses}>
      <span className="relative z-10">{children}</span>
      <span
        className={`${rippleClasses} ${animateColor}`}
        style={{
          animation: 'ripple 0.5s ease-in-out',
        }}
      />
    </button>
  );
}
