import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Transport Privé Automobile | Convoyage Véhicule Privé",
  description:
    "Service de transport privé de véhicules en France. Confidentialité, suivi personnalisé et prise en charge exclusive. Particuliers exigeants et professionnels.",
  alternates: { canonical: "https://v-car.company/transport-prive" },
  openGraph: {
    title: "Transport Privé de Véhicules | V-Car Transport",
    description: "Un service exclusif de convoyage privé. Confidentialité et personnalisation à chaque étape.",
    url: "https://v-car.company/transport-prive",
  },
};

export default function TransportPrivePage() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white">
      <Breadcrumbs items={[{ label: "Transport privé", href: "/transport-prive" }]} />
      <div className="pt-6 pb-10 relative border-b border-brand-graphite">
        <div className="absolute inset-0 bg-brand-anthracite/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block tracking-[0.3em] text-brand-champagne text-xs uppercase font-medium mb-6">Exclusif</span>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-brand-white mb-8">Transport privé de véhicules</h1>
          <p className="text-brand-silver/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Un service de convoyage exclusif, où la confidentialité et la personnalisation définissent chaque prestation. Pour les particuliers qui attendent un niveau de service supérieur.
          </p>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6 text-brand-silver/60 font-light leading-relaxed mb-32">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-4">La discrétion comme standard de service</h2>
            <p>
              Le transport privé de véhicules s'adresse aux personnes qui exigent un niveau de confidentialité et de personnalisation élevé. Chez V-Car Transport, ce n'est pas un supplément : c'est notre façon de travailler.
            </p>
            <p>
              Chaque transport privé est organisé comme un service sur mesure : horaires flexibles, communication directe avec le convoyeur, itinéraire convenu à l'avance, et discrétion absolue sur les lieux de prise en charge et de livraison.
            </p>
            <p>
              Ce service est naturellement adapté au transport de tout véhicule dès lors que le propriétaire souhaite un accompagnement particulier et exclusif.
            </p>
          </div>

          <div className="border-t border-brand-graphite pt-24 mb-32">
            <h2 className="text-3xl font-heading font-light text-brand-white mb-12 text-center">Ce qui définit notre service privé</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Interlocuteur unique", desc: "Un seul point de contact du devis à la livraison. Pas de centre d'appel, pas de transfert." },
                { title: "Confidentialité renforcée", desc: "Aucune trace numérique publique, aucune divulgation d'information. Discrétion totale sur le transport." },
                { title: "Flexibilité maximale", desc: "Prises en charge sur rendez-vous, à domicile, en concession, à l'aéroport ou en tout lieu convenu." },
              ].map((item) => (
                <div key={item.title} className="border border-brand-graphite p-10 hover:border-brand-champagne/30 transition-colors">
                  <h3 className="text-sm uppercase tracking-widest text-brand-champagne mb-4">{item.title}</h3>
                  <p className="text-brand-silver/60 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-brand-anthracite/40 border border-brand-graphite p-16">
            <h2 className="text-2xl font-heading font-light text-brand-white mb-8">Besoin d'un transport privé ?</h2>
            <Link href="/devis" className="inline-block px-10 py-4 bg-brand-champagne text-brand-black uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors">
              Nous contacter discrètement
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
