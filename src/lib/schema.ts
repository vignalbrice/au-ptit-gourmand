import { site } from '@/data/site';

/** Données structurées schema.org « Restaurant » pour Google (fiche locale, résultats enrichis). */
export function restaurantSchema() {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${site.url}/#restaurant`,
    name: site.name,
    slogan: site.motto,
    description: site.description,
    url: site.url,
    image: `${site.url}/og-image.jpg`,
    logo: `${site.url}/icon-512.png`,
    telephone: site.phones[0].e164,
    email: site.email,
    servesCuisine: ['Antillaise', 'Créole', 'Street food'],
    priceRange: '€',
    acceptsReservations: false,
    hasMenu: `${site.url}/menu`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.maps.place,
  };

  if (site.hours.days.length > 0) {
    schema.openingHoursSpecification = site.hours.slots.map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: site.hours.days,
      opens: slot.opens,
      closes: slot.closes,
    }));
  }

  const sameAs = Object.values(site.social).filter(Boolean);
  if (sameAs.length > 0) schema.sameAs = sameAs;

  return schema;
}

/** Fil d'Ariane pour les pages intérieures. */
export function breadcrumbSchema(name: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${site.url}/` },
      { '@type': 'ListItem', position: 2, name, item: url },
    ],
  };
}
