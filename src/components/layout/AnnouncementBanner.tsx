"use client";

import Link from "next/link";

export default function AnnouncementBanner() {
  return (
    <div className="bg-[#032D60] text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-sm">
       
        <span className="hidden sm:inline">
          Latest exam dumps now available! Get instant access to updated questions and answers.
        </span>
        <span className="sm:hidden">
          Latest exam dumps available!
        </span>
        <Link 
          href="/certifications" 
          className=" underline hover:no-underline font-medium"
        >
        Explore Now →
        </Link>
      </div>
    </div>
  );
}

