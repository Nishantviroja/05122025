import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  certCount: number;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

export default function CategoryCard({
  id,
  title,
  description,
  certCount,
  icon,
  color,
  bgColor,
}: CategoryCardProps) {
  return (
    <Link href={`/certifications/${id}`} className="block group">
      <article className="bg-white border border-[#E5E5E5] rounded-xl h-full p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
        <div
          className={`w-14 h-14 rounded-2xl ${bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <div className={color}>{icon}</div>
        </div>
        
        <h3 className="text-xl font-bold text-[#222222] mb-2 group-hover:text-[#0176D3] transition-colors">
          {title}
        </h3>
        
        <p className="text-[#5C5C5C] text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-[#5C5C5C] text-sm font-medium">
            {certCount} Certifications
          </span>
          <span className="text-[#0176D3] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Explore
            <ArrowRightIcon className="w-4 h-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}
