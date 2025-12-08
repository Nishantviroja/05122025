"use client";

import { useState } from "react";
import { SearchIcon, FilterIcon } from "@/components/icons";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  showFilters?: boolean;
}

export default function SearchBar({
  placeholder = "Search certifications...",
  onSearch,
  showFilters = false,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex items-center gap-2">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sf-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full py-4 pl-12 pr-4 bg-white border-2 border-sf-gray-200 rounded-xl text-sf-gray-800 placeholder-sf-gray-400 focus:outline-none focus:border-sf-blue focus:ring-2 focus:ring-sf-blue/20 transition-all duration-200"
          />
        </div>
        
        {showFilters && (
          <button
            type="button"
            className="p-4 bg-white border-2 border-sf-gray-200 rounded-xl text-sf-gray-600 hover:border-sf-blue hover:text-sf-blue transition-colors"
          >
            <FilterIcon className="w-5 h-5" />
          </button>
        )}
        
        <button
          type="submit"
          className="py-4 px-6 bg-sf-blue hover:bg-sf-blue-light text-white font-semibold rounded-xl transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}

