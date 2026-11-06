/**
 * Photos du restaurant, classées par catégorie.
 * Pour changer une photo : remplace le fichier dans src/assets/images/ (même nom)
 * ou modifie l'import ci-dessous. Astro les optimise automatiquement au build.
 */
import type { ImageMetadata } from 'astro';

import bokitCouverture from '@/assets/images/bokit-couverture.jpg';
import bokitsDores from '@/assets/images/bokits-dores.jpg';
import agoulou from '@/assets/images/agoulou.jpg';
import panini from '@/assets/images/panini.jpg';
import crepeSalee from '@/assets/images/crepe-salee.jpg';
import crepeSucree from '@/assets/images/crepe-sucree.jpg';
import fondantChocolat from '@/assets/images/fondant-chocolat.jpg';
import assietteViande from '@/assets/images/assiette-viande.jpg';
import assiettePoulet from '@/assets/images/assiette-poulet.jpg';
import devantureSoir from '@/assets/images/devanture-soir.jpg';
import devantureTerrasse from '@/assets/images/devanture-terrasse.jpg';
import salleComptoir from '@/assets/images/salle-comptoir.jpg';
import salleDecoMurale from '@/assets/images/salle-deco-murale.jpg';
import salleBanquette from '@/assets/images/salle-banquette.jpg';
import salleEntree from '@/assets/images/salle-entree.jpg';
import comptoirEquipe from '@/assets/images/comptoir-equipe.jpg';
import sacEmporter from '@/assets/images/sac-a-emporter.jpg';
import gobelet from '@/assets/images/gobelet.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
  caption?: string;
  /** Cadrage CSS (object-position) quand la photo est recadrée. */
  position?: string;
}

export const photos = {
  hero: { src: bokitCouverture, alt: 'Deux bokits garnis de viande, salade, tomate et oignon rouge sur une planche en bois' },
  bokits: { src: bokitsDores, alt: 'Bokits dorés garnis, posés sur une planche en bois' },
  agoulou: { src: agoulou, alt: 'Agoulous grillés coupés en triangles, garnis de viande hachée, oignon rouge, tomate et salade' },
  paninis: { src: panini, alt: 'Panini doré garni de tomate et de salade', position: 'center 40%' },
  crepesSalees: { src: crepeSalee, alt: 'Crêpe salée jambon fromage coupée, servie avec une salade' },
  crepesSucrees: { src: crepeSucree, alt: 'Crêpe sucrée roulée, nappage chocolat, chantilly et amandes effilées' },
  desserts: { src: fondantChocolat, alt: 'Fondant au chocolat au cœur coulant, saupoudré de sucre glace' },
  assietteViande: {
    src: assietteViande,
    alt: 'Assiette de viande en sauce, poulet grillé et légumes, présentée devant le logo du restaurant',
    caption: 'Viande en sauce et poulet grillé.',
  },
  assiettePoulet: {
    src: assiettePoulet,
    alt: 'Assiette de poulet grillé, riz blanc, avocat, crudités et purée, présentée devant le logo du restaurant',
    caption: 'Poulet grillé, riz, avocat et crudités.',
  },
} satisfies Record<string, Photo>;

/** Photo associée à chaque catégorie de la carte (id de src/data/menu.ts). */
export const menuPhotos: Partial<Record<string, Photo>> = {
  bokits: photos.bokits,
  agoulous: photos.agoulou,
  paninis: photos.paninis,
  'crepes-salees': photos.crepesSalees,
  'crepes-sucrees': photos.crepesSucrees,
  desserts: photos.desserts,
};

/** Galerie « Le lieu ». */
export const lieu: Photo[] = [
  {
    src: salleComptoir,
    alt: "La salle et le comptoir, avec l'écran du menu au mur et les tables en teck",
    caption: 'Le comptoir et la salle.',
  },
  {
    src: salleDecoMurale,
    alt: 'Banquettes rouge et orange, tables en teck et décoration murale en fibres naturelles',
    caption: 'Banquettes et déco naturelle.',
  },
  {
    src: salleBanquette,
    alt: 'Banquette rouge et orange sous la baie vitrée, plantes vertes et décoration en métal',
    caption: 'Le coin banquette.',
  },
  { src: devantureSoir, alt: 'La devanture rouge du restaurant le soir, avec sa terrasse et ses tables lumineuses', caption: 'La terrasse, le soir.' },
];

/** Autres vues de la salle (réserve pour de futures pages). */
export const salle: Photo = {
  src: salleEntree,
  alt: "La salle vue vers l'entrée, avec ses tables en teck et ses fauteuils rouge et orange",
};

/** L'équipe et la vente à emporter. */
export const comptoir: Photo = {
  src: comptoirEquipe,
  alt: "Un membre de l'équipe au comptoir, devant la vitrine réfrigérée et l'écran du menu",
  caption: 'Au comptoir, on prépare ta commande à la minute.',
};

export const emporter: Photo[] = [
  { src: sacEmporter, alt: "Le sac isotherme noir à emporter, au logo doré d'Au P'tit Gourmand", caption: 'Le sac isotherme.' },
  { src: gobelet, alt: "Un gobelet en carton au logo d'Au P'tit Gourmand posé sur une table", caption: 'Les gobelets maison.' },
];

export const devanture: Photo = {
  src: devantureTerrasse,
  alt: "La devanture rouge d'Au P'tit Gourmand avec le logo en vitrine et la terrasse éclairée",
};
