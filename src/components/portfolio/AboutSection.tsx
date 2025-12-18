import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Development", value: 85 },
  { name: "UI/UX design", value: 95 },
  { name: "Photography", value: 70 },
];

const stats = [
  { value: "198", label: "Projects completed" },
  { value: "5670", label: "Cup of coffee" },
  { value: "427", label: "Satisfied clients" },
  { value: "35", label: "Nominees winner" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
        About Me
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="w-64 h-64 bg-card rounded-3xl flex items-center justify-center">
            <div className="text-8xl">👨‍💼</div>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.
          </p>

          <Button variant="outline" className="mb-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Download CV
          </Button>

          {/* Skills */}
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.value}%</span>
                </div>
                <Progress value={skill.value} className="h-2 bg-secondary" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
