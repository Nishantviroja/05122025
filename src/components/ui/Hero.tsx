import Link from "next/link";
import { ArrowRightIcon, BadgeIcon, UsersIcon, TrophyIcon } from "@/components/icons";

export default function Hero() {
  const stats = [
    { icon: BadgeIcon, value: "50+", label: "Certifications" },
    { icon: UsersIcon, value: "10K+", label: "Happy Users" },
    { icon: TrophyIcon, value: "98%", label: "Pass Rate" },
  ];

  return (
    <section className="relative gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-white rounded-full translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-sf-green rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Updated for 2024 Exams</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up stagger-1">
              Ace Your{" "}
              <span className="text-sf-orange">Salesforce</span>{" "}
              Certification
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up stagger-2">
              Premium exam dumps with real questions and verified answers. 
              Join thousands of professionals who passed on their first attempt.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up stagger-3">
              <Link
                href="/dumps"
                className="bg-sf-orange hover:bg-sf-coral text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2 group"
              >
                Browse Exam Dumps
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/dumps"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                View All Dumps
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-${index + 4}`}
              >
                <stat.icon className="w-8 h-8 text-sf-orange mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

