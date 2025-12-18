import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const useInView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const education = [
  {
    time: '2024 - الآن',
    title: 'Bachelor of Science (Cyber Security)',
    desc: 'CGC Mohali — دراسة الأمن السيبراني مع تركيز على أمن تطبيقات الويب والأنظمة.',
  },
];

const workExperience = [
  {
    time: 'مستمر',
    title: 'Full-Stack Web Developer (Self-Taught)',
    desc: 'من المنزل — تعلم ذاتي لتطوير الويب المتكامل (Frontend & Backend) وبناء مواقع وتطبيقات عملية مع التركيز على الأداء وتجربة المستخدم.',
  },
];

const TimelineCard = ({ 
  items, 
  icon: Icon, 
  index 
}: { 
  items: typeof education; 
  icon: React.ElementType; 
  index: number;
}) => {
  const { ref, isVisible } = useInView();
  
  return (
    <div
      ref={ref}
      className={`relative bg-white rounded-[20px] shadow-[0px_5px_20px_0px_rgba(69,67,96,0.1)] p-[30px] transform transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {items.map((item, idx) => (
        <div key={idx} className="relative pr-[45px] mb-[50px] last:mb-0">
          <div className="absolute right-[-7px] top-0 z-10 text-[#FF4C60] bg-white text-[24px]">
            <Icon size={24} />
          </div>
          <div className="timeline-content">
            <span className="text-[#8B88B1] text-[14px] block mb-[5px]">
              {item.time}
            </span>
            <h3 className="text-[20px] font-bold text-[#353353] mt-0 mb-[10px]">
              {item.title}
            </h3>
            <p className="text-[#5E5C7F] text-[16px] leading-[1.6] m-0">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
      <span className="absolute right-[37px] top-[40px] bottom-[40px] w-[2px] bg-[#FF4C60] opacity-[0.2]"></span>
    </div>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-[110px] bg-[#F9F9FF]">
      <div className="container mx-auto px-[15px] max-w-[1140px]">
        <h2 className="text-[36px] font-bold text-[#353353] mb-[60px] relative">
          الخبرات
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          <TimelineCard items={education} icon={GraduationCap} index={0} />
          <TimelineCard items={workExperience} icon={Briefcase} index={1} />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
