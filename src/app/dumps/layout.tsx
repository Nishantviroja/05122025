import type { Metadata } from "next";

import { SEO_CONFIG } from '@/data/seo';

const baseUrl = SEO_CONFIG.siteUrl;

export const metadata: Metadata = {
  title: "Browse All Exam Dumps - Salesforce Dumps",
  description: "Browse our complete collection of Salesforce certification exam dumps. Filter by category, difficulty, and search for specific certifications. Find the perfect exam dump for your certification journey.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Browse All Exam Dumps - Salesforce Dumps",
    description: "Browse our complete collection of Salesforce certification exam dumps. Filter by category, difficulty, and search for specific certifications.",
    url: `${baseUrl}/dumps`,
    type: 'website',
    images: [SEO_CONFIG.defaultImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Browse All Exam Dumps - Salesforce Dumps",
    description: "Browse our complete collection of Salesforce certification exam dumps. Filter by category, difficulty, and search for specific certifications.",
  },
  alternates: {
    canonical: `${baseUrl}/dumps`,
  },
};

export default function DumpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

