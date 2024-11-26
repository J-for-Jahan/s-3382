import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Transform Your E-Commerce
            <span className="block">with AI Solutions</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-8">
            Utilize the latest AI technology to revolutionize your product listings and boost your online sales with our cutting-edge e-commerce solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-black text-white hover:bg-black/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="AI-powered e-commerce platform"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </div>
    </div>
  );
};