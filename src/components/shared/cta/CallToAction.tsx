"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import routes from "@/app/routes";
import LeadFormModal from "../contact/LeadFormModal";
import Button from "@/components/ui/button/Button";

interface CTAButton {
  label: string;
  type?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

interface CTASectionProps {
  badgeText?: string;
  heading: string;
  subtitle: string;
  buttons?: CTAButton[];
  imageSrc?: string;
  imageAlt?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

interface CallToAction {
  data: CTASectionProps;
}

const CTASection: React.FC<CallToAction> = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-r text-white py-[100px]`}
      style={{ backgroundImage: `linear-gradient(to right, ${data.gradientFrom}, ${data.gradientTo})` }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="max-w-5xl z-10">
          {data.badgeText && (
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-10 h-[2px] bg-white"></span>
              <span className="text-[14px] font-medium border border-white px-4 py-2 rounded-md">
                {data.badgeText}
              </span>
            </div>
          )}

          <h2 className="heading mb-3">{data.heading}</h2>

          <p className="text-white text-base md:text-lg leading-relaxed mb-5">
            {data.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsOpen(true)}
                >
                  Request Info →
                </Button>

                <Link
                  href={routes.industries}
                  className="btn btn-outline-secondary"
                >
                  Explore Applications
                </Link>
              </div>
        </div>

        {data.imageSrc && (
          <div className="hidden relative w-full md:w-1/2 h-56 md:h-72 md:flex justify-end">
            <Image
              src={data.imageSrc}
              alt={data.imageAlt || 'Cta Image'}
              className="absolute bottom-0 right-0 w-full h-full object-contain opacity-60"
              height={100}
              width={100}
            />
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>

      <LeadFormModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    </section>
  );
};

export default CTASection;
