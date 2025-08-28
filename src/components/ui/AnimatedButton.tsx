export default function AnimatedButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  if (href) {
    return (
      <a
        className={`before:-z-10 relative z-0 flex w-max items-center gap-2 overflow-hidden rounded-lg border-[1px] border-kya-orange px-4 py-2 font-semibold text-kya-orange uppercase transition-all duration-500 before:absolute before:inset-0 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-kya-orange before:transition-transform before:duration-1000 before:content-[""] hover:scale-105 hover:text-neutral-900 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 ${className}`}
        href={href}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={`before:-z-10 relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] border-kya-orange px-4 py-2 font-semibold text-kya-orange uppercase transition-all duration-500 before:absolute before:inset-0 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-kya-orange before:transition-transform before:duration-1000 before:content-[""] hover:scale-105 hover:text-neutral-900 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 ${className}`}
      type="button">
      {children}
    </button>
  );
}
