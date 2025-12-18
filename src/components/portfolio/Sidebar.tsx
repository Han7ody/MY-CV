import { Home, User, Briefcase, GraduationCap, Layers, FileText, MessageCircle } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Briefcase, label: "Services", href: "#services" },
  { icon: GraduationCap, label: "Experience", href: "#experience" },
  { icon: Layers, label: "Works", href: "#works" },
  { icon: FileText, label: "Blog", href: "#blog" },
  { icon: MessageCircle, label: "Contact", href: "#contact" },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-[220px] bg-sidebar z-50 flex flex-col py-8 px-6 hidden lg:flex">
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-foreground">
          Bolby<span className="text-primary">.</span>
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
        © 2024 Bolby Template.
      </div>
    </aside>
  );
};
