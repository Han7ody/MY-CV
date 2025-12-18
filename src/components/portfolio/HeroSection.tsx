import { useState, useEffect, useRef } from "react";
import { Instagram, Twitter, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingShapes } from "./FloatingShapes";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getParallaxStyle = (intensity: number, reverse: boolean = false) => {
    const multiplier = reverse ? -1 : 1;
    return {
      transform: `translate(${mousePosition.x * intensity * multiplier}px, ${mousePosition.y * intensity * multiplier}px)`,
      transition: "transform 0.1s ease-out",
    };
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating shapes with parallax */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Layer 1 - Slow movement */}
        <div
          className="absolute top-20 left-10 w-16 h-16 bg-shape-yellow rounded-full opacity-60"
          style={getParallaxStyle(20)}
        />
        <div
          className="absolute bottom-32 right-20 w-24 h-24 bg-shape-coral rounded-full opacity-50"
          style={getParallaxStyle(15, true)}
        />

        {/* Layer 2 - Medium movement */}
        <div
          className="absolute top-1/3 right-16 w-12 h-12 bg-shape-blue rounded-lg rotate-45 opacity-70"
          style={getParallaxStyle(30)}
        />
        <div
          className="absolute bottom-1/4 left-20 w-20 h-20 bg-shape-green rounded-full opacity-40"
          style={getParallaxStyle(25, true)}
        />

        {/* Layer 3 - Fast movement */}
        <div
          className="absolute top-1/2 left-1/4 w-8 h-8 bg-shape-purple rounded-full opacity-50"
          style={getParallaxStyle(40)}
        />
        <div
          className="absolute top-16 right-1/3 w-10 h-10 bg-shape-yellow rounded-lg rotate-12 opacity-60"
          style={getParallaxStyle(35, true)}
        />

        {/* Decorative SVG shapes */}
        <svg
          className="absolute bottom-20 left-1/3 w-16 h-16 text-shape-coral opacity-40"
          style={getParallaxStyle(25)}
          viewBox="0 0 100 100"
        >
          <polygon points="50,10 90,90 10,90" fill="currentColor" />
        </svg>
        <svg
          className="absolute top-24 left-1/2 w-12 h-12 text-shape-blue opacity-50"
          style={getParallaxStyle(45, true)}
          viewBox="0 0 100 100"
        >
          <rect x="10" y="10" width="80" height="80" fill="currentColor" />
        </svg>
      </div>

      <FloatingShapes />

      <div className="text-center z-10 animate-fade-in">
        {/* Avatar */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-shape-yellow p-1">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
            <div className="text-6xl">👨‍💻</div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
          مهند أحمد
        </h1>

        {/* Tagline */}
        <p className="text-lg text-muted-foreground mb-6">I'm a UI/UX designer</p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Dribbble className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors font-bold text-sm"
          >
            Bē
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
            </svg>
          </a>
        </div>

        {/* CTA Button */}
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-base font-medium mb-16">
          وظفني
        </Button>

        {/* Scroll Down */}
        <div
          onClick={scrollToAbout}
          className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          <p className="mb-2">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-current rounded-full mx-auto flex justify-center">
            <div className="w-1.5 h-1.5 bg-current rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
