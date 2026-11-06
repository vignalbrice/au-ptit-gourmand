/**
 * La carte du restaurant.
 * - `price` : prix exact d'un plat (en euros, TTC).
 * - `range` : fourchette de prix d'une catégorie quand le prix dépend de la garniture.
 * Les crêpes et les desserts reprennent les prix du dépliant ; les autres catégories
 * gardent les fourchettes de l'ancien site, à remplacer par les prix exacts.
 */

export interface MenuItem {
  name: string;
  price?: number;
}

export interface MenuCategory {
  id: string;
  title: string;
  range?: [number, number];
  note?: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: 'bokits',
    title: 'Bokits',
    range: [4, 9],
    note: 'Non gras, garnis à la minute.',
    items: [
      { name: 'Végétarien' },
      { name: 'Jambon' },
      { name: 'Saucisse' },
      { name: 'Steak' },
      { name: 'Œuf jambon fromage' },
      { name: 'Rouscaille' },
      { name: 'Agneau' },
      { name: 'Chatrou boucané' },
      { name: 'Poulet' },
      { name: 'Bœuf local' },
      { name: 'Thon' },
      { name: 'Saumon' },
      { name: 'Morue' },
      { name: 'Lambi' },
    ],
  },
  {
    id: 'agoulous',
    title: 'Agoulous',
    range: [4.5, 9.5],
    items: [
      { name: 'Le Simply' },
      { name: 'Le Ham Cheese' },
      { name: 'Le Steak' },
      { name: 'Le Good' },
      { name: 'Le Best' },
      { name: 'Le Must' },
      { name: 'Le Viande' },
      { name: 'Le Complet Rouscaille' },
      { name: "Le P'tit Gourmand" },
    ],
  },
  {
    id: 'paninis',
    title: 'Paninis',
    range: [4.5, 9.5],
    items: [
      { name: 'Nature' },
      { name: 'Fromage' },
      { name: 'Jambon fromage' },
      { name: 'Poulet' },
      { name: 'Thon' },
      { name: 'Morue' },
      { name: 'Saumon' },
      { name: 'Bœuf local' },
      { name: 'Lambi' },
    ],
  },
  {
    id: 'complet',
    title: 'Option complet',
    range: [7, 9],
    note: 'Sur bokit ou panini.',
    items: [
      { name: 'Saucisse' },
      { name: 'Poulet' },
      { name: 'Steak' },
      { name: 'Rouscaille' },
      { name: 'Thon' },
      { name: 'Bœuf' },
    ],
  },
  {
    id: 'crepes-salees',
    title: 'Crêpes salées',
    items: [
      { name: 'Jambon fromage', price: 4.59 },
      { name: 'Œuf jambon fromage', price: 5.11 },
      { name: 'Végé fromage', price: 5.11 },
      { name: 'Œuf lardons fromage', price: 5.11 },
      { name: 'Poulet fromage', price: 6.13 },
      { name: 'Thon fromage', price: 6.13 },
      { name: 'Saumon fromage', price: 8.68 },
      { name: 'Complet poulet', price: 7.66 },
      { name: 'Complet saucisses', price: 7.66 },
      { name: 'Complet steak', price: 8.17 },
      { name: 'Complet agneau', price: 9.7 },
      { name: 'Complet rouscaille', price: 9.7 },
      { name: 'Complet bœuf', price: 9.7 },
    ],
  },
  {
    id: 'crepes-sucrees',
    title: 'Crêpes sucrées',
    items: [
      { name: 'Sucre', price: 2.04 },
      { name: 'Nutella', price: 3.06 },
      { name: 'Nutella coco', price: 3.57 },
      { name: 'Nutella banane', price: 4.08 },
      { name: 'Banane', price: 3.57 },
      { name: 'Banane cannelle', price: 3.57 },
      { name: 'Beurre sucre cannelle', price: 3.57 },
      { name: 'Beurre sucre citron', price: 3.57 },
      { name: 'Coco', price: 3.57 },
      { name: 'Goyave', price: 3.57 },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      { name: 'Fondant au chocolat', price: 1.53 },
      { name: 'Flan au coco', price: 3.06 },
      { name: 'Tartes', price: 3.57 },
      { name: 'Salade de fruits', price: 3.57 },
      { name: 'Mousse mangue passion', price: 4.08 },
      { name: 'Mousse fruits rouges', price: 4.59 },
    ],
  },
  {
    id: 'soupes',
    title: 'Soupes & veloutés',
    range: [9, 13],
    note: 'Tous les samedis. La recette change chaque semaine.',
    items: [],
  },
];

const euro = new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const short = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 2 });

/** 3.06 → « 3,06 € » */
export const formatPrice = (value: number) => `${euro.format(value)} €`;

/** [4.5, 9.5] → « 4,50 – 9,50 € » ; [4, 9] → « 4 – 9 € » */
export const formatRange = ([min, max]: [number, number]) => {
  const fmt = Number.isInteger(min) && Number.isInteger(max) ? short : euro;
  return `${fmt.format(min)} – ${fmt.format(max)} €`;
};
