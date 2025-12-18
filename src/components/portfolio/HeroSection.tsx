import { useState, useEffect, useRef } from "react";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingShapes } from "./FloatingShapes";
import mohandImage from "@/assets/mohand.jpg";

const roles = [
  "مصمم UI/UX",
  "مطور واجهات",
  "مصمم جرافيك",
  "مبدع رقمي",
];

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
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
            <img 
              src={mohandImage} 
              alt="مهند أحمد" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
          مهند أحمد
        </h1>

        {/* Tagline - Auto-changing text */}
        <p className="text-lg text-muted-foreground mb-6 h-7">
          <span>{displayText}</span>
          <span className="animate-pulse">|</span>
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="https://www.instagram.com/hn.7od"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/han7odyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohand-ahmed-adam-b10a79260"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/share/1AUY3veznc/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-base font-medium mb-16"
        >
          وظفني
        </Button>

        {/* Scroll Down */}
        <div
          onClick={scrollToAbout}
          className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          <p className="mb-2">اسحب للأسفل</p>
          <div className="w-6 h-10 border-2 border-current rounded-full mx-auto flex justify-center">
            <div className="w-1.5 h-1.5 bg-current rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
