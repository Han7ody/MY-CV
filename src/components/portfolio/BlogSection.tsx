import React from 'react';

const posts = [
  {
    id: 1,
    category: 'مراجعات',
    title: 'أفضل 5 أدوات لتطوير التطبيقات لمشروعك',
    date: '09 فبراير، 2024',
    author: 'مهند',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/1-26.svg',
    link: '#',
    color: '#FF4C60',
  },
  {
    id: 2,
    category: 'دروس',
    title: 'مفاهيم خاطئة شائعة حول الدفع الإلكتروني',
    date: '07 فبراير، 2024',
    author: 'مهند',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/2-27.svg',
    link: '#',
    color: '#FFD15C',
  },
  {
    id: 3,
    category: 'أعمال',
    title: '3 أشياء يجب معرفتها عن الشركات الناشئة',
    date: '06 فبراير، 2024',
    author: 'مهند',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/3-28.svg',
    link: '#',
    color: '#6C6CE5',
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-[#F9F9FF]">
      <div className="container px-[15px] mx-auto max-w-[1140px]">
        {/* Section Title */}
        <h2 className="text-[36px] font-bold text-[#353353] mb-[60px] relative">
          آخر المقالات
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-[20px] shadow-[0px_5px_20px_0px_rgba(69,67,96,0.1)] overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image & Tag */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <a href={post.link} className="block w-full h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
                <a
                  href={post.link}
                  className="absolute top-5 right-5 z-10 px-3 py-1 rounded-bl-[15px] rounded-br-[15px] rounded-tl-[15px] text-white text-[12px] font-bold"
                  style={{ backgroundColor: post.color }}
                >
                  {post.category}
                </a>
              </div>

              {/* Content */}
              <div className="p-[30px]">
                <h3 className="text-[20px] font-bold text-[#353353] mb-4 leading-snug group-hover:text-[#FF4C60] transition-colors duration-300">
                  <a href={post.link}>{post.title}</a>
                </h3>
                <ul className="flex items-center text-[14px] text-[#8B88B1] gap-3 list-none p-0 m-0">
                  <li className="flex items-center">
                    {post.date}
                  </li>
                  <li className="before:content-['•'] before:ml-3 flex items-center">
                    {post.author}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
