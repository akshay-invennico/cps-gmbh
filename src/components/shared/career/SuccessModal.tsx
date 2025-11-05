"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import routes from "@/app/routes";
import Button from "@/components/ui/button/Button";

interface SuccessModalProps {
  show: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#BEE3F3]/60 flex justify-center items-center z-[1000]">
      <div className="bg-[#1D1D1B] text-white rounded-2xl p-6 md:p-10 w-[95%] md:w-[650px] relative text-center">

        <Button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-300 hover:text-white text-3xl"
        >
          ×
        </Button>

        <div className="w-20 h-20 md:w-52 md:h-52 mx-auto flex justify-center items-center my-5">
          <Image src='/assets/success.svg' alt="Check" height={200} width={200} />
        </div>

        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Application Submitted Successfully!
        </h2>

        <p className="text-gray-300 text-sm md:text-base mb-8">
          Thank you for applying. Our team will carefully review your application and get in touch with you soon.
          We appreciate your interest in joining CPS.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href={routes.careers}
            className="btn btn-primary"
          >
            ← Back to Careers
          </Link>

          <Link
            href={routes.careers}
            className="btn btn-outline-primary"
          >
            Explore Opportunities
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
