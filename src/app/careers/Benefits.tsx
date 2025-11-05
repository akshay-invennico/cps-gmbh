import React from "react";
import { careersData } from "./careersData";
import IndustryCard from "@/components/shared/industries/IndustryCard";

const Careers = () => {
  return (
    <section className=" bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="pt-16 pb-12 px-4 md:px-8 lg:px-16">
          <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-10 h-[2px] bg-[#1D1D1B]"></span>
              <span className="text-[14px] font-medium border border-[#009FE3] text-[#009FE3] px-4 py-2 rounded-md">
                Careers at CPS
              </span>
            </div>

          <div>
            <h1 className="heading text-[#1D1D1B] mb-5">
              Build Your Future with CPS
            </h1>
            <p className="text-[#67696B] max-w-2xl">
              Whether you’re an engineer, designer, or strategist, CPS offers a
              dynamic environment where innovation meets opportunity. Join us and
              shape the future of sustainable plastic solutions.
            </p>
          </div>
        </div>

        <div className="py-12 px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careersData.map((career, index) => (
              <IndustryCard
                key={index}
                title={career.title}
                subtitle={career.description}
                imageSrc={career.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
