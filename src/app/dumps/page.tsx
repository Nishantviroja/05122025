"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { certifications } from "@/data/certifications";
import { categories } from "@/data/categories";

// Trailhead-style Trail Icon Component
function TrailIcon({ color = "#0176D3" }: { color?: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="24" fill={`${color}15`} />
      <path
        d="M24 8L28 16L36 18L30 24L32 32L24 28L16 32L18 24L12 18L20 16L24 8Z"
        fill={color}
      />
    </svg>
  );
}

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
      {/* Page Header - Trailhead Style */}
      <div className="border-b border-[#E5E5E5] bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-[#032D60] mb-2">Discover Exam Dumps</h1>
              <p className="text-[#444444]">
                Premium exam dumps that help you prepare, gain relevant skills, and pass your Salesforce certification.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C5C5C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Quick Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-[#C9C9C9] rounded text-sm text-[#333333] w-48 md:w-64 focus:outline-none focus:border-[#0176D3]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Trailhead Style */}
          <aside className="w-full lg:w-56 flex-shrink-0">
            <div className="lg:sticky lg:top-20">
              <h3 className="font-bold text-[#032D60] text-sm mb-4">Filter</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-[#444444] mb-2">Objective</label>
                  <select 
                    className="w-full px-3 py-2 border border-[#C9C9C9] rounded text-sm text-[#333333] focus:outline-none focus:border-[#0176D3]"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Select...</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.title}>{cat.title}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-[#444444] mb-2">Levels</label>
                  <select 
                    className="w-full px-3 py-2 border border-[#C9C9C9] rounded text-sm text-[#333333] focus:outline-none focus:border-[#0176D3]"
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                  >
                    <option value="">Select...</option>
                    {difficulties.map((diff) => (
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
                    className="text-[#0176D3] text-sm font-medium hover:underline"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          </aside>

          {/* Results - Trailhead Style */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#0176D3] font-semibold">{filteredCerts.length} results</span>
              <select 
                className="w-48 px-3 py-2 border border-[#C9C9C9] rounded text-sm text-[#333333] focus:outline-none focus:border-[#0176D3]"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="relevant">Sort by Most Relevant</option>
                <option value="rating">Sort by Rating</option>
                <option value="price-low">Sort by Price: Low to High</option>
                <option value="price-high">Sort by Price: High to Low</option>
              </select>
            </div>

            {/* Trail Cards - Exact Trailhead Style */}
            {filteredCerts.length > 0 ? (
              <div className="space-y-4">
                {filteredCerts.map((dump) => (
                  <Link
                    key={dump.id}
                    href={`/${dump.id}`}
                    className="flex items-start gap-4 p-4 border border-[#E5E5E5] rounded-lg hover:shadow-md transition-shadow bg-white group"
                  >
                    {/* Certification Image */}
                    <div className="flex-shrink-0">
                      {dump.certificationIMG ? (
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                          <Image
                            src={dump.certificationIMG}
                            alt={dump.title}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain"
                            unoptimized
                          />
                        </div>
                      ) : (
                        <TrailIcon color="#0176D3" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-[#5C5C5C] uppercase tracking-wider mb-1">
                        Exam Dump
                      </div>
                      <h3 className="font-semibold text-[#0176D3] group-hover:underline mb-1">
                        {dump.title}
                      </h3>
                      <p className="text-sm text-[#444444] line-clamp-2 mb-3">
                        {dump.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-[#5C5C5C]">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                          </svg>
                          +{dump.questionCount} Questions
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 6v6l4 2"/>
                          </svg>
                          ~2 hrs study
                        </span>
                      </div>
                    </div>

                    {/* Price & Actions */}
                    <div className="flex-shrink-0 text-right">
                      <div className="text-lg font-bold text-[#032D60]">${dump.price}</div>
                      {dump.originalPrice && (
                        <div className="text-xs text-[#5C5C5C] line-through">${dump.originalPrice}</div>
                      )}
                      <div 
                        className="mt-2 p-2 border border-[#C9C9C9] rounded hover:bg-[#F3F3F3] transition-colors inline-block"
                        aria-label="Add to favorites"
                      >
                        <svg className="w-4 h-4 text-[#5C5C5C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 border border-[#E5E5E5] rounded-lg">
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
      </div>
    </div>
  );
}
