import ThemeSwitcherButton from "@/components/ThemeSwitcherButton";

export default function HeaderMobile({
  className = ""
}: {
    className?: string
  }) {
  return (
    <div className={`${className}`}>
      <ThemeSwitcherButton />
    </div>
  );
}
