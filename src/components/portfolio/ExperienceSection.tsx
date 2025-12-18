const education = [
  { period: "2019 - الآن", title: "درجة أكاديمية", description: "دراسة متخصصة في علوم الحاسوب وتصميم واجهات المستخدم." },
  { period: "2017 - 2013", title: "درجة البكالوريوس", description: "بكالوريوس في هندسة البرمجيات من جامعة لندن." },
  { period: "2013 - 2009", title: "درجة الشرف", description: "درجة الشرف في التصميم الجرافيكي والفنون البصرية." },
];

const experience = [
  { period: "2019 - الآن", title: "مصمم ويب", description: "تصميم وتطوير مواقع ويب احترافية للعملاء." },
  { period: "2017 - 2013", title: "مطور واجهات أمامية", description: "بناء واجهات مستخدم تفاعلية باستخدام React وVue." },
  { period: "2013 - 2009", title: "مطور خلفي", description: "تطوير APIs وقواعد بيانات للتطبيقات المختلفة." },
];

interface TimelineItemProps {
  period: string;
  title: string;
  description: string;
}

const TimelineItem = ({ period, title, description }: TimelineItemProps) => (
  <div className="relative pr-8 pb-8 border-r-2 border-border last:pb-0">
    <div className="absolute right-0 top-0 w-3 h-3 bg-primary rounded-full translate-x-[7px]" />
    <span className="text-sm text-primary font-medium">{period}</span>
    <h4 className="text-lg font-semibold text-foreground mt-1 mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
        الخبرات
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <div className="bg-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <span className="text-2xl">🎓</span> التعليم
            </h3>
            <div className="space-y-0">
              {education.map((item) => (
                <TimelineItem key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="bg-card rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <span className="text-2xl">💼</span> الخبرة العملية
            </h3>
            <div className="space-y-0">
              {experience.map((item) => (
                <TimelineItem key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};