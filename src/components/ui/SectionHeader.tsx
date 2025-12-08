interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  badge?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  badge,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block bg-[#0176D3]/10 text-[#0176D3] text-sm font-semibold px-4 py-1 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[#032D60] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[#5C5C5C] text-lg ${centered ? "max-w-2xl mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
