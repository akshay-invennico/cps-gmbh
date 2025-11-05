'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Button from '../../ui/button/Button';
import { TESTIMONIALS } from './testimonials'
import TestimonialCard from './TestimonialCard'

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = TESTIMONIALS.length;

  const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 1024;
  const itemsPerView = isLargeScreen ? 2 : 1;
  const maxIndex = totalItems - itemsPerView;


  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= maxIndex;
  const translationValue = isLargeScreen
    ? `calc(-${currentIndex * 50}% - ${currentIndex * 1.5}rem)`
    : `calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem)`;

  return (
    <section className="bg-[#BEE3F3] py-16 px-4 md:px-8 lg:px-16 overflow-hidden">

      <div className="max-w-7xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-10 h-[2px] bg-[#1D1D1B]"></span>
              <span className="text-[14px] font-medium border border-[#009FE3] text-[#009FE3] px-4 py-2 rounded-md">
                Trusted by Industries Worldwide
              </span>
            </div>

        <div className="flex justify-between items-end flex-wrap gap-4">
          <h2 className="heading text-[#1D1D1B] max-w-3xl">
            Here’s what our clients and partners say about working with CPS GmbH.
          </h2>

          <div className="flex space-x-1">
            <Button
              type="button"
              className={`p-3 rounded-lg cursor-pointer text-[#1D1D1B] transition-colors 
                ${!isPrevDisabled ? 'hover:bg-[#AFD2E2]' : 'bg-[#AFD2E2]'}`}
              onClick={handlePrev}
              disabled={isPrevDisabled}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={24} />
            </Button>
            <Button
              type="button"
              className={`p-3 rounded-lg cursor-pointer text-[#1D1D1B] transition-colors 
                ${!isNextDisabled ? 'hover:bg-[#AFD2E2]' : 'bg-[#AFD2E2]'}`}
              onClick={handleNext}
              disabled={isNextDisabled}
              aria-label="Next testimonial"
            >
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex space-x-2 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${translationValue})`
          }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="md:hidden mt-8 flex space-x-2 justify-center">
          {TESTIMONIALS.slice(0, totalItems - 1).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 cursor-pointer
                        ${index === currentIndex ? 'bg-blue-600 w-5 h-2' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
