import { Laptop, Zap, Lock } from "lucide-react";

const features = [
  {
    name: "Easy Integration",
    description: "Set up in minutes with our seamless integration process",
    icon: Laptop,
  },
  {
    name: "Lightning Fast",
    description: "Optimized performance for the smoothest user experience",
    icon: Zap,
  },
  {
    name: "Enterprise Security",
    description: "Bank-grade security to keep your data safe and protected",
    icon: Lock,
  },
];

export const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our platform provides all the tools you need to grow your business
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-fade-up"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};