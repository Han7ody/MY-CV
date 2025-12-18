import { Instagram, Twitter, Dribbble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingShapes } from "./FloatingShapes";
import profileImage from "@/assets/mohand.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <FloatingShapes />
      
      <div className="text-center z-10 animate-fade-in">
        {/* Avatar */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-shape-yellow p-1">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
            <img src={profileImage} alt="صورة شخصية" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
          بولبي دو
        </h1>

        {/* Tagline */}
        <p className="text-lg text-muted-foreground mb-6">
          أنا مصمم واجهات مستخدم
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Dribbble className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-bold text-sm">
            Bē
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
            </svg>
          </a>
        </div>

        {/* CTA Button */}
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-base font-medium">
          وظفني
        </Button>

        {/* Scroll Down */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-sm">
          <p className="mb-2">انتقل للأسفل</p>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full mx-auto flex justify-center">
            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};