"use client"
import LeadFormModal from '@/components/shared/contact/LeadFormModal';
import Button from '@/components/ui/button/Button';
import React, { useState } from 'react';

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  catalogueLink?: string;
  requestInfoLink?: string;
}

const ProductsCta: React.FC<CtaSectionProps> = ({
  title = 'Find the Right Material?',
  subtitle = 'From packaging and automotive to medical and technical uses, our experts can guide you to the right CPS product for your needs.',
  requestInfoLink = '#request-info',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadCatalogue = () => {
    const fileUrl = "https://www.cps-gmbh.net/wp-content/uploads/2022/07/618_EC_DS_clear_201110-10813.pdf";

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
      className="relative py-20 md:py-40 overflow-hidden"
      style={{
        backgroundImage: `url('/assets/products-cta.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm leading-[100%] font-medium text-[#009FE3] border border-[#009FE3] inline-block px-4 py-2 mb-7 transition duration-300 rounded-md">
          Let&apos;s find the perfect solution together.
        </p>
        <h2 className="heading text-white mb-5">{title}</h2>
        <p className="text-base sm:text-[20px] text-white mb-5 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button type='button' onClick={handleDownloadCatalogue} className="btn btn-primary">
            Download Catalogue &rarr;
          </Button>

          <Button type='button' onClick={() => setIsOpen(true)} className="btn btn-outline-primary">
            Request Info
          </Button>
        </div>
      </div>

      <LeadFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default ProductsCta;
