"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Users, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Breadcrumb, { BreadcrumbItem } from "@/components/ui/breadcrumb/Breadcrumb";
import routes from "@/app/routes";
import Link from "next/link";
import FeaturedCard from "@/components/shared/blogs/FeaturedCard";
import BlogCard from "@/components/shared/blogs/Card";
import { blogData } from "@/components/shared/blogs/blogs";
import CTASection from "@/components/shared/cta/CallToAction";
import { ctaData } from "@/components/shared/cta/ctaData";

const breadcrumb: BreadcrumbItem[] = [
  { label: "News & Insights", href: routes.newsAndInsights },
  { label: "Sustainable Plastics: The Future of Industrial Materials" },
];

const BlogDetailsPage = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Blog Article",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const featured = blogData[0];
  const others = blogData.slice(1, 5);

  return (
    <div className="bg-[#F8F8F8]">
      <section style={{maxWidth: "1280px"}} className="container mx-auto px-4 py-12 mt-20">
        <Breadcrumb items={breadcrumb} textColor="#1D1D1B" linkColor="#67696B" />

        <div className="flex gap-3 mt-6">
          <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-3 py-1 rounded-md">
            Manufacturing
          </span>
        </div>

        <h1 className="text-2xl md:text-4xl font-semibold text-[#1D1D1B] mt-4">
          Sustainable Plastics: The Future of Industrial Materials
        </h1>

        <div className="flex items-center text-[#67696B] gap-4 text-sm mt-4">
          <div className="flex items-center gap-1">
            <Users size={16} /> Eco Innovators
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} /> 12 Sep, 2025
          </div>
        </div>

        <div className="relative mt-6 w-full h-[250px] md:h-[420px] rounded-xl overflow-hidden">
          <Image
            src="/assets/ski-image.jpg"
            alt="Blog"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

          <div className="lg:col-span-2 text-[#4A4A4A] text-base leading-7 space-y-6">
            <h2 className="text-xl font-semibold text-[#1D1D1B]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
            </p>
          </div>

          <div className="space-y-8">

            <div className="bg-white rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 text-[#1D1D1B]">Share Article</h4>
              <div className="flex items-center gap-3 text-[#67696B]">
                <button className="p-2 bg-white border border-[#009FE3] rounded-full" onClick={handleShare}>
                  <Share2 size={18} color="#009FE3" />
                </button>
                <button className="p-2 bg-white border border-[#009FE3] rounded-full">
                  <Facebook size={18} color="#009FE3" />
                </button>
                <button className="p-2 bg-white border border-[#009FE3] rounded-full">
                  <Twitter size={18} color="#009FE3" />
                </button>
                <button className="p-2 bg-white border border-[#009FE3] rounded-full">
                  <Linkedin size={18} color="#009FE3" />
                </button>
              </div>
            </div>

            <div className="bg-[#1D1D1B] rounded-xl p-6">
              <h4 className="font-semibold text-white mb-2 text-[20px]">Explore Our Solutions</h4>
              <p className="text-white text-sm mb-5">
                Discover how CPS materials power real-world innovations — from advanced products to their industrial applications.
              </p>

              <Link href={routes.products} className="w-full btn btn-primary mb-2">
                View Products ➜
              </Link>

              <Link href={routes.industries} className="w-full btn btn-outline-primary">
                Explore Applications ➜
              </Link>
            </div>

          </div>
        </div>


        <div className="py-12">
          <h2 className="text-[26px] md:text-[32px] font-bold mb-8 text-[#1D1D1B]">
            Related Insights
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="mb-10">
              <FeaturedCard {...featured} />
            </div>

            <div className="space-y-4">
              {others.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
              ))}
            </div>
          </div>
        </div>

      </section>
        <CTASection data={ctaData} />
    </div>
  );
};

export default BlogDetailsPage;
