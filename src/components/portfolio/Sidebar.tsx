import React, { useState } from "react";
import {
  Home,
  User,
  Briefcase,
  GraduationCap,
  Layers,
  FileText,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { id: "home", label: "الرئيسية", icon: Home },
  { id: "about", label: "نبذة عني", icon: User },
  { id: "services", label: "الخدمات", icon: Briefcase },
  { id: "experience", label: "الخبرات", icon: GraduationCap },
  { id: "works", label: "الأعمال", icon: Layers },
  { id: "blog", label: "المدونة", icon: FileText },
  { id: "contact", label: "تواصل معي", icon: MessageSquare },
];

export const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-[50] flex lg:hidden items-center justify-between px-[15px] py-2.5 bg-[#353353] border-b border-white/5">
        <div className="flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 ml-4 text-white"
            aria-label="فتح القائمة"
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
          <div className="site-logo">
            <a href="/">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/logo-1.svg"
                alt="بولبي"
                className="h-[33px] w-auto"
              />
            </a>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[40] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <header
        className={`fixed top-0 right-0 h-full w-[290px] bg-[#353353] p-[50px_40px_40px] z-[100] transition-transform duration-300 transform lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0 flex flex-col items-start`}
      >
        {/* Logo */}
        <div className="site-logo mb-0">
          <a href="/">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/logo-1.svg"
              alt="بولبي"
              className="h-[33px] w-auto"
            />
          </a>
        </div>

        {/* Main Menu */}
        <nav className="flex-grow flex items-center w-full">
          <ul className="w-full my-[130px] p-0 list-none">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id} className="relative py-2 font-medium group">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center text-base transition-colors duration-300 ease-in-out text-white hover:text-[#FFD15C]"
                  >
                    <span className="ml-3 text-lg">
                      <IconComponent className="w-5 h-5" />
                    </span>
                    {item.label}
                    {/* Three dashes indicator on hover */}
                    <span className="mr-auto flex gap-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="w-[6px] h-[2px] bg-[#FFD15C] rounded-full"></span>
                      <span className="w-[6px] h-[2px] bg-[#FFD15C] rounded-full"></span>
                      <span className="w-[6px] h-[2px] bg-[#FFD15C] rounded-full"></span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Site Footer */}
        <div className="mt-auto">
          <span className="text-[#8B88B1] text-sm whitespace-nowrap">
            © 2025 مهند أحمد.
          </span>
        </div>
      </header>
    </>
  );
};

export default Sidebar;
