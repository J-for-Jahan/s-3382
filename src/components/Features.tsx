import { ShoppingCart, PenTool, Layout } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    title: "Transform Your E-Commerce with AI Descriptions",
    description: "Generate compelling product descriptions that convert browsers into buyers using our advanced AI technology.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Transform Your Content Creation with Our AI-Generated Article Writing Feature",
    description: "Create engaging, SEO-optimized content in minutes with our AI-powered writing assistant.",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    title: "User-Friendly Interface for Seamless Experience",
    description: "Intuitive design meets powerful functionality for an effortless workflow.",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
];

export const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center animate-fade-up`}
            >
              <div className="lg:w-1/2 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
                <Button variant="outline" size="lg">
                  Learn More →
                </Button>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};