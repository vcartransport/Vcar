# V-Car Transport — Site Officiel

Site web de **V-Car Transport**, société spécialisée dans le convoyage de véhicules automobiles partout en France.

## 🚀 Démarrage rapide

```bash
npm install
npm run dev       # Lancer en développement (localhost:3000)
npm run build     # Construire pour la production
npm run start     # Lancer en production
```

---

## 📁 Structure du projet

```
Vcar/
├── components/           # Composants UI réutilisables
│   ├── Card/             # Card, CardBody, CardFooter, CardHeader
│   ├── CustomButtons/    # Boutons stylisés (Button)
│   ├── CustomInput/      # Champs de formulaire (CustomInput)
│   ├── Footer/           # Pied de page global
│   ├── Grid/             # Système de grille (GridContainer, GridItem)
│   ├── Header/           # En-tête global (Header, HeaderLinks)
│   ├── InfoArea/         # Blocs icône + texte
│   ├── PageChange/       # Animation de transition de page
│   └── Parallax/         # Effet parallaxe d'images
│
├── constants/
│   └── config.ts         # ⭐ Toutes les données métier centralisées
│                         #    (coordonnées, tarifs, textes de marque...)
│
├── pages/                # Pages Next.js (routage automatique)
│   ├── _app.tsx          # Initialisation globale de l'app
│   ├── _document.tsx     # Structure HTML, polices, favicon
│   ├── index.tsx         # Page d'accueil (/)
│   ├── about.tsx         # Page À propos (/about)
│   ├── tarifs.tsx        # Page Tarifs (/tarifs)
│   ├── contact.tsx       # Page Contact (/contact)
│   └── api/
│       └── post.ts       # Endpoint API articles
│
├── sections/             # Sections utilisées dans les pages
│   └── home/             # Sections de la page d'accueil
│       ├── ProductSection.tsx      # Section "Nos Services"
│       ├── VCarServicesSection.tsx # Section hero avec les 4 services
│       ├── WorkSection.tsx         # Formulaire de devis rapide
│       └── TeamSection.tsx         # Section "Notre Équipe"
│
├── styles/               # Styles du projet
│   ├── scss/             # Styles SCSS globaux
│   └── jss/              # Styles JSS (Material-UI)
│       └── vcar/
│           ├── pages/    # Styles spécifiques aux pages
│           └── components/ # Styles des composants UI
│
├── public/img/           # Assets statiques (logo, favicons)
├── types/                # Déclarations TypeScript globales
└── utils/                # Utilitaires (markdown...)
```

---

## ⭐ Fichier clé : `constants/config.ts`

**C'est ici que se trouvent toutes les données du site.** Modifiez ce fichier pour mettre à jour :
- Le nom et la description de la marque
- Les coordonnées (téléphone, email, adresse)
- Les horaires d'ouverture
- Les tarifs kilométriques
- L'URL de l'image hero

> **Règle d'or :** Ne jamais écrire un numéro de téléphone, une adresse ou un tarif directement dans un composant. Toujours passer par `constants/config.ts`.

---

## 🛣️ Pages et routes

| Route      | Fichier              | Description            |
|------------|----------------------|------------------------|
| `/`        | `pages/index.tsx`    | Page d'accueil         |
| `/about`   | `pages/about.tsx`    | Présentation V-Car     |
| `/tarifs`  | `pages/tarifs.tsx`   | Grilles tarifaires     |
| `/contact` | `pages/contact.tsx`  | Formulaire + coordonnées |

---

## 🧱 Stack technique

| Outil             | Rôle                                |
|-------------------|-------------------------------------|
| **Next.js 12**    | Framework React (SSR/SSG)           |
| **Material-UI 4** | Composants UI et système de styles  |
| **TypeScript**    | Typage statique                     |
| **SCSS**          | Styles globaux                      |
| **JSS**           | Styles en JavaScript (Material-UI)  |

---

