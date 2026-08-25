"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { name: "Convoyage automobile", href: "/convoyage-automobile" },
  { name: "Flottes professionnelles", href: "/transport-flotte-vehicules" },
  { name: "Transport privé", href: "/transport-prive" },
];

const zoneLinks = [
  { name: "Marseille", href: "/convoyage-automobile-marseille" },
  { name: "Côte d'Azur", href: "/convoyage-cote-d-azur" },
  { name: "Nice", href: "/convoyage-nice" },
  { name: "Cannes", href: "/convoyage-cannes" },
  { name: "Monaco", href: "/convoyage-monaco" },
  { name: "Saint-Tropez", href: "/convoyage-saint-tropez" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileZonesOpen, setMobileZonesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Tarifs", href: "/tarifs" },
    { name: "Application", href: "/application" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-brand-black/90 backdrop-blur-md border-brand-graphite py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center text-xl md:text-2xl font-heading font-light uppercase tracking-[0.2em] text-brand-white group">
            V<span className="text-brand-champagne mx-1">-</span>CAR
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-brand-silver hover:text-brand-champagne transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-xs uppercase tracking-widest text-brand-silver hover:text-brand-champagne transition-colors p-2 -ml-2">
                Services
                <ChevronDown size={12} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-72 bg-brand-black/95 backdrop-blur-md border border-brand-graphite shadow-xl"
                  >
                    <div className="p-4">
                      <span className="text-brand-champagne text-[10px] uppercase tracking-widest block mb-3 px-3">Nos services</span>
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-3 py-2 text-xs text-brand-silver/70 hover:text-brand-champagne hover:bg-brand-anthracite transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                      <div className="border-t border-brand-graphite mt-3 pt-3">
                        <span className="text-brand-champagne text-[10px] uppercase tracking-widest block mb-3 px-3">Zones</span>
                        {zoneLinks.slice(0, 4).map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block px-3 py-2 text-xs text-brand-silver/70 hover:text-brand-champagne hover:bg-brand-anthracite transition-colors"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/devis"
              className="text-xs uppercase tracking-widest text-brand-champagne border border-brand-champagne px-6 py-2.5 rounded hover:bg-brand-champagne hover:text-brand-black transition-all"
            >
              Demander un devis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-white p-2 -mr-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} strokeWidth={1} /> : <Menu size={32} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[72px] left-0 w-full bg-brand-black/95 backdrop-blur-md border-t border-brand-graphite overflow-y-auto pb-32"
          >
            <div className="px-4 pt-4 pb-8 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base md:text-lg uppercase tracking-widest text-brand-silver hover:text-brand-champagne block py-8 border-b border-brand-graphite/50 text-center font-medium w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              


              <Link
                href="/devis"
                className="text-base md:text-lg uppercase tracking-widest text-center text-brand-black bg-brand-champagne px-6 py-6 block mt-8 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Demander un devis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
