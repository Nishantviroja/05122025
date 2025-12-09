"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { certifications, categories } from "@/data/certifications";
import { ChevronDownIcon } from "@/components/icons";

// Certification icon component
function CertificationIcon({ color = "#0176D3" }: { color?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill={`${color}15`} />
      <path
        d="M20 8L23 14L30 15L25 20L26 27L20 24L14 27L15 20L10 15L17 14L20 8Z"
        fill={color}
      />
    </svg>
  );
}

const faqs = [
  {
    question: "Where do I get started?",
    answer: "Start by exploring our exam dumps collection. Choose a certification that aligns with your career goals and begin with the practice questions. We recommend starting with Administrator certification if you're new to Salesforce."
  },
  {
    question: "How do I prepare for my certification exam?",
    answer: "Our dumps include real exam questions with detailed explanations. Study the questions, understand the concepts behind each answer, and practice until you consistently score above 85%. Combine this with official Salesforce study materials for best results."
  },
  {
    question: "What is the exam format?",
    answer: "Most Salesforce certification exams are multiple-choice with 60-65 questions. You typically have 90-105 minutes to complete the exam, and the passing score is usually around 65-68% depending on the certification."
  },
  {
    question: "How often are the dumps updated?",
    answer: "We update our dumps monthly to reflect the latest exam changes. Whenever Salesforce updates an exam, we verify and update our questions within 2-4 weeks to ensure accuracy."
  },
  {
    question: "What if I don't pass my exam?",
    answer: "We offer a 100% money-back guarantee. If you use our dumps and don't pass your exam, simply send us your failed exam results and we'll issue a full refund within 7 business days."
  }
];

const stats = [
  { value: "67%", label: "more confident" },
  { value: "26%", label: "more likely to be promoted" },
  { value: "30%", label: "more productive" }
];

export default function CertificationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const featuredCerts = certifications.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#032D60] mb-6">
                Salesforce Certifications
              </h1>
              <p className="text-lg text-[#444444] mb-8 leading-relaxed">
                Prove your expertise with industry-recognized certifications that grow your 
                company and career. Salesforce Certifications show you have the knowledge 
                and skills to get the most out of Salesforce products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/dumps"
                  className="inline-flex items-center px-6 py-3 bg-[#0176D3] text-white font-semibold rounded hover:bg-[#014486] transition-colors"
                >
                  View all certifications
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 border-2 border-[#0176D3] text-[#0176D3] font-semibold rounded hover:bg-[#0176D3]/5 transition-colors"
                >
                  Why certify?
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-lg">
                <Image
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEhEJv0vwqbuJMvgTJRNVwBnO323d2VzDPGos5bD_2H2XYknEhHiOHSn2L9ECBLlCOwxCmfvP2LaKsh4-MmiYUh0vrRJWQto3cZtXtoiH_ilY7UcITM_OWC37pAyta20597a3J0o6hwTJ-c6lTh6lz53-PguZ2HsgUe4VR9amzuGm9wTTmwfppYSaTwiZB_Y=s16000"
                  alt="Salesforce Certifications"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-lg object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#EEF4FF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#032D60] mb-4">
            Boost productivity with certifications.
          </h2>
          <p className="text-xl text-[#032D60] mb-12">
            After achieving a certification, Salesforce professionals are:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-5xl font-bold text-[#0176D3] mb-2">{stat.value}</div>
                <div className="text-[#444444] text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Certifications */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#032D60] mb-8 text-center">
            Featured Certification Exam Dumps
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCerts.map((cert) => (
              <Link
                key={cert.id}
                href={`/dumps/${cert.id}`}
                className="bg-white rounded-xl border border-[#E5E5E5] p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CertificationIcon color={
                    cert.color === "blue" ? "#0176D3" :
                    cert.color === "green" ? "#2E844A" :
                    cert.color === "orange" ? "#FE9339" :
                    "#9050E9"
                  } />
                  <span className="text-sm text-[#5C5C5C]">Exam Dump</span>
                </div>
                
                <h3 className="text-lg font-bold text-[#0176D3] group-hover:underline mb-3">
                  {cert.title}
                </h3>
                
                <p className="text-[#444444] text-sm line-clamp-3">
                  {cert.description}
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-[#5C5C5C]">{cert.questionCount}+ Questions</span>
                  <span className="text-lg font-bold text-[#032D60]">${cert.price}</span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/dumps"
              className="inline-flex items-center px-8 py-3 bg-[#0176D3] text-white font-semibold rounded hover:bg-[#014486] transition-colors"
            >
              View all certifications
            </Link>
          </div>
        </div>
      </section>

      {/* Certification Categories */}
      <section className="relative bg-[#FFFFFF] py-16 min-h-[70vh]">
        {/* Gradient Overlay - Back Layer */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(180deg, #fff 29.72%, #c6e9ff 100%)' }}></div>

        {/* Background Images - Middle Layer */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden flex items-end" style={{ zIndex: 2 }}>
          {/* Left Background Image */}
          <div className="relative w-1/2 flex items-end justify-start">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEiFnsCNGs4yaLiFVQ5hweAk3glhBgPKJVWdEz8j5uIqgIUuhv_MpSSMpS0TwbP730LM2KK0LJB5HBDtRzgy9owiil8chbhUFLoMY-LFNmSpZsZctDozm6j0raBclcrYTDdCw0QLRjISGhtYp6mCNfPVpvw-qTYgNQIT9768HGkfPoG_dQTXL2Sxg6akG0LX=s16000"
              alt="Left Background"
              className="max-h-[70vh] w-auto object-contain"
              style={{ display: 'block', margin: 0, padding: 0, verticalAlign: 'bottom' }}
            />
          </div>
          
          {/* Right Background Image */}
          <div className="relative w-1/2 flex items-end justify-end">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEgl6lLCGsii8kyyUQQyyoSN7fxq0r49_87r6JKy23dlgFqsqdNHXlrc4SNenDgJF6fk9OimJ36NvANwxMZU3SgsFL8pMYICG5Iy3WHf5U7xoQSCyXKu5KA60otm_-bM-oxdm3hGgHiSuu19wLTUDZFUMMsR6deqMwM9kRg4g6OH6VAo4bBFNxwk2SxV9h6f=s16000"
              alt="Right Background"
              className="max-h-[70vh] w-auto object-contain"
              style={{ display: 'block', margin: 0, padding: 0, verticalAlign: 'bottom' }}
            />
          </div>
        </div>

        {/* Content - Front Layer */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 3 }}>
          <h2 className="text-2xl md:text-3xl font-bold text-[#032D60] mb-8 text-center">
            Certification Categories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#032D60] mb-2">
                  {category.title}
                </h3>
                <p className="text-[#444444] text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#5C5C5C]">{category.certCount} Certifications</span>
                  <Link 
                    href="/dumps" 
                    className="text-[#0176D3] font-semibold text-sm hover:underline"
                  >
                    View dumps →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#032D60] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-b border-[#E5E5E5]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-semibold text-[#032D60] text-lg pr-8">
                    {faq.question}
                  </span>
                  <span className={`text-[#0176D3] transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon className="w-5 h-5" />
                  </span>
                </button>
                {openFaq === index && (
                  <div className="pb-5 text-[#444444] leading-relaxed animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
