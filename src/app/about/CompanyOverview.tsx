import React from 'react';
import Image from 'next/image';

const CompanyOverview: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 md:mb-20">
          
          <div className="space-y-6 lg:pt-8">
            <div className="inline-block relative pb-1">
              <span className="inline-block border text-[#009FE3] border-[#009FE3] px-4 py-2 rounded-[6px] text-sm font-medium">
                Who We Are
              </span>
            </div>

            <h2 className="heading text-[#1D1D1B]">
              A German Pioneer in High-Performance Films and Plastics
            </h2>

            <p className="text-lg text-[#67696B] max-w-lg">
              CPS GmbH is a trusted manufacturer specializing in advanced extrusion films, UHMWPE, 
              HDPE, and technical plastics.
            </p>
          </div>

          <div className="aspect-w-16 aspect-h-9 sm:aspect-h-10 lg:aspect-none rounded-lg overflow-hidden border border-gray-200">
            <Image 
              src={'/assets/company-overview2.jpg'}
              alt="Engineers discussing work in an industrial setting"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          <div className="aspect-w-16 aspect-h-9 sm:aspect-h-8 rounded-lg overflow-hidden border border-gray-200 order-2 lg:order-1">
            <Image 
              src={'/assets/company-overview1.jpg'}
              alt="Team of industrial workers standing together in a warehouse"
              layout="responsive"
              width={800}
              height={500}
              objectFit="cover"
              className="w-full h-full"
            />
          </div>

          <div className="text-[#67696B] space-y-4 pt-4 order-1 lg:order-2">
            <p>
              **CPS GmbH – Creative Plastic Solution** is your reliable and innovative partner for plastic 
              products and customized developments. Our core competencies lie in the production of 
              high-quality films for use in the water and winter sports industries, as well as 
              technical films and tubular films for other industries such as automotive and medical.
            </p>
            <p>
              With our three locations in Rohrdorf, Vreden, and Shaoxing (China), we have a strong 
              presence and are able to respond quickly and flexibly to national and international 
              market demand.
            </p>
            <p>
              You, too, can benefit from our many years of industry expertise, our experienced 
              team, and our continuously evolving technologies.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompanyOverview;