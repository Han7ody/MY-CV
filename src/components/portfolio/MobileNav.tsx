import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, GraduationCap, Layers, FileText, MessageSquare } from "lucide-react";

const navItems = [
  { id: "home", label: "الرئيسية", icon: Home },
  { id: "about", label: "نبذة عني", icon: User },
  { id: "services", label: "الخدمات", icon: Briefcase },
  { id: "experience", label: "الخبرات", icon: GraduationCap },
  { id: "works", label: "الأعمال", icon: Layers },
  { id: "blog", label: "المدونة", icon: FileText },
  { id: "contact", label: "تواصل معي", icon: MessageSquare },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInHero, setIsInHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsInHero(window.scrollY < heroHeight - 64);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBg = isInHero ? 'bg-transparent' : 'bg-white shadow-md';
  const textColor = isInHero ? 'text-white' : 'text-[#353353]';
  const accentColor = isInHero ? 'text-[#FFD15C]' : 'text-[#FF4C60]';

  return (
    <div className="lg:hidden">
      {/* Mobile Header */}
      <div className={`fixed top-0 left-0 right-0 h-16 z-50 flex items-center justify-between px-4 transition-all duration-300 ${headerBg}`}>
        <h1 className={`text-xl font-bold transition-colors duration-300 ${textColor}`}>
          بولبي<span className={`transition-colors duration-300 ${accentColor}`}>.</span>
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-10 h-10 flex items-center justify-center transition-colors duration-300 ${textColor}`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#353353] z-40 pt-16">
          <nav className="p-6">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-[#FFD15C] hover:bg-white/5 rounded-lg transition-all duration-300"
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
