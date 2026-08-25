import type { Metadata } from "next";
import PricingTable from "@/components/ui/PricingTable";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Tarifs Convoyage Automobile | Grille Tarifaire HT",
  description:
    "Tarifs de convoyage automobile V-Car Transport. Prix au kilomètre, carburant et péages inclus, assurance W Garage tous risques. Tarifs HT.",
  alternates: { canonical: "https://v-car.company/tarifs" },
  openGraph: {
    title: "Tarifs Convoyage Automobile | V-Car Transport",
    description: "Grille tarifaire transparente. Carburant, péages et assurance inclus.",
    url: "https://v-car.company/tarifs",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte un convoyage automobile ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos tarifs kilométriques sont dégressifs. Le carburant, les péages et l'assurance W Garage sont inclus dans le prix. Contactez-nous pour un devis personnalisé.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-ce qui est inclus dans le tarif ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le tarif V-Car Transport inclut : le chauffeur professionnel, l'assurance W Garage tous risques, le carburant, les péages autoroutiers, l'état des lieux digital au départ et à l'arrivée.",
      },
    },
    {
      "@type": "Question",
      name: "Existe-t-il des tarifs pour les flottes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, les professionnels (concessionnaires, loueurs, entreprises) bénéficient de tarifs préférentiels dégressifs selon le volume. Contactez-nous pour un devis flotte personnalisé.",
      },
    },
  ],
};

export default function TarifsPage() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white">
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[{ label: "Tarifs", href: "/tarifs" }]} />

      <div className="pt-6 pb-10 relative border-b border-brand-graphite">
        <div className="absolute inset-0 bg-brand-anthracite/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block tracking-[0.3em] text-brand-champagne text-xs uppercase font-medium mb-6">Nos Tarifs HT</span>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-brand-white mb-8">Transparence totale sur nos prix de convoyage.</h1>
          <p className="text-brand-silver/60 text-lg max-w-2xl mx-auto font-light leading-relaxed mb-6">
            Péages, carburant et assurance W garage inclus dans nos tarifs kilométriques.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-brand-champagne/30 text-brand-champagne text-sm font-light">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Péages inclus
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-brand-champagne/30 text-brand-champagne text-sm font-light">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Assurance W garage comprise
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTable />

          {/* Mentions Légales */}
          <div className="mt-16 bg-brand-anthracite/40 border border-brand-graphite p-8">
            <h3 className="text-xl font-heading font-light text-brand-white mb-6 border-b border-brand-graphite pb-4">Mentions Légales</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-brand-silver/60 text-sm font-light">
              <li className="flex items-start">
                <span className="text-brand-champagne mr-2 mt-1">▪</span> Tous les tarifs sont indiqués en Hors Taxes (HT).
              </li>
              <li className="flex items-start">
                <span className="text-brand-champagne mr-2 mt-1">▪</span> Péages compris dans le tarif affiché.
              </li>
              <li className="flex items-start">
                <span className="text-brand-champagne mr-2 mt-1">▪</span> Tarifs carburant compris.
              </li>
              <li className="flex items-start">
                <span className="text-brand-champagne mr-2 mt-1">▪</span> Assurance W garage comprise.
              </li>
              <li className="flex items-start">
                <span className="text-brand-champagne mr-2 mt-1">▪</span> État des lieux digital avec WeProov
              </li>
              <li className="flex items-start">
                <span className="text-brand-champagne mr-2 mt-1">▪</span> Forfait de 100 € HT pour les livraisons de moins de 50km (Classes 1 et 2).
              </li>
            </ul>
          </div>

          {/* WeProov */}
          <div className="mt-32 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <span className="inline-block tracking-[0.3em] text-brand-champagne text-xs uppercase font-medium mb-4">Weproov : État des lieux digital</span>
                <h2 className="text-3xl font-heading font-light text-brand-white mb-6">Fiabilité et Transparence pour le Convoyage Automobile</h2>
                <p className="text-brand-silver/60 font-light leading-relaxed mb-6">
                  WeProov est une solution digitale innovante permettant de réaliser des constats d&apos;état des véhicules. Chaque inspection est horodatée, géolocalisée et accompagnée de photos infalsifiables, garantissant une traçabilité totale et une transparence absolue.
                </p>
                <blockquote className="border-l-2 border-brand-champagne pl-4 italic text-brand-silver/80">
                  &quot;Grâce à WeProov, nous assurons un convoyage fiable, sécurisé et conforme à nos standards d&apos;excellence, tout en renforçant la confiance de nos clients.&quot;
                </blockquote>
              </div>
              <div className="w-full md:w-1/2">
                <div className="border border-brand-graphite p-8 bg-brand-anthracite/20">
                  <ul className="space-y-4">
                    {[
                      { title: "Transparence", desc: "Rapport détaillé à chaque étape." },
                      { title: "Traçabilité", desc: "Données sécurisées et accessibles." },
                      { title: "Sécurité", desc: "Preuves infalsifiables, protégeant contre les litiges." },
                      { title: "Efficacité", desc: "Processus rapide et moderne." },
                      { title: "Professionnalisme", desc: "Une image de qualité renforcée." }
                    ].map((item, idx) => (
                      <li key={idx} className="flex flex-col border-b border-brand-graphite/50 pb-4 last:border-0 last:pb-0">
                        <span className="text-brand-champagne font-medium text-sm mb-1">{item.title}</span>
                        <span className="text-brand-silver/60 text-sm font-light">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ tarifaire */}
          <div className="mt-32 max-w-3xl mx-auto border-t border-brand-graphite pt-24">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-12 text-center">Questions sur nos tarifs</h2>
            <div className="space-y-8">
              <div className="border-b border-brand-graphite pb-8">
                <h3 className="text-lg font-heading font-light text-brand-white mb-4">Combien coûte un convoyage automobile ?</h3>
                <p className="text-brand-silver/60 font-light leading-relaxed">Nos tarifs kilométriques sont dégressifs. Le carburant, les péages et l&apos;assurance W Garage sont inclus. Contactez-nous pour un devis personnalisé adapté à votre trajet et votre véhicule.</p>
              </div>
              <div className="border-b border-brand-graphite pb-8">
                <h3 className="text-lg font-heading font-light text-brand-white mb-4">Qu&apos;est-ce qui est inclus dans le tarif ?</h3>
                <p className="text-brand-silver/60 font-light leading-relaxed">Le tarif V-Car Transport inclut : le chauffeur professionnel, l&apos;assurance W Garage tous risques, le carburant, les péages autoroutiers et l&apos;état des lieux digital au départ et à l&apos;arrivée.</p>
              </div>
              <div className="border-b border-brand-graphite pb-8">
                <h3 className="text-lg font-heading font-light text-brand-white mb-4">Existe-t-il des tarifs pour les flottes ?</h3>
                <p className="text-brand-silver/60 font-light leading-relaxed">Oui, les professionnels (concessionnaires, loueurs, entreprises) bénéficient de tarifs préférentiels dégressifs. <Link href="/transport-flotte-vehicules" className="text-brand-champagne hover:underline">Découvrir notre offre flotte</Link>.</p>
              </div>
            </div>
          </div>

          <div className="mt-32 max-w-3xl mx-auto text-center border-t border-brand-graphite pt-24">
            <h3 className="text-3xl font-heading font-light text-brand-white mb-6">Demande Spécifique</h3>
            <p className="text-brand-silver/60 mb-10 font-light leading-relaxed">
              Pour des trajets hors grille ou une <Link href="/transport-flotte-vehicules" className="text-brand-champagne hover:underline">flotte professionnelle</Link>, notre équipe établit un devis sur mesure.
            </p>
            <Link href="/devis" className="inline-block px-10 py-4 bg-transparent border border-brand-champagne text-brand-champagne uppercase tracking-widest text-xs font-bold hover:bg-brand-champagne hover:text-brand-black transition-colors">
              Formulaire de devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
