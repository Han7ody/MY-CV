import React, { useState } from 'react';

const testimonials = [
  {
    name: "أحمد محمد",
    role: "مصمم في Dribbble",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/avatar-3-17.svg",
    content: "أستمتع بالعمل مع هذا الفريق وأتعلم الكثير. أنتم تجعلون العملية ممتعة ومثيرة. حظاً موفقاً! 🔥"
  },
  {
    name: "سارة أحمد",
    role: "مصممة منتجات",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/avatar-3-17.svg",
    content: "تجربة رائعة في التعامل معهم. احترافية عالية والتزام بالمواعيد. أنصح بهم بشدة! 👍"
  }
];

const clientLogos = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/client-1-18.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/client-2-19.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/client-3-20.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/client-4-21.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/client-5-22.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/client-6-23.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/client-7-24.svg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/client-8-25.svg"
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="testimonials" className="py-[110px] bg-[#F9F9FF]">
      <div className="container px-[15px] mx-auto max-w-[1140px]">
        {/* Section Heading */}
        <h2 className="text-[36px] font-bold text-[#353353] mb-[60px] text-center">
          العملاء والتقييمات
        </h2>

        {/* Testimonials Grid */}
        <div className="flex flex-wrap -mx-[15px] mb-[70px]">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 px-[15px] mb-[30px] md:mb-0">
              <div className="flex flex-col items-center">
                {/* Meta details */}
                <div className="text-center mb-[20px]">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-[90px] h-[90px] mb-3 rounded-full mx-auto object-cover"
                  />
                  <h3 className="text-[20px] font-bold text-[#353353] mb-1">{testimonial.name}</h3>
                  <span className="text-[14px] text-[#8B88B1]">{testimonial.role}</span>
                </div>

                {/* Speech Bubble */}
                <div className="relative bg-white rounded-[20px] p-[30px] shadow-[0px_5px_20px_0px_rgba(69,67,96,0.1)] after:content-[''] after:absolute after:bottom-full after:left-1/2 after:-ml-[10px] after:border-[10px] after:border-transparent after:border-b-white">
                  <p className="text-[#5E5C7F] text-[16px] leading-[1.6] text-center m-0">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mb-[100px]">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full cursor-pointer transition-all ${
                index === currentIndex 
                  ? "w-4 h-2 bg-[#FF4C60]" 
                  : "w-2 h-2 bg-[#FF4C60]/30"
              }`}
            />
          ))}
        </div>

        {/* Clients Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 items-center justify-items-center">
          {clientLogos.map((logo, index) => (
            <div key={index} className="px-[15px] flex justify-center items-center opacity-30 hover:opacity-100 transition-opacity duration-300">
              <img 
                src={logo} 
                alt={`عميل ${index + 1}`}
                className="max-h-[40px] w-auto h-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
