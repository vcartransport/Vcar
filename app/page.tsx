import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroAnimation from "@/components/ui/HeroAnimation";
import JsonLd from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Convoyage Automobile Marseille | Transport Véhicule France",
  description:
    "Convoyage automobile à Marseille et partout en France. Transport sécurisé de flottes professionnelles. Devis gratuit.",
  alternates: {
    canonical: "https://v-car.company",
  },
  openGraph: {
    title: "V-Car Transport | Convoyage Automobile Marseille",
    description:
      "Transport sécurisé de flottes professionnelles. Marseille, Côte d'Azur, Monaco et toute la France.",
    url: "https://v-car.company",
  },
};

const faqData = [
  {
    question: "Comment se déroule un convoyage automobile avec V-Car ?",
    answer:
      "Après votre demande de devis, nous organisons la prise en charge de votre véhicule : état des lieux détaillé au départ, transport par un chauffeur professionnel qualifié, puis remise en main propre avec un nouvel état des lieux à l'arrivée. Vous êtes informé à chaque étape.",
  },
  {
    question: "Quelle assurance couvre le transport de mon véhicule ?",
    answer:
      "Chaque transport est couvert par notre assurance professionnelle W Garage, une assurance tous risques spécifique au convoyage automobile. Votre véhicule est protégé du départ à la livraison.",
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer:
      "Nous proposons trois formules : livraison express en 12 à 24 heures, standard en 24 à 48 heures, ou économique sous 48 à 72 heures. Les délais varient selon la distance et la disponibilité.",
  },
  {
    question: "Quelles villes et régions sont desservies ?",
    answer:
      "Nous intervenons sur l'ensemble du territoire français. Notre base à Marseille nous permet une réactivité particulière sur la Provence-Alpes-Côte d'Azur : Nice, Cannes, Monaco, Saint-Tropez, Antibes, Toulon, et toutes les villes de la région.",
  },
  {
    question: "Combien coûte un convoyage automobile ?",
    answer:
      "Nos tarifs sont calculés au kilomètre, à partir de 1,20 € TTC/km. Le carburant, les péages et l'assurance W Garage sont inclus. Demandez un devis gratuit et personnalisé pour connaître le coût exact de votre transport.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Convoyage automobile",
  provider: {
    "@id": "https://v-car.company/#organization",
  },
  description:
    "Transport sécurisé de véhicules par la route avec chauffeur professionnel. Flottes professionnelles. Nous convoyons tous les véhicules : citadines, berlines, SUV, utilitaires et véhicules de flotte professionnelle (Peugeot, Renault, BMW, Mercedes, Audi, Volkswagen, Nissan, etc.).",
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  serviceType: "Convoyage automobile",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-black text-brand-white">
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
            alt="Voiture prise en charge pour un convoyage automobile"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/30"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeroAnimation>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold tracking-tight text-brand-white leading-tight mb-8">
              Convoyage de véhicule <span className="bg-gradient-to-r from-brand-champagne to-[#4A3F20] bg-clip-text text-transparent">professionnel</span>
            </h1>

            <p className="text-lg md:text-xl text-brand-silver/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Confiez-nous le transport de votre véhicule en toute sérénité. Que vous soyez un particulier ou un professionnel, nous assurons un service premium toutes distances, partout en France (Paris, Lyon, Bordeaux, Toulouse, Nantes, Clermont-Ferrand...).
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-10 py-4 border border-brand-champagne text-brand-champagne hover:bg-brand-champagne hover:text-brand-black transition-all uppercase tracking-widest text-xs"
              >
                Demander un devis gratuit
              </Link>
              <div className="flex flex-col text-center sm:text-left sm:pl-4 sm:border-l border-brand-graphite">
                <a
                  href="tel:0765595877"
                  className="font-light text-brand-silver hover:text-brand-champagne transition-colors"
                >
                  07 65 59 58 77
                </a>
                <a
                  href="mailto:contact@v-car.company"
                  className="text-sm font-light text-brand-silver/60 hover:text-brand-champagne transition-colors mt-1"
                >
                  contact@v-car.company
                </a>
              </div>
            </div>
          </HeroAnimation>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-24 bg-brand-anthracite border-t border-brand-graphite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="text-center md:text-left group">
              <h3 className="text-sm font-sans uppercase tracking-widest text-brand-champagne mb-4">
                W Garage + Assurance
              </h3>
              <p className="text-brand-silver/60 text-sm font-light leading-relaxed group-hover:text-brand-silver transition-colors">
                W Garage agréé avec assurance tous risques incluse pour une
                protection maximale de votre véhicule pendant le transport.
              </p>
            </div>

            <div className="text-center md:text-left group">
              <h3 className="text-sm font-sans uppercase tracking-widest text-brand-champagne mb-4">
                Livraison 12H 24H 48H
              </h3>
              <p className="text-brand-silver/60 text-sm font-light leading-relaxed group-hover:text-brand-silver transition-colors">
                Des délais de livraison adaptés à vos besoins. Service express
                en 12h, standard en 24h ou économique en 48h.
              </p>
            </div>

            <div className="text-center md:text-left group">
              <h3 className="text-sm font-sans uppercase tracking-widest text-brand-champagne mb-4">
                Transports Sécurisés
              </h3>
              <p className="text-brand-silver/60 text-sm font-light leading-relaxed group-hover:text-brand-silver transition-colors">
                Chaque véhicule est transporté avec le plus grand soin par nos
                professionnels expérimentés et qualifiés.
              </p>
            </div>

            <div className="text-center md:text-left group">
              <h3 className="text-sm font-sans uppercase tracking-widest text-brand-champagne mb-4">
                Tarifs sur Demande
              </h3>
              <p className="text-brand-silver/60 text-sm font-light leading-relaxed group-hover:text-brand-silver transition-colors">
                Devis personnalisé et gratuit adapté à votre besoin. Prix
                compétitifs et transparents, sans surprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-brand-black relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-brand-champagne/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-3xl md:text-5xl font-heading font-light text-brand-white mb-8">
              Nos Services de Convoyage
            </h2>
            <p className="text-brand-silver/70 text-lg font-light leading-relaxed">
              Solutions adaptées à tous vos besoins de transport automobile. Du
              transfert inter-sites à la livraison client, en passant par le
              rapatriement de véhicules, notre équipe de convoyeurs
              professionnels assure une prestation rigoureuse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/convoyage-automobile" className="border border-brand-graphite p-10 hover:border-brand-champagne/50 transition-colors bg-brand-anthracite/50 group">
              <h3 className="text-xl font-heading font-light text-brand-white mb-6 group-hover:text-brand-champagne transition-colors">
                Convoyage par la Route
              </h3>
              <p className="text-brand-silver/60 font-light leading-relaxed">
                Nous convoyons tous les véhicules toutes distances. Un chauffeur professionnel prend en charge votre véhicule avec notre application propriétaire d'état des lieux pour une traçabilité parfaite.
              </p>
            </Link>

            <Link href="/transport-prive" className="border border-brand-champagne p-10 bg-brand-champagne/5 group">
              <h3 className="text-xl font-heading font-light text-brand-champagne mb-6">
                Transport Privé
              </h3>
              <p className="text-brand-silver/80 font-light leading-relaxed">
                Service exclusif et confidentiel pour vos déplacements ou le rapatriement de votre véhicule.
              </p>
            </Link>

            <Link href="/transport-flotte-vehicules" className="border border-brand-graphite p-10 hover:border-brand-champagne/50 transition-colors bg-brand-anthracite/50 group">
              <h3 className="text-xl font-heading font-light text-brand-white mb-6 group-hover:text-brand-champagne transition-colors">
                Flottes Professionnelles
              </h3>
              <p className="text-brand-silver/60 font-light leading-relaxed">
                Déplacement de flottes pour concessionnaires, loueurs,
                entreprises et distributeurs automobiles. Tarifs volume et
                organisation dédiée.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="py-32 bg-brand-anthracite border-t border-brand-graphite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-3xl md:text-5xl font-heading font-light text-brand-white mb-8">
              Nos Zones d&apos;Intervention
            </h2>
            <p className="text-brand-silver/70 text-lg font-light leading-relaxed">
              Depuis notre base à{" "}
              <Link href="/convoyage-automobile-marseille" className="text-brand-champagne hover:underline">
                Marseille
              </Link>
              , nous assurons des convoyages sur <strong>toute la France</strong> (Paris, Lyon, Bordeaux, Toulouse, Nantes, Clermont-Ferrand), avec une forte présence sur la{" "}
              <Link href="/convoyage-cote-d-azur" className="text-brand-champagne hover:underline">
                Côte d&apos;Azur
              </Link>
              {" "}et{" "}
              <Link href="/convoyage-monaco" className="text-brand-champagne hover:underline">
                Monaco
              </Link>.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Marseille", href: "/convoyage-automobile-marseille", featured: true },
              { name: "Côte d'Azur", href: "/convoyage-cote-d-azur", featured: true },
              { name: "Nice", href: "/convoyage-nice" },
              { name: "Cannes", href: "/convoyage-cannes" },
              { name: "Monaco", href: "/convoyage-monaco", featured: true },
              { name: "Saint-Tropez", href: "/convoyage-saint-tropez" },
              { name: "Toulon", href: "/convoyage-cote-d-azur" },
              { name: "France entière", href: "/convoyage-automobile" },
            ].map((zone) => (
              <Link
                key={zone.name}
                href={zone.href}
                className={`p-6 text-center border transition-colors ${
                  zone.featured
                    ? "border-brand-champagne/50 bg-brand-champagne/5 hover:bg-brand-champagne/10"
                    : "border-brand-graphite hover:border-brand-champagne/30"
                }`}
              >
                <span className={`text-sm font-light ${zone.featured ? "text-brand-champagne" : "text-brand-silver/70"}`}>
                  {zone.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-32 bg-brand-anthracite border-t border-brand-graphite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-light text-brand-white mb-6">
              Questions Fréquentes
            </h2>
            <p className="text-brand-silver/60 font-light text-lg">
              Tout savoir sur le convoyage automobile avec V-Car Transport.
            </p>
          </div>

          <div className="space-y-8">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-brand-graphite pb-8"
              >
                <h3 className="text-lg font-heading font-light text-brand-white mb-4">
                  {item.question}
                </h3>
                <p className="text-brand-silver/60 font-light leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Devis */}
      <section className="py-32 bg-brand-black border-t border-brand-graphite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-light text-brand-white mb-6">
            Demander un Devis Gratuit
          </h2>
          <p className="text-brand-silver/60 font-light text-lg mb-12 max-w-2xl mx-auto">
            Besoin de transporter votre véhicule ? Remplissez notre formulaire
            et recevez une proposition tarifaire personnalisée dans les plus
            brefs délais.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/devis"
              className="inline-block px-12 py-4 bg-brand-champagne text-brand-black uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors"
            >
              Obtenir un devis
            </Link>
            <Link
              href="/tarifs"
              className="inline-block px-12 py-4 border border-brand-graphite text-brand-silver uppercase tracking-widest text-xs font-light hover:border-brand-champagne hover:text-brand-champagne transition-colors"
            >
              Voir nos tarifs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
