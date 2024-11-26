export const Testimonials = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Unlock Your E-Commerce Potential Today
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See how our AI solutions are transforming businesses worldwide
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Boost Your SEO Efforts Effortlessly",
              description: "AI-optimized content that ranks higher",
              image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
            },
            {
              title: "Create Engaging Articles in Minutes",
              description: "Save time with AI-powered content generation",
              image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
            },
            {
              title: "User-Friendly Interface",
              description: "Intuitive design for seamless experience",
              image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};