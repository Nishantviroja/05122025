import { SEO_CONFIG } from '@/data/seo';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SEO_CONFIG.siteUrl}${item.url}`
    }))
  };
}

// Common breadcrumb generators for different pages
export function getHomeBreadcrumb(): BreadcrumbItem[] {
  return [
    { name: 'Home', url: '/' }
  ];
}

export function getDumpsBreadcrumb(): BreadcrumbItem[] {
  return [
    { name: 'Home', url: '/' },
    { name: 'Exam Dumps', url: '/dumps' }
  ];
}

export function getCertificationBreadcrumb(certificationTitle: string, certificationId: string): BreadcrumbItem[] {
  return [
    { name: 'Home', url: '/' },
    { name: 'Exam Dumps', url: '/dumps' },
    { name: certificationTitle, url: `/${certificationId}` }
  ];
}

export function getAboutBreadcrumb(): BreadcrumbItem[] {
  return [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ];
}

export function getContactBreadcrumb(): BreadcrumbItem[] {
  return [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' }
  ];
}

