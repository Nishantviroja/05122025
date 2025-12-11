import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, QuestionIcon, ClockIcon, StarIcon } from "@/components/icons";

export interface CertificationCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  questionCount: number;
  lastUpdated: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  rating: number;
  price: number;
  originalPrice?: number;
  badge?: string;
  certificationIMG?: string;
  language?: string;
  certificationPrice?: string;
  aboutCertification?: string;
  examDetails?: string;
  resources?: string;
  scheduleExamUrl?: string;
}

const difficultyColors = {
  Beginner: "badge-green",
  Intermediate: "badge-blue",
  Advanced: "badge-orange",
  Expert: "badge-purple",
};

export default function CertificationCard({
  id,
  title,
  category,
  description,
  questionCount,
  lastUpdated,
  difficulty,
  rating,
  price,
  originalPrice,
  badge,
  certificationIMG,
}: CertificationCardProps) {
  return (
    <Link href={`/${id}`} className="block group">
      <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] h-full flex flex-col overflow-hidden relative">
        {/* Badge - Simple Design with Fading Dot */}
        {badge && (
          <div className="absolute top-4 right-4 z-20">
            <div className="flex items-center gap-1.5 bg-[#0176D3] text-white text-[12px]  font-medium px-2.5 py-0.5 rounded-full">
              {/* Fading dot */}
              <span className="text-center">{badge}</span>
            </div>
          </div>
        )}

        {/* Header Section - Centered Layout */}
        <div className="p-6 pb-4">
          <div className="flex flex-col items-center text-center">
            {/* Logo in Center - Larger, No Background */}
            {certificationIMG ? (
              <div className="w-32 h-32 mb-4 flex items-center justify-center flex-shrink-0">
                <Image
                  src={certificationIMG}
                  alt={title}
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
            ) : (
              <div className="w-32 h-32 mb-4 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/salesforceDumps.png"
                  alt={title}
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
            )}
            
            {/* Title - Centered */}
            <h3 className="text-lg font-bold text-[#032D60] group-hover:text-[#0176D3] transition-colors line-clamp-2 mb-2 leading-tight">
              {title}
            </h3>
            
            {/* Category - Centered */}
            <span className="text-[#5C5C5C] text-xs font-semibold uppercase tracking-wider mb-2">
              {category}
            </span>
            
            {/* Question Number - Centered, No Background */}
            <div className="flex items-center gap-1.5 justify-center">
              <QuestionIcon className="w-4 h-4 text-[#0176D3]" />
              <span className="font-medium text-[#032D60] text-sm">{questionCount}+ Latest Questions</span>
            </div>
          </div>
        </div>

        {/* Description Section - Centered */}
        <div className="p-6 pt-0 pb-4">
          <p className="text-[#444444] text-sm leading-relaxed line-clamp-3 text-center">
            {description}
          </p>
        </div>

        {/* Pricing Section - Prominent */}
        <div className="p-6 pt-5 mt-auto bg-white border-t-2 border-[#E5E5E5]">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-3">
              {originalPrice && (
                <span className="text-[#9CA3AF] line-through text-lg font-medium">${originalPrice}</span>
              )}
              <span className="text-3xl font-bold bg-gradient-to-r from-[#0176D3] to-[#014486] bg-clip-text text-transparent">
                ${price}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#0176D3] group-hover:gap-2 transition-all">
              <span className="text-sm font-semibold">View Details</span>
              <ArrowRightIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

