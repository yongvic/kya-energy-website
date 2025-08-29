// components/layout/DesktopNav.tsx
// Ce composant est complexe et utilise des librairies comme Radix UI pour
// une accessibilité parfaite, comme dans notre session précédente sur la navigation.
// Je vais fournir ici une version simplifiée pour se concentrer sur le header.

import Link from "next/link";
// ... (imports pour le méga menu)

export default function DesktopNav({ links }: { links: any[] }) {
  return (
    <nav className="flex items-center gap-6 text-sm font-semibold text-slate-700">
      {links.map((link) => (
        // Ici irait la logique pour afficher un lien simple ou un méga menu
        <Link
          key={link.label}
          href={link.href}
          className="transition-colors hover:text-kya-green">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
