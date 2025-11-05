"use client";

import React from "react";
import Breadcrumb, { BreadcrumbItem } from "@/components/ui/breadcrumb/Breadcrumb";
import { blogData } from "@/components/shared/blogs/blogs";
import Button from "@/components/ui/button/Button";

interface Data {
  title: string;
  paragraph: string;
  breadcrumb: BreadcrumbItem[];
}

const data: Data = {
  title: "Stay Ahead with Industry Insights",
  paragraph:
    "Explore the latest news, expert articles, and technical resources from CPS GmbH. Discover innovations, trends, and solutions shaping the world of high-performance plastics and technical films.",
  breadcrumb: [{ label: "News & Insights" }],
};

const Hero = ({ selectedCategory, setSelectedCategory }: {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}) => {

  const categories = ["All Articles", ...Array.from(new Set(blogData.map(b => b.category)))];

  const { title, paragraph, breadcrumb } = data;

  return (
    <div className="bg-[#BEE3F3] w-full py-32">
      <div className="max-w-7xl m-auto px-4">
        <Breadcrumb items={breadcrumb} textColor="#1D1D1B" linkColor="#67696B" />

        <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold text-[#1D1D1B] mb-4 leading-tight">
          {title}
        </h1>

        <p className="text-[#67696B] max-w-3xl text-lg font-medium mb-8">
          {paragraph}
        </p>

        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <Button
              type="button"
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer
                ${selectedCategory === cat
                  ? 'bg-[#009FE3] text-white'
                  : 'bg-[#E9ECEF] text-[#67696B] hover:bg-gray-300'
                }
              `}
            >
              {cat}
            </Button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Hero;
