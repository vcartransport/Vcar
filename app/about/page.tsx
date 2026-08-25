import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "À Propos | Convoyage Automobile",
  description:
    "V-Car Transport, spécialiste du convoyage automobile à Marseille. Découvrez notre mission, nos engagements et notre approche du transport de véhicules.",
  alternates: { canonical: "https://v-car.company/about" },
  openGraph: {
    title: "À Propos de V-Car Transport",
    description: "Spécialiste du convoyage automobile à Marseille et partout en France.",
    url: "https://v-car.company/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white">
      <Breadcrumbs items={[{ label: "À propos", href: "/about" }]} />

      <div className="pt-6 pb-10 relative border-b border-brand-graphite">
        <div className="absolute inset-0 bg-brand-anthracite/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block tracking-[0.3em] text-brand-champagne text-xs uppercase font-medium mb-6">Maison V-Car</span>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-brand-white mb-8">L&apos;Excellence du Convoyage.</h1>
          <p className="text-brand-silver/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Une référence du transport automobile, basée à Marseille.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
            <div className="w-full lg:w-1/2">
              <span className="block text-brand-champagne text-xs uppercase tracking-widest mb-6">Notre Mission</span>
              <h2 className="text-3xl font-heading font-light text-brand-white mb-8">Plus qu&apos;un transport,<br />une prise en charge.</h2>
              <div className="space-y-6 text-brand-silver/60 font-light leading-relaxed">
                <p>
                  Chez V-Car Transport, nous avons pour mission de proposer un <Link href="/convoyage-automobile" className="text-brand-champagne hover:underline">convoyage automobile</Link> à la hauteur des attentes des propriétaires les plus exigeants. Que vous soyez un particulier ou un professionnel de l&apos;automobile, nous traitons chaque véhicule avec le niveau d&apos;exigence qu&apos;il mérite.
                </p>
                <p>
                  Notre service inclut des chauffeurs triés sur le volet, une assurance tous risques W Garage sans faille, et une transparence totale tout au long de la prestation. Jusqu'à la <Link href="/transport-flotte-vehicules" className="text-brand-champagne hover:underline">flotte professionnelle</Link>, chaque convoyage est une prestation personnalisée.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] bg-brand-anthracite border border-brand-graphite p-2 relative">
                <Image
                  src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=2000&auto=format&fit=crop"
                  alt="Chauffeur professionnel V-Car au volant lors d'un convoyage automobile"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale opacity-80"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-brand-graphite pt-24 mb-32">
            <div className="text-center mb-16">
              <span className="block text-brand-champagne text-xs uppercase tracking-widest mb-6">L&apos;Engagement</span>
              <h2 className="text-3xl font-heading font-light text-brand-white">Nos Piliers Fondamentaux</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="text-center md:text-left border-l border-brand-graphite pl-6">
                <h3 className="text-sm font-sans uppercase tracking-widest text-brand-white mb-4">Sécurité Absolue</h3>
                <p className="text-brand-silver/50 font-light leading-relaxed text-sm">
                  Tous nos transports sont couverts par notre assurance professionnelle W Garage. L&apos;état des lieux digital, effectué au départ et à l&apos;arrivée, garantit un suivi précis de votre véhicule.
                </p>
              </div>
              <div className="text-center md:text-left border-l border-brand-graphite pl-6">
                <h3 className="text-sm font-sans uppercase tracking-widest text-brand-white mb-4">Rigueur Professionnelle</h3>
                <p className="text-brand-silver/50 font-light leading-relaxed text-sm">
                  Nos chauffeurs sont des experts de la route. Sélectionnés pour leur conduite fluide et leur sens du service client, ils assurent une mise en main personnalisée.
                </p>
              </div>
              <div className="text-center md:text-left border-l border-brand-graphite pl-6">
                <h3 className="text-sm font-sans uppercase tracking-widest text-brand-white mb-4">Réactivité</h3>
                <p className="text-brand-silver/50 font-light leading-relaxed text-sm">
                  Basés à <Link href="/convoyage-automobile-marseille" className="text-brand-champagne hover:underline">Marseille</Link>, nous intervenons sur l&apos;ensemble du territoire national dans des délais très courts, de 12 à 48 heures. <Link href="/convoyage-cote-d-azur" className="text-brand-champagne hover:underline">Côte d&apos;Azur</Link>, <Link href="/convoyage-monaco" className="text-brand-champagne hover:underline">Monaco</Link> et toute la France.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto bg-brand-anthracite/40 border border-brand-graphite p-16">
            <h2 className="text-2xl font-heading font-light text-brand-white mb-8">Un transport à planifier ?</h2>
            <Link href="/devis" className="inline-block px-10 py-4 bg-brand-champagne text-brand-black uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors">
              Obtenir une estimation
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
