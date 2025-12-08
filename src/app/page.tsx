"use client";

import { useState } from "react";
import Link from "next/link";
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

            {/* Right - Illustration */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                {/* Badge Circle */}
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#032D60] to-[#0176D3] flex items-center justify-center relative overflow-hidden">
                  {/* Cloud decorations */}
                  <div className="absolute top-8 left-8 w-8 h-6 bg-white/20 rounded-full"></div>
                  <div className="absolute top-16 right-12 w-6 h-4 bg-white/20 rounded-full"></div>
                  
                  {/* Success Badge */}
                  <div className="bg-[#2E844A] text-white px-8 py-4 rounded-lg text-center transform -rotate-3">
                    <div className="text-2xl font-bold tracking-wider">SUCCESS</div>
                    <div className="text-sm mt-1">Guaranteed</div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-12 left-1/4 w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-white/40 rounded-full"></div>
                </div>
                
                {/* Character illustration placeholder */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#E5E5E5] to-[#C9C9C9] rounded-full flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
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
                href={`/dumps/${dump.id}`}
                className="bg-white rounded-xl border border-[#E5E5E5] p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CertificationIcon color={
                    dump.color === "blue" ? "#0176D3" :
                    dump.color === "green" ? "#2E844A" :
                    dump.color === "orange" ? "#FE9339" :
                    "#9050E9"
                  } />
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
      <section className="bg-[#F3F3F3] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#032D60] mb-8 text-center">
            What You Get
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
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
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
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

      {/* CTA Section */}
      <section className="gradient-hero py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Certified?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Join thousands of professionals who passed with our exam dumps.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/dumps"
              className="inline-flex items-center px-8 py-3 bg-[#FE9339] text-white font-semibold rounded hover:bg-[#E85C4A] transition-colors"
            >
              Browse Exam Dumps
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded hover:bg-white/20 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
