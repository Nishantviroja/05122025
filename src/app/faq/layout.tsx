import type { Metadata } from "next";

import { SEO_CONFIG } from '@/data/seo';

const baseUrl = SEO_CONFIG.siteUrl;

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions - Salesforce Dumps",
  description: "Find answers to common questions about Salesforce certification dumps, purchase process, access, updates, refunds, and support. Get help with your certification journey.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "FAQ - Frequently Asked Questions - Salesforce Dumps",
    description: "Find answers to common questions about Salesforce certification dumps, purchase process, access, updates, refunds, and support.",
    url: `${baseUrl}/faq`,
    type: 'website',
    images: [SEO_CONFIG.defaultImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: "FAQ - Frequently Asked Questions - Salesforce Dumps",
    description: "Find answers to common questions about Salesforce certification dumps, purchase process, access, updates, refunds, and support.",
  },
  alternates: {
    canonical: `${baseUrl}/faq`,
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

