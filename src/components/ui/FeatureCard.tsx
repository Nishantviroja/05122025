interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="text-center p-6 rounded-2xl hover:bg-sf-gray-100 transition-colors duration-300 group">
      <div className="w-16 h-16 rounded-2xl bg-sf-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-sf-blue/20 group-hover:scale-110 transition-all duration-300">
        <div className="text-sf-blue">{icon}</div>
      </div>
      <h3 className="text-lg font-bold text-sf-gray-800 mb-2">{title}</h3>
      <p className="text-sf-gray-500 text-sm">{description}</p>
    </article>
  );
}

