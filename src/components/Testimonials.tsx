export const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by industry leaders
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            {
              quote: "This platform has completely transformed how we work. Highly recommended!",
              author: "Sarah Johnson",
              role: "CEO at TechCorp",
            },
            {
              quote: "The best solution we've found for our team's needs. Incredible support too.",
              author: "Michael Chen",
              role: "CTO at StartupX",
            },
            {
              quote: "We've seen a 40% increase in productivity since implementing this solution.",
              author: "Emily Rodriguez",
              role: "Operations Director",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};