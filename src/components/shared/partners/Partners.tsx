import React from 'react';
import Image from 'next/image';
import { partnersData, Partner } from './partnersData';


const partnersRow1: Partner[] = partnersData;
const partnersRow2: Partner[] = partnersData;

const PartnerLogoBox: React.FC<{ partner: Partner }> = ({ partner }) => {
  return (
    <div className="
        relative flex items-center justify-center 
        w-full h-[88px] 
        border border-[#EDEDED] 
        rounded-lg transition-shadow duration-300 
        bg-white
        p-4 sm:p-6
    ">
      <Image
        src={partner.src}
        alt={partner.alt}
        height={60}
        width={60}
      />
    </div>
  );
};

const Partners: React.FC = () => {
  return (
    <section className="bg-[#F8F8F8] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center px-4">

        <div className="relative inline-block mb-5">
          <div className="w-[2px] h-8 mb-3 bg-[#1D1D1B] mx-auto"></div>
          <span className="text-sm font-medium text-[#009FE3] border border-blue-200 rounded-full px-4 py-1 bg-blue-50">
            Our Partners
          </span>
        </div>

        <h2 className="mb-4 heading text-[#1D1D1B]">
          Trusted by Industry Leaders
        </h2>

        <p className="
            mx-auto mt-6 mb-12 sm:mb-10 
            max-w-3xl 
            text-base sm:text-lg text-[#67696B]
        ">
          We collaborate with top-tier partners across multiple industries to deliver high-performance materials and innovative solutions.
        </p>

        <div className="
            grid 
            gap-4 sm:gap-3 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-5
        ">

          {partnersRow1.map((partner) => (
            <div
              key={`row1-${partner.name}`}
              className="lg:col-span-1"
            >
              <PartnerLogoBox partner={partner} />
            </div>
          ))}

        </div>

        <div className="
            grid 
            gap-4 sm:gap-3 
            mt-3 sm:mt-3
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-5 lg:w-5/6 lg:mx-auto
        ">
          {partnersRow2.map((partner) => (
            <div
              key={`row2-${partner.name}`}
              className="lg:col-span-1"
            >
              <PartnerLogoBox partner={partner} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;