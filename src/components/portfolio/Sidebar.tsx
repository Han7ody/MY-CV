import React, { useState, useEffect } from "react";
import {
  Home,
  User,
  Briefcase,
  GraduationCap,
  Layers,
  FileText,
  MessageSquare,
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
  const [activeSection, setActiveSection] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "experience", "works", "blog", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Header with Hamburger Menu */}
      <header className="fixed top-0 left-0 right-0 z-[50] flex items-center justify-between px-[20px] py-4 bg-transparent">
        {/* Hamburger Menu Button - Three Lines */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="flex flex-col justify-center items-center gap-[5px] p-2 group"
          aria-label="فتح القائمة"
        >
          <span className="w-[25px] h-[3px] bg-white rounded-full transition-all duration-300 group-hover:bg-[#FFD15C]"></span>
          <span className="w-[25px] h-[3px] bg-white rounded-full transition-all duration-300 group-hover:bg-[#FFD15C]"></span>
          <span className="w-[25px] h-[3px] bg-white rounded-full transition-all duration-300 group-hover:bg-[#FFD15C]"></span>
        </button>
      </header>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[90]"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed top-0 right-0 h-full w-[290px] bg-[#353353] p-[50px_40px_40px] z-[100] transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col items-start`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute top-[20px] left-[20px] text-white hover:text-[#FFD15C] transition-colors"
          aria-label="إغلاق القائمة"
        >
          <X size={28} />
        </button>

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
                <li key={item.id} className="relative py-2 font-medium">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center text-base transition-colors duration-300 ease-in-out hover:text-[#FFD15C] ${
                      activeSection === item.id ? "text-[#FFD15C]" : "text-white"
                    }`}
                  >
                    <span className="ml-3 text-lg">
                      <IconComponent className="w-5 h-5" />
                    </span>
                    {item.label}
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
      </aside>
    </>
  );
};

export default Sidebar;
