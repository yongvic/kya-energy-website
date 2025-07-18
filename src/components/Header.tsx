import HeaderMobile from "@/components/HeaderMobile";
import HeaderDesktop from "@/components/HeaderDesktop";
import "@/styles/header.css";

export default function Header() {
  return (
    <header>
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
}
