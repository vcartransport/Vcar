import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convoyage Cannes | Transport Voiture Cannes",
  description:
    "Convoyage automobile à Cannes. Transport de véhicules pour le Festival, la Croisette, les événements et les résidences.",
  alternates: { canonical: "https://v-car.company/convoyage-cannes" },
  openGraph: {
    title: "Convoyage Automobile Cannes | V-Car Transport",
    description: "Transport de véhicules à Cannes. Festival, Croisette, événements et résidences.",
    url: "https://v-car.company/convoyage-cannes",
  },
};

export default function ConvoyageCannesPage() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white">
      <Breadcrumbs items={[
        { label: "Côte d'Azur", href: "/convoyage-cote-d-azur" },
        { label: "Cannes", href: "/convoyage-cannes" },
      ]} />

      <div className="pt-6 pb-10 relative border-b border-brand-graphite">
        <div className="absolute inset-0 bg-brand-anthracite/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block tracking-[0.3em] text-brand-champagne text-xs uppercase font-medium mb-6">Alpes-Maritimes</span>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-brand-white mb-8">Convoyage automobile à Cannes</h1>
          <p className="text-brand-silver/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Transport de véhicules dans la capitale du cinéma. Que ce soit pour un événement, un séjour ou une transaction, V-Car Transport assure un service discret et ponctuel.
          </p>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6 text-brand-silver/60 font-light leading-relaxed mb-32">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-4">Cannes, vitrine automobile</h2>
            <p>
              Cannes accueille chaque année des événements internationaux — Festival du Film, MIPIM, MAPIC, Cannes Lions — qui drainent une clientèle habituée aux véhicules d&apos;exception. Le convoyage automobile y est un service naturellement recherché.
            </p>
            <p>
              V-Car Transport intervient pour l&apos;acheminement de véhicules vers les palaces de la Croisette, les résidences du Suquet, les villas de la Californie et les hôtels du bord de mer.
            </p>
            <p>
              Depuis <Link href="/convoyage-automobile-marseille" className="text-brand-champagne hover:underline">Marseille</Link> (2 heures), <Link href="/convoyage-nice" className="text-brand-champagne hover:underline">Nice</Link> (30 minutes) ou <Link href="/convoyage-monaco" className="text-brand-champagne hover:underline">Monaco</Link> (1 heure), nous organisons des convoyages réguliers vers Cannes.
            </p>
          </div>

          <div className="border-t border-brand-graphite pt-24 mb-32">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-12 text-center">Contextes d&apos;intervention à Cannes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Événements & festivals", desc: "Acheminement de véhicules pour les festivals, salons professionnels, tournages et événements privés cannois." },
                { title: "Séjours & résidences", desc: "Livraison de véhicules pour les résidents saisonniers, les locataires de villas et les clients des grands hôtels." },
                { title: "Yachting", desc: "Coordination avec les services portuaires pour la mise à disposition de véhicules aux propriétaires et équipages de yachts." },
              ].map((item) => (
                <div key={item.title} className="border border-brand-graphite p-10 hover:border-brand-champagne/30 transition-colors">
                  <h3 className="text-sm uppercase tracking-widest text-brand-champagne mb-4">{item.title}</h3>
                  <p className="text-brand-silver/60 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-brand-anthracite/40 border border-brand-graphite p-16">
            <h2 className="text-2xl font-heading font-light text-brand-white mb-8">Transport depuis ou vers Cannes ?</h2>
            <Link href="/devis" className="inline-block px-10 py-4 bg-brand-champagne text-brand-black uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
