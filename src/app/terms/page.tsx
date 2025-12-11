import type { Metadata } from "next";
import Link from "next/link";

import { SEO_CONFIG } from '@/data/seo';

const baseUrl = SEO_CONFIG.siteUrl;

export const metadata: Metadata = {
  title: "Terms of Service - Salesforce Dumps",
  description: "Read our Terms of Service to understand the terms and conditions for using Salesforce Dumps. Please read these terms carefully before using our services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service - Salesforce Dumps",
    description: "Read our Terms of Service to understand the terms and conditions for using Salesforce Dumps.",
    url: `${baseUrl}/terms`,
    type: 'website',
    images: [SEO_CONFIG.defaultImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Terms of Service - Salesforce Dumps",
    description: "Read our Terms of Service to understand the terms and conditions for using Salesforce Dumps.",
  },
  alternates: {
    canonical: `${baseUrl}/terms`,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-12 pb-48 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhIkvJ6PMfQw6og0NmzqWV1cLUEjqPsdv0vEW_jpI1lsYqrzSfT9kUtQfncb680FIc6ISDOoIttWsXdR7kktBqC7SPWBpZjQ2fldnCz2WB0OQHwbHHryzSXXcz3kEWuiQS3_hQjG5Duyw78HSvHRHXVdr2304fqmqy8JrdaBmCH8TdLM81wvOBH978BblX0=s16000"
            alt="Terms of Service Background"
            className="w-full h-full object-cover object-bottom"
            style={{ display: 'block' }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-white/90">
              Please read these terms carefully before using our services.
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
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">1. Acceptance of Terms</h2>
                <p className="text-[#444444]">
                  By accessing and using Salesforce Dumps, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">2. Use License</h2>
                <p className="text-[#444444] mb-4">
                  Permission is granted to temporarily download one copy of our exam dumps for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 text-[#444444] space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">3. Account Registration</h2>
                <p className="text-[#444444]">
                  You may be required to register for an account to access certain features. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">4. Payment Terms</h2>
                <p className="text-[#444444] mb-4">
                  All purchases are subject to the following terms:
                </p>
                <ul className="list-disc pl-6 text-[#444444] space-y-2">
                  <li>Prices are displayed in USD and are subject to change without notice</li>
                  <li>Payment must be made in full at the time of purchase</li>
                  <li>We accept major credit cards and PayPal</li>
                  <li>All sales are final unless otherwise stated in our refund policy</li>
                  <li>You are responsible for any applicable taxes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">5. Intellectual Property</h2>
                <p className="text-[#444444]">
                  All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Salesforce Dumps or its content suppliers and is protected by international copyright and trademark laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">6. Prohibited Uses</h2>
                <p className="text-[#444444] mb-4">You may not use our services:</p>
                <ul className="list-disc pl-6 text-[#444444] space-y-2">
                  <li>In any way that violates any applicable law or regulation</li>
                  <li>To transmit any malicious code or viruses</li>
                  <li>To impersonate or attempt to impersonate another user</li>
                  <li>To engage in any automated use of the system</li>
                  <li>To interfere with or disrupt the website or servers</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">7. Disclaimer</h2>
                <p className="text-[#444444]">
                  The materials on Salesforce Dumps are provided on an 'as is' basis. Salesforce Dumps makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">8. Limitations</h2>
                <p className="text-[#444444]">
                  In no event shall Salesforce Dumps or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Salesforce Dumps, even if Salesforce Dumps or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">9. Revisions</h2>
                <p className="text-[#444444]">
                  Salesforce Dumps may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">10. Contact Information</h2>
                <p className="text-[#444444]">
                  If you have any questions about these Terms of Service, please contact us at{" "}
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

