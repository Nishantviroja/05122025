import { SEO_CONFIG } from '@/data/seo';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    logo: `${SEO_CONFIG.siteUrl}/logo.png`,
    description: SEO_CONFIG.defaultDescription,
    sameAs: [
      'https://www.facebook.com/salesforcedumps',
      'https://twitter.com/salesforcedumps',
      'https://www.linkedin.com/company/salesforcedumps'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'English',
      areaServed: 'Worldwide'
    }
  };
}

