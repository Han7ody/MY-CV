import React from 'react';

const services = [
  {
    title: "تصميم واجهات المستخدم",
    description: "تصميم واجهات مستخدم جذابة وسهلة الاستخدام تلبي احتياجات عملائك.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/service-1-4.svg",
    bgColor: "#6C6CE5",
    shadowClass: "shadow-[0px_5px_20px_0px_rgba(108,108,229,0.5)]",
    isLight: true
  },
  {
    title: "تطوير الويب",
    description: "بناء مواقع ويب احترافية وتطبيقات متجاوبة باستخدام أحدث التقنيات.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/service-2-5.svg",
    bgColor: "#FFD15C",
    shadowClass: "shadow-[0px_5px_20px_0px_rgba(255,209,92,0.4)]",
    isLight: false
  },
  {
    title: "التصوير الفوتوغرافي",
    description: "التقاط صور احترافية للمنتجات والمناسبات والبورتريه.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/service-3-6.svg",
    bgColor: "#FF4C60",
    shadowClass: "shadow-[0px_5px_20px_0px_rgba(255,123,139,0.4)]",
    isLight: true
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-[110px] bg-[#F9F9FF]">
      <div className="container mx-auto px-[15px] max-w-[1140px]">
        {/* Section Title */}
        <h2 className="text-[36px] font-bold text-[#353353] mb-[60px] relative">
          الخدمات
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-[20px] p-[30px] text-center transform transition-transform duration-300 hover:-translate-y-2 ${service.shadowClass}`}
              style={{ backgroundColor: service.bgColor }}
            >
              <div className="mb-[25px] flex justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-[80px] h-[80px] object-contain"
                />
              </div>
              <h3 
                className={`text-[20px] font-bold mb-[15px] mt-0 ${service.isLight ? 'text-white' : 'text-[#353353]'}`}
              >
                {service.title}
              </h3>
              <p 
                className={`text-[16px] leading-[1.6] mb-0 ${service.isLight ? 'text-white opacity-90' : 'text-[#5E5C7F]'}`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="mt-[50px] text-center">
          <p className="text-[#5E5C7F] text-[16px] mb-0">
            تبحث عن عمل مخصص؟{' '}
            <a 
              href="#contact" 
              className="text-[#FF4C60] font-medium hover:text-[#FF4C60] transition-colors"
            >
              اضغط هنا
            </a>{' '}
            للتواصل معي! 👋
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
