import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-graphite pt-24 pb-12 text-brand-silver">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">

          {/* Col 1 - Brand */}
          <div>
            <Link href="/" className="inline-block text-2xl font-heading font-light uppercase tracking-[0.2em] text-brand-white mb-8">
              V<span className="text-brand-champagne mx-1">-</span>CAR
            </Link>
            <p className="text-brand-silver/70 text-sm leading-relaxed max-w-sm font-light">
              Votre partenaire de confiance pour le convoyage automobile. Depuis Marseille, nous intervenons sur toute la France (Paris, Lyon, Bordeaux, Toulouse, Nantes, Clermont-Ferrand...).
            </p>
          </div>

          {/* Col 2 - Services */}
          <div>
            <h4 className="text-brand-champagne text-xs font-bold uppercase tracking-widest mb-8">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/convoyage-automobile" className="text-brand-silver/70 hover:text-brand-white transition-colors text-sm font-light">Convoyage automobile</Link></li>
              <li><Link href="/transport-flotte-vehicules" className="text-brand-silver/70 hover:text-brand-white transition-colors text-sm font-light">Flottes automobiles</Link></li>
              <li><Link href="/transport-prive" className="text-brand-silver/70 hover:text-brand-white transition-colors text-sm font-light">Transport privé</Link></li>
            </ul>
          </div>

          {/* Col 3 - Zones & liens */}
          <div>
            <h4 className="text-brand-champagne text-xs font-bold uppercase tracking-widest mb-8">Zones desservies</h4>
            <ul className="space-y-3">
              <li><Link href="/convoyage-automobile-marseille" className="text-brand-silver/70 hover:text-brand-white transition-colors text-sm font-light">Marseille</Link></li>
              <li><Link href="/convoyage-cote-d-azur" className="text-brand-silver/70 hover:text-brand-white transition-colors text-sm font-light">Côte d&apos;Azur</Link></li>
              <li><Link href="/convoyage-nice" className="text-brand-silver/70 hover:text-brand-white transition-colors text-sm font-light">Nice</Link></li>
              <li><Link href="/convoyage-cannes" className="text-brand-silver/70 hover:text-brand-white transition-colors text-sm font-light">Cannes</Link></li>
              <li><Link href="/convoyage-monaco" className="text-brand-silver/70 hover:text-brand-white transition-colors text-sm font-light">Monaco</Link></li>
              <li><Link href="/convoyage-saint-tropez" className="text-brand-silver/70 hover:text-brand-white transition-colors text-sm font-light">Saint-Tropez</Link></li>
            </ul>
            <div className="mt-8 pt-6 border-t border-brand-graphite">
              <ul className="space-y-3">
                <li><Link href="/about" className="text-brand-silver/70 hover:text-brand-white transition-colors text-sm font-light">À propos</Link></li>
                <li><Link href="/tarifs" className="text-brand-silver/70 hover:text-brand-white transition-colors text-sm font-light">Tarifs</Link></li>
                <li><Link href="/application" className="text-brand-silver/70 hover:text-brand-white transition-colors text-sm font-light">Application</Link></li>
                <li><Link href="/devis" className="text-brand-silver/70 hover:text-brand-white transition-colors text-sm font-light">Demander un devis</Link></li>
              </ul>
            </div>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="text-brand-champagne text-xs font-bold uppercase tracking-widest mb-8">Nous Contacter</h4>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin className="text-brand-champagne mr-4 shrink-0" size={18} strokeWidth={1.5} />
                <span className="text-brand-silver/70 text-sm font-light leading-relaxed">
                  24 avenue du Prado<br />13006 Marseille
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-brand-champagne mr-4 shrink-0" size={18} strokeWidth={1.5} />
                <a href="tel:+33765595877" className="text-brand-silver/70 hover:text-brand-white transition-colors text-sm font-light">
                  07 65 59 58 77
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-brand-champagne mr-4 shrink-0" size={18} strokeWidth={1.5} />
                <a href="mailto:contact@v-car.company" className="text-brand-silver/70 hover:text-brand-white transition-colors text-sm font-light">
                  contact@v-car.company
                </a>
              </li>
              <li className="text-brand-silver/40 text-xs font-light mt-6">
                Lun - Sam: 08h00 - 19h00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brand-graphite pt-8 flex flex-col md:flex-row justify-between items-center text-brand-silver/40 text-xs font-light">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-4 md:mb-0">
            <p>
              &copy; 2026 V-car Convoyage. Tous droits réservés.
            </p>
            <span className="hidden md:inline text-brand-graphite">|</span>
            <p>
              Développé et design par <a href="https://mickaelcode.com/" target="_blank" rel="noopener noreferrer" className="text-[#ff003c] font-medium hover:text-white transition-colors" style={{ textShadow: '0 0 8px rgba(255,0,60,0.6)' }}>Mickael</a>
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-brand-champagne transition-colors">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-brand-champagne transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
