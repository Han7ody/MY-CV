import { useState } from "react";

const categories = ["Everything", "Creative", "Art", "Design", "Branding"];

const works = [
  { id: 1, title: "Project Management Illustration", category: "Art", emoji: "📊" },
  { id: 2, title: "Guest App Walkthrough Screens", category: "Creative", emoji: "📱" },
  { id: 3, title: "Delivery App Wireframe", category: "Branding", emoji: "🚀" },
  { id: 4, title: "Onboarding Motivation", category: "Creative", emoji: "✨" },
  { id: 5, title: "iMac Mockup Design", category: "Art", emoji: "🖥️" },
  { id: 6, title: "Game Store App Concept", category: "Design", emoji: "🎮" },
];

export const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState("Everything");

  const filteredWorks = activeCategory === "Everything" 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <section id="works" className="py-20 px-6 lg:px-12 bg-card/50">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
        Recent works
      </h2>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Works Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorks.map((work) => (
          <div
            key={work.id}
            className="group bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[4/3] bg-secondary flex items-center justify-center text-6xl">
              {work.emoji}
            </div>
            <div className="p-5">
              <span className="text-xs text-primary font-medium">{work.category}</span>
              <h4 className="text-foreground font-semibold mt-1 group-hover:text-primary transition-colors">
                {work.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="text-primary hover:underline font-medium">
          Load more
        </button>
      </div>
    </section>
  );
};
