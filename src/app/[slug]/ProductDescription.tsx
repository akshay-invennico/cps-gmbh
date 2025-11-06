"use client";
import React, { JSX } from "react";
import Link from "next/link";
import Image from "next/image";

interface DownloadLink {
  label: string;
  url: string;
  icon: "dataSheet" | "safety" | "technical" | "compliance";
}

interface Certification {
  name: string;
  imageUrl: string;
  altText: string;
}

interface Specification {
  property: string;
  value: string;
}

interface FeatureBenefit {
  title: string;
  description: string;
}

type ApplicationListItem = string;

export interface ProductDetailsContent {
  title: string;
  mainDescription: string;
  downloads: DownloadLink[];
  certifications: Certification[];
  specifications: Specification[];
  applications: {
    heading: string;
    description: string;
    list: ApplicationListItem[];
  };
  featuresBenefits: {
    heading: string;
    description: string;
    list: FeatureBenefit[];
  };
}

const ProductDescription: React.FC<{ content: ProductDetailsContent }> = ({ content }) => {
  return (
    <div className="w-full bg-[#F8F8F8] py-12 md:py-[100px] font-inter">
      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:grid lg:grid-cols-4 lg:gap-12 xl:gap-16">
          <aside className="lg:col-span-1 mb-10 lg:mb-0 lg:sticky lg:top-24 self-start">
            <div className="mb-8">
              <h3 className="text-[22px] font-bold text-[#000000] mb-5 leading-7">Resource Downloads</h3>
              <nav className="space-y-3 mb-7">
                {content.downloads.map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    className="flex items-center text-base font-medium text-[#009FE3] transition duration-150 rounded-lg p-2 hover:bg-gray-50 -ml-2"
                  >
                    <Image src="/icons/download-icon-primary.svg" alt="Download" height={22} width={22} className="mr-2" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="text-[22px] font-bold text-[#000000] mb-5 leading-7">Certifications & Standards</h3>
              <div className="flex flex-wrap gap-2">
                {content.certifications.map((cert) => (
                  <div key={cert.name} className="flex flex-col items-center">
                    <Image
                      src={cert.imageUrl}
                      alt={cert.altText}
                      className="w-28 h-20 border border-[#EDEDED] rounded-lg object-cover"
                      height={80}
                      width={120}
                    />
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="heading text-[#1D1D1B] mb-5">
              {content.title}
            </div>
            <p className="text-[#67696B] leading-[26px] mb-10">
              {content.mainDescription}
            </p>

            <div className="mb-10 lg:mb-12">
              <h3 className="text-2xl font-medium text-[#1D1D1B] mb-6 leading-8">Specifications</h3>

              <div className="border border-[#EDEDED] overflow-hidden">
                <div className="flex">
                  <div className="w-1/3 md:w-1/4 py-4 px-6 bg-[#EDEDED] text-sm md:text-[20px] font-medium text-[#1D1D1B] border-r border-b border-[#EDEDED]">
                    Property
                  </div>
                  <div className="w-2/3 md:w-3/4 py-4 px-6 text-sm md:text-[20px] font-medium text-[#1D1D1B] bg-[#EDEDED] border-b border-[#EDEDED] border-r">
                    Specifications
                  </div>
                </div>

                {content.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex`}
                  >
                    <div className="w-1/3 md:w-1/4 py-4 px-6 bg-[#E8F8FF] border-b text-sm md:text-base font-medium text-[#1D1D1B] border-r border-[#EDEDED]">
                      {spec.property}
                    </div>
                    <div className="w-2/3 md:w-3/4 py-4 px-6 text-sm md:text-base text-[#1D1D1B] bg-white border-b border-[#EDEDED] border-r">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-medium text-[#1D1D1B] mb-4">
                {content.applications.heading}
              </h3>
              <p className="text-[#67696B] mb-4">
                {content.applications.description}
              </p>
              <ul className="list-disc marker:text-[#1D1D1B] space-y-3 pl-5">
                {content.applications.list.map((item, index) => (
                  <li key={index} className="text-base text-[#1D1D1B]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-medium text-[#1D1D1B] mb-4">
                {content.featuresBenefits.heading}
              </h3>
              <p className="text-[#67696B] mb-4">
                {content.featuresBenefits.description}
              </p>
              <ul className="list-disc marker:text-[#1D1D1B] space-y-3 pl-5">
                {content.featuresBenefits.list.map((item, index) => (
                  <li key={index} className="text-base text-[#1D1D1B]">
                    <span className="font-semibold">{item.title}</span> – {item.description}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
