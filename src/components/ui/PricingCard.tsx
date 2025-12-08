import Link from "next/link";
import { CheckIcon } from "@/components/icons";

interface PricingCardProps {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  popular?: boolean;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  href,
  popular,
}: PricingCardProps) {
  return (
    <article
      className={`rounded-2xl p-8 h-full flex flex-col ${
        popular
          ? "bg-sf-navy text-white shadow-2xl scale-105 border-4 border-sf-orange"
          : "bg-white border-2 border-sf-gray-200 hover:border-sf-blue"
      } transition-all duration-300`}
    >
      {/* Popular Badge */}
      {popular && (
        <span className="bg-sf-orange text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-4">
          MOST POPULAR
        </span>
      )}

      {/* Header */}
      <h3 className={`text-2xl font-bold ${popular ? "text-white" : "text-sf-gray-800"}`}>
        {name}
      </h3>
      <p className={`text-sm mt-2 ${popular ? "text-white/70" : "text-sf-gray-500"}`}>
        {description}
      </p>

      {/* Price */}
      <div className="mt-6 mb-8">
        <span className={`text-5xl font-bold ${popular ? "text-white" : "text-sf-navy"}`}>
          ${price}
        </span>
        <span className={`${popular ? "text-white/70" : "text-sf-gray-500"}`}>
          /{period}
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-3 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckIcon
              className={`w-5 h-5 flex-shrink-0 ${
                popular ? "text-sf-green-light" : "text-sf-green"
              }`}
            />
            <span className={`text-sm ${popular ? "text-white/90" : "text-sf-gray-600"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={href}
        className={`mt-8 py-4 px-6 rounded-lg font-bold text-center transition-all duration-200 ${
          popular
            ? "bg-sf-orange hover:bg-sf-coral text-white"
            : "bg-sf-navy hover:bg-sf-blue text-white"
        }`}
      >
        {cta}
      </Link>
    </article>
  );
}

