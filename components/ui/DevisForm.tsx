"use client";

import { useState } from "react";

export default function DevisForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-brand-anthracite/50 border border-brand-graphite p-12 text-center h-full flex flex-col justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-brand-champagne/10 text-brand-champagne rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-heading font-light text-brand-white mb-4">Demande Envoyée</h3>
        <p className="text-brand-silver/60 font-light leading-relaxed mb-8">
          Nous avons bien reçu votre demande de devis. Notre équipe de convoyage l&apos;étudie et vous contactera dans les plus brefs délais.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-xs uppercase tracking-widest text-brand-champagne hover:text-brand-white transition-colors border-b border-brand-champagne pb-1 inline-block mx-auto"
        >
          Nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      
      {status === "error" && (
        <div className="p-4 border border-red-500/30 text-red-400 text-sm font-light">
          Une erreur est survenue lors de l&apos;envoi. Veuillez réessayer.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <label className="block text-xs uppercase tracking-widest text-brand-silver/50 mb-3">Nom *</label>
          <input required type="text" className="w-full bg-transparent border-b border-brand-graphite py-3 text-brand-white font-light focus:outline-none focus:border-brand-champagne transition-colors" placeholder="Ex: Jean Dupont" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-brand-silver/50 mb-3">Téléphone *</label>
          <input required type="tel" className="w-full bg-transparent border-b border-brand-graphite py-3 text-brand-white font-light focus:outline-none focus:border-brand-champagne transition-colors" placeholder="Ex: 06 12 34 56 78" />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-brand-silver/50 mb-3">Email *</label>
        <input required type="email" className="w-full bg-transparent border-b border-brand-graphite py-3 text-brand-white font-light focus:outline-none focus:border-brand-champagne transition-colors" placeholder="Ex: jean.dupont@email.com" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <label className="block text-xs uppercase tracking-widest text-brand-silver/50 mb-3">Ville de départ *</label>
          <input required type="text" className="w-full bg-transparent border-b border-brand-graphite py-3 text-brand-white font-light focus:outline-none focus:border-brand-champagne transition-colors" placeholder="Ville ou code postal" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-brand-silver/50 mb-3">Ville d&apos;arrivée *</label>
          <input required type="text" className="w-full bg-transparent border-b border-brand-graphite py-3 text-brand-white font-light focus:outline-none focus:border-brand-champagne transition-colors" placeholder="Ville ou code postal" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <label className="block text-xs uppercase tracking-widest text-brand-silver/50 mb-3">Modèle du Véhicule *</label>
          <input required type="text" className="w-full bg-transparent border-b border-brand-graphite py-3 text-brand-white font-light focus:outline-none focus:border-brand-champagne transition-colors" placeholder="Ex: Porsche Panamera" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-brand-silver/50 mb-3">Délai souhaité *</label>
          <select required className="w-full bg-transparent border-b border-brand-graphite py-3 text-brand-white font-light focus:outline-none focus:border-brand-champagne transition-colors appearance-none rounded-none">
            <option value="" className="bg-brand-anthracite">Sélectionnez un délai</option>
            <option value="urgent" className="bg-brand-anthracite">Urgent (24/48h)</option>
            <option value="standard" className="bg-brand-anthracite">Standard (Moins d&apos;une semaine)</option>
            <option value="flexible" className="bg-brand-anthracite">Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-brand-silver/50 mb-3">Informations complémentaires</label>
        <textarea rows={3} className="w-full bg-transparent border-b border-brand-graphite py-3 text-brand-white font-light focus:outline-none focus:border-brand-champagne transition-colors resize-none" placeholder="Précisez toute information utile au transport..."></textarea>
      </div>

      <div className="pt-8">
        <button 
          type="submit" 
          disabled={status === "loading"}
          className={`w-full py-4 text-xs font-bold uppercase tracking-widest transition-all ${
            status === "loading" 
              ? "bg-brand-graphite text-brand-silver cursor-not-allowed"
              : "bg-brand-champagne text-brand-black hover:bg-white"
          }`}
        >
          {status === "loading" ? "Traitement..." : "Soumettre la demande"}
        </button>
      </div>
    </form>
  );
}
