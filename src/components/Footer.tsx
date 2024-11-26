export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transform Your E-Commerce Experience
          </h2>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-black text-white hover:bg-black/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Security", "Roadmap"],
            },
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Press"],
            },
            {
              title: "Resources",
              links: ["Documentation", "Help", "Guides", "API Status"],
            },
            {
              title: "Legal",
              links: ["Privacy", "Terms", "License", "Cookie Policy"],
            },
            {
              title: "Company Info",
              links: ["Contact Us", "Partners", "Reviews", "News"],
            },
            {
              title: "Follow Us",
              links: ["Twitter", "LinkedIn", "Facebook", "Instagram"],
            },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-100 pt-8">
          <p className="text-base text-gray-500 text-center">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};