# Au P'tit Gourmand — site web

Site vitrine du snack **Au P'tit Gourmand** (Capesterre-Belle-Eau, Guadeloupe), construit avec [Astro](https://astro.build)
et [Tailwind CSS](https://tailwindcss.com) v4.
Site 100 % statique : aucun serveur à maintenir, chargement très rapide, référencement optimisé.

## Démarrer

Il faut Node.js 22 ou plus récent.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # vérifie les types puis génère le site dans dist/
npm run preview   # sert la version de production en local
```

## Pages

| Adresse            | Fichier                           |
| ------------------ | --------------------------------- |
| `/`                | `src/pages/index.astro`           |
| `/menu`            | `src/pages/menu.astro`            |
| `/nos-specialites` | `src/pages/nos-specialites.astro` |
| `/traiteur`        | `src/pages/traiteur.astro`        |
| `/contact`         | `src/pages/contact.astro`         |
| `/mentions-legales`| `src/pages/mentions-legales.astro`|

Les adresses sont les mêmes que sur l'ancien site, pour conserver le référencement Google.

## Modifier le contenu

- **Coordonnées, horaires, réseaux sociaux, avis clients** : `src/data/site.ts`
- **Carte et prix** : `src/data/menu.ts`
- **Photos** : fichiers dans `src/assets/images/`, rangées par catégorie dans `src/data/photos.ts`
  (optimisées automatiquement en AVIF et WebP au build)
- **Couleurs, polices et styles communs** : `src/styles/global.css` (thème Tailwind : `bg-ocre`, `text-rouge`,
  `font-title`… et briques réutilisables : `btn`, `title-lg`, `eyebrow`, `reveal`…).
  Le reste de la mise en forme se fait en classes Tailwind directement dans les composants.

## À compléter avant la mise en ligne

- [ ] Jours d'ouverture dans `src/data/site.ts` → `hours.days` (active les horaires dans Google)
- [ ] Prix exacts des bokits, agoulous et paninis dans `src/data/menu.ts`
- [ ] Liens Facebook, Instagram, TikTok dans `src/data/site.ts` → `social`
- [ ] Vrais avis clients dans `src/data/site.ts` → `reviews`
- [x] Informations légales de la société (SAS, RCS, SIRET, TVA) dans `src/pages/mentions-legales.astro`
- [ ] Directeur de la publication et hébergeur dans `src/pages/mentions-legales.astro`
- [ ] Vraies photos des plats (bokit, agoulou) prises sur place
- [ ] Formulaire traiteur : activer la détection des formulaires dans Netlify (Forms) et ajouter une notification
      e-mail pour recevoir chaque demande
- [x] Confirmer l'adresse : 32 avenue Paul-Lacavé (siège social au registre du commerce depuis avril 2025)

## Performances et SEO

- HTML statique, presque aucun JavaScript (préchargement des liens et chargement de la carte uniquement)
- Images responsives AVIF / WebP, photo du hero chargée en priorité
- Polices auto-hébergées avec polices de repli ajustées (pas de décalage de mise en page)
- Carte Google Maps chargée seulement au clic (performances + RGPD)
- Balises meta, Open Graph, URL canoniques, `sitemap-index.xml`, `robots.txt`
- Données structurées schema.org `Restaurant` et fil d'Ariane

## Animations

- Transitions entre les pages avec l'API View Transitions (sans JavaScript), la photo du bokit
  glisse de l'accueil vers la page Spécialités
- Apparitions au défilement en CSS pur (scroll-driven animations)
- Effet Ken Burns et parallaxe sur la photo du hero, bandeau produits défilant
- Menu mobile en popover natif animé
- Toutes les animations sont désactivées si le visiteur a demandé « Réduire les animations »

Les navigateurs qui ne gèrent pas encore une de ces fonctions affichent simplement le site sans l'animation.

## Mise en ligne

Le dossier `dist/` contient le site complet.

- **Netlify / Cloudflare Pages** : commande de build `npm run build`, dossier de publication `dist`.
  Les en-têtes de cache sont dans `public/_headers`.
- **Hostinger ou autre hébergement Apache** : envoyer le contenu de `dist/` dans `public_html`.
  Le fichier `.htaccess` gère les adresses sans `.html`, le HTTPS, la compression et le cache.
