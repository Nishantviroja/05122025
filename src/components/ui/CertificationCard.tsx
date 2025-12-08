import Link from "next/link";
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
  color: "blue" | "green" | "orange" | "purple";
}

const difficultyColors = {
  Beginner: "badge-green",
  Intermediate: "badge-blue",
  Advanced: "badge-orange",
  Expert: "badge-purple",
};

const cardColors = {
  blue: "border-l-sf-blue",
  green: "border-l-sf-green",
  orange: "border-l-sf-orange",
  purple: "border-l-sf-purple",
};

const iconBgColors = {
  blue: "bg-sf-blue/10 text-sf-blue",
  green: "bg-sf-green/10 text-sf-green",
  orange: "bg-sf-orange/10 text-sf-orange",
  purple: "bg-sf-purple/10 text-sf-purple",
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
  color,
}: CertificationCardProps) {
  return (
    <Link href={`/dumps/${id}`} className="block group">
      <article className={`card-featured ${cardColors[color]} h-full flex flex-col hover:-translate-y-1 transition-transform duration-300`}>
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-3">
            <div className={`w-12 h-12 rounded-xl ${iconBgColors[color]} flex items-center justify-center`}>
              <span className="font-bold text-lg">
                {title.split(" ").map(w => w[0]).join("").slice(0, 2)}
              </span>
            </div>
            {badge && (
              <span className="bg-sf-orange text-white text-xs font-bold px-2 py-1 rounded-full">
                {badge}
              </span>
            )}
          </div>
          
          <span className="text-sf-gray-500 text-xs font-semibold uppercase tracking-wider">
            {category}
          </span>
          
          <h3 className="text-lg font-bold text-sf-gray-800 mt-1 group-hover:text-sf-blue transition-colors">
            {title}
          </h3>
          
          <p className="text-sf-gray-500 text-sm mt-2 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Meta Info */}
        <div className="px-6 py-3 bg-sf-gray-100/50 border-t border-sf-gray-200 flex items-center gap-4 text-xs text-sf-gray-500">
          <div className="flex items-center gap-1">
            <QuestionIcon className="w-4 h-4" />
            <span>{questionCount} Questions</span>
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="w-4 h-4" />
            <span>{lastUpdated}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 mt-auto border-t border-sf-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`badge ${difficultyColors[difficulty]}`}>
              {difficulty}
            </span>
            <div className="flex items-center gap-1">
              <StarIcon className="w-4 h-4 text-sf-yellow" />
              <span className="text-sm font-semibold text-sf-gray-700">{rating}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {originalPrice && (
              <span className="text-sf-gray-400 line-through text-sm">${originalPrice}</span>
            )}
            <span className="text-xl font-bold text-sf-navy">${price}</span>
          </div>
        </div>

        {/* Hover CTA */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-sf-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </article>
    </Link>
  );
}

