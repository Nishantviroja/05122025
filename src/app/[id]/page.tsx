import Link from "next/link";
import Image from "next/image";
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
import BuyButton from "@/components/ui/BuyButton";

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
    "100% Verified answers",
    "Updated for the latest exam version",
    "Lifetime access",
    "Money-back guarantee",
    "20% discount on 2nd purchase"
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
      <section className="relative bg-[#FFFFFF] py-8 md:py-12 min-h-[280px] md:min-h-[330px]">
        {/* Gradient Overlay - Back Layer */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, background: 'linear-gradient(180deg, #fff 29.72%, #c6e9ff 100%)' }}></div>

        {/* Content - Flex Layout */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 3 }}>
          
          
          {/* Flex Container - Mobile: Column, Desktop: Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            {/* Left Side - Certification Info */}
            <div className="flex-1 order-2 md:order-1">
              <span className="inline-block border-2 border-[#0176D3] text-[#0176D3] text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full mb-2 md:mb-3">
                {certification.category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#032D60] mb-2 md:mb-3 leading-tight">
                {certification.title} Dumps
              </h1>
               {/* Description */}
               {certification.description && (
                <p className="text-[#444444] text-sm sm:text-base mb-2 md:mb-6 leading-relaxed">
                  {certification.description}
                </p>
              )}
              <div className="flex items-center gap-1 mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-4 h-4 sm:w-7 sm:h-7 text-yellow-400`}
                  />
                ))}
                <span className="text-[#032D60] ml-2 font-medium text-xs">{certification.rating}/5</span>
              </div>
              
             

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <BuyButton
                  certificationTitle={certification.title}
                  price={certification.price}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0176D3] text-white font-medium rounded hover:bg-[#014486] transition-colors cursor-pointer"
                >
                  Buy Dumps at ${certification.price}
                </BuyButton>
                {certification.scheduleExamUrl ? (
                  <a
                    href={certification.scheduleExamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0176D3] text-[#0176D3] font-medium rounded hover:bg-[#0176D3]/5 transition-colors cursor-pointer"
                  >
                    Schedule Exam
                  </a>
                ) : (
                  <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0176D3] text-[#0176D3] font-medium rounded hover:bg-[#0176D3]/5 transition-colors cursor-pointer">
                    Schedule Exam
                  </button>
                )}
              </div>
            </div>

            {/* Right Side - Certification Image (Mobile: Top, Desktop: Right) */}
            {certification.certificationIMG && (
              <div className="flex-shrink-0 order-1 md:order-2 flex justify-center md:justify-end">
                <img
                  src={certification.certificationIMG}
                  alt={certification.title}
                  className="w-auto object-contain"
                  style={{ display: 'block', maxHeight: '200px', maxWidth: '100%' }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* What's Included */}
              <div className="bg-white rounded-2xl shadow-sm transition-shadow p-6 border border-[#E5E5E5]">
                <h2 className="text-2xl font-bold text-[#032D60] mb-6">
                  What&apos;s Included
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-[#0176D3] flex-shrink-0 mt-0.5" />
                      <span className="text-[#444444]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Combined Card: About This Certification, Exam Details, and Resources */}
              <div className="bg-white rounded-2xl shadow-sm  transition-shadow p-6 border border-[#E5E5E5]">
                {/* About This Certification */}
                {certification.aboutCertification && (
                  <div className="mb-4">
                    <h2 className="text-xl font-bold text-[#032D60] mb-2">
                      About This Certification
                    </h2>
                    <p className="text-[#444444] leading-relaxed">
                      {certification.aboutCertification}
                    </p>
                  </div>
                )}

                {/* Exam Details */}
                {certification.examDetails && (
                  <div className="mb-4">
                    <h2 className="text-xl font-bold text-[#032D60] mb-2">
                      Exam Details
                    </h2>
                    <div 
                      className="exam-content text-[#444444] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: certification.examDetails }}
                    />
                  </div>
                )}

                {/* Resources */}
                {certification.resources && (
                  <div>
                    <h2 className="text-xl font-bold text-[#032D60] mb-2">
                      Resources
                    </h2>
                    <div 
                      className="exam-content text-[#444444] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: certification.resources }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm transition-shadow p-6 sticky top-24 border border-[#E5E5E5]">
                {/* Price - Unique Design */}
                
                    {/* Decorative Background Pattern */}
                    
                    {/* Content */}
                    <div className="relative z-10 text-center border-b border-[#E5E5E5]">
                      {/* Prices Side by Side */}
                      <div className="flex items-baseline justify-center gap-3 mb-3 ">
                        {certification.originalPrice && (
                          <span className="text-xl font-semibold text-[#5C5C5C] line-through">
                            ${certification.originalPrice}
                          </span>
                        )}
                        <span className="text-5xl font-bold bg-gradient-to-r from-[#0176D3] to-[#014486] bg-clip-text text-transparent">
                          ${certification.price}
                        </span>
                        
                      </div>
                      
                      {/* Payment Text */}
                      <div className="text-[#5C5C5C] text-sm font-medium mb-4">
                        one-time payment
                      </div>
                      
                      
                    </div>
                  

                {/* Stats - Single Card with Glass Effect */}
                <div className="py-6 px-2">
                 
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[#444444] text-sm font-medium">Difficulty</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          certification.difficulty === "Beginner" ? "bg-green-100 text-green-700" :
                          certification.difficulty === "Intermediate" ? "bg-blue-100 text-blue-700" :
                          certification.difficulty === "Advanced" ? "bg-orange-100 text-orange-700" :
                          "bg-purple-100 text-purple-700"
                        }`}>
                          {certification.difficulty}
                        </span>
                      </div>
                      {certification.language && (
                        <div className="flex items-center justify-between">
                          <span className="text-[#444444] text-sm font-medium">Language</span>
                          <span className="font-medium text-[#032D60] text-sm">{certification.language}</span>
                        </div>
                      )}
                      {certification.certificationPrice && (
                        <div className="flex items-center justify-between">
                          <span className="text-[#444444] text-sm font-medium">Certification Price</span>
                          <span className="font-medium text-[#032D60] text-sm">{certification.certificationPrice}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-[#444444] text-sm font-medium">Questions</span>
                        <span className="font-medium text-[#032D60] text-sm">{certification.questionCount}+</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#444444] text-sm font-medium">Last Updated</span>
                        <span className="font-medium text-[#032D60] text-sm">
                          {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#444444] text-sm font-medium">Rating</span>
                        <span className="font-medium text-[#032D60] text-sm">{certification.rating}/5</span>
                      </div>
                    </div>
                  
                </div>

                {/* Guarantee - Unique Design */}
                <div className="relative overflow-hidden rounded-xl border border-[#E5E5E5]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] via-[#C8E6C9] to-[#A5D6A7]"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -mr-10 -mt-10"></div>
                  <div className="relative p-4 flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ShieldIcon className="w-6 h-6 text-[#2E7D32]" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-[#032D60] text-sm mb-1">
                        Money-Back Guarantee
                      </div>
                      <p className="text-[#444444] font-normal text-xs leading-relaxed">
                        Full refund if you don&apos;t pass after using our dumps
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA - Unique Design */}
                <div className="pt-6">
                  <BuyButton
                    certificationTitle={certification.title}
                    price={certification.price}
                    className="w-full cursor-pointer inline-flex items-center justify-center px-6 py-3 bg-[#0176D3] text-white font-medium rounded hover:bg-[#014486] transition-colors"
                  >
                    <span>Buy Now - ${certification.price}</span>
                  </BuyButton>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Dumps */}
      {relatedCerts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#032D60]">
                Related Certifications
              </h2>
              <Link
                href="/dumps"
                className="text-[#0176D3] font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              >
                View All
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedCerts.map((cert) => (
                <Link
                  key={cert.id}
                  href={`/${cert.id}`}
                  className="block bg-white rounded-xl border border-[#E5E5E5] p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {cert.certificationIMG && (
                      <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 flex-shrink-0">
                        <Image
                          src={cert.certificationIMG}
                          alt={cert.title}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                          unoptimized
                        />
                      </div>
                    )}
                    <span className="text-sm text-[#5C5C5C]">Exam Dump</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0176D3] group-hover:underline mb-3">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#5C5C5C]">{cert.questionCount}+ Questions</span>
                    <span className="text-lg font-bold text-[#032D60]">${cert.price}</span>
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

