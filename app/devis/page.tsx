import type { Metadata } from "next";
import DevisForm from "@/components/ui/DevisForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Devis Convoyage Automobile | Estimation Gratuite",
  description:
    "Demandez un devis gratuit pour votre convoyage automobile. Transport de véhicules partout en France : particuliers, professionnels, flottes. Réponse rapide.",
  alternates: { canonical: "https://v-car.company/devis" },
  openGraph: {
    title: "Devis Convoyage Automobile Gratuit | V-Car Transport",
    description: "Obtenez une estimation de prix pour le transport de votre véhicule. Réponse sous 24h.",
    url: "https://v-car.company/devis",
  },
};

export default function DevisPage() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white">
      <Breadcrumbs items={[{ label: "Devis", href: "/devis" }]} />
      <div className="pt-6 pb-10 relative border-b border-brand-graphite">
        <div className="absolute inset-0 bg-brand-anthracite/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block tracking-[0.3em] text-brand-champagne text-xs uppercase font-medium mb-6">Estimation gratuite</span>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-brand-white mb-8">Demander un Devis.</h1>
          <p className="text-brand-silver/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Décrivez votre besoin de transport et recevez une proposition tarifaire personnalisée. Réponse sous 24 heures.
          </p>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <DevisForm />
          </div>

          <div className="border-t border-brand-graphite pt-16">
            <h2 className="text-2xl font-heading font-light text-brand-white mb-8 text-center">Informations utiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-brand-champagne mb-3">Tarifs</h3>
                <p className="text-brand-silver/60 text-sm font-light">À partir de 1,20 € TTC/km. <Link href="/tarifs" className="text-brand-champagne hover:underline">Voir la grille</Link>.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-brand-champagne mb-3">Délais</h3>
                <p className="text-brand-silver/60 text-sm font-light">Express 12-24h, standard 24-48h, économique 48-72h.</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-brand-champagne mb-3">Inclus</h3>
                <p className="text-brand-silver/60 text-sm font-light">Chauffeur, assurance W Garage, carburant, péages, état des lieux.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
