import type { Metadata } from "next";
import Link from "next/link";

import { SEO_CONFIG } from '@/data/seo';

const baseUrl = SEO_CONFIG.siteUrl;

export const metadata: Metadata = {
  title: "Refund Policy - Salesforce Dumps",
  description: "Learn about our 100% money-back guarantee. If you use our Salesforce exam dumps and don't pass your certification exam, we offer a full refund.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Refund Policy - Salesforce Dumps",
    description: "Learn about our 100% money-back guarantee. If you use our Salesforce exam dumps and don't pass your certification exam, we offer a full refund.",
    url: `${baseUrl}/refund`,
    type: 'website',
    images: [SEO_CONFIG.defaultImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Refund Policy - Salesforce Dumps",
    description: "Learn about our 100% money-back guarantee. If you use our Salesforce exam dumps and don't pass your certification exam, we offer a full refund.",
  },
  alternates: {
    canonical: `${baseUrl}/refund`,
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-12 pb-48 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhIkvJ6PMfQw6og0NmzqWV1cLUEjqPsdv0vEW_jpI1lsYqrzSfT9kUtQfncb680FIc6ISDOoIttWsXdR7kktBqC7SPWBpZjQ2fldnCz2WB0OQHwbHHryzSXXcz3kEWuiQS3_hQjG5Duyw78HSvHRHXVdr2304fqmqy8JrdaBmCH8TdLM81wvOBH978BblX0=s16000"
            alt="Refund Policy Background"
            className="w-full h-full object-cover object-bottom"
            style={{ display: 'block' }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Refund Policy
            </h1>
            <p className="text-white/90">
              Our commitment to your satisfaction and success
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
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">100% Money-Back Guarantee</h2>
                <p className="text-[#444444] mb-4">
                  We stand behind the quality of our exam dumps. If you use our materials to prepare for your Salesforce certification exam and do not pass, we offer a 100% money-back guarantee.
                </p>
                <p className="text-[#444444]">
                  This guarantee demonstrates our confidence in our products and our commitment to helping you succeed in your certification journey.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">Eligibility Requirements</h2>
                <p className="text-[#444444] mb-4">To be eligible for a refund, you must:</p>
                <ul className="list-disc pl-6 text-[#444444] space-y-2">
                  <li>Have purchased the exam dump directly from our website</li>
                  <li>Have used the dump to prepare for your certification exam</li>
                  <li>Have taken the official Salesforce certification exam</li>
                  <li>Provide proof of a failed exam result (screenshot or PDF of the exam score report)</li>
                  <li>Submit your refund request within 30 days of your exam date</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">How to Request a Refund</h2>
                <p className="text-[#444444] mb-4">To request a refund, please follow these steps:</p>
                <ol className="list-decimal pl-6 text-[#444444] space-y-2">
                  <li>Email us at <Link href="/contact" className="text-[#0176D3] hover:underline">contact@salesforcedumps.com</Link> with the subject line "Refund Request"</li>
                  <li>Include your order number or purchase confirmation email</li>
                  <li>Attach a screenshot or PDF of your failed exam results showing your score</li>
                  <li>Provide the date you took the exam</li>
                  <li>Include any additional information that may help us process your request</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">Refund Processing</h2>
                <p className="text-[#444444] mb-4">
                  Once we receive your refund request with all required documentation:
                </p>
                <ul className="list-disc pl-6 text-[#444444] space-y-2">
                  <li>We will review your request within 2-3 business days</li>
                  <li>If approved, we will process your refund within 7 business days</li>
                  <li>Refunds will be issued to the original payment method used for the purchase</li>
                  <li>You will receive an email confirmation once the refund has been processed</li>
                </ul>
                <p className="text-[#444444] mt-4">
                  Please note that it may take 5-10 business days for the refund to appear in your account, depending on your bank or payment provider.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">Non-Refundable Items</h2>
                <p className="text-[#444444] mb-4">The following situations are not eligible for refunds:</p>
                <ul className="list-disc pl-6 text-[#444444] space-y-2">
                  <li>If you pass the exam (our goal is to help you succeed!)</li>
                  <li>If you did not take the official Salesforce certification exam</li>
                  <li>If you cannot provide proof of a failed exam result</li>
                  <li>If the refund request is submitted more than 30 days after the exam date</li>
                  <li>If the purchase was made more than 90 days ago</li>
                  <li>If you have already received a refund for the same purchase</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">Digital Product Policy</h2>
                <p className="text-[#444444]">
                  Since our exam dumps are digital products that are immediately accessible upon purchase, we generally do not offer refunds for change of mind or if you simply decide not to use the product. However, our money-back guarantee applies specifically to cases where you have used our materials and failed your certification exam.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">Disputed Charges</h2>
                <p className="text-[#444444]">
                  If you believe there has been an error in billing or you have been charged incorrectly, please contact us immediately. We will investigate the issue and resolve it promptly. Unauthorized chargebacks may result in account suspension.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#032D60] mb-4">Questions About Refunds</h2>
                <p className="text-[#444444]">
                  If you have any questions about our refund policy or need assistance with a refund request, please don't hesitate to{" "}
                  <Link href="/contact" className="text-[#0176D3] hover:underline">
                    contact our support team
                  </Link>
                  . We're here to help and want to ensure your satisfaction with our services.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

