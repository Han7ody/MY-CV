import { useState } from "react";
import { Menu, X, Home, User, Briefcase, GraduationCap, Layers, FileText, MessageCircle } from "lucide-react";

const navItems = [
  { icon: Home, label: "الرئيسية", href: "#home" },
  { icon: User, label: "نبذة عني", href: "#about" },
  { icon: Briefcase, label: "الخدمات", href: "#services" },
  { icon: GraduationCap, label: "الخبرات", href: "#experience" },
  { icon: Layers, label: "الأعمال", href: "#works" },
  { icon: FileText, label: "المدونة", href: "#blog" },
  { icon: MessageCircle, label: "تواصل معي", href: "#contact" },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-sidebar z-50 flex items-center justify-between px-4">
        <h1 className="text-xl font-bold text-foreground">
          بولبي<span className="text-primary">.</span>
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 flex items-center justify-center text-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-sidebar z-40 pt-16">
          <nav className="p-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent rounded-lg transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};