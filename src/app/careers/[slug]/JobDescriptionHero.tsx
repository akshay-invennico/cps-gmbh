"use client";

import React, { useState } from "react";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import Breadcrumb, { BreadcrumbItem } from "@/components/ui/breadcrumb/Breadcrumb";
import Button from "@/components/ui/button/Button";
import CareerModal from "./CareerModal";

interface JobData {
  title: string;
  location: string;
  type: string;
  breadcrumb: BreadcrumbItem[];
}

const mockJobData: JobData = {
  title: "Machine and plant operator",
  location: "Vreden location",
  type: "Full Time",
  breadcrumb: [
    { label: "Careers", href: "/careers" },
    { label: "Job Descriptions" },
  ],
};

const JobDescriptionHero = () => {
  const [showModal, setShowModal] = useState(false);
  const { title, location, type, breadcrumb } = mockJobData;

  return (
    <section className="bg-[#BEE3F3] min-h-[400px] md:min-h-[500px] w-full flex items-center justify-center py-24 overflow-hidden">
      <div style={{maxWidth: "1280px"}} className="container px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="px-4 md:px-0 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
            <div className="flex-1 min-w-0 pr-0 md:pr-4">
              <Breadcrumb items={breadcrumb} textColor="#1D1D1B" linkColor="#67696B" />
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold text-[#1D1D1B] mb-4 leading-[50px] md:leading-[75px]">
                {title}
              </h1>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-[#67696B] font-medium text-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#67696B] flex-shrink-0" />
                  <span>{location}</span>
                </div>
                <span className="hidden sm:inline-block text-[#67696B]">•</span>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-[#67696B] flex-shrink-0" />
                  <span>{type}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-8 md:mt-0 md:ml-8 flex-shrink-0">
          <Button
            type="button"
            onClick={() => setShowModal(true)}
            className="btn btn-primary"
          >
            Apply Now
            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      <CareerModal showModal={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default JobDescriptionHero;
