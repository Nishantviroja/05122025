import type { Metadata } from "next";

import { SEO_CONFIG } from '@/data/seo';

const baseUrl = SEO_CONFIG.siteUrl;

export const metadata: Metadata = {
  title: "Contact Us - Salesforce Dumps",
  description: "Get in touch with Salesforce Dumps. Contact our support team for questions about exam dumps, certifications, or technical assistance. We're here to help you succeed.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Us - Salesforce Dumps",
    description: "Get in touch with Salesforce Dumps. Contact our support team for questions about exam dumps, certifications, or technical assistance.",
    url: `${baseUrl}/contact`,
    type: 'website',
    images: [SEO_CONFIG.defaultImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Us - Salesforce Dumps",
    description: "Get in touch with Salesforce Dumps. Contact our support team for questions about exam dumps, certifications, or technical assistance.",
  },
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

