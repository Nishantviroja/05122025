"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { certifications } from "@/data/certifications";
import { categories } from "@/data/categories";
import CertificationCard from "@/components/ui/CertificationCard";

const difficulties = ["All Levels", "Beginner", "Intermediate", "Advanced", "Expert"];

export default function DumpsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [sortBy, setSortBy] = useState("relevant");

  const filteredCerts = useMemo(() => {
    let result = [...certifications];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (cert) =>
          cert.title.toLowerCase().includes(query) ||
          cert.category.toLowerCase().includes(query) ||
          cert.description.toLowerCase().includes(query)
      );
    }

    if (selectedCategory) {
      result = result.filter((cert) => cert.category === selectedCategory);
    }

    if (selectedDifficulty && selectedDifficulty !== "All Levels") {
      result = result.filter((cert) => cert.difficulty === selectedDifficulty);
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy]);

  return (
    <div className="bg-white min-h-screen">
      {/* Section 1: Hero Section with Background Image */}
      <section className="relative pt-10  overflow-hidden ">
        
          {/* Content - Centered */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Centered Content */}
              <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-4xl font-bold text-[#032D60] mb-6">
                  Clear Certifications with Our Exam Dumps
                </h1>
                <p className="text-[#444444]">
                  Prepare for your Salesforce certification exams with our comprehensive collection of real exam questions and verified answers. Boost your confidence, enhance your skills, and pass your certification on the first attempt with our up-to-date exam dumps covering all Salesforce certifications including Admin, Developer, Architect, and more.
                </p>
              </div>
            </div>
          </div>
        {/* Full Width Background Image - Cropped from Top */}
        <div className="w-full overflow-hidden mt-[-20%]" >
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEgbs439mJ5bEce-8u670UmpSAPF1ckPpBbdMsS-Qwd2wPlFfbrUt0rjcEpWpAy2d3gxY0EDRSHUMgOh7xMgdVik-Ia2qipWH-Mawt9XAg5_0-s32SfJ5DkqZVBpCQAhUUg1q5UHuqAW-31Dn6AWDCQxveiSachqCVsXn7WskLlX-Bbhk4ysMojomoYgFoXI=s16000"
            alt="Background"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center bottom', marginTop: '0%' }}
          />
        </div>
      </section>

    

        {/* Main Content with Background */}
        <section className="relative bg-[#FFFFFF] py-16 pt-10 min-h-[50vh] overflow-hidden">
          {/* Content - Front Layer */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 2 }}>
            {/* Results Header with Filters in Same Line */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              {/* Results Count */}
              <span className="text-[#0176D3] font-semibold">{filteredCerts.length} results</span>
              
              {/* Filters in Same Line */}
              <div className="flex flex-wrap items-end gap-4">
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-xs text-[#444444] mb-1.5 font-medium">Search</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C5C5C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search dumps..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-[#C9C9C9] rounded text-sm text-[#333333] bg-white focus:outline-none focus:border-[#0176D3]"
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-[180px]">
                  <label className="block text-xs text-[#444444] mb-1.5 font-medium">Objective</label>
                  <select 
                    className="w-full px-3 py-2 border border-[#C9C9C9] rounded text-sm text-[#333333] bg-white focus:outline-none focus:border-[#0176D3]"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.title}>{cat.title}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex-1 min-w-[150px]">
                  <label className="block text-xs text-[#444444] mb-1.5 font-medium">Levels</label>
                  <select 
                    className="w-full px-3 py-2 border border-[#C9C9C9] rounded text-sm text-[#333333] bg-white focus:outline-none focus:border-[#0176D3]"
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                  >
                    <option value="">All Levels</option>
                    {difficulties.filter(d => d !== "All Levels").map((diff) => (
                      <option key={diff} value={diff}>{diff}</option>
                    ))}
                  </select>
                </div>

                {(selectedCategory || selectedDifficulty || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedCategory("");
                      setSelectedDifficulty("");
                      setSearchQuery("");
                    }}
                    className="px-4 py-2 text-[#0176D3] text-sm font-medium border border-[#0176D3] rounded hover:bg-[#0176D3] hover:text-white transition-colors whitespace-nowrap"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>

            {/* Results Section */}
            <div>

              {/* Certification Cards Grid */}
              {filteredCerts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCerts.map((dump) => (
                  <CertificationCard
                    key={dump.id}
                    id={dump.id}
                    title={dump.title}
                    category={dump.category}
                    description={dump.description}
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
                  ) : (
                    <div className="text-center py-16 border border-[#E5E5E5] rounded-lg bg-white/80 backdrop-blur-sm">
                      <svg className="w-16 h-16 mx-auto text-[#C9C9C9] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      </svg>
                      <h3 className="text-lg font-semibold text-[#032D60] mb-2">No results found</h3>
                      <p className="text-[#5C5C5C] mb-4">Try adjusting your search or filter criteria</p>
                      <button
                        onClick={() => {
                          setSelectedCategory("");
                          setSelectedDifficulty("");
                          setSearchQuery("");
                        }}
                        className="text-[#0176D3] font-medium hover:underline"
                      >
                        Clear all filters
                      </button>
                </div>
              )}
            </div>
          </div>
        </section>
    </div>
  );
}
