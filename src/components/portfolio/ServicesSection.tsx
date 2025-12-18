import { Palette, Code, Camera } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "تصميم واجهات المستخدم",
    description: "تصميم واجهات مستخدم جذابة وسهلة الاستخدام تلبي احتياجات عملائك.",
    color: "text-shape-pink",
    bgColor: "bg-shape-pink/10",
  },
  {
    icon: Code,
    title: "تطوير الويب",
    description: "بناء مواقع ويب احترافية وتطبيقات متجاوبة باستخدام أحدث التقنيات.",
    color: "text-shape-cyan",
    bgColor: "bg-shape-cyan/10",
  },
  {
    icon: Camera,
    title: "التصوير الفوتوغرافي",
    description: "التقاط صور احترافية للمنتجات والمناسبات والبورتريه.",
    color: "text-shape-yellow",
    bgColor: "bg-shape-yellow/10",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 lg:px-12 bg-card/50">
      <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
        الخدمات
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-card rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${service.bgColor} flex items-center justify-center`}>
              <service.icon className={`w-8 h-8 ${service.color}`} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 text-muted-foreground">
        تبحث عن عمل مخصص؟{" "}
        <a href="#contact" className="text-primary hover:underline">
          اضغط هنا
        </a>{" "}
        للتواصل معي! 👋
      </div>
    </section>
  );
};