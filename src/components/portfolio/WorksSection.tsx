import { useState } from "react";

const categories = ["الكل", "إبداعي", "فني", "تصميم", "هوية بصرية"];

const works = [
  { id: 1, title: "رسم توضيحي لإدارة المشاريع", category: "فني", emoji: "📊" },
  { id: 2, title: "شاشات تطبيق الضيوف", category: "إبداعي", emoji: "📱" },
  { id: 3, title: "إطار تطبيق التوصيل", category: "هوية بصرية", emoji: "🚀" },
  { id: 4, title: "تصميم تحفيزي للتهيئة", category: "إبداعي", emoji: "✨" },
  { id: 5, title: "تصميم ماك بوك", category: "فني", emoji: "🖥️" },
  { id: 6, title: "مفهوم تطبيق متجر الألعاب", category: "تصميم", emoji: "🎮" },
];

export const WorksSection = () => {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredWorks = activeCategory === "الكل" 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <section id="works" className="py-20 px-6 lg:px-12 bg-card/50">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
        أحدث الأعمال
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
          تحميل المزيد
        </button>
      </div>
    </section>
  );
};