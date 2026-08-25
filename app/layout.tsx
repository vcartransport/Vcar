import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/ui/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://v-car.company";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "V-Car Transport | Convoyage Automobile Marseille & France",
    template: "%s | V-Car Transport",
  },
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Convoyage automobile à Marseille et partout en France. Transport sécurisé de flottes professionnelles.",
  keywords: [
    "convoyage automobile",
    "transport véhicule",
    "convoyeur automobile",
    "transport voiture Marseille",
    "convoyage professionnel",
  ],
  authors: [{ name: "V-Car Transport" }],
  creator: "V-Car Transport",
  publisher: "V-Car Transport",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "V-Car Transport | Convoyage Automobile",
    description:
      "Convoyage automobile à Marseille et partout en France. Transport sécurisé de flottes professionnelles.",
    url: siteUrl,
    siteName: "V-Car Transport",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "V-Car Transport | Convoyage Automobile",
    description:
      "Convoyage automobile à Marseille et partout en France. Transport sécurisé.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#1B2640",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "V-Car Transport",
  alternateName: "V-Car Convoyage",
  url: siteUrl,
  description:
    "Convoyage automobile à Marseille et partout en France. Transport sécurisé de flottes professionnelles.",
  telephone: "+33765595877",
  email: "contact@v-car.company",
  address: {
    "@type": "PostalAddress",
    streetAddress: "24 avenue du Prado",
    addressLocality: "Marseille",
    postalCode: "13006",
    addressRegion: "Provence-Alpes-Côte d'Azur",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Marseille" },
    { "@type": "City", name: "Paris" },
    { "@type": "City", name: "Lyon" },
    { "@type": "City", name: "Bordeaux" },
    { "@type": "City", name: "Toulouse" },
    { "@type": "City", name: "Nantes" },
    { "@type": "City", name: "Clermont-Ferrand" },
    { "@type": "City", name: "Nice" },
    { "@type": "City", name: "Cannes" },
    { "@type": "City", name: "Monaco" },
    { "@type": "City", name: "Saint-Tropez" },
    { "@type": "AdministrativeArea", name: "Bouches-du-Rhône" },
    { "@type": "AdministrativeArea", name: "Provence-Alpes-Côte d'Azur" },
    { "@type": "Country", name: "France" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "19:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de convoyage automobile",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Convoyage automobile",
          description: "Transport de véhicules par la route avec chauffeur professionnel",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transport de flottes automobiles",
          description: "Déplacement de flottes pour concessionnaires, loueurs et entreprises",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "V-Car Transport",
  url: siteUrl,
  description:
    "Convoyage automobile à Marseille et partout en France.",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "fr-FR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} antialiased scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen bg-brand-white text-gray-900 flex flex-col font-sans">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
