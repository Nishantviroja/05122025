import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  learn: [
    { href: "/dumps", label: "Exam Dumps" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/refund", label: "Refund Policy" },
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
              <Image
                src="/salesforceDumps.png"
                alt="Salesforce Dumps Logo"
                width={40}
                height={40}
                className="w-auto h-10"
                unoptimized
              />
              <span className="font-semibold text-white">Salesforce Dumps</span>
            </div>
            <p className="!text-white text-sm leading-relaxed font-normal">
              Premium certification exam preparation materials with real questions and verified answers.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-bold text-base uppercase tracking-wider mb-4 text-white">Learn</h3>
            <ul className="space-y-3">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="!text-white text-sm font-normal hover:!text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-base uppercase tracking-wider mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="!text-white text-sm font-normal hover:!text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-base uppercase tracking-wider mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="!text-white text-sm font-normal hover:!text-white/80 transition-colors"
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
          <p className="!text-white text-xs font-normal">
            © {new Date().getFullYear()} Salesforce Dumps. All rights reserved.
          </p>
          <p className="!text-white text-xs">
            Not affiliated with Salesforce, Inc. All trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
