const posts = [
  {
    id: 1,
    category: "مراجعات",
    title: "أفضل 5 أدوات لتطوير التطبيقات لمشروعك",
    date: "09 فبراير، 2024",
    author: "بولبي",
    emoji: "📱",
  },
  {
    id: 2,
    category: "دروس",
    title: "مفاهيم خاطئة شائعة حول الدفع الإلكتروني",
    date: "07 فبراير، 2024",
    author: "بولبي",
    emoji: "💳",
  },
  {
    id: 3,
    category: "أعمال",
    title: "3 أشياء يجب معرفتها عن الشركات الناشئة",
    date: "06 فبراير، 2024",
    author: "بولبي",
    emoji: "🚀",
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
        آخر المقالات
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div className="aspect-video bg-secondary flex items-center justify-center text-6xl">
              {post.emoji}
            </div>
            <div className="p-6">
              <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <h3 className="text-lg font-semibold text-foreground mt-4 mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};