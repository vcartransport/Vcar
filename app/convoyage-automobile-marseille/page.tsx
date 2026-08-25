import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convoyage Automobile Marseille | Transport Véhicule Marseille",
  description:
    "Convoyage automobile à Marseille et dans les Bouches-du-Rhône. Transport de véhicules depuis Marseille vers toute la France. Chauffeurs professionnels, assurance W Garage incluse.",
  alternates: { canonical: "https://v-car.company/convoyage-automobile-marseille" },
  openGraph: {
    title: "Convoyage Automobile Marseille | V-Car Transport",
    description: "Votre convoyeur automobile de confiance à Marseille. Transport sécurisé depuis et vers la cité phocéenne.",
    url: "https://v-car.company/convoyage-automobile-marseille",
  },
};

export default function ConvoyageMarseilllePage() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white">
      <Breadcrumbs items={[
        { label: "Convoyage automobile", href: "/convoyage-automobile" },
        { label: "Marseille", href: "/convoyage-automobile-marseille" },
      ]} />

      <div className="pt-6 pb-10 relative border-b border-brand-graphite">
        <div className="absolute inset-0 bg-brand-anthracite/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block tracking-[0.3em] text-brand-champagne text-xs uppercase font-medium mb-6">SEO Local</span>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-brand-white mb-8">Convoyage automobile à Marseille</h1>
          <p className="text-brand-silver/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Votre convoyeur automobile de référence à Marseille. Transport de véhicules depuis et vers la cité phocéenne, pour les particuliers et les professionnels.
          </p>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 mb-32">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-heading font-light text-brand-white mb-8">Votre convoyeur à Marseille</h2>
              <div className="space-y-6 text-brand-silver/60 font-light leading-relaxed">
                <p>
                  Basée au 24 avenue du Prado dans le 6e arrondissement de Marseille, V-Car Transport est votre interlocuteur privilégié pour le convoyage automobile dans les Bouches-du-Rhône et la région Provence-Alpes-Côte d'Azur.
                </p>
                <p>
                  Depuis Marseille, nous acheminons vos véhicules vers toutes les destinations en France : Paris, Lyon, Bordeaux, Toulouse, mais aussi vers la <Link href="/convoyage-cote-d-azur" className="text-brand-champagne hover:underline">Côte d'Azur</Link>, <Link href="/convoyage-nice" className="text-brand-champagne hover:underline">Nice</Link>, <Link href="/convoyage-cannes" className="text-brand-champagne hover:underline">Cannes</Link>, <Link href="/convoyage-monaco" className="text-brand-champagne hover:underline">Monaco</Link> et <Link href="/convoyage-saint-tropez" className="text-brand-champagne hover:underline">Saint-Tropez</Link>.
                </p>
                <p>
                  Notre proximité géographique nous permet une réactivité importante sur l'ensemble de la région PACA, avec des prises en charge possibles sous 24 heures.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="border border-brand-graphite p-10 bg-brand-anthracite/50">
                <h3 className="text-sm uppercase tracking-widest text-brand-champagne mb-8">Depuis Marseille</h3>
                <div className="space-y-6">
                  {[
                    { dest: "Marseille → Nice", km: "~200 km", time: "~2h30" },
                    { dest: "Marseille → Cannes", km: "~180 km", time: "~2h" },
                    { dest: "Marseille → Monaco", km: "~210 km", time: "~2h30" },
                    { dest: "Marseille → Saint-Tropez", km: "~120 km", time: "~1h30" },
                    { dest: "Marseille → Paris", km: "~780 km", time: "~7h30" },
                    { dest: "Marseille → Lyon", km: "~315 km", time: "~3h" },
                  ].map((route) => (
                    <div key={route.dest} className="flex justify-between items-center border-b border-brand-graphite pb-4">
                      <span className="text-brand-white font-light text-sm">{route.dest}</span>
                      <div className="text-right">
                        <span className="text-brand-silver/50 text-xs">{route.km}</span>
                        <span className="text-brand-silver/30 mx-2">·</span>
                        <span className="text-brand-champagne text-xs">{route.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pour qui */}
          <div className="border-t border-brand-graphite pt-24 mb-32">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-12 text-center">
              Un service pour tous à Marseille
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-brand-graphite p-10 hover:border-brand-champagne/30 transition-colors">
                <h3 className="text-sm uppercase tracking-widest text-brand-champagne mb-4">Particuliers</h3>
                <p className="text-brand-silver/60 text-sm font-light leading-relaxed">
                  Achat de véhicule à distance, déménagement, rapatriement de voiture de vacances, livraison suite à un achat en concession.
                </p>
              </div>
              <div className="border border-brand-graphite p-10 hover:border-brand-champagne/30 transition-colors">
                <h3 className="text-sm uppercase tracking-widest text-brand-champagne mb-4">Concessionnaires</h3>
                <p className="text-brand-silver/60 text-sm font-light leading-relaxed">
                  Transfert inter-sites, livraison client, rapatriement de véhicules d'occasion, approvisionnement de stock. <Link href="/transport-flotte-vehicules" className="text-brand-champagne hover:underline">Tarifs flotte disponibles</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-brand-anthracite/40 border border-brand-graphite p-16">
            <h2 className="text-2xl font-heading font-light text-brand-white mb-4">Transport depuis ou vers Marseille ?</h2>
            <p className="text-brand-silver/60 font-light mb-8">Obtenez un devis personnalisé pour votre convoyage.</p>
            <Link href="/devis" className="inline-block px-10 py-4 bg-brand-champagne text-brand-black uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
