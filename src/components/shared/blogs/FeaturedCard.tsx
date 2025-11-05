"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Calendar, Users } from "lucide-react";
import { BlogCardProps } from "./Card";
import { useRouter } from "next/navigation";
import routes from "@/app/routes";

const FeaturedCard: React.FC<BlogCardProps> = ({
  title,
  category,
  image,
  author,
  date,
  slug,
}) => {
  const router = useRouter();
  
    const handleClick = () => {
      if (!slug) return;
      router.push(`${routes.newsAndInsights}/${slug}`);
    };

  return (
    <div onClick={handleClick} className="w-full bg-white border border-gray-100 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg">
      <div className="relative w-full h-[260px] md:h-[300px] lg:h-[380px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-md w-fit">
          {category}
        </span>

        <h2 className="text-xl lg:text-[22px] font-semibold leading-snug text-[#1D1D1B] hover:text-sky-700 transition-colors">
          {title}
        </h2>

        <div className="flex items-center text-[#67696B] text-sm gap-4">
          <span className="flex items-center gap-1">
            <Users size={16} /> {author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={16} /> {date}
          </span>
        </div>

        <div className="mt-2">
          <ArrowUpRight size={22} className="text-black" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
