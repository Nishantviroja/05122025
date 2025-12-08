interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "green" | "orange" | "purple" | "gray";
  size?: "sm" | "md" | "lg";
}

const variants = {
  blue: "bg-sf-blue-lighter/20 text-sf-blue",
  green: "bg-sf-green-light/20 text-sf-green",
  orange: "bg-sf-orange/20 text-sf-orange",
  purple: "bg-sf-purple/20 text-sf-purple",
  gray: "bg-sf-gray-200 text-sf-gray-600",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
};

export default function Badge({
  children,
  variant = "blue",
  size = "md",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </span>
  );
}

