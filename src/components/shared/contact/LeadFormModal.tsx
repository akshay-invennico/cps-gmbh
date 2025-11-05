"use client";
import React from "react";
import LeadForm from "./LeadForm";
import { X } from "lucide-react";
import Button from "@/components/ui/button/Button";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#BEE3F3]/60 flex justify-center items-center z-[99999] p-4 sm:p-12">
      <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-6xl mx-auto">
        <Button
          type="button"
          className="absolute top-3 right-3 text-white cursor-pointer p-2 rounded-full"
          onClick={onClose}
        >
          <X size={18} />
        </Button>

        <LeadForm className="w-full bg-[#1D1D1B] rounded-lg shadow-lg p-4 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto" isModal={true}/>
      </div>
    </div>
  );
};

export default LeadFormModal;
