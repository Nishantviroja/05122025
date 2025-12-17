"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { certifications } from "@/data/certifications";
import { categories } from "@/data/categories";
import CertificationCard from "@/components/ui/CertificationCard";
import ReviewModal from "@/components/ui/ReviewModal";
import { SEO_CONFIG } from '@/data/seo';
import { generateWebsiteSchema, generateOrganizationSchema, generateBreadcrumbSchema, getHomeBreadcrumb, generateFAQSchema } from '@/components/schema';

export default function HomePage() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  // Separate Best Sellers and other certifications, then combine (Best Sellers first)
  const bestSellers = certifications.filter(cert => cert.badge === "Best Seller");
  const otherCerts = certifications.filter(cert => cert.badge !== "Best Seller");
  
  // Combine: Best Sellers first, then others, limit to 6 total
  const featuredDumps = [...bestSellers, ...otherCerts].slice(0, 6);

  // Smooth scroll to featured dumps section
  const scrollToFeatured = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('featured-dumps');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Schema markup for homepage
  const websiteSchema = generateWebsiteSchema();
  const organizationSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema(getHomeBreadcrumb());
  
  // FAQ Schema
  const faqSchema = generateFAQSchema([
    {
      question: "What are Salesforce certification dumps?",
      answer: "Salesforce certification dumps are comprehensive collections of real exam questions and verified answers that help you prepare for Salesforce certification exams. Our dumps include detailed explanations and are regularly updated to match the latest exam versions."
    },
    {
      question: "Are these exam dumps up to date?",
      answer: "Yes, all our exam dumps are regularly updated to reflect the latest Salesforce certification exam versions. We monitor exam changes and update our materials accordingly to ensure you're studying the most current content."
    },
    {
      question: "How quickly will I receive access after purchase?",
      answer: "You'll receive instant access to your exam dumps immediately after purchase. The materials are delivered digitally, so you can start studying right away with no waiting time."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the exam dumps for any reason, contact us within 30 days of purchase for a full refund, no questions asked."
    },
    {
      question: "Can I use these dumps on multiple devices?",
      answer: "Yes, you have lifetime access to your purchased exam dumps and can access them on any device including computers, tablets, and smartphones. There are no device restrictions."
    },
    {
      question: "What's included in the exam dumps?",
      answer: "Each exam dump includes 100+ real exam questions with verified answers, detailed explanations, the latest exam version updates, lifetime access, and a money-back guarantee. You also get 20% discount on your second purchase."
    }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#032D60] mb-6">
                  Clear{" "}
                  <span className="text-[#0176D3]">Salesforce</span>{" "}
                  Certifications with Confidence
                </h1>
                <p className="text-lg text-[#444444] mb-8 leading-relaxed">
                  Unlock your career potential with our comprehensive exam preparation materials. 
                  Join thousands of professionals who passed their Salesforce certifications on the 
                  first try using our verified exam dumps and expert-curated study resources.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#featured-dumps"
                    onClick={scrollToFeatured}
                    className="inline-flex items-center px-6 py-3 bg-[#0176D3] text-white font-semibold rounded hover:bg-[#014486] transition-colors cursor-pointer"
                  >
                    Browse Exam Dumps
                  </a>
                  <Link
                    href="/dumps"
                    className="inline-flex items-center px-6 py-3 border-2 border-[#0176D3] text-[#0176D3] font-semibold rounded hover:bg-[#0176D3]/5 transition-colors"
                  >
                    View All Dumps
                  </Link>
                </div>
              </div>

              {/* Right - Image */}
              <div className="hidden lg:flex justify-center items-center">
                <div className="relative w-full max-w-lg">
                  <Image
                    src="https://blogger.googleusercontent.com/img/a/AVvXsEhEJv0vwqbuJMvgTJRNVwBnO323d2VzDPGos5bD_2H2XYknEhHiOHSn2L9ECBLlCOwxCmfvP2LaKsh4-MmiYUh0vrRJWQto3cZtXtoiH_ilY7UcITM_OWC37pAyta20597a3J0o6hwTJ-c6lTh6lz53-PguZ2HsgUe4VR9amzuGm9wTTmwfppYSaTwiZB_Y=s16000"
                    alt="Salesforce Certification"
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
              Why Choose Our Exam Dumps?
            </h2>
            <p className="text-xl text-[#032D60] mb-12">
              Join thousands of professionals who passed their exams with our materials:
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: "50+", label: "Certifications" },
                { value: "10K+", label: "Students Passed" },
                { value: "98%", label: "Pass Rate" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="text-5xl font-bold text-[#0176D3] mb-2">{stat.value}</div>
                  <div className="text-[#444444] text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Exam Dumps */}
        <section id="featured-dumps" className="bg-white py-16 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#032D60] mb-8 text-center">
              Featured Exam Dumps
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDumps.map((dump) => (
                <CertificationCard
                  key={dump.id}
                  id={dump.id}
                  title={dump.title}
                  category={dump.category}
                  aboutCertification={dump.aboutCertification}
                  questionCount={dump.questionCount}
                  lastUpdated={dump.lastUpdated}
                  difficulty={dump.difficulty}
                  rating={dump.rating}
                  price={dump.price}
                  originalPrice={dump.originalPrice}
                  badge={dump.badge}
                  certificationIMG={dump.certificationIMG}
                />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link
                href="/dumps"
                className="inline-flex items-center px-8 py-3 bg-[#0176D3] text-white font-semibold rounded hover:bg-[#014486] transition-colors"
              >
                View All Exam Dumps
              </Link>
            </div>
          </div>
        </section>

        {/* Certification Categories Section */}
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

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#032D60] mb-4">
                What Our Students Say
              </h2>
              <p className="text-[#444444] max-w-2xl mx-auto">
                Join thousands of professionals who have successfully passed their Salesforce certifications with our exam dumps
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#444444] mb-4 italic">
                  "These dumps were exactly what I needed to pass my Admin certification. The questions were very similar to the actual exam, and the explanations helped me understand the concepts deeply."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#0176D3] rounded-full flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-[#032D60]">Sarah Mitchell</p>
                    <p className="text-sm text-[#5C5C5C]">Salesforce Administrator</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#444444] mb-4 italic">
                  "I passed my Platform Developer I exam on the first try thanks to these comprehensive dumps. Great value for money and instant access made my preparation so much easier."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#0176D3] rounded-full flex items-center justify-center text-white font-bold">
                    JC
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-[#032D60]">James Chen</p>
                    <p className="text-sm text-[#5C5C5C]">Platform Developer</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#444444] mb-4 italic">
                  "Outstanding quality! The verified answers with detailed explanations helped me not just pass the exam, but truly understand Salesforce. Highly recommend to anyone preparing for certification."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#0176D3] rounded-full flex items-center justify-center text-white font-bold">
                    EP
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-[#032D60]">Emily Parker</p>
                    <p className="text-sm text-[#5C5C5C]">Sales Cloud Consultant</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#444444] mb-4 italic">
                  "Incredible resource for Service Cloud certification! The practice questions are spot-on and helped me identify my weak areas. Passed with 89% score. Worth every penny!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#0176D3] rounded-full flex items-center justify-center text-white font-bold">
                    MR
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-[#032D60]">Michael Rodriguez</p>
                    <p className="text-sm text-[#5C5C5C]">Service Cloud Consultant</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#444444] mb-4 italic">
                  "Best investment for my Salesforce career! The dumps are well-organized, frequently updated, and the explanations are clear. Successfully cleared my Marketing Cloud exam thanks to this."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#0176D3] rounded-full flex items-center justify-center text-white font-bold">
                    LW
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-[#032D60]">Lisa Wang</p>
                    <p className="text-sm text-[#5C5C5C]">Marketing Cloud Specialist</p>
                  </div>
                </div>
              </div>

              {/* Add Review Card */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-[#0176D3] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-[#032D60] font-semibold text-lg mb-2 text-center">Share Your Experience</p>
                <p className="text-[#444444] text-sm mb-4 text-center">
                  Join <strong>106+</strong> satisfied customers who have shared their success stories with us.
                </p>
                
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-center text-sm text-[#032D60] font-medium mb-1">4.9 out of 5</p>
                <p className="text-center text-xs text-[#5C5C5C] mb-6">Based on 106+ reviews</p>
                
                <button
                  onClick={() => setIsReviewModalOpen(true)}
                  className="w-full bg-[#0176D3] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#014486] transition-colors"
                >
                  Add Your Review
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Review Modal */}
        <ReviewModal 
          isOpen={isReviewModalOpen} 
          onClose={() => setIsReviewModalOpen(false)} 
        />

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#032D60] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[#444444]">
                Everything you need to know about our Salesforce exam dumps
              </p>
            </div>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <details className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-[#032D60] pr-4">What are Salesforce certification dumps?</span>
                  <svg className="w-5 h-5 text-[#0176D3] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-[#444444]">
                  Salesforce certification dumps are comprehensive collections of real exam questions and verified answers that help you prepare for Salesforce certification exams. Our dumps include detailed explanations and are regularly updated to match the latest exam versions.
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-[#032D60] pr-4">Are these exam dumps up to date?</span>
                  <svg className="w-5 h-5 text-[#0176D3] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-[#444444]">
                  Yes, all our exam dumps are regularly updated to reflect the latest Salesforce certification exam versions. We monitor exam changes and update our materials accordingly to ensure you're studying the most current content.
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-[#032D60] pr-4">How quickly will I receive access after purchase?</span>
                  <svg className="w-5 h-5 text-[#0176D3] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-[#444444]">
                  You'll receive instant access to your exam dumps immediately after purchase. The materials are delivered digitally, so you can start studying right away with no waiting time.
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-[#032D60] pr-4">Do you offer a money-back guarantee?</span>
                  <svg className="w-5 h-5 text-[#0176D3] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-[#444444]">
                  Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the exam dumps for any reason, contact us within 30 days of purchase for a full refund, no questions asked.
                </div>
              </details>

              {/* FAQ 5 */}
              <details className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-[#032D60] pr-4">Can I use these dumps on multiple devices?</span>
                  <svg className="w-5 h-5 text-[#0176D3] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-[#444444]">
                  Yes, you have lifetime access to your purchased exam dumps and can access them on any device including computers, tablets, and smartphones. There are no device restrictions.
                </div>
              </details>

              {/* FAQ 6 */}
              <details className="group bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-[#032D60] pr-4">What's included in the exam dumps?</span>
                  <svg className="w-5 h-5 text-[#0176D3] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-[#444444]">
                  Each exam dump includes 100+ real exam questions with verified answers, detailed explanations, the latest exam version updates, lifetime access, and a money-back guarantee. You also get 20% discount on your second purchase.
                </div>
              </details>
            </div>

            <div className="text-center mt-10">
              <Link
                href="/faq"
                className="inline-flex items-center text-[#0176D3] font-semibold hover:underline"
              >
                View All FAQs
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
