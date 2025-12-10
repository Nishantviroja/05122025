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
      <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E5E5] h-full flex flex-col overflow-hidden">
        {/* Badge - Top Right */}
        {badge && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-[#FE9339] text-white text-xs font-bold px-3 py-1 rounded-full">
              {badge}
            </span>
          </div>
        )}

        {/* Header with Image */}
        <div className="relative p-6 pb-4">
          <div className="flex items-center gap-4 mb-4">
            {certificationIMG ? (
              <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center bg-gray-100 flex-shrink-0">
                <Image
                  src={certificationIMG}
                  alt={title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-xl bg-[#0176D3]/10 text-[#0176D3] flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-xl">
                  {title.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </span>
              </div>
            )}
            <div className="flex-1 min-w-0">
              <span className="text-[#5C5C5C] text-xs font-semibold uppercase tracking-wider block mb-1">
                {category}
              </span>
              <h3 className="text-lg font-bold text-[#032D60] group-hover:text-[#0176D3] transition-colors line-clamp-2">
                {title}
              </h3>
            </div>
          </div>
          
          <p className="text-[#444444] text-sm line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stats Section */}
        <div className="px-6 py-4 bg-[#F3F3F3] flex items-center gap-4 text-xs text-[#444444]">
          <div className="flex items-center gap-1.5">
            <QuestionIcon className="w-4 h-4 text-[#0176D3]" />
            <span className="font-medium">{questionCount}+</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ClockIcon className="w-4 h-4 text-[#0176D3]" />
            <span className="font-medium">{lastUpdated}</span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
            <StarIcon className="w-4 h-4 text-yellow-400" />
            <span className="font-semibold text-[#032D60]">{rating}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 mt-auto flex items-center justify-between border-t border-[#E5E5E5]">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              difficulty === "Beginner" ? "bg-green-100 text-green-700" :
              difficulty === "Intermediate" ? "bg-blue-100 text-blue-700" :
              difficulty === "Advanced" ? "bg-orange-100 text-orange-700" :
              "bg-purple-100 text-purple-700"
            }`}>
              {difficulty}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {originalPrice && (
              <span className="text-[#5C5C5C] line-through text-sm">${originalPrice}</span>
            )}
            <span className="text-xl font-bold text-[#032D60]">${price}</span>
          </div>
        </div>

        {/* Hover Accent Border */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0176D3] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </article>
    </Link>
  );
}

