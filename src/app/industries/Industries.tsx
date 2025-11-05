'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { industriesData } from './industriesData';
import Button from '@/components/ui/button/Button';
import LeadFormModal from '@/components/shared/contact/LeadFormModal';

const Industries: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <section id='explore-industries' className="bg-[#F8F8F8] py-12 md:pb-[100px]">
      <div style={{maxWidth: "1280px"}} className="container mx-auto px-4">
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-10 h-[2px] bg-[#1D1D1B]"></span>
              <span className="text-[14px] font-medium border border-[#009FE3] text-[#009FE3] px-4 py-2 rounded-md">
                Our Expertise 
              </span>
            </div>

          <h2 className="heading mb-3">
            Innovative Plastic Solutions Across Industries
          </h2>

          <p className="max-w-2xl mx-auto text-[#67696B] md:mx-0">
            We provide high-performance plastic solutions tailored to meet the
            unique demands of diverse industries. From automotive to packaging,
            our materials enhance efficiency, durability, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {industriesData.map((industry, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start gap-8 md:flex-row"
            >
              <div className="relative w-full h-full md:w-1/2">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="flex flex-col justify-center md:w-1/2">
                <h3 className="mb-3 text-xl font-bold md:text-2xl">
                  {industry.title}
                </h3>

                <p className="mb-3 text-sm text-[#67696B] md:text-base">
                  {industry.description}
                </p>

                <ul className="mb-5 space-y-1 text-sm text-[#67696B] list-disc list-inside md:text-base">
                  {industry.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="grid grid-cols-4 gap-4 mb-5">
                  {industry.benefits.map(benefit => (
                    <div
                      key={benefit.label}
                      className="bg-white border border-[#EDEDED] flex flex-col items-start gap-4 rounded-lg p-4"
                    >
                      <div className="h-10 w-10 text-[#009FE3]">{benefit.icon}</div>
                      <span className="font-medium text-[#1D1D1B] text-base">
                        {benefit.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Button type="button" onClick={() => setIsOpen(true)} className="btn btn-primary w-fit">
                  Request Info →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <LeadFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default Industries;
