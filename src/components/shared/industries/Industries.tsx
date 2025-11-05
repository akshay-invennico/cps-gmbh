import React from 'react';
import Link from 'next/link';
import { INDUSTRIES } from './industriesData';
import IndustryCard from './IndustryCard';
import routes from '@/app/routes';

const IndustriesList = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className='max-w-7xl mx-auto'>
        <div className="pt-16 px-4">
          <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-10 h-[2px] bg-[#1D1D1B]"></span>
              <span className="text-[14px] font-medium border border-[#009FE3] text-[#009FE3] px-4 py-2 rounded-md">
                Industries We Serve
              </span>
            </div>

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end">
            <h1 className="heading max-w-4xl text-[#1D1D1B]">
              Trusted across diverse sectors where performance, safety, and reliability matter most.
            </h1>

            <div className="max-w-xl">
              <div>
                <Link href={routes.industries} className="btn btn-primary">
                  Explore All Industries →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 pb-24 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {INDUSTRIES.map((product, index) => (
              <IndustryCard
                key={index}
                title={product.title}
                subtitle={product.subtitle}
                imageSrc={product.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesList;