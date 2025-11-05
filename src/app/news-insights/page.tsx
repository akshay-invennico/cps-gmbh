"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import BlogsLists from "./BlogsLists";
import CTASection from "@/components/shared/cta/CallToAction";
import { ctaData } from "@/components/shared/cta/ctaData";
import { blogData } from "@/components/shared/blogs/blogs";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");

  const filteredBlogs =
    selectedCategory === "All Articles"
      ? blogData
      : blogData.filter((blog) => blog.category === selectedCategory);

  const featured = filteredBlogs[0];
  const others = filteredBlogs.slice(1, 5);
  const allBlogs = filteredBlogs.slice(5);

  return (
    <div>
      <Hero
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <BlogsLists
        featured={featured}
        otherBlogs={others}
        allBlogs={allBlogs}
      />
      <CTASection data={ctaData} />
    </div>
  );
};

export default Page;
