import type { Metadata } from "next";
import { siteData } from "@/data/content";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site V-Car Transport, convoyage automobile à Marseille.",
  robots: { index: false, follow: true },
};

export default function LegalPage() {
  return (
    <div className="bg-brand-black min-h-screen pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold uppercase tracking-widest mb-12">Mentions Légales</h1>

        <div className="space-y-8 text-brand-white/80 font-light leading-relaxed">
          <section>
            <h2 className="font-bold text-brand-white text-xl uppercase tracking-wider mb-4">1. Éditeur du site</h2>
            <p>Le site V-Car Transport est édité par :</p>
            <p>
              {siteData.legal.companyName} ({siteData.legal.companyStatus})<br />
              SIRET : {siteData.legal.siret}<br />
              TVA Intracommunautaire : {siteData.legal.tva}<br />
              Directeur de la publication : {siteData.legal.publicationDirector}<br />
              Adresse : {siteData.address.full}<br />
              Email : {siteData.contact.email}<br />
              Téléphone : {siteData.contact.phone}
            </p>
          </section>

          <section>
            <h2 className="font-bold text-brand-white text-xl uppercase tracking-wider mb-4">2. Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <p>{siteData.legal.host}</p>
          </section>

          <section>
            <h2 className="font-bold text-brand-white text-xl uppercase tracking-wider mb-4">3. Propriété intellectuelle</h2>
            <p>Tous les contenus présents sur ce site (textes, photographies, vidéos, logos) sont la propriété exclusive de V-Car Transport ou de leurs auteurs respectifs. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
