"use client"
import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Calendar, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import routes from "@/app/routes";
import Button from "@/components/ui/button/Button";

export interface BlogCardProps {
  id: number;
  title: string;
  category: string;
  image: string;
  author: string;
  date: string;
  slug?: string | number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  category,
  image,
  author,
  date,
  slug
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (!slug) return;
    router.push(`${routes.newsAndInsights}/${slug}`);
  };
  return (
    <div onClick={handleClick} className="group w-full bg-[#F8F8F8] rounded-xl border border-[#EDEDED] transition-all duration-300 p-4 flex flex-col sm:flex-row gap-4 cursor-pointer">
      <div className="relative w-full sm:w-32 h-40 sm:h-full rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col justify-between flex-grow">
        <div className="text-left">
          <span className="text-sm font-medium text-[#009FE3] bg-[#E9F8FF] px-2 py-1 rounded-md">
            {category}
          </span>
          <h3 className="text-black font-semibold text-base sm:text-[22px] leading-[32px] mt-3 hover:text-sky-700 transition-colors duration-200">
            {title}
          </h3>
        </div>

        <div className="flex items-center text-[#67696B] text-xs md:text-sm mt-3 gap-3">
          <div className="flex items-center gap-1">
            <Users size={14} /> {author}
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} /> {date}
          </div>
        </div>
      </div>

       <Button
          type="button"
          aria-label="More"
          className="h-[30px] w-[30px] flex items-center justify-center bg-[#009FE3] hover:bg-[#BEE3F3] rounded-full p-2 transition-colors duration-300"
        >
          <ArrowRight
            size={20}
            color="#FFFFFF"
            className="block group-hover:hidden transition-transform duration-300"
          />
          <ArrowUpRight
            size={20}
            color="#FFFFFF"
            className="hidden group-hover:block transition-transform duration-300"
          />
        </Button>
    </div>
  );
};

export default BlogCard;
