'use client'
import React, { useState, useMemo } from 'react';
import JobCard, { jobData } from '@/components/shared/job/Job';

const Opportunities: React.FC = () => {
  const allCategories = useMemo(() => {
    const categories = Array.from(new Set(jobData.map(job => job.category)));
    return ['All Jobs', ...categories];
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);

  const filteredJobs = useMemo(() => {
    if (selectedCategory === 'All Jobs') {
      return jobData;
    }
    return jobData.filter(job => job.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section id='explore-careers' className="bg-[#BEE3F3] py-16 md:py-24 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-6">
          <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-10 h-[2px] bg-[#1D1D1B]"></span>
              <span className="text-[14px] font-medium border border-[#009FE3] text-[#009FE3] px-4 py-2 rounded-md">
                Current Opportunities
              </span>
            </div>
          <h1 className="heading text-[#1D1D1B] mb-3 lg:mb-0 max-w-2xl">
            Step Into Your Next Opportunity
          </h1>
          <p className="max-w-2xl mx-auto text-[#67696B] md:mx-0">
            Explore our latest openings and find a role that matches your skills, passion, and career goals. At CPS, we believe in growth, innovation, and creating a workplace where everyone can thrive.
          </p>
        </div>

        <div className="mb-10 overflow-x-auto whitespace-nowrap pb-3">
          <div className="inline-flex space-x-3 sm:space-x-4">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`
                px-5 py-4 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer
                ${selectedCategory === category
                  ? 'bg-[#009FE3] text-white'
                  : 'bg-gray-200 text-[#1D1D1B] hover:bg-gray-300'
                }
              `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))
          ) : (
            <div className="md:col-span-2 text-center py-16 text-[#67696B] text-lg">
              No jobs found for the category: {selectedCategory}. Please check back soon!
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Opportunities


