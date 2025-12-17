import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldIcon, 
  TrophyIcon, 
  UsersIcon, 
  StarIcon
} from "@/components/icons";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://salesforcedumps.com';

export const metadata: Metadata = {
  title: "About Us - Salesforce Dumps",
  description: "Learn about Salesforce Dumps - built by certified professionals to help Salesforce professionals achieve their certification goals. Over 10,000 professionals passed with our materials.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About Us - Salesforce Dumps",
    description: "Learn about Salesforce Dumps - built by certified professionals to help Salesforce professionals achieve their certification goals.",
    url: `${baseUrl}/about`,
    type: 'website',
    images: [SEO_CONFIG.defaultImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Us - Salesforce Dumps",
    description: "Learn about Salesforce Dumps - built by certified professionals to help Salesforce professionals achieve their certification goals.",
  },
  alternates: {
    canonical: `${baseUrl}/about`,
  },
};

const values = [
  {
    icon: <ShieldIcon className="w-8 h-8" />,
    title: "Quality First",
    description: "We verify every question with certified professionals to ensure accuracy and relevance to current exams.",
  },
  {
    icon: <TrophyIcon className="w-8 h-8" />,
    title: "Success Driven",
    description: "Our 98% pass rate speaks for itself. We're committed to helping you succeed on your first attempt.",
  },
  {
    icon: <UsersIcon className="w-8 h-8" />,
    title: "Community Focused",
    description: "Join thousands of Salesforce professionals who trust us for their certification journey.",
  },
];

const milestones = [
  { year: "2020", event: "Founded with a mission to democratize Salesforce certification" },
  { year: "2021", event: "Reached 1,000+ successful candidates" },
  { year: "2022", event: "Expanded to cover all major Salesforce certifications" },
  { year: "2023", event: "10,000+ professionals passed with our materials" },
  { year: "2024", event: "Launched updated content with AI-powered study guides" },
  { year: "2025", event: "Continuing to innovate and support Salesforce professionals worldwide" },
];

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SEO_CONFIG.siteName,
    "url": SEO_CONFIG.siteUrl,
    "logo": SEO_CONFIG.defaultImage,
    "description": SEO_CONFIG.defaultDescription,
    "foundingDate": "2020",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10-50"
    },
    "sameAs": []
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-12 pb-48 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhIkvJ6PMfQw6og0NmzqWV1cLUEjqPsdv0vEW_jpI1lsYqrzSfT9kUtQfncb680FIc6ISDOoIttWsXdR7kktBqC7SPWBpZjQ2fldnCz2WB0OQHwbHHryzSXXcz3kEWuiQS3_hQjG5Duyw78HSvHRHXVdr2304fqmqy8JrdaBmCH8TdLM81wvOBH978BblX0=s16000"
            alt="About Background"
            className="w-full h-full object-cover object-bottom"
            style={{ display: 'block' }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Salesforce Dumps
            </h1>
            <p className="text-white/90">
              We&apos;re on a mission to help Salesforce professionals achieve their certification goals
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#0176D3]/10 text-[#0176D3] text-sm font-semibold px-4 py-1 rounded-full mb-4">
                OUR STORY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#032D60] mb-6">
                Built by Certified Professionals, For Professionals
              </h2>
              <div className="space-y-4 text-[#444444]">
                <p>
                  We started Salesforce Dumps after experiencing firsthand the challenges of preparing 
                  for Salesforce certifications. The official study materials were helpful, but we knew 
                  there had to be a better way to practice with real exam questions.
                </p>
                <p>
                  Our team consists of Salesforce certified professionals with years of experience in 
                  administration, development, architecture, and consulting. We understand what it takes 
                  to pass these exams because we&apos;ve done it ourselves - multiple times.
                </p>
                <p>
                  Today, we&apos;re proud to have helped over 10,000 professionals achieve their certification 
                  goals. Our dumps are constantly updated to reflect the latest exam changes, ensuring 
                  you always have access to relevant and accurate study materials.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: "10K+", label: "Students Passed" },
                { value: "50+", label: "Certifications" },
                { value: "98%", label: "Pass Rate" },
                { value: "3000+", label: "Questions" },
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-5xl font-bold text-[#0176D3] mb-2">{stat.value}</div>
                  <div className="text-[#444444] text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#EEF4FF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#032D60] mb-4">
            What We Stand For
          </h2>
          <p className="text-xl text-[#032D60] mb-12">
            Our core values that drive everything we do:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-sm border-t-[5px] border-[#032D60]">
                <h3 className="text-xl font-bold text-[#032D60] mb-3">{value.title}</h3>
                <p className="text-[#444444]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 bg-white min-h-[70vh]">
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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 3 }}>
          <div className="text-center mb-12">
            <span className="inline-block bg-[#0176D3]/10 text-[#0176D3] text-sm font-semibold px-4 py-1 rounded-full mb-4">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#032D60] mb-4">
              Milestones
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#E5E5E5]" />
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E5E5E5]">
                    <div className="text-[#0176D3] font-bold text-lg mb-1">{milestone.year}</div>
                    <p className="text-[#444444]">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0176D3] rounded-full border-4 border-white shadow" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
