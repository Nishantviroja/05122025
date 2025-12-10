"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { certifications } from "@/data/certifications";

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

export default function HomePage() {
  const featuredDumps = certifications.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#032D60] mb-6">
                Ace Your{" "}
                <span className="text-[#0176D3]">Salesforce</span>{" "}
                Certification
              </h1>
              <p className="text-lg text-[#444444] mb-8 leading-relaxed">
                Learn in-demand skills with our premium exam dumps. Pass your 
                certification on the first attempt with real questions and 
                verified answers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/dumps"
                  className="inline-flex items-center px-6 py-3 bg-[#0176D3] text-white font-semibold rounded hover:bg-[#014486] transition-colors"
                >
                  Browse Exam Dumps
                </Link>
                <Link
                  href="/certifications"
                  className="inline-flex items-center px-6 py-3 border-2 border-[#0176D3] text-[#0176D3] font-semibold rounded hover:bg-[#0176D3]/5 transition-colors"
                >
                  View Certifications
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
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#032D60] mb-8 text-center">
            Featured Exam Dumps
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDumps.map((dump) => (
              <Link
                key={dump.id}
                href={`/${dump.id}`}
                className="bg-white rounded-xl border border-[#E5E5E5] p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-4">
                  {dump.certificationIMG ? (
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                      <Image
                        src={dump.certificationIMG}
                        alt={dump.title}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <CertificationIcon color="#0176D3" />
                  )}
                  <span className="text-sm text-[#5C5C5C]">Exam Dump</span>
                </div>
                
                <h3 className="text-lg font-bold text-[#0176D3] group-hover:underline mb-3">
                  {dump.title}
                </h3>
                
                <p className="text-[#444444] text-sm line-clamp-3">
                  {dump.description}
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-[#5C5C5C]">{dump.questionCount}+ Questions</span>
                  <span className="text-lg font-bold text-[#032D60]">${dump.price}</span>
                </div>
              </Link>
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

      {/* Benefits Section */}
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
            What You Get
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "Real Exam Questions",
                description: "Access to actual exam questions verified by certified professionals"
              },
              {
                title: "Detailed Explanations",
                description: "Understand why each answer is correct with comprehensive explanations"
              },
              {
                title: "Regular Updates",
                description: "Monthly updates to match the latest exam versions and changes"
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border-t-[5px] border-[#032D60]"
              >
                <h3 className="text-xl font-bold text-[#032D60] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#444444] text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
