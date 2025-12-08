import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  StarIcon, 
  QuestionIcon, 
  ClockIcon, 
  CheckIcon, 
  DownloadIcon,
  ShieldIcon,
  ArrowRightIcon
} from "@/components/icons";
import { certifications } from "@/data/certifications";

interface DumpDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return certifications.map((cert) => ({
    id: cert.id,
  }));
}

export default async function DumpDetailPage({ params }: DumpDetailPageProps) {
  const { id } = await params;
  const certification = certifications.find((c) => c.id === id);

  if (!certification) {
    notFound();
  }

  const relatedCerts = certifications
    .filter((c) => c.category === certification.category && c.id !== certification.id)
    .slice(0, 3);

  const features = [
    `${certification.questionCount}+ real exam questions`,
    "Verified answers with detailed explanations",
    "Updated for the latest exam version",
    "PDF download + online access",
    "90-day access period",
    "Free updates during access",
    "Money-back guarantee",
  ];

  const examTopics = [
    { name: "Configuration & Setup", percentage: 20 },
    { name: "Object Manager & Lightning App Builder", percentage: 20 },
    { name: "Sales & Marketing Applications", percentage: 12 },
    { name: "Service & Support Applications", percentage: 11 },
    { name: "Productivity & Collaboration", percentage: 7 },
    { name: "Data & Analytics Management", percentage: 14 },
    { name: "Workflow/Process Automation", percentage: 16 },
  ];

  return (
    <div className="min-h-screen bg-sf-gray-100">
      {/* Header */}
      <section className="gradient-hero py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-white/70 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/dumps" className="hover:text-white">Dumps</Link>
            <span>/</span>
            <span className="text-white">{certification.title}</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-3 py-1 rounded-full mb-3">
                {certification.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {certification.title}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(certification.rating) ? "text-sf-yellow" : "text-white/30"}`}
                  />
                ))}
                <span className="text-white ml-2">{certification.rating}/5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-sf-navy mb-4">
                  About This Dump
                </h2>
                <p className="text-sf-gray-600 mb-6">
                  {certification.description}
                </p>
                <p className="text-sf-gray-600">
                  This comprehensive exam dump includes {certification.questionCount}+ real questions 
                  from the actual Salesforce {certification.title} certification exam. Each question 
                  comes with a detailed explanation to help you understand the concepts, not just 
                  memorize the answers.
                </p>
              </div>

              {/* What's Included */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-sf-navy mb-6">
                  What&apos;s Included
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-sf-green flex-shrink-0 mt-0.5" />
                      <span className="text-sf-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exam Topics */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-sf-navy mb-6">
                  Exam Topics Covered
                </h2>
                <div className="space-y-4">
                  {examTopics.map((topic) => (
                    <div key={topic.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-sf-gray-700 font-medium">{topic.name}</span>
                        <span className="text-sf-gray-500">{topic.percentage}%</span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${topic.percentage * 3}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Questions Preview */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-sf-navy mb-6">
                  Sample Questions
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-sf-blue pl-4">
                    <p className="font-medium text-sf-gray-800 mb-2">
                      Q: What is the maximum number of workflow rules that can be evaluated 
                      when a record is created or updated?
                    </p>
                    <p className="text-sf-gray-600 text-sm">
                      A: Up to 50 workflow rules can be evaluated per object when a record 
                      is created or updated.
                    </p>
                  </div>
                  <div className="border-l-4 border-sf-blue pl-4">
                    <p className="font-medium text-sf-gray-800 mb-2">
                      Q: Which feature would you use to automatically send an email when 
                      an opportunity is closed won?
                    </p>
                    <p className="text-sf-gray-600 text-sm">
                      A: Workflow Rule with Email Alert action, or Process Builder with 
                      Send Email action.
                    </p>
                  </div>
                  <p className="text-sf-gray-500 text-sm italic">
                    ... and {certification.questionCount - 2} more questions included in the full dump
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                {/* Price */}
                <div className="text-center pb-6 border-b border-sf-gray-200">
                  {certification.originalPrice && (
                    <span className="text-sf-gray-400 line-through text-xl">
                      ${certification.originalPrice}
                    </span>
                  )}
                  <div className="text-4xl font-bold text-sf-navy">
                    ${certification.price}
                  </div>
                  <span className="text-sf-gray-500 text-sm">one-time payment</span>
                </div>

                {/* Stats */}
                <div className="py-6 border-b border-sf-gray-200 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-sf-gray-600 flex items-center gap-2">
                      <QuestionIcon className="w-4 h-4" />
                      Questions
                    </span>
                    <span className="font-semibold text-sf-navy">{certification.questionCount}+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-sf-gray-600 flex items-center gap-2">
                      <ClockIcon className="w-4 h-4" />
                      Last Updated
                    </span>
                    <span className="font-semibold text-sf-navy">{certification.lastUpdated}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-sf-gray-600 flex items-center gap-2">
                      <StarIcon className="w-4 h-4" />
                      Rating
                    </span>
                    <span className="font-semibold text-sf-navy">{certification.rating}/5</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-sf-gray-600">Difficulty</span>
                    <span className={`badge ${
                      certification.difficulty === "Beginner" ? "badge-green" :
                      certification.difficulty === "Intermediate" ? "badge-blue" :
                      certification.difficulty === "Advanced" ? "badge-orange" :
                      "badge-purple"
                    }`}>
                      {certification.difficulty}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 space-y-3">
                  <button className="w-full btn-accent py-4 flex items-center justify-center gap-2">
                    <DownloadIcon className="w-5 h-5" />
                    Buy Now - ${certification.price}
                  </button>
                  <Link
                    href="/pricing"
                    className="w-full btn-secondary py-3 flex items-center justify-center"
                  >
                    View Bundle Deals
                  </Link>
                </div>

                {/* Guarantee */}
                <div className="mt-6 p-4 bg-sf-green/10 rounded-xl flex items-start gap-3">
                  <ShieldIcon className="w-6 h-6 text-sf-green flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sf-navy text-sm">
                      Money-Back Guarantee
                    </div>
                    <p className="text-sf-gray-600 text-xs mt-1">
                      Full refund if you don&apos;t pass after using our dumps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Dumps */}
      {relatedCerts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-sf-navy">
                Related Certifications
              </h2>
              <Link
                href="/dumps"
                className="text-sf-blue font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              >
                View All
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedCerts.map((cert) => (
                <Link
                  key={cert.id}
                  href={`/dumps/${cert.id}`}
                  className="block bg-sf-gray-100 rounded-xl p-6 hover:bg-sf-gray-200 transition-colors"
                >
                  <span className="text-xs text-sf-gray-500 font-semibold uppercase">
                    {cert.category}
                  </span>
                  <h3 className="text-lg font-bold text-sf-navy mt-1 mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sf-blue font-bold">${cert.price}</span>
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4 text-sf-yellow" />
                      <span className="text-sm text-sf-gray-600">{cert.rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

