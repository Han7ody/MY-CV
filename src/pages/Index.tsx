import { Sidebar } from "@/components/portfolio/Sidebar";
import { MobileNav } from "@/components/portfolio/MobileNav";
import { FloatingShapes } from "@/components/portfolio/FloatingShapes";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { WorksSection } from "@/components/portfolio/WorksSection";
import { PricingSection } from "@/components/portfolio/PricingSection";
import { TestimonialsSection } from "@/components/portfolio/TestimonialsSection";
import { BlogSection } from "@/components/portfolio/BlogSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingShapes />
      <Sidebar />
      <MobileNav />
      
      <main className="lg:ml-[200px]">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <WorksSection />
        <PricingSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
