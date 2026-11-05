/**
 * Informations du restaurant — source unique utilisée par toutes les pages,
 * les balises SEO et les données structurées Google (JSON-LD).
 * Modifie ce fichier pour mettre à jour le site partout à la fois.
 */

export const site = {
  name: "Au P'tit Gourmand",
  tagline: 'Original Food',
  motto: 'Fait maison, avec cœur.',
  url: 'https://auptitgourmand.com',
  description:
    "Snack antillais fait maison à Capesterre-Belle-Eau : bokits non gras, agoulous, paninis et crêpes préparés à la minute avec des produits locaux, frais et de saison.",

  address: {
    street: '32 avenue Paul-Lacavé',
    postalCode: '97130',
    city: 'Capesterre-Belle-Eau',
    region: 'Guadeloupe',
    country: 'FR',
  },
  geo: { latitude: 16.0445191, longitude: -61.5649085 },

  phones: [
    { label: '0590 10 94 36', href: 'tel:+590590109436', e164: '+590590109436' },
    { label: '0690 57 20 55', href: 'tel:+590690572055', e164: '+590690572055' },
  ],
  email: 'petitgourmand97130@gmail.com',

  hours: {
    label: '9h – 14h · 18h – 22h',
    /** Jours d'ouverture en clair (repris du sac à emporter du restaurant). */
    daysLabel: 'Du lundi au samedi',
    daysShort: 'Lun – sam',
    slots: [
      { label: 'Midi', opens: '09:00', closes: '14:00' },
      { label: 'Soir', opens: '18:00', closes: '22:00' },
    ],
    /**
     * Jours d'ouverture, au format schema.org (envoyés à Google) :
     * 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'.
     */
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as string[],
  },

  maps: {
    /** Fiche Google Maps du restaurant. */
    place: 'https://maps.google.com/?cid=14663843003239985104',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=16.0445191,-61.5649085',
    embed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1917.2019308955596!2d-61.5649085!3d16.0445191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c1359f9fa667a1d%3A0xcb806f84e2376fd0!2sAu%20P'tit%20Gourmand!5e0!3m2!1sfr!2sfr!4v1793733020372!5m2!1sfr!2sfr",
  },

  /** Réseaux sociaux : laisse une valeur vide pour masquer le lien. */
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61594004983817',
    instagram: 'https://www.instagram.com/au_pti_gourmand/',
    tiktok: 'https://www.tiktok.com/@au_ptit_gourmand',
  },

  /**
   * Avis clients réels (Google, Facebook…). La section n'apparaît que si la liste n'est pas vide.
   * Exemple : { quote: '…', author: 'Prénom', place: 'Commune' }
   */
  reviews: [] as { quote: string; author: string; place?: string }[],
} as const;

export const nav = [
  { href: '/', label: 'Accueil' },
  { href: '/menu', label: 'Menu' },
  { href: '/nos-specialites', label: 'Nos spécialités' },
  { href: '/qui-sommes-nous', label: 'Qui sommes-nous' },
  { href: '/contact', label: 'Contact' },
] as const;

/** '09:00' → '9h' ; '18:30' → '18h30' */
export const formatTime = (time: string) => {
  const [h, m] = time.split(':');
  return `${Number(h)}h${m === '00' ? '' : m}`;
};

export const fullAddress =`${site.address.street}, ${site.address.postalCode} ${site.address.city}`;
