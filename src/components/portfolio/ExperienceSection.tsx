import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const education = [
  {
    time: '2019 - الآن',
    title: 'درجة أكاديمية',
    desc: 'دراسة متخصصة في علوم الحاسوب وتصميم واجهات المستخدم.',
  },
  {
    time: '2017 - 2013',
    title: 'درجة البكالوريوس',
    desc: 'بكالوريوس في هندسة البرمجيات من جامعة لندن.',
  },
  {
    time: '2013 - 2009',
    title: 'درجة الشرف',
    desc: 'درجة الشرف في التصميم الجرافيكي والفنون البصرية.',
  },
];

const workExperience = [
  {
    time: '2019 - الآن',
    title: 'مصمم ويب',
    desc: 'تصميم وتطوير مواقع ويب احترافية للعملاء.',
  },
  {
    time: '2017 - 2013',
    title: 'مطور واجهات أمامية',
    desc: 'بناء واجهات مستخدم تفاعلية باستخدام React وVue.',
  },
  {
    time: '2013 - 2009',
    title: 'مطور خلفي',
    desc: 'تطوير APIs وقواعد بيانات للتطبيقات المختلفة.',
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-[110px] bg-[#F9F9FF]">
      <div className="container mx-auto px-[15px] max-w-[1140px]">
        {/* Section Title */}
        <h2 className="text-[36px] font-bold text-[#353353] mb-[60px] relative">
          الخبرات
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {/* Education Timeline */}
          <div className="relative bg-white rounded-[20px] shadow-[0px_5px_20px_0px_rgba(69,67,96,0.1)] p-[30px]">
            {education.map((item, index) => (
              <div key={index} className="relative pr-[45px] mb-[50px] last:mb-0">
                {/* Icon Circle */}
                <div className="absolute right-[-7px] top-0 z-10 text-[#FF4C60] bg-white text-[24px]">
                  <GraduationCap size={24} />
                </div>
                {/* Content */}
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
            {/* Vertical Line */}
            <span className="absolute right-[37px] top-[40px] bottom-[40px] w-[2px] bg-[#FF4C60] opacity-[0.2]"></span>
          </div>

          {/* Experience Timeline */}
          <div className="relative bg-white rounded-[20px] shadow-[0px_5px_20px_0px_rgba(69,67,96,0.1)] p-[30px]">
            {workExperience.map((item, index) => (
              <div key={index} className="relative pr-[45px] mb-[50px] last:mb-0">
                {/* Icon Circle */}
                <div className="absolute right-[-7px] top-0 z-10 text-[#FF4C60] bg-white text-[24px]">
                  <Briefcase size={24} />
                </div>
                {/* Content */}
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
            {/* Vertical Line */}
            <span className="absolute right-[37px] top-[40px] bottom-[40px] w-[2px] bg-[#FF4C60] opacity-[0.2]"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
