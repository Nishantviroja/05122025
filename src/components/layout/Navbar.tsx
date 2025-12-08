"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dumps", label: "Exam Dumps" },
  { href: "/certifications", label: "Certifications" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6 5.6C17.9 4.1 19.8 3.2 21.8 3.2C24.6 3.2 27 4.8 28.2 7.2C29.1 6.8 30.1 6.6 31.2 6.6C35.5 6.6 39 10.1 39 14.4C39 18.7 35.5 22.2 31.2 22.2C30.7 22.2 30.2 22.1 29.7 22.1C28.6 24.1 26.5 25.4 24 25.4C23.1 25.4 22.2 25.2 21.4 24.9C20.3 26.8 18.2 28 15.8 28C13.3 28 11.1 26.6 10 24.6C9.5 24.7 8.9 24.8 8.4 24.8C4 24.8 0.5 21.3 0.5 16.9C0.5 13.4 2.7 10.4 5.8 9.3C5.6 8.6 5.4 7.8 5.4 7C5.4 3.1 8.5 0 12.4 0C14.4 0 16.2 0.9 17.4 2.3" fill="#00A1E0"/>
            </svg>
            <span className="text-th-blue font-bold text-xl">Salesforce Dumps</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-th-blue font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-th-blue hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
