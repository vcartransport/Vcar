import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convoyage Monaco | Transport Voiture Monaco",
  description:
    "Convoyage automobile à Monaco. Transport de véhicules vers la Principauté. Confidentialité, discrétion et service.",
  alternates: { canonical: "https://v-car.company/convoyage-monaco" },
  openGraph: {
    title: "Convoyage Automobile Monaco | V-Car Transport",
    description: "Transport de véhicules vers Monaco. Confidentialité et service de qualité.",
    url: "https://v-car.company/convoyage-monaco",
  },
};

export default function ConvoyageMonacoPage() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white">
      <Breadcrumbs items={[
        { label: "Côte d'Azur", href: "/convoyage-cote-d-azur" },
        { label: "Monaco", href: "/convoyage-monaco" },
      ]} />

      <div className="pt-6 pb-10 relative border-b border-brand-graphite">
        <div className="absolute inset-0 bg-brand-anthracite/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block tracking-[0.3em] text-brand-champagne text-xs uppercase font-medium mb-6">Principauté</span>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-brand-white mb-8">Convoyage automobile à Monaco</h1>
          <p className="text-brand-silver/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            La Principauté de Monaco concentre les véhicules les plus exclusifs au monde. V-Car Transport assure leur acheminement avec le niveau de confidentialité et de professionnalisme que Monaco exige.
          </p>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 mb-32">
            <div className="w-full lg:w-1/2 space-y-6 text-brand-silver/60 font-light leading-relaxed">
              <h2 className="text-3xl font-heading font-light text-brand-white mb-4">Monaco, l&apos;exigence du service</h2>
              <p>
                Transporter un véhicule vers Monaco, c&apos;est s&apos;engager à respecter les standards les plus élevés du service automobile.
              </p>
              <p>
                V-Car Transport est familier des spécificités logistiques de Monaco : accès réglementés, stationnement en sous-sol, coordination avec les résidences, les hôtels et les concierges privés. Nous assurons une prise en charge discrète et parfaitement organisée.
              </p>
              <p>
                Nos convoyages vers Monaco partent le plus souvent de <Link href="/convoyage-automobile-marseille" className="text-brand-champagne hover:underline">Marseille</Link> (2h30), <Link href="/convoyage-nice" className="text-brand-champagne hover:underline">Nice</Link> (20 minutes), <Link href="/convoyage-cannes" className="text-brand-champagne hover:underline">Cannes</Link> (1 heure), ou directement de Paris et d&apos;autres métropoles françaises.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="border border-brand-champagne/30 p-10 bg-brand-champagne/5">
                <h3 className="text-sm uppercase tracking-widest text-brand-champagne mb-8">Pourquoi Monaco fait appel à V-Car</h3>
                <div className="space-y-6">
                  {[
                    { title: "Confidentialité", desc: "Discrétion totale sur l'identité du propriétaire, le véhicule et les lieux de prise en charge." },
                    { title: "Tous véhicules", desc: "Expérience dans le transport de tous types de véhicules." },
                    { title: "Logistique Monaco", desc: "Connaissance des contraintes d'accès, des parkings résidentiels et des procédures locales." },
                    { title: "Ponctualité", desc: "Respect absolu des horaires convenus, condition non négociable à Monaco." },
                  ].map((item) => (
                    <div key={item.title} className="border-b border-brand-graphite pb-4">
                      <span className="text-brand-white font-light block mb-1">{item.title}</span>
                      <span className="text-brand-silver/50 text-xs font-light">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-brand-graphite pt-24 mb-32">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-12 text-center">Contextes de transport vers Monaco</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Résidents", desc: "Livraison de véhicules pour les résidents monégasques, coordonnée avec les syndics et concierges." },
                { title: "Grand Prix", desc: "Acheminement de véhicules à l'occasion du Grand Prix de Monaco et des événements automobiles." },
                { title: "Passionnés", desc: "Transport de véhicules pour les passionnés basés à Monaco." },
                { title: "Hôtels & palaces", desc: "Mise à disposition de véhicules pour les clients des grands hôtels et des services de conciergerie." },
              ].map((item) => (
                <div key={item.title} className="border border-brand-graphite p-8 hover:border-brand-champagne/30 transition-colors">
                  <h3 className="text-sm uppercase tracking-widest text-brand-champagne mb-4">{item.title}</h3>
                  <p className="text-brand-silver/60 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-brand-anthracite/40 border border-brand-graphite p-16">
            <h2 className="text-2xl font-heading font-light text-brand-white mb-8">Transport depuis ou vers Monaco ?</h2>
            <Link href="/devis" className="inline-block px-10 py-4 bg-brand-champagne text-brand-black uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
