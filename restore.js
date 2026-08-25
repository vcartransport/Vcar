const fs = require('fs');
const path = require('path');

const map = {
  'app/about/page.tsx': `{ label: "À propos", href: "/about" }`,
  'app/contact/page.tsx': `{ label: "Contact", href: "/contact" }`,
  'app/tarifs/page.tsx': `{ label: "Tarifs", href: "/tarifs" }`,
  'app/devis/page.tsx': `{ label: "Devis", href: "/devis" }`,
  'app/transport-prive/page.tsx': `{ label: "Transport privé", href: "/transport-prive" }`,
  'app/transport-flotte-vehicules/page.tsx': `{ label: "Flottes automobiles", href: "/transport-flotte-vehicules" }`,
  'app/convoyage-automobile/page.tsx': `{ label: "Convoyage automobile", href: "/convoyage-automobile" }`,
  'app/convoyage-cote-d-azur/page.tsx': `{ label: "Côte d'Azur", href: "/convoyage-cote-d-azur" }`,
  'app/convoyage-nice/page.tsx': `{ label: "Côte d'Azur", href: "/convoyage-cote-d-azur" }, { label: "Nice", href: "/convoyage-nice" }`,
  'app/convoyage-monaco/page.tsx': `{ label: "Côte d'Azur", href: "/convoyage-cote-d-azur" }, { label: "Monaco", href: "/convoyage-monaco" }`,
  'app/convoyage-cannes/page.tsx': `{ label: "Côte d'Azur", href: "/convoyage-cote-d-azur" }, { label: "Cannes", href: "/convoyage-cannes" }`,
  'app/convoyage-saint-tropez/page.tsx': `{ label: "Côte d'Azur", href: "/convoyage-cote-d-azur" }, { label: "Saint-Tropez", href: "/convoyage-saint-tropez" }`,
  'app/convoyage-automobile-marseille/page.tsx': `{ label: "Convoyage automobile", href: "/convoyage-automobile" }, { label: "Marseille", href: "/convoyage-automobile-marseille" }`
};

for (const [relPath, items] of Object.entries(map)) {
  const fullPath = path.join('c:/Users/micka/Desktop/v-car', relPath);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  if (!content.includes('import Breadcrumbs from')) {
    // Add import right after the first import block
    content = content.replace(/(import .*?;(\r?\n))(?!import)/, `$1import Breadcrumbs from "@/components/ui/Breadcrumbs";$2`);
    
    const insertTag = `<Breadcrumbs items={[${items}]} />`;
    
    // insert after <div className="bg-brand-black min-h-screen text-brand-white">
    // or after <JsonLd data={...} /> if it exists right after
    if (content.includes('<JsonLd ')) {
       content = content.replace(/(<JsonLd [^>]*\/>\r?\n)/, `$1      ${insertTag}\n`);
    } else {
       content = content.replace(/(<div className="bg-brand-black min-h-screen text-brand-white">\r?\n)/, `$1      ${insertTag}\n`);
    }
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('Restored in ' + relPath);
  }
}
