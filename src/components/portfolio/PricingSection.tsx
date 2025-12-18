import React from 'react';

const pricingPlans = [
  {
    title: 'الأساسية',
    description: 'خيار بسيط لكنه فعال لإدارة أعمالك',
    support: 'دعم بريد إلكتروني',
    price: '9',
    period: 'شهرياً',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/price-1-14.svg',
    recommended: false,
  },
  {
    title: 'المميزة',
    description: 'منتجات غير محدودة مع تكامل التطبيقات والمزيد من الميزات',
    support: 'دعم أيام العمل',
    price: '49',
    period: 'شهرياً',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/price-2-15.svg',
    recommended: true,
  },
  {
    title: 'الاحترافية',
    description: 'خيار مثالي للشركات الكبيرة والأفراد',
    support: 'دعم على مدار الساعة',
    price: '99',
    period: 'شهرياً',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/price-3-16.svg',
    recommended: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-[110px] bg-[#F9F9FF]">
      <div className="container mx-auto px-[15px] max-w-[1140px]">
        {/* Section Title */}
        <h2 className="text-[36px] font-bold text-[#353353] mb-[60px] relative">
          خطط الأسعار
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center text-center bg-white p-[30px] rounded-[20px] transition-all duration-300 group
                ${plan.recommended 
                  ? 'z-10 shadow-[0px_5px_20px_0px_rgba(108,108,229,0.5)] py-[40px] px-[30px]' 
                  : 'z-0 shadow-[0px_5px_20px_0px_rgba(69,67,96,0.1)] my-[20px] md:my-[30px]'
                }
                ${index === 0 ? 'md:rounded-l-none' : ''}
                ${index === 2 ? 'md:rounded-r-none' : ''}
              `}
            >
              {/* Recommended Ribbon */}
              {plan.recommended && (
                <div className="absolute top-0 right-0 overflow-hidden w-[100px] h-[100px] z-20">
                  <span className="absolute block w-[225px] p-[5px_0] bg-[#6C6CE5] shadow-[0_5px_10px_rgba(0,0,0,0.1)] text-white text-[12px] font-semibold text-center uppercase translate-x-[30%] translate-y-[100%] rotate-[45deg] right-[-75px] top-[-30px]">
                    الأكثر طلباً
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="mb-[20px]">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-[80px] h-[80px] mx-auto object-contain"
                />
              </div>

              {/* Plan Name */}
              <h2 className="text-[24px] font-bold text-[#353353] mt-0 mb-[15px]">
                {plan.title}
              </h2>

              {/* Descriptions */}
              <p className="text-[#5E5C7F] text-[16px] leading-[1.6] mb-[10px]">
                {plan.description}
              </p>
              <p className="text-[#5E5C7F] text-[16px] leading-[1.6] mb-[20px]">
                {plan.support}
              </p>

              {/* Price */}
              <h3 className="text-[36px] font-bold text-[#353353] flex items-start justify-center mb-[30px]">
                <em className="text-[18px] not-italic ml-[5px] mt-[10px] font-medium">$</em>
                {plan.price}
                <span className="text-[14px] font-normal text-[#8B88B1] mr-[5px] self-end mb-[8px]">
                  {plan.period}
                </span>
              </h3>

              {/* CTA Button */}
              <a
                href="#"
                className="inline-block bg-[#FF4C60] text-white text-[16px] font-bold py-[12px] px-[32px] rounded-[30px] transition-all duration-300 hover:opacity-90 shadow-[0px_5px_20px_0px_rgba(255,76,96,0.4)]"
              >
                ابدأ الآن
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
