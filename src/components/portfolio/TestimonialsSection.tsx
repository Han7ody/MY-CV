import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Product designer at Dribbble",
    content: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 🔥",
    avatar: "👨‍💻",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CEO at TechCorp",
    content: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
    avatar: "👩‍💼",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Developer at Google",
    content: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 🎉",
    avatar: "👨‍🔬",
  },
];

const clients = ["🏢", "🏛️", "🏪", "🏭", "🏬", "🏫", "🏨", "🏦"];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6 lg:px-12 bg-card/50">
      <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
        Clients & Reviews
      </h2>

      {/* Testimonials Carousel */}
      <div className="max-w-3xl mx-auto mb-16">
        <div className="bg-card rounded-2xl p-8 text-center relative">
          <div className="text-6xl mb-4">{testimonials[currentIndex].avatar}</div>
          <h4 className="text-lg font-semibold text-foreground mb-1">
            {testimonials[currentIndex].name}
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            {testimonials[currentIndex].role}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {testimonials[currentIndex].content}
          </p>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-secondary"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Clients */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-5xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
