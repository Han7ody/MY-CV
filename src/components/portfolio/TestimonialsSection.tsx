import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "عميل — موقع تعريفي",
    role: "تطوير موقع ويب",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/avatar-3-17.svg",
    content: "تنفيذ احترافي وتسليم في الوقت. الموقع متجاوب وسريع ويعكس هوية العمل بشكل ممتاز."
  },
  {
    name: "عميل — لوحة تحكم",
    role: "Full-Stack Web Application",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/avatar-3-17.svg",
    content: "تنظيم ممتاز في الكود، تواصل واضح، وتنفيذ دقيق للمتطلبات مع أداء عالي."
  },
  {
    name: "عميل — متجر إلكتروني",
    role: "تطوير متجر وربط الدفع",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/avatar-3-17.svg",
    content: "تجربة رائعة من البداية للنهاية، اهتمام بالأمان وسهولة الاستخدام، والنتيجة مرضية جدًا."
  },
  {
    name: "عميل — مشروع تدريبي",
    role: "Front-End & UI/UX",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/avatar-3-17.svg",
    content: "تصميم أنيق وتجربة مستخدم سلسة، مع اهتمام بالتفاصيل وتحسين الأداء."
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
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (diff < 0 && currentIndex < testimonials.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const goToPrev = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToNext = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="testimonials" className="py-[110px] bg-[#F9F9FF]">
      <div className="container px-[15px] mx-auto max-w-[1140px]">
        {/* Section Heading */}
        <h2 className="text-[36px] font-bold text-[#353353] mb-[60px] text-center">
          العملاء والتقييمات
        </h2>

        {/* Testimonials Slider */}
        <div className="relative mb-[40px]">
          {/* Left Arrow */}
          <button
            onClick={goToPrev}
            disabled={currentIndex === testimonials.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-[0px_5px_20px_0px_rgba(69,67,96,0.1)] flex items-center justify-center text-[#353353] hover:bg-[#FF4C60] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed md:right-[-20px]"
            aria-label="التقييم التالي"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-[0px_5px_20px_0px_rgba(69,67,96,0.1)] flex items-center justify-center text-[#353353] hover:bg-[#FF4C60] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed md:left-[-20px]"
            aria-label="التقييم السابق"
          >
            <ChevronRight size={20} />
          </button>

          <div 
            className="overflow-hidden touch-pan-y mx-12"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-[15px]">
                  <div className="flex flex-col items-center max-w-[500px] mx-auto">
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
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mb-[100px]">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full cursor-pointer transition-all duration-300 ${
                index === currentIndex 
                  ? "w-4 h-2 bg-[#FF4C60]" 
                  : "w-2 h-2 bg-[#FF4C60]/30 hover:bg-[#FF4C60]/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
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
