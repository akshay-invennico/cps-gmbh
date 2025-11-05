"use client";

import React, { useState } from "react";
import { Download, MapPin, Calendar, PlayCircle } from "lucide-react";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import CareerModal from "./CareerModal";

const jobData = {
  releaseDate: "April 17, 2025",
  startOfWork: "From now on",
  location: "Heisenbergstraße 1, Vreden location, 48691, Germany",
  pdfLink: "https://www.cps-gmbh.net/wp-content/uploads/2022/07/618_EC_DS_clear_201110-10813.pdf",
  jobSummary:
    "CPS GmbH Oberlausitz Plastic Solution is your reliable and innovative partner for plastic products and customized developments. Our core competence is in the production of high-quality films for the water and winter sports industries, as well as technical films and tubular films for other industries such as automotive and medical. For our location in Vreden, we are looking for: Machine and plant operator for plastics technology m/f/d.",
  tasks: [
    "Independent operation of inline press systems after training",
    "Product-oriented quality control",
    "Ensuring the operational readiness of machines and equipment",
    "Machine equipment and settings according to respective materials",
    "Independent activation and deactivation of assigned systems",
  ],
  qualifications: [
    "Completed technical training (not a MUST)",
    "Experience as a machine operator desirable",
    "Working independently",
    "Physical resilience",
    "High motivation and willingness to perform",
    "Reliability",
    "Willingness to work 3 shifts (early, late, night)",
    "Good knowledge of German",
  ],
  offers: [
    "Interesting area of responsibility in an expanding company",
    "Personal work clothing and appropriate protective equipment",
    "Collective wage agreement, dirty work allowance, holiday and Christmas bonuses",
    "Company pension scheme",
    "Corporate benefits",
  ],
};



const CareersSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-white text-[#1D1D1B] py-10 md:py-16">
      <div style={{maxWidth: "1280px"}} className="container mx-auto px-6 md:px-12 grid lg:grid-cols-3 gap-10">
        <div className="h-fit lg:col-span-1 bg-[#EDEDED] rounded-xl shadow-sm p-8 space-y-6">
          <div className="flex items-center gap-3">
            <Calendar className="text-[#009FE3]" />
            <p>
              <strong>Release date</strong> <br /> {jobData.releaseDate}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <PlayCircle className="text-[#009FE3]" />
            <p>
              <strong>Start of work</strong> <br /> {jobData.startOfWork}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-[#009FE3]" />
            <p>
              <strong>Place of work</strong> <br /> {jobData.location}
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <Button
              type="button"
              className="flex items-center justify-center gap-2 text-[#009FE3]"
              onClick={() => window.open(jobData.pdfLink, "_blank")}
            >
              <Download size={18} />
              Download as PDF
            </Button>

            <Button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>Apply Now →</Button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Job Summary</h2>
            <p className="text-[#67696B] leading-relaxed">{jobData.jobSummary}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Your tasks</h3>
            <ul className="list-disc ml-6 space-y-2 text-[#67696B]">
              {jobData.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Your qualifications</h3>
            <ul className="list-disc ml-6 space-y-2 text-[#67696B]">
              {jobData.qualifications.map((qual, idx) => (
                <li key={idx}>{qual}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">CPS GmbH offers</h3>
            <ul className="list-disc ml-6 space-y-2 text-[#67696B]">
              {jobData.offers.map((offer, idx) => (
                <li key={idx}>{offer}</li>
              ))}
            </ul>
          </div>

          <div className="bg-[#EDEDED] py-10 px-6 text-center md:text-left mt-12 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Are you interested?</h3>

            <div className="flex flex-col md:flex-col items-center md:items-start gap-4">
              <Button type="button" onClick={() => setShowModal(true)} className="btn btn-primary">
                Apply Now →
              </Button>

              <p className="text-[#67696B] text-sm">
                Or, please send your comprehensive application to{" "}
                <span className="font-medium">Reinhild Koggenhorst</span> at <br />
                <Link
                  href="mailto:reinhild.koggenhorst@cps-gmbh.net"
                  className="text-[#009FE3] hover:underline"
                >
                  reinhild.koggenhorst@cps-gmbh.net
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>

      <CareerModal showModal={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default CareersSection;
