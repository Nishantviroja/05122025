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

export const metadata: Metadata = {
  title: "Salesforce Dumps | Premium Certification Exam Preparation",
  description: "High-quality Salesforce certification exam dumps with real questions and accurate answers. Prepare for Admin, Developer, Architect, and Consultant certifications.",
  keywords: "Salesforce dumps, Salesforce certification, exam preparation, Admin certification, Developer certification",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
