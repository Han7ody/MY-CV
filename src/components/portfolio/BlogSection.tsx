const posts = [
  {
    id: 1,
    category: "Reviews",
    title: "5 Best App Development Tool for Your Project",
    date: "09 February, 2020",
    author: "Bolby",
    emoji: "📱",
  },
  {
    id: 2,
    category: "Tutorial",
    title: "Common Misconceptions About Payment",
    date: "07 February, 2020",
    author: "Bolby",
    emoji: "💳",
  },
  {
    id: 3,
    category: "Business",
    title: "3 Things To Know About Startup Business",
    date: "06 February, 2020",
    author: "Bolby",
    emoji: "🚀",
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
        Latest Posts
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
