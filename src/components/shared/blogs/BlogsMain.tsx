import { blogData } from "./blogs";
import BlogCard from "./Card";

const BlogsMain = () => {
  return (
    <section className="relative w-full pb-[100px] pt-[36px] bg-[#F8F8F8] flex flex-col items-center text-center">
      <div className="max-w-7xl w-full px-4">
        <div className="mb-10">
          <div className="inline-block mb-5">
          <div className="w-[2px] h-8 mb-3 bg-[#1D1D1B] mx-auto"></div>
            <span className="text-[14px] font-medium border border-[#009FE3] text-[#009FE3] px-4 py-2 rounded-md">
              Latest Insights
            </span>
          </div>

          <h2 className="heading text-[#1D1D1B]">
            News, updates, and knowledge from CPS GmbH.
          </h2>

          <p className="mt-4 text-[#67696B] leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Your hub for articles, updates, and technical knowledge.
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
          {blogData.slice(0,4).map((blog) => (
            <BlogCard key={blog.id} {...blog} slug={blog.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsMain;
