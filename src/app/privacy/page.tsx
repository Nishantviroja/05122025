import type { Metadata } from "next";
import Link from "next/link";

import { SEO_CONFIG } from '@/data/seo';

const baseUrl = SEO_CONFIG.siteUrl;

export const metadata: Metadata = {
  title: "Privacy Policy - Salesforce Dumps",
  description: "Read our Privacy Policy to understand how Salesforce Dumps collects, uses, and protects your personal information. Your privacy is important to us.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy - Salesforce Dumps",
    description: "Read our Privacy Policy to understand how Salesforce Dumps collects, uses, and protects your personal information.",
    url: `${baseUrl}/privacy`,
    type: 'website',
    images: [SEO_CONFIG.defaultImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Privacy Policy - Salesforce Dumps",
    description: "Read our Privacy Policy to understand how Salesforce Dumps collects, uses, and protects your personal information.",
  },
  alternates: {
    canonical: `${baseUrl}/privacy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-12 pb-48 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhIkvJ6PMfQw6og0NmzqWV1cLUEjqPsdv0vEW_jpI1lsYqrzSfT9kUtQfncb680FIc6ISDOoIttWsXdR7kktBqC7SPWBpZjQ2fldnCz2WB0OQHwbHHryzSXXcz3kEWuiQS3_hQjG5Duyw78HSvHRHXVdr2304fqmqy8JrdaBmCH8TdLM81wvOBH978BblX0=s16000"
            alt="Privacy Policy Background"
            className="w-full h-full object-cover object-bottom"
            style={{ display: 'block' }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-white/90">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-[#5C5C5C] mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">1. Information We Collect</h2>
                <p className="text-[#444444] mb-4">
                  We collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc pl-6 text-[#444444] space-y-2 mb-4">
                  <li>Create an account or make a purchase</li>
                  <li>Subscribe to our newsletter or updates</li>
                  <li>Contact us for support or inquiries</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-[#444444]">
                  This information may include your name, email address, billing address, payment information, and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">2. How We Use Your Information</h2>
                <p className="text-[#444444] mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-[#444444] space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Send you order confirmations and updates</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Communicate with you about products, services, and promotional offers</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Improve our website and services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">3. Information Sharing</h2>
                <p className="text-[#444444] mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-[#444444] space-y-2">
                  <li>With service providers who assist us in operating our website and conducting our business</li>
                  <li>To comply with legal obligations or protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With your consent or at your direction</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">4. Data Security</h2>
                <p className="text-[#444444]">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">5. Your Rights</h2>
                <p className="text-[#444444] mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-[#444444] space-y-2">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">6. Cookies and Tracking</h2>
                <p className="text-[#444444]">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">7. Changes to This Policy</h2>
                <p className="text-[#444444]">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">8. Contact Us</h2>
                <p className="text-[#444444]">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <Link href="/contact" className="text-[#0176D3] hover:underline">
                    contact@salesforcedumps.com
                  </Link>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

