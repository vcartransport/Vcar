import Link from "next/link";
import JsonLd from "./JsonLd";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const crumbs: BreadcrumbItem[] = [
    { label: "Accueil", href: "/" },
    ...items,
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://v-car.company${item.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <nav aria-label="Fil d'Ariane" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-brand-silver/50 font-light">
          {crumbs.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && <span className="text-brand-graphite mx-1">›</span>}
              {index === crumbs.length - 1 ? (
                <span className="text-brand-champagne">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-brand-champagne transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
