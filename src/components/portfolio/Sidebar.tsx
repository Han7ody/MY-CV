import { Home, User, Briefcase, GraduationCap, Layers, FileText, MessageCircle } from "lucide-react";

const navItems = [
  { icon: Home, label: "الرئيسية", href: "#home" },
  { icon: User, label: "نبذة عني", href: "#about" },
  { icon: Briefcase, label: "الخدمات", href: "#services" },
  { icon: GraduationCap, label: "الخبرات", href: "#experience" },
  { icon: Layers, label: "الأعمال", href: "#works" },
  { icon: FileText, label: "المدونة", href: "#blog" },
  { icon: MessageCircle, label: "تواصل معي", href: "#contact" },
];

export const Sidebar = () => {
  return (
    <aside className="fixed right-0 top-0 h-full w-[220px] bg-sidebar z-50 flex-col py-8 px-6 hidden lg:flex">
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-foreground">
          بولبي<span className="text-primary">.</span>
        </h1>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent rounded-lg transition-all duration-300 group"
              >
                <item.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-xs text-muted-foreground">
        © 2024 قالب بولبي.
      </div>
    </aside>
  );
};