import type { Metadata } from "next";
import DevisForm from "@/components/ui/DevisForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Contact & Devis | Convoyage Automobile",
  description:
    "Contactez V-Car Transport pour un devis de convoyage automobile personnalisé. Siège à Marseille, 24 avenue du Prado. Téléphone : 07 65 59 58 77.",
  alternates: { canonical: "https://v-car.company/contact" },
  openGraph: {
    title: "Contactez V-Car Transport | Devis Gratuit",
    description: "Demandez un devis de convoyage automobile personnalisé. Siège à Marseille.",
    url: "https://v-car.company/contact",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://v-car.company/#contact-local",
  name: "V-Car Transport",
  telephone: "+33765595877",
  email: "contact@v-car.company",
  url: "https://v-car.company/contact",
  address: {
    "@type": "PostalAddress",
    streetAddress: "24 avenue du Prado",
    addressLocality: "Marseille",
    postalCode: "13006",
    addressRegion: "Provence-Alpes-Côte d'Azur",
    addressCountry: "FR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "19:00",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white">
      <JsonLd data={localBusinessSchema} />
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <div className="pt-6 pb-10 relative border-b border-brand-graphite">
        <div className="absolute inset-0 bg-brand-anthracite/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block tracking-[0.3em] text-brand-champagne text-xs uppercase font-medium mb-6">Contact</span>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-brand-white mb-8">Nous Contacter.</h1>
          <p className="text-brand-silver/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Pour toute demande d&apos;information ou de devis, notre équipe se tient à votre entière disposition.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">

            {/* Contact Info */}
            <div className="w-full lg:w-1/3">
              <span className="block text-brand-champagne text-xs uppercase tracking-widest mb-10">Coordonnées</span>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-brand-silver/50 mb-3">Siège Social</h3>
                  <p className="text-brand-white font-light text-sm leading-relaxed">24 avenue du Prado<br />13006 Marseille</p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest text-brand-silver/50 mb-3">Téléphone</h3>
                  <a href="tel:+33765595877" className="text-brand-white font-light hover:text-brand-champagne transition-colors">07 65 59 58 77</a>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest text-brand-silver/50 mb-3">Email</h3>
                  <a href="mailto:contact@v-car.company" className="text-brand-white font-light hover:text-brand-champagne transition-colors">contact@v-car.company</a>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest text-brand-silver/50 mb-3">Horaires</h3>
                  <p className="text-brand-white font-light text-sm">Lundi - Samedi : 08h00 - 19h00</p>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-brand-graphite">
                <h3 className="text-xs uppercase tracking-widest text-brand-champagne mb-4">Comptes Professionnels</h3>
                <p className="text-sm text-brand-silver/60 font-light leading-relaxed">
                  Concessionnaires et gestionnaires de flotte : bénéficiez de <a href="/transport-flotte-vehicules" className="text-brand-champagne hover:underline">tarifs préférentiels</a>.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="w-full lg:w-2/3 lg:pl-10 lg:border-l border-brand-graphite">
              <span className="block text-brand-champagne text-xs uppercase tracking-widest mb-10">Demande de Devis</span>
              <DevisForm />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
