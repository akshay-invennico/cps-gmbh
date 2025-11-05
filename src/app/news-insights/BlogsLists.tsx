"use client";

import React from "react";
import BlogCard, { BlogCardProps } from "@/components/shared/blogs/Card";
import FeaturedCard from "@/components/shared/blogs/FeaturedCard";

interface BlogsListsProps {
  featured: BlogCardProps;
  otherBlogs: BlogCardProps[];
  allBlogs: BlogCardProps[];
}

const BlogsLists: React.FC<BlogsListsProps> = ({
  featured,
  otherBlogs,
  allBlogs,
}) => {
  return (
    <div className="bg-[#F8F8F8]">
      <section style={{maxWidth: "1280px"}} className="container mx-auto px-4 py-12">
      <h2 className="text-[26px] md:text-[32px] font-bold mb-8 text-[#1D1D1B]">
        Latest Insights
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="mb-10">
          <FeaturedCard {...featured} slug={featured.id} />
        </div>

        <div className="space-y-4">
          {otherBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} slug={blog.id} />
          ))}
        </div>
      </div>

      {allBlogs.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {allBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} slug={blog.id}/>
          ))}
        </div>
      )}
    </section>
    </div>
  );
};

export default BlogsLists;
