import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convoyage Côte d'Azur | Transport Véhicule Côte d'Azur",
  description:
    "Convoyage automobile sur la Côte d'Azur. Nice, Cannes, Monaco, Saint-Tropez, Antibes, Menton. Transport de véhicules sur la French Riviera.",
  alternates: { canonical: "https://v-car.company/convoyage-cote-d-azur" },
  openGraph: {
    title: "Convoyage Automobile Côte d'Azur | V-Car Transport",
    description: "Transport de véhicules sur la Côte d'Azur. Nice, Cannes, Monaco, Saint-Tropez.",
    url: "https://v-car.company/convoyage-cote-d-azur",
  },
};

export default function ConvoyageCoteDazurPage() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white">
      <Breadcrumbs items={[{ label: "Côte d'Azur", href: "/convoyage-cote-d-azur" }]} />

      <div className="pt-6 pb-10 relative border-b border-brand-graphite">
        <div className="absolute inset-0 bg-brand-anthracite/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block tracking-[0.3em] text-brand-champagne text-xs uppercase font-medium mb-6">French Riviera</span>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-brand-white mb-8">Convoyage automobile sur la Côte d&apos;Azur</h1>
          <p className="text-brand-silver/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            V-Car Transport assure l&apos;acheminement de vos véhicules entre les grandes destinations de la French Riviera et toute la France.
          </p>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6 text-brand-silver/60 font-light leading-relaxed mb-32">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-4">Votre convoyeur sur la Côte d&apos;Azur</h2>
            <p>
              De <Link href="/convoyage-automobile-marseille" className="text-brand-champagne hover:underline">Marseille</Link> à <Link href="/convoyage-monaco" className="text-brand-champagne hover:underline">Monaco</Link>, en passant par <Link href="/convoyage-nice" className="text-brand-champagne hover:underline">Nice</Link>, <Link href="/convoyage-cannes" className="text-brand-champagne hover:underline">Cannes</Link> et <Link href="/convoyage-saint-tropez" className="text-brand-champagne hover:underline">Saint-Tropez</Link>, la Côte d&apos;Azur est un territoire naturel pour le transport de véhicules haut de gamme.
            </p>
            <p>
              Collectionneurs, résidents saisonniers, hôtels, concessions : les besoins en convoyage automobile sur la Riviera sont permanents et exigeants. V-Car Transport apporte une réponse professionnelle, discrète et réactive à chacune de ces demandes.
            </p>
            <p>
              Notre connaissance du réseau routier local, des contraintes de stationnement dans les centres-villes de la Côte d&apos;Azur et des spécificités de chaque destination nous permet d&apos;organiser des transports fluides et ponctuel.
            </p>
          </div>

          {/* Destinations */}
          <div className="border-t border-brand-graphite pt-24 mb-32">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-12 text-center">Nos destinations sur la Côte d&apos;Azur</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Nice", href: "/convoyage-nice", desc: "Alpes-Maritimes, aéroport, centre-ville" },
                { name: "Cannes", href: "/convoyage-cannes", desc: "La Croisette, événements, palaces" },
                { name: "Monaco", href: "/convoyage-monaco", desc: "Principauté, GP" },
                { name: "Saint-Tropez", href: "/convoyage-saint-tropez", desc: "Golfe, saison estivale, yachts" },
              ].map((dest) => (
                <Link key={dest.name} href={dest.href} className="border border-brand-graphite p-8 hover:border-brand-champagne/50 transition-colors group text-center">
                  <h3 className="text-xl font-heading font-light text-brand-white group-hover:text-brand-champagne transition-colors mb-2">{dest.name}</h3>
                  <p className="text-brand-silver/50 text-xs font-light">{dest.desc}</p>
                </Link>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Antibes", "Menton", "Saint-Jean-Cap-Ferrat", "Villefranche-sur-Mer", "Fréjus", "Toulon"].map((city) => (
                <div key={city} className="border border-brand-graphite p-4 text-center">
                  <span className="text-brand-silver/50 text-xs font-light">{city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Liaisons */}
          <div className="border-t border-brand-graphite pt-24 mb-32">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-8 text-center">Liaisons fréquentes</h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                "Marseille → Nice",
                "Marseille → Monaco",
                "Marseille → Cannes",
                "Marseille → Saint-Tropez",
                "Nice → Monaco",
                "Nice → Cannes",
                "Paris → Côte d'Azur",
              ].map((route) => (
                <div key={route} className="flex items-center justify-between border-b border-brand-graphite pb-3">
                  <span className="text-brand-white font-light text-sm">{route}</span>
                  <Link href="/devis" className="text-brand-champagne text-xs hover:underline">Devis →</Link>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-brand-anthracite/40 border border-brand-graphite p-16">
            <h2 className="text-2xl font-heading font-light text-brand-white mb-8">Transport sur la Côte d&apos;Azur ?</h2>
            <Link href="/devis" className="inline-block px-10 py-4 bg-brand-champagne text-brand-black uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
