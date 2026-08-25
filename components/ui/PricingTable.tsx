import { Check } from "lucide-react";

export default function PricingTable() {
  const categories = [
    {
      title: "VL -3,5 T (Classe 1 & 2)",
      description: "Toutes marques VL, utilitaires classe 2 de 3 à 8 M3.",
      forfait: "Moins de 50 KM (Forfait) : 100 € HT",
      rates: [
        { km: "0-50 km", price: "2,00 €" },
        { km: "50-100 km", price: "1,80 €" },
        { km: "100-150 km", price: "1,70 €" },
        { km: "150-200 km", price: "1,50 €" },
        { km: "200-500 km", price: "1,20 €" },
        { km: "500-1000 km", price: "0,90 €" },
        { km: "1000-1500 km", price: "0,80 €" },
        { km: "Au-delà de 1500 km", price: "0,75 €" }
      ]
    },
    {
      title: "Utilitaire 10 à 15 M3 (Classe 3)",
      description: "Utilitaires de taille moyenne.",
      featured: true,
      rates: [
        { km: "0-50 km", price: "2,10 €" },
        { km: "50-100 km", price: "2,00 €" },
        { km: "100-150 km", price: "1,80 €" },
        { km: "150-200 km", price: "1,70 €" },
        { km: "200-500 km", price: "1,60 €" },
        { km: "500-1000 km", price: "1,10 €" },
        { km: "1000-1500 km", price: "1,00 €" },
        { km: "Au-delà de 1500 km", price: "0,90 €" }
      ]
    },
    {
      title: "Utilitaire 20 M3 (Classe 4)",
      description: "Grands utilitaires et fourgons.",
      rates: [
        { km: "0-50 km", price: "2,30 €" },
        { km: "50-100 km", price: "2,20 €" },
        { km: "100-150 km", price: "2,10 €" },
        { km: "150-200 km", price: "2,00 €" },
        { km: "200-500 km", price: "1,90 €" },
        { km: "500-1000 km", price: "1,40 €" },
        { km: "1000-1500 km", price: "1,30 €" },
        { km: "Au-delà de 1500 km", price: "1,20 €" }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {categories.map((cat, index) => (
        <div 
          key={index} 
          className={`relative p-8 flex flex-col transition-all duration-300 ${
            cat.featured 
              ? "bg-brand-anthracite border border-brand-champagne/50" 
              : "bg-transparent border border-brand-graphite hover:border-brand-champagne/30"
          }`}
        >
          {cat.featured && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-brand-champagne text-brand-black text-[10px] font-bold uppercase tracking-widest px-4 py-1">
                Le plus demandé
              </span>
            </div>
          )}
          
          <div className="text-center mb-8 pb-8 border-b border-brand-graphite">
            <h3 className="text-xl font-heading font-light text-brand-white mb-2">{cat.title}</h3>
            <p className="text-brand-silver/50 text-sm font-light">{cat.description}</p>
          </div>
          
          <div className="flex-1">
            {cat.forfait && (
              <div className="mb-6 p-4 bg-brand-champagne/5 border border-brand-champagne/20 text-center">
                <span className="text-brand-champagne font-bold text-sm block mb-1">Forfait Spécial</span>
                <span className="text-brand-white text-sm font-light">{cat.forfait}</span>
              </div>
            )}
            
            <div className="space-y-3">
              <div className="flex justify-between text-xs uppercase tracking-widest text-brand-silver/40 border-b border-brand-graphite/50 pb-2 mb-4">
                <span>Tranches Kilométriques</span>
                <span>Tarifs Km HT</span>
              </div>
              
              {cat.rates.map((rate, i) => (
                <div key={i} className="flex justify-between items-center group mb-2">
                  <span className="text-brand-silver/80 text-sm font-light group-hover:text-brand-white transition-colors">{rate.km}</span>
                  <div className="flex items-baseline">
                    <span className="text-brand-champagne font-medium">{rate.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
