import { StarIcon } from "@/components/icons";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  certification: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  avatar,
  certification,
}: TestimonialCardProps) {
  return (
    <article className="card p-6 h-full flex flex-col">
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-sf-yellow" : "text-sf-gray-300"}`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-sf-gray-600 flex-1 mb-6 italic">
        &ldquo;{content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-sf-gray-200">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sf-blue to-sf-blue-light flex items-center justify-center text-white font-bold text-lg">
          {avatar}
        </div>
        <div className="flex-1">
          <div className="font-bold text-sf-gray-800">{name}</div>
          <div className="text-sf-gray-500 text-sm">{role} at {company}</div>
        </div>
      </div>

      {/* Badge */}
      <div className="mt-4 pt-4 border-t border-sf-gray-200">
        <span className="badge badge-green">
          ✓ Passed: {certification}
        </span>
      </div>
    </article>
  );
}

