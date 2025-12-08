import Link from "next/link";
import { 
  ShieldIcon, 
  TrophyIcon, 
  UsersIcon, 
  CheckIcon,
  ArrowRightIcon,
  StarIcon
} from "@/components/icons";

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
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Salesforce Dumps
            </h1>
            <p className="text-xl text-white/90">
              We&apos;re on a mission to help Salesforce professionals achieve their certification goals 
              with high-quality, accurate exam preparation materials.
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
            <div className="bg-gradient-to-br from-[#0176D3] to-[#032D60] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "10K+", label: "Students Passed" },
                  { value: "50+", label: "Certifications" },
                  { value: "98%", label: "Pass Rate" },
                  { value: "3000+", label: "Questions" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-[#FE9339]">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F3F3F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#0176D3]/10 text-[#0176D3] text-sm font-semibold px-4 py-1 rounded-full mb-4">
              OUR VALUES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#032D60] mb-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0176D3]/10 flex items-center justify-center mx-auto mb-4 text-[#0176D3]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#032D60] mb-3">{value.title}</h3>
                <p className="text-[#444444]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F3F3F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#0176D3]/10 text-[#0176D3] text-sm font-semibold px-4 py-1 rounded-full mb-4">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#032D60] mb-6">
                The Salesforce Dumps Advantage
              </h2>
              <div className="space-y-4">
                {[
                  "Real exam questions verified by certified professionals",
                  "Detailed explanations for every answer",
                  "Regular updates to match latest exam versions",
                  "98% pass rate among our users",
                  "Instant access after purchase",
                  "Money-back guarantee if you don't pass",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-[#2E844A] flex-shrink-0" />
                    <span className="text-[#333333]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <StarIcon className="w-8 h-8" />, value: "4.9/5", label: "Average Rating" },
                { icon: <UsersIcon className="w-8 h-8" />, value: "10K+", label: "Happy Customers" },
                { icon: <TrophyIcon className="w-8 h-8" />, value: "98%", label: "Pass Rate" },
                { icon: <ShieldIcon className="w-8 h-8" />, value: "100%", label: "Satisfaction" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0176D3]/10 flex items-center justify-center mx-auto mb-3 text-[#0176D3]">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-[#032D60]">{stat.value}</div>
                  <div className="text-sm text-[#5C5C5C]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Certification Journey?
          </h2>
          <p className="text-white/90 mb-8">
            Join thousands of successful Salesforce professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dumps"
              className="bg-[#FE9339] hover:bg-[#E85C4A] text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Browse Exam Dumps
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
