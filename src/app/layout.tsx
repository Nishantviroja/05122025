import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import GoogleAnalytics from "@/components/integrations/GoogleAnalytics";
import MicrosoftClarity from "@/components/integrations/MicrosoftClarity";
import GoogleTagManager from "@/components/integrations/GoogleTagManager";
import integrations from "@/data/integrations";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

import { SEO_CONFIG } from '@/data/seo';

const baseUrl = SEO_CONFIG.siteUrl;
const siteName = SEO_CONFIG.siteName;
const defaultTitle = SEO_CONFIG.defaultTitle;
const defaultDescription = SEO_CONFIG.defaultDescription;
const defaultImage = SEO_CONFIG.defaultImage;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: defaultTitle,
    template: '%s',
  },
  description: defaultDescription,
  keywords: [
    "Salesforce dumps",
    "Salesforce certification",
    "exam preparation",
    "Admin certification",
    "Developer certification",
    "Salesforce exam questions",
    "certification dumps",
    "Salesforce study materials",
    "Salesforce practice tests"
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: defaultImage,
        width: 1200,
        height: 630,
        alt: 'Salesforce Dumps - Premium Certification Exam Preparation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultImage],
    creator: SEO_CONFIG.twitterHandle,
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: SEO_CONFIG.googleVerification,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`${poppins.variable} antialiased bg-white`}>
        <GoogleAnalytics GA_MEASUREMENT_ID={integrations.GA_MEASUREMENT_ID} />
        <MicrosoftClarity CLARITY_PROJECT_ID={integrations.CLARITY_PROJECT_ID} />
        <GoogleTagManager GTM_ID={integrations.GTM_ID} />
        <Navbar />
        <AnnouncementBanner />
        <main className="min-h-screen">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
