import type { ReactNode } from "react";

export default function EntrepriseLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <main>{children}</main>;
}
