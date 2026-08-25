import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Convoyage Automobile Professionnel en France",
  description:
    "Service de convoyage automobile professionnel partout en France. Chauffeurs qualifiés, assurance W Garage tous risques, état des lieux digital. Véhicules particuliers et flottes.",
  alternates: { canonical: "https://v-car.company/convoyage-automobile" },
  openGraph: {
    title: "Convoyage Automobile Professionnel | V-Car Transport",
    description: "Convoyage automobile par la route avec chauffeur professionnel. Assurance W Garage tous risques incluse.",
    url: "https://v-car.company/convoyage-automobile",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment fonctionne le convoyage automobile par la route ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un chauffeur professionnel V-Car prend en charge votre véhicule à l'adresse de départ, le conduit jusqu'à la destination et le remet en main propre. Un état des lieux est réalisé au départ et à l'arrivée.",
      },
    },
    {
      "@type": "Question",
      name: "Quels types de véhicules peuvent être convoyés ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous convoyons tous les véhicules : citadines, berlines, SUV, utilitaires et véhicules de flotte professionnelle (Peugeot, Renault, BMW, Mercedes, Audi, Volkswagen, Nissan, etc.).",
      },
    },
    {
      "@type": "Question",
      name: "Le convoyage est-il assuré ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, chaque convoyage est couvert par notre assurance professionnelle W Garage, une assurance tous risques spécifique au transport de véhicules. Votre véhicule est protégé pendant toute la durée du transport.",
      },
    },
  ],
};

export default function ConvoyageAutomobilePage() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white">
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[{ label: "Convoyage automobile", href: "/convoyage-automobile" }]} />

      <div className="pt-6 pb-10 relative border-b border-brand-graphite">
        <div className="absolute inset-0 bg-brand-anthracite/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block tracking-[0.3em] text-brand-champagne text-xs uppercase font-medium mb-6">
            Notre expertise
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-brand-white mb-8">
            Convoyage automobile professionnel en France
          </h1>
          <p className="text-brand-silver/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Un service de transport de véhicules par la route, pensé pour les particuliers et les professionnels exigeants. Chauffeurs qualifiés, assurance tous risques, ponctualité.
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Processus */}
          <div className="mb-32">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-12 text-center">
              Comment se déroule un convoyage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Demande de devis", desc: "Décrivez votre besoin : véhicule, départ, arrivée, délai. Nous vous adressons un devis personnalisé sous 24 heures." },
                { step: "02", title: "Prise en charge", desc: "Notre chauffeur se présente à l'adresse convenue. Un état des lieux détaillé est réalisé via notre application propriétaire avant le départ." },
                { step: "03", title: "Acheminement", desc: "Votre véhicule est conduit avec soin par un professionnel expérimenté. Vous pouvez suivre l'avancement du transport." },
                { step: "04", title: "Remise en main propre", desc: "À l'arrivée, un nouvel état des lieux confirme l'intégrité du véhicule. Remise des clés et des documents." },
              ].map((item) => (
                <div key={item.step} className="border border-brand-graphite p-8 hover:border-brand-champagne/30 transition-colors">
                  <span className="text-brand-champagne text-2xl font-heading font-light mb-4 block">{item.step}</span>
                  <h3 className="text-sm font-sans uppercase tracking-widest text-brand-white mb-4">{item.title}</h3>
                  <p className="text-brand-silver/60 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services couverts */}
          <div className="mb-32 border-t border-brand-graphite pt-24">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-8">
              Un service adapté à chaque besoin
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-6 text-brand-silver/60 font-light leading-relaxed">
                <p>
                  Le convoyage automobile par la route est la solution privilégiée pour le transfert de véhicules sur le territoire français. Contrairement au transport sur plateau, le convoyage permet une prise en charge rapide, une grande flexibilité sur les lieux de départ et d'arrivée, et un coût maîtrisé.
                </p>
                <p>
                  Chez V-Car Transport, chaque convoyage est réalisé par un chauffeur professionnel sélectionné pour sa maîtrise de la conduite, son sérieux et son sens du service. Nos convoyeurs sont habitués à prendre le volant de tous types de véhicules.
                </p>
                <p>
                  L'ensemble de nos prestations inclut l'assurance W Garage tous risques, le carburant, les péages autoroutiers, et un état des lieux digitalisé au départ et à l'arrivée.
                </p>
              </div>
              <div className="space-y-8">
                <div className="border-l border-brand-champagne/50 pl-6">
                  <h3 className="text-sm uppercase tracking-widest text-brand-white mb-2">Particuliers</h3>
                  <p className="text-brand-silver/50 text-sm font-light">Achat à distance, déménagement, rapatriement, livraison à domicile.</p>
                </div>
                <div className="border-l border-brand-champagne/50 pl-6">
                  <h3 className="text-sm uppercase tracking-widest text-brand-white mb-2">Professionnels</h3>
                  <p className="text-brand-silver/50 text-sm font-light">Concessionnaires, garages, loueurs, courtiers automobiles.</p>
                </div>
                <div className="border-l border-brand-champagne/50 pl-6">
                  <h3 className="text-sm uppercase tracking-widest text-brand-white mb-2">Flottes</h3>
                  <p className="text-brand-silver/50 text-sm font-light">
                    <Link href="/transport-flotte-vehicules" className="text-brand-champagne hover:underline">Transport de flottes</Link> pour entreprises et distributeurs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Zones */}
          <div className="mb-32 border-t border-brand-graphite pt-24">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-8 text-center">
              Partout en France, depuis Marseille
            </h2>
            <p className="text-brand-silver/60 font-light text-lg text-center max-w-2xl mx-auto mb-12">
              Basés à <Link href="/convoyage-automobile-marseille" className="text-brand-champagne hover:underline">Marseille</Link>, nous assurons des convoyages sur l'ensemble du territoire et toutes distances (Paris, Lyon, Bordeaux, Toulouse, Nantes, Clermont-Ferrand...), avec une réactivité particulière sur la <Link href="/convoyage-cote-d-azur" className="text-brand-champagne hover:underline">Côte d'Azur</Link>, <Link href="/convoyage-monaco" className="text-brand-champagne hover:underline">Monaco</Link>, <Link href="/convoyage-nice" className="text-brand-champagne hover:underline">Nice</Link>, <Link href="/convoyage-cannes" className="text-brand-champagne hover:underline">Cannes</Link> et <Link href="/convoyage-saint-tropez" className="text-brand-champagne hover:underline">Saint-Tropez</Link>.
            </p>
          </div>

          {/* FAQ */}
          <div className="border-t border-brand-graphite pt-24 mb-32">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-12 text-center">Questions fréquentes</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="border-b border-brand-graphite pb-8">
                <h3 className="text-lg font-heading font-light text-brand-white mb-4">Comment fonctionne le convoyage automobile par la route ?</h3>
                <p className="text-brand-silver/60 font-light leading-relaxed">Un chauffeur professionnel V-Car prend en charge votre véhicule à l'adresse de départ, le conduit jusqu'à la destination et le remet en main propre. Un état des lieux est réalisé au départ et à l'arrivée.</p>
              </div>
              <div className="border-b border-brand-graphite pb-8">
                <h3 className="text-lg font-heading font-light text-brand-white mb-4">Quels types de véhicules peuvent être convoyés ?</h3>
                <p className="text-brand-silver/60 font-light leading-relaxed">Nous convoyons tous les véhicules : citadines, berlines, SUV, utilitaires et véhicules de flotte professionnelle (Peugeot, Renault, BMW, Mercedes, Audi, Volkswagen, Nissan, etc.).</p>
              </div>
              <div className="border-b border-brand-graphite pb-8">
                <h3 className="text-lg font-heading font-light text-brand-white mb-4">Le convoyage est-il assuré ?</h3>
                <p className="text-brand-silver/60 font-light leading-relaxed">Oui, chaque convoyage est couvert par notre assurance professionnelle W Garage, une assurance tous risques spécifique au transport de véhicules.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-brand-anthracite/40 border border-brand-graphite p-16">
            <h2 className="text-2xl font-heading font-light text-brand-white mb-8">Un véhicule à transporter ?</h2>
            <Link href="/devis" className="inline-block px-10 py-4 bg-brand-champagne text-brand-black uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
