/**
 * Page « Qui sommes-nous » — présentation de la gérante.
 * Remplis les champs ci-dessous : la page s'adapte toute seule
 * (un champ vide est simplement masqué ou remplacé par une formule neutre).
 */
import type { ImageMetadata } from 'astro';

// Pour ajouter la photo de la gérante :
// 1. place le fichier dans src/assets/images/ (ex. gerante.jpg)
// 2. décommente la ligne suivante et la ligne `photo` plus bas.
// import photoGerante from '@/assets/images/gerante.jpg';

export const manager = {
  /** Prénom et nom de la gérante. Vide : la page parle de « notre gérante ». */
  name: '',
  role: 'Gérante',
  /** Photo portrait (format vertical de préférence). Vide : le logo s'affiche à la place. */
  photo: undefined as ImageMetadata | undefined,
  // photo: photoGerante,
  /** Année d'ouverture du snack (ex. '2017'). Vide : non affichée. */
  since: '',
  /** Une phrase de la gérante, sans guillemets. Vide : la citation est masquée. */
  quote: '',
};

/** Prénom seul, pour le texte (« Marie a ouvert… »). */
export const managerFirstName = manager.name.trim().split(/\s+/)[0] ?? '';
