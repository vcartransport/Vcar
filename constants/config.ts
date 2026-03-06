/**
 * config.ts
 * Point central pour toutes les constantes métier de V-Car Transport.
 * Modifier ce fichier suffit pour mettre à jour les informations sur tout le site.
 */

// ─── Identité de la Marque ────────────────────────────────────────────────────

export const BRAND = {
    name: "V-Car Transport",
    shortName: "Vcar Convoyage",
    tagline: "Convoyage de véhicule professionnel.",
    description:
        "Confiez-nous le transport de votre véhicule en toute sérénité. Que vous soyez un particulier ou un professionnel, nous assurons un service premium partout en France.",
} as const;

// ─── Coordonnées ─────────────────────────────────────────────────────────────

export const CONTACT = {
    phone: "07 65 59 58 77",
    phoneHref: "tel:+33765595877",
    email: "contact@v-car.company",
    emailHref: "mailto:contact@v-car.company",
    address: "24 avenue du Prado 13006 Marseille",
    hours: "Lun - Sam : 08h00 - 19h00",
    googleMapsEmbed:
        "https://maps.google.com/maps?q=24%20avenue%20du%20Prado,%2013006%20Marseille&t=&z=15&ie=UTF8&iwloc=&output=embed",
} as const;

// ─── Réseaux Sociaux ──────────────────────────────────────────────────────────

export const SOCIAL = {
    facebook: "",
    instagram: "",
    linkedin: "",
} as const;

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Contact", href: "/contact" },
] as const;

// ─── Tarifs ───────────────────────────────────────────────────────────────────

export type TarifRow = { dist: string; price: string };

/** VL - 3,5T (Classe 1 & 2) */
export const TARIFS_VL: TarifRow[] = [
    { dist: "0-50 km", price: "2,00 €" },
    { dist: "50-100 km", price: "1,80 €" },
    { dist: "100-150 km", price: "1,70 €" },
    { dist: "150-200 km", price: "1,50 €" },
    { dist: "200-500 km", price: "1,20 €" },
    { dist: "500-1000 km", price: "0,90 €" },
    { dist: "1000-1500 km", price: "0,80 €" },
    { dist: "Au-delà de 1500 km", price: "0,75 €" },
];

/** Utilitaire 10 à 15 M3 (Classe 3) */
export const TARIFS_UTIL_10: TarifRow[] = [
    { dist: "0-50 km", price: "2,10 €" },
    { dist: "50-100 km", price: "2,00 €" },
    { dist: "100-150 km", price: "1,80 €" },
    { dist: "150-200 km", price: "1,70 €" },
    { dist: "200-500 km", price: "1,60 €" },
    { dist: "500-1000 km", price: "1,10 €" },
    { dist: "1000-1500 km", price: "1,00 €" },
    { dist: "Au-delà de 1500 km", price: "0,90 €" },
];

/** Utilitaire 20 M3 (Classe 4) */
export const TARIFS_UTIL_20: TarifRow[] = [
    { dist: "0-50 km", price: "2,30 €" },
    { dist: "50-100 km", price: "2,20 €" },
    { dist: "100-150 km", price: "2,10 €" },
    { dist: "150-200 km", price: "2,00 €" },
    { dist: "200-500 km", price: "1,90 €" },
    { dist: "500-1000 km", price: "1,40 €" },
    { dist: "1000-1500 km", price: "1,30 €" },
    { dist: "Au-delà de 1500 km", price: "1,20 €" },
];

// ─── Images Hero ──────────────────────────────────────────────────────────────

export const HERO_IMAGE =
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop";
