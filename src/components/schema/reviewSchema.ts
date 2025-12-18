import { SEO_CONFIG } from '@/data/seo';

export interface ReviewSchemaProps {
  productId: string;
  productName: string;
  reviews: Array<{
    id: string;
    author: string;
    role?: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
  }>;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

// Generate individual review schema
export function generateReviewSchema(
  productId: string,
  productName: string,
  author: string,
  rating: number,
  reviewBody: string,
  datePublished: string,
  role?: string
) {
  const productUrl = `${SEO_CONFIG.siteUrl}/${productId}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `${productUrl}#review-${Date.now()}`,
    itemReviewed: {
      '@type': 'Product',
      name: productName,
      url: productUrl
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    author: {
      '@type': 'Person',
      name: author,
      ...(role && { jobTitle: role })
    },
    reviewBody: reviewBody,
    datePublished: datePublished,
    publisher: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl
    }
  };
}

// Generate aggregate rating schema
export function generateAggregateRatingSchema(
  productId: string,
  productName: string,
  ratingValue: number,
  reviewCount: number
) {
  const productUrl = `${SEO_CONFIG.siteUrl}/${productId}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    '@id': `${productUrl}#aggregateRating`,
    itemReviewed: {
      '@type': 'Product',
      name: productName,
      url: productUrl
    },
    ratingValue: ratingValue.toString(),
    reviewCount: reviewCount.toString(),
    bestRating: '5',
    worstRating: '1',
    ratingCount: reviewCount.toString()
  };
}

// Generate multiple reviews collection schema
export function generateReviewsCollectionSchema(props: ReviewSchemaProps) {
  const { productId, productName, reviews, aggregateRating } = props;
  const productUrl = `${SEO_CONFIG.siteUrl}/${productId}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': productUrl,
    name: productName,
    url: productUrl,
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue.toString(),
        reviewCount: aggregateRating.reviewCount.toString(),
        bestRating: '5',
        worstRating: '1',
        ratingCount: aggregateRating.reviewCount.toString()
      }
    }),
    review: reviews.map((review) => ({
      '@type': 'Review',
      '@id': `${productUrl}#review-${review.id}`,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1'
      },
      author: {
        '@type': 'Person',
        name: review.author,
        ...(review.role && { jobTitle: review.role })
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
      publisher: {
        '@type': 'Organization',
        name: SEO_CONFIG.siteName,
        url: SEO_CONFIG.siteUrl
      }
    }))
  };
}

