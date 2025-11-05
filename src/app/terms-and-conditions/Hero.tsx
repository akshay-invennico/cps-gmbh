"use client";

import React from "react";
import Breadcrumb, { BreadcrumbItem } from "@/components/ui/breadcrumb/Breadcrumb";

interface Data {
  title: string;
  subtitle: string;
  paragraph: string;
  breadcrumb: BreadcrumbItem[];
}

const data: Data = {
  title: "Terms & Conditions",
  subtitle: "Effective Date: March 13, 2025",
  paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  breadcrumb: [
    { label: "Terms & Conditions" },
  ],
};

const Hero = () => {
  const { title, subtitle, paragraph, breadcrumb } = data;

  return (
    <div className="bg-[#BEE3F3] min-h-[400px] md:min-h-[500px] w-full flex items-center justify-between py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
          <div className="flex-1 min-w-0 pr-0 md:pr-4">
            <Breadcrumb items={breadcrumb} textColor="#1D1D1B" linkColor="#67696B" />
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold text-[#1D1D1B] mb-4 leading-[75px]">
              {title}
            </h1>
            <div className="flex flex-col items-start space-y-4 text-[#67696B] font-medium text-lg">
              <div>
                <p className="text-[#67696B]">{subtitle}</p>
              </div>
              <div>
                <p className="text-[#67696B]">{paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
