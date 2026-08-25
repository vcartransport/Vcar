import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convoyage Saint-Tropez | Transport Voiture Saint-Tropez",
  description:
    "Convoyage automobile à Saint-Tropez. Transport de véhicules vers le golfe de Saint-Tropez. Service saisonnier, yachting et résidences.",
  alternates: { canonical: "https://v-car.company/convoyage-saint-tropez" },
  openGraph: {
    title: "Convoyage Automobile Saint-Tropez | V-Car Transport",
    description: "Transport de véhicules vers Saint-Tropez. Saison estivale, yachts et résidences.",
    url: "https://v-car.company/convoyage-saint-tropez",
  },
};

export default function ConvoyageSaintTropezPage() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white">
      <Breadcrumbs items={[
        { label: "Côte d'Azur", href: "/convoyage-cote-d-azur" },
        { label: "Saint-Tropez", href: "/convoyage-saint-tropez" },
      ]} />

      <div className="pt-6 pb-10 relative border-b border-brand-graphite">
        <div className="absolute inset-0 bg-brand-anthracite/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block tracking-[0.3em] text-brand-champagne text-xs uppercase font-medium mb-6">Var</span>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-brand-white mb-8">Convoyage automobile à Saint-Tropez</h1>
          <p className="text-brand-silver/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Le golfe de Saint-Tropez est une destination privilégiée pour les propriétaires de véhicules d&apos;exception. V-Car Transport assure leur acheminement avec soin et discrétion.
          </p>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6 text-brand-silver/60 font-light leading-relaxed mb-32">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-4">Saint-Tropez, destination automobile</h2>
            <p>
              Chaque saison, Saint-Tropez accueille une concentration exceptionnelle de véhicules.
            </p>
            <p>
              V-Car Transport assure le convoyage de ces véhicules depuis <Link href="/convoyage-automobile-marseille" className="text-brand-champagne hover:underline">Marseille</Link> (1h30), <Link href="/convoyage-nice" className="text-brand-champagne hover:underline">Nice</Link>, <Link href="/convoyage-cannes" className="text-brand-champagne hover:underline">Cannes</Link> ou toute autre ville de France. Nous connaissons les particularités d&apos;accès à la presqu&apos;île de Saint-Tropez, les contraintes de circulation estivale, et les exigences des résidences et hôtels locaux.
            </p>
            <p>
              Ce service s&apos;adresse aux propriétaires de résidences secondaires, aux clients des hôtels et des clubs, aux propriétaires et équipages de yachts souhaitant disposer de leur véhicule sur place, et aux organisateurs d&apos;événements privés.
            </p>
          </div>

          <div className="border-t border-brand-graphite pt-24 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Saison estivale", desc: "Pic d'activité de mai à octobre. Acheminement de véhicules pour la saison depuis Paris, Marseille et les grandes villes françaises." },
                { title: "Yachting", desc: "Coordination avec les ports de Saint-Tropez et Cogolin pour la mise à disposition de véhicules aux propriétaires de yachts." },
                { title: "Événements privés", desc: "Transport de véhicules pour des événements, des mariages, des réceptions et des séjours exclusifs dans le golfe." },
              ].map((item) => (
                <div key={item.title} className="border border-brand-graphite p-10 hover:border-brand-champagne/30 transition-colors">
                  <h3 className="text-sm uppercase tracking-widest text-brand-champagne mb-4">{item.title}</h3>
                  <p className="text-brand-silver/60 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-brand-anthracite/40 border border-brand-graphite p-16">
            <h2 className="text-2xl font-heading font-light text-brand-white mb-8">Transport vers Saint-Tropez ?</h2>
            <Link href="/devis" className="inline-block px-10 py-4 bg-brand-champagne text-brand-black uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
