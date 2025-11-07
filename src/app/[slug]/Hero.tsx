"use client";
import Image from "next/image";
import React, { useState } from "react";
import LeadFormModal from "@/components/shared/contact/LeadFormModal";
import Button from "@/components/ui/button/Button";

export interface Product {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  imageUrl: string;
  dataSheetUrl: string;
  infoRequestUrl: string;
  backgroundColor: string;
}

const Hero: React.FC<{ product: Product }> = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadCatalogue = () => {
    const fileUrl = "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.target = "_blank";
    link.download = "CPS-Catalogue.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="w-full bg-[#BEE3F3] py-28 md:py-0 md:min-h-screen flex items-center font-inter"
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-[#1D1D1B] text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold leading-tight tracking-tight">
              {product.name}
            </h1>

            <p className="text-[20px] text-[#67696B] max-w-xl lg:max-w-none mx-auto lg:mx-0">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                type="button"
                onClick={handleDownloadCatalogue}
                className="btn btn-primary"
              >
                <Image
                  src="/icons/download-icon.svg"
                  alt="Download Icon"
                  height={22}
                  width={22}
                  className="mr-2"
                />
                Download Data Sheet
              </Button>

              <Button
                type="button"
                onClick={() => setIsOpen(true)}
                className="btn btn-outline-primary"
              >
                Request Info →
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-lg h-auto flex items-center justify-center relative">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={600}
                height={600}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <LeadFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default Hero;
