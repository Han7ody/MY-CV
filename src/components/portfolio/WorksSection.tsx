import React, { useState } from "react";
import { Search, MoreHorizontal, Video, Music, Image as ImageIcon, Link as LinkIcon, RefreshCw } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  categories: string[];
  image: string;
  type: "image" | "content" | "video" | "audio" | "gallery" | "link";
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    title: "رسم توضيحي لإدارة المشاريع",
    category: "فني",
    categories: ["art"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/1-7.svg",
    type: "image",
    icon: <Search className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "شاشات تطبيق الضيوف",
    category: "إبداعي",
    categories: ["creative", "design"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/2-8.svg",
    type: "content",
    icon: <MoreHorizontal className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "إطار تطبيق التوصيل",
    category: "هوية بصرية",
    categories: ["branding"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/3-10.svg",
    type: "video",
    icon: <Video className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "تصميم تحفيزي للتهيئة",
    category: "إبداعي",
    categories: ["creative"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/4-11.svg",
    type: "audio",
    icon: <Music className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "تصميم ماك بوك",
    category: "فني، هوية بصرية",
    categories: ["art", "branding"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/5-12.svg",
    type: "gallery",
    icon: <ImageIcon className="w-5 h-5" />,
  },
  {
    id: 6,
    title: "مفهوم تطبيق متجر الألعاب",
    category: "إبداعي، تصميم",
    categories: ["creative", "design"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cff6d6ec-898e-4bd2-8c92-d81c5cd3246a-jthemes-net/assets/svgs/6-13.svg",
    type: "link",
    icon: <LinkIcon className="w-5 h-5" />,
  },
];

const filters = [
  { label: "الكل", value: "*" },
  { label: "إبداعي", value: "creative" },
  { label: "فني", value: "art" },
  { label: "تصميم", value: "design" },
  { label: "هوية بصرية", value: "branding" },
];

export const WorksSection = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "*" ? true : project.categories.includes(activeFilter)
  );

  return (
    <section id="works" className="py-20 bg-[#F9F9FF]">
      <div className="container mx-auto px-[15px] max-w-[1140px]">
        <h2 className="text-[36px] font-bold text-[#353353] mb-[60px] relative">
          أحدث الأعمال
        </h2>

        {/* Desktop Filters */}
        <ul className="hidden md:flex flex-wrap list-none p-0 mb-10 gap-x-8">
          {filters.map((filter) => (
            <li
              key={filter.value}
              className={`cursor-pointer text-[16px] font-bold transition-colors duration-300 ${
                activeFilter === filter.value ? "text-[#FF4C60]" : "text-[#353353] hover:text-[#FF4C60]"
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </li>
          ))}
        </ul>

        {/* Mobile Select */}
        <div className="block md:hidden mb-8">
          <select
            className="w-full h-[45px] px-4 rounded-[10px] border border-[#EEEEEE] text-[#5E5C7F] focus:outline-none bg-white"
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
          >
            {filters.map((filter) => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap -mx-[15px]">
          {filteredProjects.map((project) => (
            <div key={project.id} className="w-full sm:w-1/2 md:w-1/3 px-[15px] mb-[30px]">
              <div className="group relative overflow-hidden rounded-[20px] bg-white shadow-[0px_5px_20px_0px_rgba(69,67,96,0.1)] transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#353353] opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="text-white text-[14px] font-normal mb-2">{project.category}</span>
                  <h4 className="text-white text-[20px] font-bold mb-4">{project.title}</h4>
                  <div className="mt-2 w-10 h-10 bg-[#FF4C60] rounded-full flex items-center justify-center text-white">
                    {project.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center justify-center h-[48px] px-10 rounded-[30px] bg-[#FF4C60] text-white font-bold text-[16px] shadow-[0px_5px_20px_0px_rgba(255,76,96,0.4)] transition-all duration-300 hover:scale-105 active:scale-95">
            <RefreshCw className="w-4 h-4 ml-2" />
            تحميل المزيد
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
