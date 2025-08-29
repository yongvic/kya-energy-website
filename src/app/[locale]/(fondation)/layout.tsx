import type { ReactNode } from "react";
import Header from "@/components/shared/fondation/Header";

export default function EntrepriseLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
