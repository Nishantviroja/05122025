import Link from "next/link";

const footerLinks = {
  learn: [
    { href: "/dumps", label: "Exam Dumps" },
    { href: "/certifications", label: "Certifications" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#032D60] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="22" viewBox="0 0 40 28" fill="#00A1E0">
                <path d="M16.6 5.6C17.9 4.1 19.8 3.2 21.8 3.2C24.6 3.2 27 4.8 28.2 7.2C29.1 6.8 30.1 6.6 31.2 6.6C35.5 6.6 39 10.1 39 14.4C39 18.7 35.5 22.2 31.2 22.2C30.7 22.2 30.2 22.1 29.7 22.1C28.6 24.1 26.5 25.4 24 25.4C23.1 25.4 22.2 25.2 21.4 24.9C20.3 26.8 18.2 28 15.8 28C13.3 28 11.1 26.6 10 24.6C9.5 24.7 8.9 24.8 8.4 24.8C4 24.8 0.5 21.3 0.5 16.9C0.5 13.4 2.7 10.4 5.8 9.3C5.6 8.6 5.4 7.8 5.4 7C5.4 3.1 8.5 0 12.4 0C14.4 0 16.2 0.9 17.4 2.3"/>
              </svg>
              <span className="font-bold text-white">Salesforce Dumps</span>
            </div>
            <p className="text-[#a8c5e2] text-sm leading-relaxed">
              Premium certification exam preparation materials with real questions and verified answers.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white">Learn</h3>
            <ul className="space-y-3">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#a8c5e2] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#a8c5e2] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#a8c5e2] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a4a7a] mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#7da8d1] text-sm">
            © {new Date().getFullYear()} Salesforce Dumps. All rights reserved.
          </p>
          <p className="text-[#7da8d1] text-xs">
            Not affiliated with Salesforce, Inc. All trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
