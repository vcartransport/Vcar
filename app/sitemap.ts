import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://v-car.company';
  const now = new Date();

  return [
    // Homepage
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },

    // Services principaux
    { url: `${baseUrl}/convoyage-automobile`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/convoyage-automobile-marseille`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/transport-flotte-vehicules`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/transport-prive`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Géographique
    { url: `${baseUrl}/convoyage-cote-d-azur`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/convoyage-nice`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/convoyage-cannes`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/convoyage-monaco`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/convoyage-saint-tropez`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Pages commerciales
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/tarifs`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/devis`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Pages légales
    { url: `${baseUrl}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${baseUrl}/confidentialite`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
  ];
}
