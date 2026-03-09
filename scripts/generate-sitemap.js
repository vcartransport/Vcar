const fs = require("fs");
const path = require("path");

const SITE_URL = "https://v-car.company";

// Liste des pages statiques avec leurs métadonnées SEO
const pages = [
  { url: "/", priority: "1.0", changefreq: "daily" },
  { url: "/about", priority: "0.8", changefreq: "monthly" },
  { url: "/tarifs", priority: "0.9", changefreq: "weekly" },
  { url: "/contact", priority: "0.8", changefreq: "monthly" },
];

const generateSitemap = () => {
  const lastmod = new Date().toISOString().split("T")[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- V-Car Transport Sitemap - Généré le ${lastmod} -->
${pages
  .map((page) => {
    return `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
  console.log("🚀 sitemap.xml généré avec succès pour Google Search Console !");
};

generateSitemap();
