import React from 'react';
import { Flame, Coffee, Users, Award } from 'lucide-react';
import profileImage from "@/assets/mohand.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-[110px] bg-[#F9F9FF]">
      <div className="container max-w-[1140px] px-[15px] mx-auto">
        {/* Section Title */}
        <h2 className="text-[36px] font-bold text-[#353353] mb-[60px] relative">
          نبذة عني
        </h2>

        <div className="flex flex-wrap -mx-[15px]">
          {/* Avatar Column */}
          <div className="w-full md:w-1/4 px-[15px] mb-[30px] md:mb-0">
            <div className="text-center md:text-right">
              <img 
                src={profileImage}
                alt="صورة شخصية" 
                className="inline-block w-[150px] h-[150px] rounded-full object-cover"
              />
            </div>
          </div>

          {/* Speech Bubble / Skills Column */}
          <div className="w-full md:w-3/4 px-[15px]">
            <div className="speech-bubble relative bg-white rounded-[20px] p-[30px] shadow-[0px_5px_20px_0px_rgba(69,67,96,0.1)] before:content-[''] before:absolute md:before:block before:hidden before:right-[-15px] before:top-[45px] before:w-0 before:h-0 before:border-t-[10px] before:border-t-transparent before:border-b-[10px] before:border-b-transparent before:border-l-[15px] before:border-l-white">
              <div className="flex flex-wrap -mx-[15px]">
                {/* About Text */}
                <div className="w-full md:w-1/2 px-[15px] mb-[30px] md:mb-0">
                  <p className="text-[#5E5C7F] text-[16px] leading-[1.8] mb-[25px]">
                    أنا مهند أحمد، مطور ويب Full-Stack من السودان، لدي خبرة واسعة في تصميم وتطوير المواقع الإلكترونية. أعمل على تطوير الواجهات الأمامية والخلفية مع الاهتمام بتجربة المستخدم (UI/UX)، كما أنني متمكن من WordPress وبناء مواقع متكاملة وعصرية.
                  </p>
                  <a 
                    href="#" 
                    className="inline-block bg-[#FF4C60] text-white text-[16px] font-bold py-[12px] px-[32px] rounded-[30px] shadow-[0px_5px_20px_0px_rgba(255,76,96,0.4)] transition-all duration-300 hover:scale-105"
                  >
                    تحميل السيرة الذاتية
                  </a>
                </div>

                {/* Skill Bars */}
                <div className="w-full md:w-1/2 px-[15px]">
                {/* Skill Item 1 */}
                  <div className="mb-[20px]">
                    <div className="flex justify-between items-center mb-[10px]">
                      <h4 className="text-[16px] font-bold text-[#353353] m-0">التطوير</h4>
                      <span className="text-[14px] text-[#5E5C7F]">90%</span>
                    </div>
                    <div className="h-[7px] w-full bg-[#F1F1F1] rounded-[15px] overflow-hidden">
                      <div 
                        className="h-full bg-[#FFD15C] rounded-[15px]" 
                        style={{ width: '90%' }}
                      />
                    </div>
                  </div>

                  {/* Skill Item 2 */}
                  <div className="mb-[20px]">
                    <div className="flex justify-between items-center mb-[10px]">
                      <h4 className="text-[16px] font-bold text-[#353353] m-0">تصميم UI/UX</h4>
                      <span className="text-[14px] text-[#5E5C7F]">95%</span>
                    </div>
                    <div className="h-[7px] w-full bg-[#F1F1F1] rounded-[15px] overflow-hidden">
                      <div 
                        className="h-full bg-[#FF4C60] rounded-[15px]" 
                        style={{ width: '95%' }}
                      />
                    </div>
                  </div>

                  {/* Skill Item 3 */}
                  <div>
                    <div className="flex justify-between items-center mb-[10px]">
                      <h4 className="text-[16px] font-bold text-[#353353] m-0">تطوير الويب (Full-Stack)</h4>
                      <span className="text-[14px] text-[#5E5C7F]">85%</span>
                    </div>
                    <div className="h-[7px] w-full bg-[#F1F1F1] rounded-[15px] overflow-hidden">
                      <div 
                        className="h-full bg-[#6C6CE5] rounded-[15px]" 
                        style={{ width: '85%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facts Row */}
        <div className="flex flex-wrap -mx-[15px] mt-[70px]">
          {/* Fact 1 */}
          <div className="w-1/2 md:w-1/4 px-[15px] mb-[30px] md:mb-0">
            <div className="flex items-center">
              <Flame className="w-[36px] h-[36px] text-[#D3D3D3] ml-[20px]" strokeWidth={1.5} />
              <div>
                <h3 className="text-[30px] font-bold text-[#353353] leading-none mb-[5px]">198</h3>
                <p className="text-[16px] text-[#5E5C7F] m-0">مشروع مكتمل</p>
              </div>
            </div>
          </div>

          {/* Fact 2 */}
          <div className="w-1/2 md:w-1/4 px-[15px] mb-[30px] md:mb-0">
            <div className="flex items-center">
              <Coffee className="w-[36px] h-[36px] text-[#D3D3D3] ml-[20px]" strokeWidth={1.5} />
              <div>
                <h3 className="text-[30px] font-bold text-[#353353] leading-none mb-[5px]">5670</h3>
                <p className="text-[16px] text-[#5E5C7F] m-0">كوب قهوة</p>
              </div>
            </div>
          </div>

          {/* Fact 3 */}
          <div className="w-1/2 md:w-1/4 px-[15px] mb-[30px] md:mb-0">
            <div className="flex items-center">
              <Users className="w-[36px] h-[36px] text-[#D3D3D3] ml-[20px]" strokeWidth={1.5} />
              <div>
                <h3 className="text-[30px] font-bold text-[#353353] leading-none mb-[5px]">427</h3>
                <p className="text-[16px] text-[#5E5C7F] m-0">عميل راضٍ</p>
              </div>
            </div>
          </div>

          {/* Fact 4 */}
          <div className="w-1/2 md:w-1/4 px-[15px]">
            <div className="flex items-center">
              <Award className="w-[36px] h-[36px] text-[#D3D3D3] ml-[20px]" strokeWidth={1.5} />
              <div>
                <h3 className="text-[30px] font-bold text-[#353353] leading-none mb-[5px]">35</h3>
                <p className="text-[16px] text-[#5E5C7F] m-0">جائزة فائزة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
