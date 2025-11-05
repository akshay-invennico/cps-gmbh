"use client"
import Button from '@/components/ui/button/Button';
import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('explore-careers');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1 className="heading text-[54px] text-[#1D1D1B] mb-4">
            Your Next Career Starts Here
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#67696B] mb-8 sm:mb-4">
            Join a team where innovation meets opportunity. At CPS, we value creativity
            and collaboration, empowering you to make an impact every day.
          </p>

          <Button
            onClick={handleScroll}
            type='button'
            className="btn btn-primary"
            aria-label="View Open Positions"
          >
            View Open Positions &rarr;
          </Button>
        </div>

        <div>
          <Image
            src="/assets/careers-hero.jpg"
            alt="Diverse group of professionals collaborating in a meeting"
            layout="responsive"
            width={800}
            height={300}
            objectFit="cover"
            className="w-full h-80 sm:h-96 lg:h-[500px] rounded-lg"
          />

        </div>
      </div>
    </section>
  );
};

export default Hero;