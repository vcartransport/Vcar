import React from "react";
import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: object;
}

const DEFAULT_TITLE = "V-Car Transport | Convoyage de Véhicules Professionnel en France";
const DEFAULT_DESCRIPTION = "Expert en convoyage automobile partout en France. Livraison sécurisée sous 24h/48h avec assurance W garage. Chauffeurs professionnels pour particuliers et pros.";
const SITE_URL = "https://v-car.company";

export default function SEO({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = "/img/og-image.jpg",
  structuredData
}: SEOProps) {
  const seoTitle = title ? `${title} | V-Car Transport` : DEFAULT_TITLE;
  const seoDescription = description || DEFAULT_DESCRIPTION;
  const seoCanonical = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="canonical" href={seoCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={seoCanonical} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="V-Car Transport" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoCanonical} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={`${SITE_URL}${ogImage}`} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      {/* Global Local Business Structured Data (Always present) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "V-Car Transport",
            "description": "Société spécialisée dans le convoyage automobile en France.",
            "url": SITE_URL,
            "telephone": "+33765595877",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "24 avenue du Prado",
              "addressLocality": "Marseille",
              "postalCode": "13006",
              "addressCountry": "FR"
            },
            "areaServed": "France",
            "openingHours": "Mo-Sa 08:00-19:00"
          })
        }}
      />
    </Head>
  );
}
