import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Transport Flotte Véhicules | Convoyage Flotte Automobile",
  description:
    "Transport et convoyage de flottes automobiles pour concessionnaires, loueurs, entreprises et distributeurs. Tarifs volume, organisation dédiée, livraison partout en France.",
  alternates: { canonical: "https://v-car.company/transport-flotte-vehicules" },
  openGraph: {
    title: "Transport de Flottes Automobiles | V-Car Transport",
    description: "Convoyage professionnel de flottes. Concessionnaires, loueurs, entreprises : tarifs dédiés et organisation sur mesure.",
    url: "https://v-car.company/transport-flotte-vehicules",
  },
};

export default function TransportFlottePage() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white">
      <Breadcrumbs items={[{ label: "Flottes automobiles", href: "/transport-flotte-vehicules" }]} />
      <div className="pt-6 pb-10 relative border-b border-brand-graphite">
        <div className="absolute inset-0 bg-brand-anthracite/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block tracking-[0.3em] text-brand-champagne text-xs uppercase font-medium mb-6">Professionnels</span>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-brand-white mb-8">Transport et convoyage de flottes automobiles</h1>
          <p className="text-brand-silver/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Une solution professionnelle pour le déplacement de vos véhicules en volume. Concessionnaires, loueurs, entreprises et distributeurs : bénéficiez d'un service organisé et de tarifs préférentiels.
          </p>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 mb-32">
            <div className="w-full lg:w-1/2 space-y-6 text-brand-silver/60 font-light leading-relaxed">
              <h2 className="text-3xl font-heading font-light text-brand-white mb-4">Le partenaire de vos déplacements de flotte</h2>
              <p>
                La gestion logistique d'un parc automobile implique régulièrement le déplacement de véhicules entre différents sites : transferts inter-concessions, livraisons clients, retours de location, approvisionnement de stock, ou événements automobiles.
              </p>
              <p>
                V-Car Transport propose aux professionnels de l'automobile un service de convoyage de flotte structuré : planification des convoyages, coordination des chauffeurs, suivi des véhicules et facturation centralisée. Chaque véhicule bénéficie du même niveau de soin qu'un transport unitaire.
              </p>
              <p>
                Nous intervenons pour les concessionnaires, les garages, les loueurs longue et courte durée, les courtiers automobiles, les sociétés de leasing, les organisateurs d'événements automobiles et les entreprises gérant un parc de véhicules de fonction.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="border border-brand-graphite p-10 bg-brand-anthracite/50">
                <h3 className="text-sm uppercase tracking-widest text-brand-champagne mb-8">Avantages du compte professionnel</h3>
                <div className="space-y-6">
                  {[
                    "Tarifs préférentiels dégressifs selon le volume",
                    "Interlocuteur dédié pour la coordination",
                    "Facturation centralisée mensuelle",
                    "Planification multi-véhicules",
                    "État des lieux digitalisé pour chaque véhicule",
                    "Assurance W Garage tous risques sur chaque transport",
                    "Suivi en temps réel de chaque convoyage",
                    "Flexibilité sur les délais et les créneaux",
                  ].map((item) => (
                    <div key={item} className="flex items-start border-b border-brand-graphite pb-4">
                      <span className="text-brand-champagne mr-3 text-xs mt-1">✓</span>
                      <span className="text-brand-white font-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-brand-graphite pt-24 mb-32">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-12 text-center">Secteurs d'activité</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Concessionnaires", desc: "Transfert inter-sites, livraison client, approvisionnement de stock neuf et occasion." },
                { title: "Loueurs", desc: "Rééquilibrage de flotte entre agences, retour de véhicules, livraison à domicile." },
                { title: "Entreprises", desc: "Déplacement de véhicules de fonction, renouvellement de parc, transfert entre filiales." },
                { title: "Événements", desc: "Acheminement de véhicules pour salons, lancements de modèles, essais presse, road shows." },
              ].map((item) => (
                <div key={item.title} className="border border-brand-graphite p-8 hover:border-brand-champagne/30 transition-colors">
                  <h3 className="text-sm uppercase tracking-widest text-brand-champagne mb-4">{item.title}</h3>
                  <p className="text-brand-silver/60 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-brand-anthracite/40 border border-brand-graphite p-16">
            <h2 className="text-2xl font-heading font-light text-brand-white mb-4">Une flotte à déplacer ?</h2>
            <p className="text-brand-silver/60 font-light mb-8">Contactez-nous pour un devis flotte personnalisé et des conditions préférentielles.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/devis" className="inline-block px-10 py-4 bg-brand-champagne text-brand-black uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors">
                Demander un devis flotte
              </Link>
              <Link href="/tarifs" className="inline-block px-10 py-4 border border-brand-graphite text-brand-silver uppercase tracking-widest text-xs font-light hover:border-brand-champagne hover:text-brand-champagne transition-colors">
                Voir la grille tarifaire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
