"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, ArrowRightIcon } from "@/components/icons";

const faqCategories = [
  {
    name: "General",
    faqs: [
      {
        question: "What are Salesforce dumps?",
        answer: "Salesforce dumps are collections of real exam questions and answers from Salesforce certification exams. They help candidates prepare by familiarizing them with the actual exam format and types of questions asked.",
      },
      {
        question: "Are these dumps legal to use?",
        answer: "Yes, using dumps for study purposes is legal. Our materials are designed as study aids to help you understand concepts and prepare for the types of questions you might encounter. We recommend using them alongside official Salesforce study materials.",
      },
      {
        question: "How accurate are your dumps?",
        answer: "Our dumps are verified by certified Salesforce professionals who have recently passed the exams. We maintain a 98% accuracy rate and continuously update our content based on user feedback and exam changes.",
      },
      {
        question: "Which certifications do you cover?",
        answer: "We cover all major Salesforce certifications including Administrator, Platform Developer I & II, Sales Cloud Consultant, Service Cloud Consultant, Marketing Cloud, Data Architect, Integration Architect, and many more.",
      },
    ],
  },
  {
    name: "Purchase & Access",
    faqs: [
      {
        question: "How do I access my dumps after purchase?",
        answer: "After your payment is confirmed, you'll receive instant access via email. You can download the dumps in PDF format or access them online through your account dashboard.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and various other payment methods depending on your region.",
      },
      {
        question: "Can I access dumps on my mobile device?",
        answer: "Yes! Our dumps are available in PDF format which works on any device. We also have an online viewer optimized for mobile access so you can study on the go.",
      },
      {
        question: "How long do I have access to the dumps?",
        answer: "Access duration depends on your plan: Single Cert (90 days), Pro Bundle (180 days), or Unlimited (365 days). During this period, you also receive free updates.",
      },
    ],
  },
  {
    name: "Updates & Quality",
    faqs: [
      {
        question: "How often are dumps updated?",
        answer: "We update our dumps monthly to reflect the latest exam changes. Whenever Salesforce updates an exam, we verify and update our questions within 2-4 weeks.",
      },
      {
        question: "What if I find an incorrect answer?",
        answer: "We appreciate feedback! If you find any errors, please contact us through our support form. We verify all reported issues and update the content promptly.",
      },
      {
        question: "Do you include answer explanations?",
        answer: "Yes, every question comes with a detailed explanation that helps you understand why an answer is correct. This helps with learning, not just memorization.",
      },
      {
        question: "How do you source your questions?",
        answer: "Our questions come from certified professionals who have recently taken the exams. They share their experience and we compile, verify, and organize the content.",
      },
    ],
  },
  {
    name: "Refund & Support",
    faqs: [
      {
        question: "What is your refund policy?",
        answer: "We offer a 100% money-back guarantee. If you use our dumps and don't pass your exam, simply send us your failed exam results and we'll issue a full refund within 7 business days.",
      },
      {
        question: "How do I request a refund?",
        answer: "To request a refund, email us at contact@salesforcedumps.com with your order details and failed exam results (screenshot or PDF). We'll process your refund within 7 business days.",
      },
      {
        question: "How can I contact support?",
        answer: "You can reach us via email at contact@salesforcedumps.com. We typically respond within 24 hours. Pro and Unlimited subscribers receive priority support.",
      },
      {
        question: "Do you offer bulk/enterprise pricing?",
        answer: "Yes! We offer special pricing for teams and organizations. Contact us for custom enterprise pricing if you need to certify multiple team members.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-hero py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find answers to common questions about our Salesforce certification dumps
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category) => (
            <div key={category.name} className="mb-12">
              <h2 className="text-2xl font-bold text-[#032D60] mb-6">
                {category.name}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, index) => {
                  const itemId = `${category.name}-${index}`;
                  const isOpen = openItems.includes(itemId);

                  return (
                    <div
                      key={itemId}
                      className="bg-[#F3F3F3] rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <span className="font-semibold text-[#032D60] pr-4">
                          {faq.question}
                        </span>
                        <ChevronDownIcon
                          className={`w-5 h-5 text-[#0176D3] flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-[#444444] animate-fade-in-up">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-[#F3F3F3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#032D60] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-[#444444] mb-8">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help.
          </p>
          <Link
            href="/contact"
            className="bg-[#0176D3] hover:bg-[#014486] text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Contact Support
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
