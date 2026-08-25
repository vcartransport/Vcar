"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Car, Camera, FileText, ClipboardCheck, Smartphone, ShieldCheck, Clock, Layers } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function ApplicationContent() {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-champagne/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { label: "Application", href: "/application" },
              ]}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-brand-white leading-tight mb-6">
                L'état des lieux <span className="text-brand-champagne italic">nouvelle génération.</span>
              </h1>
              <p className="text-xl text-brand-silver/80 font-light leading-relaxed mb-6">
                Bientôt disponible, notre application propriétaire digitalise chaque étape de l'état des lieux de votre véhicule, du départ jusqu'à la livraison.
              </p>
              <p className="text-brand-silver/60 leading-relaxed mb-10 max-w-lg">
                Cet outil technologique exclusif permet à nos chauffeurs de documenter précisément l'état du véhicule avec photos et annotations, afin de garantir une traçabilité totale et une transparence absolue.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center justify-center gap-3 bg-brand-anthracite border border-brand-graphite rounded-lg px-6 py-4 opacity-70 cursor-default select-none">
                  <div className="w-8 h-8 bg-brand-white/10 rounded-full flex items-center justify-center text-brand-white">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 1.44C9.72 6.44 8 5 5.78 5 2.5 5 2 9.17 2 12c0 4.22 3 12.22 6 12.22 1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-brand-silver/60 uppercase tracking-wider">Bientôt sur</div>
                    <div className="text-brand-white font-medium">App Store</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 bg-brand-anthracite border border-brand-graphite rounded-lg px-6 py-4 opacity-70 cursor-default select-none">
                  <div className="w-8 h-8 bg-brand-white/10 rounded-full flex items-center justify-center text-brand-white">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-brand-silver/60 uppercase tracking-wider">Bientôt sur</div>
                    <div className="text-brand-white font-medium">Google Play</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* App Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px]"
            >
              <div className="relative rounded-[2.5rem] border-[8px] border-brand-anthracite bg-brand-black shadow-2xl overflow-hidden aspect-[9/19.5]">
                <div className="absolute top-0 inset-x-0 h-6 bg-brand-anthracite rounded-b-xl w-40 mx-auto z-20" />
                
                {/* App UI */}
                <div className="relative z-10 h-full flex flex-col bg-[#0A0A0A]">
                  {/* Header */}
                  <div className="pt-12 pb-4 px-6 bg-brand-anthracite/80 backdrop-blur-md border-b border-brand-graphite">
                    <div className="flex justify-between items-center mb-4">
                      <ChevronRight className="rotate-180 text-brand-silver" size={20} />
                      <span className="text-brand-white font-medium text-sm">État des lieux</span>
                      <div className="w-5" />
                    </div>
                    <div className="text-xs text-brand-champagne mb-1 uppercase tracking-widest">Mission #4928</div>
                    <div className="text-brand-white font-heading text-lg">Marseille → Monaco</div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 overflow-y-auto pb-6">
                    <div className="px-6 py-4">
                      <div className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20 mb-6 w-max">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Départ validé
                      </div>
                      
                      <div className="text-brand-white font-medium mb-3">Véhicule</div>
                      <div className="bg-brand-anthracite rounded-xl overflow-hidden mb-6 border border-brand-graphite">
                        <div className="relative h-32 w-full">
                          <Image 
                            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" 
                            alt="Porsche Panamera"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-3">
                          <div className="text-brand-white text-sm font-medium">Porsche Panamera</div>
                          <div className="text-brand-silver/60 text-xs">AB-123-CD</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-end mb-3">
                        <div className="text-brand-white font-medium">Checklist</div>
                        <div className="text-cyan-400 text-xs flex items-center gap-1">
                          <Camera size={12} />
                          24 photos
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-8">
                        {['Face avant', 'Côté conducteur', 'Côté passager', 'Face arrière', 'Jantes', 'Intérieur'].map((item, i) => (
                          <div key={i} className="flex justify-between items-center bg-brand-anthracite/50 p-3 rounded-lg border border-brand-graphite/50">
                            <span className="text-brand-silver text-sm">{item}</span>
                            <CheckCircle2 size={16} className="text-emerald-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Action */}
                  <div className="p-6 bg-gradient-to-t from-[#0A0A0A] to-transparent pt-0 mt-auto">
                    <button className="w-full bg-brand-champagne text-brand-black font-medium py-3.5 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-brand-white transition-colors">
                      <FileText size={16} />
                      Générer le rapport
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -right-6 md:-right-12 top-1/3 bg-brand-anthracite border border-brand-graphite p-3 rounded-xl shadow-xl flex items-center gap-3 z-30"
              >
                <div className="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 shrink-0">
                  <Camera size={20} />
                </div>
                <div className="whitespace-nowrap">
                  <div className="text-brand-white text-sm font-medium">Photo ajoutée</div>
                  <div className="text-brand-silver/60 text-xs">Jante AVG</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Processus / Timeline */}
      <section className="py-24 bg-brand-anthracite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-brand-white mb-4">
              Un état des lieux <span className="text-brand-champagne italic">documenté</span>
            </h2>
            <p className="text-brand-silver/70 max-w-2xl mx-auto">
              Notre processus digitalisé garantit une transparence totale à chaque étape de la mission.
            </p>
          </div>

          <div className="relative">
            {/* Desktop timeline line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-brand-graphite -translate-y-1/2 z-0" />
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Identification", desc: "Identification de la mission et du véhicule avant la prise en charge." },
                { step: "02", title: "Photos du véhicule", desc: "Documentation photographique complète de l'état du véhicule avant le départ." },
                { step: "03", title: "Contrôle à l'arrivée", desc: "Nouvel état des lieux à destination afin de documenter précisément l'état lors de la livraison." },
                { step: "04", title: "Rapport généré", desc: "Création d'un rapport récapitulatif regroupant informations et photographies." }
              ].map((item, index) => (
                <div key={index} className="bg-brand-black/50 border border-brand-graphite p-8 rounded-xl relative backdrop-blur-sm">
                  <div className="absolute -top-4 left-8 bg-brand-black border border-brand-champagne text-brand-champagne w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-brand-white font-medium mb-3 mt-2">{item.title}</h3>
                  <p className="text-brand-silver/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Traçabilité */}
      <section className="py-24 border-y border-brand-graphite relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-champagne/5 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-light text-brand-white leading-tight mb-8">
            Chaque étape. Chaque détail. <br className="hidden md:block" />
            <span className="text-brand-champagne italic">Documenté.</span>
          </h2>
          <p className="text-lg text-brand-silver/80 font-light leading-relaxed mb-12">
            Une documentation structurée pour renforcer la traçabilité et la transparence de chaque mission. L'application permet de centraliser les photos du véhicule, l'état au départ et à l'arrivée, les informations de mission ainsi que l'historique de l'état des lieux dans un rapport récapitulatif.
          </p>
        </div>
      </section>


      {/* Cartes - Conçue pour les professionnels */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-light text-brand-white mb-4">
              Conçue pour les <span className="text-brand-champagne italic">professionnels</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Traçabilité", desc: "Centralisation sécurisée des informations relatives à chaque mission." },
              { icon: Camera, title: "Documentation photo", desc: "Photos structurées avant et après le transport." },
              { icon: Clock, title: "Gain de temps", desc: "Un processus d'état des lieux plus fluide et organisé sur le terrain." },
              { icon: FileText, title: "Rapport digital", desc: "Génération automatique d'un document récapitulatif destiné au suivi." },
              { icon: Layers, title: "Processus standardisé", desc: "Une méthode homogène pour documenter les véhicules à chaque convoyage." },
              { icon: Smartphone, title: "Outil propriétaire", desc: "Une technologie développée spécifiquement pour répondre aux besoins de V-Car." },
            ].map((feature, i) => (
              <div key={i} className="bg-brand-anthracite border border-brand-graphite p-8 rounded-xl hover:border-brand-champagne/30 transition-colors group">
                <div className="w-12 h-12 bg-brand-black border border-brand-graphite rounded-lg flex items-center justify-center mb-6 text-brand-champagne group-hover:scale-110 transition-transform">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-brand-white font-medium mb-3">{feature.title}</h3>
                <p className="text-brand-silver/60 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Bientôt disponible */}
      <section className="py-32 relative text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Déploiement en cours
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-light text-brand-white mb-6">
            L'application V-Car <span className="text-brand-champagne italic">arrive bientôt.</span>
          </h2>
          <p className="text-lg text-brand-silver/70 font-light mb-12">
            Une nouvelle application propriétaire conçue pour accompagner chaque étape de l'état des lieux et renforcer la qualité du suivi de nos missions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center gap-3 bg-brand-anthracite border border-brand-graphite rounded-lg px-8 py-4 opacity-70 cursor-default">
              <div className="w-8 h-8 bg-brand-white/10 rounded-full flex items-center justify-center text-brand-white">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 1.44C9.72 6.44 8 5 5.78 5 2.5 5 2 9.17 2 12c0 4.22 3 12.22 6 12.22 1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] text-brand-silver/60 uppercase tracking-wider">Prochainement sur</div>
                <div className="text-brand-white font-medium">App Store</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 bg-brand-anthracite border border-brand-graphite rounded-lg px-8 py-4 opacity-70 cursor-default">
              <div className="w-8 h-8 bg-brand-white/10 rounded-full flex items-center justify-center text-brand-white">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
              <div className="text-left">
                <div className="text-[10px] text-brand-silver/60 uppercase tracking-wider">Prochainement sur</div>
                <div className="text-brand-white font-medium">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
