"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { certifications } from "@/data/certifications";
import { categories } from "@/data/categories";
import CertificationCard from "@/components/ui/CertificationCard";
import { SEO_CONFIG } from '@/data/seo';

export default function HomePage() {
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
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SEO_CONFIG.siteName,
    "url": SEO_CONFIG.siteUrl,
    "description": SEO_CONFIG.defaultDescription,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SEO_CONFIG.siteUrl}/dumps?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SEO_CONFIG.siteName,
    "url": SEO_CONFIG.siteUrl,
    "logo": SEO_CONFIG.defaultImage,
    "description": SEO_CONFIG.defaultDescription,
    "sameAs": []
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
      </div>
    </>
  );
}
