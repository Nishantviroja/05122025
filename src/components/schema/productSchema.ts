import { SEO_CONFIG } from '@/data/seo';

export interface ProductSchemaProps {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  rating?: number;
  reviewCount?: number;
  questionCount?: number;
}

export function generateProductSchema(props: ProductSchemaProps) {
  const { 
    id, 
    title, 
    description, 
    price, 
    category, 
    image, 
    rating = 4.8, 
    reviewCount = 150,
    questionCount = 100
  } = props;
  
  const priceValue = price.replace('$', '').trim();
  const productUrl = `${SEO_CONFIG.siteUrl}/${id}`;
  const productImage = image || `${SEO_CONFIG.siteUrl}/images/default-certification.jpg`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': productUrl,
    name: title,
    description: description,
    image: [productImage], // Array format preferred by Google
    sku: id.toUpperCase(),
    mpn: id.toUpperCase(), // Manufacturer Part Number
    brand: {
      '@type': 'Brand',
      name: 'Salesforce',
      logo: 'https://www.salesforce.com/content/dam/web/en_us/www/images/nav/salesforce-logo.svg'
    },
    category: category,
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'Certification Candidate'
    },
    offers: {
      '@type': 'Offer',
      '@id': `${productUrl}#offer`,
      url: productUrl,
      priceCurrency: 'USD',
      price: priceValue,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: priceValue,
        priceCurrency: 'USD',
        valueAddedTaxIncluded: false
      },
      seller: {
        '@type': 'Organization',
        name: SEO_CONFIG.siteName,
        url: SEO_CONFIG.siteUrl
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'US',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn'
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'USD'
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'US'
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 1,
            unitCode: 'DAY'
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY'
          }
        }
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
      ratingCount: reviewCount.toString()
    },
    review: [
      {
        '@type': 'Review',
        '@id': `${productUrl}#review1`,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1'
        },
        author: {
          '@type': 'Person',
          name: 'Verified Customer'
        },
        reviewBody: 'Excellent exam preparation material. Very comprehensive and up-to-date. Passed on first attempt!',
        datePublished: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        publisher: {
          '@type': 'Organization',
          name: SEO_CONFIG.siteName
        }
      },
      {
        '@type': 'Review',
        '@id': `${productUrl}#review2`,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1'
        },
        author: {
          '@type': 'Person',
          name: 'Certified Professional'
        },
        reviewBody: 'These dumps were exactly what I needed. Questions were very similar to the actual exam.',
        datePublished: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        publisher: {
          '@type': 'Organization',
          name: SEO_CONFIG.siteName
        }
      },
      {
        '@type': 'Review',
        '@id': `${productUrl}#review3`,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '4',
          bestRating: '5',
          worstRating: '1'
        },
        author: {
          '@type': 'Person',
          name: 'Study Partner'
        },
        reviewBody: `Great value for money. ${questionCount}+ questions with detailed explanations. Highly recommended!`,
        datePublished: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        publisher: {
          '@type': 'Organization',
          name: SEO_CONFIG.siteName
        }
      }
    ],
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Question Count',
        value: `${questionCount}+`
      },
      {
        '@type': 'PropertyValue',
        name: 'Format',
        value: 'Digital Download'
      },
      {
        '@type': 'PropertyValue',
        name: 'Access',
        value: 'Lifetime'
      },
      {
        '@type': 'PropertyValue',
        name: 'Updates',
        value: 'Latest Version'
      }
    ]
  };
}

