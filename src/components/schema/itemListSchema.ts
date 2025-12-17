import { SEO_CONFIG } from '@/data/seo';

export interface ItemListProduct {
  id: string;
  title: string;
  price: number;
  image?: string;
  category: string;
  rating: number;
}

export function generateItemListSchema(products: ItemListProduct[], listName: string = 'All Certification Dumps') {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    description: 'Complete collection of Salesforce certification exam dumps with verified answers',
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        '@id': `${SEO_CONFIG.siteUrl}/${product.id}`,
        name: `${product.title} Exam Dump`,
        url: `${SEO_CONFIG.siteUrl}/${product.id}`,
        image: product.image || `${SEO_CONFIG.siteUrl}/images/default-certification.jpg`,
        category: product.category,
        offers: {
          '@type': 'Offer',
          price: product.price.toString(),
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `${SEO_CONFIG.siteUrl}/${product.id}`
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: product.rating.toString(),
          bestRating: '5'
        }
      }
    }))
  };
}

// Generate collection page schema for category filtering
export function generateCollectionPageSchema(products: ItemListProduct[], category?: string) {
  const collectionName = category 
    ? `${category} Certification Dumps` 
    : 'All Salesforce Certification Dumps';
    
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: collectionName,
    description: category 
      ? `Complete collection of ${category} Salesforce certification exam dumps`
      : 'Complete collection of all Salesforce certification exam dumps',
    url: category 
      ? `${SEO_CONFIG.siteUrl}/dumps?category=${encodeURIComponent(category)}`
      : `${SEO_CONFIG.siteUrl}/dumps`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: products.length,
      itemListElement: products.slice(0, 20).map((product, index) => ({ // Limit to first 20 for performance
        '@type': 'ListItem',
        position: index + 1,
        url: `${SEO_CONFIG.siteUrl}/${product.id}`,
        name: `${product.title} Exam Dump`
      }))
    }
  };
}

