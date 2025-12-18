import React from "react";

export const ContactSection = () => {
  const mapAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/images/map-1.svg";

  return (
    <section id="contact" className="py-20 bg-[#353353] relative overflow-hidden">
      <div className="container mx-auto px-[15px] max-w-[1140px] relative z-10">
        {/* Section Title */}
        <div className="mb-[60px]">
          <h2 className="text-[36px] font-bold text-white mb-[15px] relative inline-block">
            تواصل معي
          </h2>
          {/* Decorative dots pattern */}
          <div className="absolute top-0 right-[200px] opacity-20 hidden lg:block">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="10" cy="10" r="3" fill="#FFD15C" />
              <circle cx="30" cy="10" r="3" fill="#FFD15C" />
              <circle cx="50" cy="10" r="3" fill="#FFD15C" />
              <circle cx="10" cy="30" r="3" fill="#FFD15C" />
              <circle cx="30" cy="30" r="3" fill="#FFD15C" />
              <circle cx="50" cy="30" r="3" fill="#FFD15C" />
              <circle cx="10" cy="50" r="3" fill="#FFD15C" />
              <circle cx="30" cy="50" r="3" fill="#FFD15C" />
              <circle cx="50" cy="50" r="3" fill="#FFD15C" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap -mx-[15px]">
          {/* Left Column: Contact Description & Map */}
          <div className="w-full lg:w-5/12 px-[15px] mb-[30px] lg:mb-0">
            <div className="relative h-full">
              <h3 className="text-[30px] font-bold text-white mb-[20px]">
                دعنا نتحدث عن كل شيء!
              </h3>
              <p className="text-white/80 text-[16px] leading-[1.6] mb-[30px]">
                لا تحب النماذج؟ أرسل لي{" "}
                <a 
                  href="mailto:name@example.com" 
                  className="text-[#FF4C60] transition-colors duration-300 hover:text-white"
                >
                  بريداً إلكترونياً
                </a>
                . 👋
              </p>

              {/* World Map Background Asset */}
              <div className="hidden lg:block mt-[40px]">
                <img 
                  src={mapAsset} 
                  alt="خريطة العالم" 
                  className="w-full opacity-30"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-7/12 px-[15px]">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-wrap -mx-[15px]">
                {/* Name Input */}
                <div className="w-full md:w-1/2 px-[15px] mb-[20px]">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="اسمك"
                      className="w-full h-[50px] px-[20px] bg-[#2B2A3E] border-0 rounded-[25px] text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4C60] transition-all"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="w-full md:w-1/2 px-[15px] mb-[20px]">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="البريد الإلكتروني"
                      className="w-full h-[50px] px-[20px] bg-[#2B2A3E] border-0 rounded-[25px] text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4C60] transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="w-full px-[15px] mb-[20px]">
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      placeholder="الموضوع"
                      className="w-full h-[50px] px-[20px] bg-[#2B2A3E] border-0 rounded-[25px] text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4C60] transition-all"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="w-full px-[15px] mb-[20px]">
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="الرسالة"
                      rows={5}
                      className="w-full px-[20px] py-[15px] bg-[#2B2A3E] border-0 rounded-[25px] text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4C60] transition-all resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="px-[15px] mt-[10px]">
                <button
                  type="submit"
                  className="inline-block bg-[#FF4C60] text-white text-[16px] font-bold py-[12px] px-[32px] rounded-[30px] transition-all duration-300 hover:scale-105 shadow-[0px_5px_20px_0px_rgba(255,76,96,0.4)]"
                >
                  إرسال الرسالة
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
