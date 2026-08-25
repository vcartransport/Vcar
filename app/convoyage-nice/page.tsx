import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convoyage Nice | Transport Voiture Nice",
  description:
    "Convoyage automobile à Nice et dans les Alpes-Maritimes. Transport de véhicules depuis et vers Nice : aéroport, centre-ville, concessionnaires.",
  alternates: { canonical: "https://v-car.company/convoyage-nice" },
  openGraph: {
    title: "Convoyage Automobile Nice | V-Car Transport",
    description: "Transport de véhicules à Nice. Liaison aéroport, résidences, concessions.",
    url: "https://v-car.company/convoyage-nice",
  },
};

export default function ConvoyageNicePage() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white">
      <Breadcrumbs items={[
        { label: "Côte d'Azur", href: "/convoyage-cote-d-azur" },
        { label: "Nice", href: "/convoyage-nice" },
      ]} />

      <div className="pt-6 pb-10 relative border-b border-brand-graphite">
        <div className="absolute inset-0 bg-brand-anthracite/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block tracking-[0.3em] text-brand-champagne text-xs uppercase font-medium mb-6">Alpes-Maritimes</span>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-brand-white mb-8">Convoyage automobile à Nice</h1>
          <p className="text-brand-silver/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Transport de véhicules depuis et vers Nice. Aéroport Nice Côte d&apos;Azur, Promenade des Anglais, centre-ville et périphérie. Service rapide et sécurisé.
          </p>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6 text-brand-silver/60 font-light leading-relaxed mb-32">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-4">Nice, plaque tournante du convoyage sur la Riviera</h2>
            <p>
              Capitale des Alpes-Maritimes et cinquième ville de France, Nice est un carrefour naturel pour le transport de véhicules sur la Côte d&apos;Azur. Son aéroport international, le troisième de France, génère un flux constant de transferts automobiles.
            </p>
            <p>
              V-Car Transport assure des convoyages réguliers depuis et vers Nice : livraison de véhicules achetés à distance, transfert depuis l&apos;aéroport, déplacement entre résidences, acheminement vers des concessions, ou transport de véhicules pour des événements sur la Riviera.
            </p>
            <p>
              La proximité avec <Link href="/convoyage-monaco" className="text-brand-champagne hover:underline">Monaco</Link> (20 minutes), <Link href="/convoyage-cannes" className="text-brand-champagne hover:underline">Cannes</Link> (30 minutes) et <Link href="/convoyage-automobile-marseille" className="text-brand-champagne hover:underline">Marseille</Link> (2h30) fait de Nice un point de départ idéal pour les convoyages régionaux.
            </p>
          </div>

          <div className="border-t border-brand-graphite pt-24 mb-32">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-12 text-center">Services à Nice</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Aéroport Nice", desc: "Prise en charge et livraison de véhicules à l'aéroport Nice Côte d'Azur. Coordination avec les loueurs et les services de conciergerie." },
                { title: "Résidences & hôtels", desc: "Livraison directe à domicile ou à l'hôtel. Discrétion assurée pour les résidents saisonniers et les clients des palaces niçois." },
                { title: "Concessions & garages", desc: "Transfert de véhicules entre concessions, acheminement vers des ateliers spécialisés, livraison de véhicules vendus." },
              ].map((item) => (
                <div key={item.title} className="border border-brand-graphite p-10 hover:border-brand-champagne/30 transition-colors">
                  <h3 className="text-sm uppercase tracking-widest text-brand-champagne mb-4">{item.title}</h3>
                  <p className="text-brand-silver/60 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-brand-anthracite/40 border border-brand-graphite p-16">
            <h2 className="text-2xl font-heading font-light text-brand-white mb-8">Transport depuis ou vers Nice ?</h2>
            <Link href="/devis" className="inline-block px-10 py-4 bg-brand-champagne text-brand-black uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
