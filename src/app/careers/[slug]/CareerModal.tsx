"use client"
import SuccessModal from '@/components/shared/career/SuccessModal';
import Button from '@/components/ui/button/Button'
import Dropdown from '@/components/ui/dropdown/Dropdown'
import React, { useState } from 'react'
import toast from 'react-hot-toast';

interface CareerModalProps {
  showModal: boolean;
  onClose: () => void;
}

const inquiryOptions = [
  { label: "Machine and Plant Operator", value: "machine-operator" },
  { label: "Production Assistant", value: "production-assistant" },
  { label: "Quality Assurance", value: "quality-assurance" },
];

const CareerModal: React.FC<CareerModalProps> = ({ showModal, onClose }) => {
  const [department, setDepartment] = useState("");
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true)
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      formData.append("department", department);

      const res = await fetch("/api/career", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!result.success) {
        toast.error("Failed to submit application. Please try again!");
        return;
      }

      toast.success("Application submitted successfully");
      setLoading(false);
      onClose();
      setSuccessModal(true);
    } catch (error) {
      toast.error("Something went wrong! Please try later.");
      console.error("Application submission error:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  if (!showModal) return null;
  return (
    <div className="fixed inset-0 bg-[#BEE3F3]/60 flex justify-center items-center z-[999] ">
      <div className="bg-[#1D1D1B] text-white rounded-2xl p-8 w-[95%] md:w-[650px] relative">
        <Button
          type='button'
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-300 hover:text-white text-3xl cursor-pointer"
        >
          ×
        </Button>

        <h2 className="text-2xl font-semibold text-center mb-6">
          Start Your Journey with CPS
        </h2>
        <p className="text-gray-400 text-center mb-8 text-sm">
          Ready to take the next step? Fill in your details to apply for this
          position. Our team will review your application and connect with
          you soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              className="w-full p-3 bg-[#1D1D1B] border-b-1 focus:outline-none focus:border-[#009FE3]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 bg-[#1D1D1B] border-b-1 focus:outline-none focus:border-[#009FE3]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Dropdown
              name="country"
              options={[{ label: "Germany", value: "germany" }]}
              onSelect={() => { }}
              placement="Select Country"
              isRequired
              isSearchable={false}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-3 bg-[#1D1D1B] border-b-1 focus:outline-none focus:border-[#009FE3]"
            />
          </div>

          <Dropdown
            name="department"
            options={inquiryOptions}
            onSelect={(select) => setDepartment(select.value)}
            placement="Department / Area of Interest"
            isRequired
            isSearchable={false}
          />

          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx,.rtf"
            required
            className="w-full p-3 bg-[#1D1D1B] border-b-1 text-gray-400"
          />

          <Button disabled={loading} type="submit" className="btn btn-primary">
            {loading ? 'Submitting...' : 'Submit Application →'}
          </Button>
        </form>
      </div>
      <SuccessModal show={successModal} onClose={() => setSuccessModal(false)} />
    </div>
  )
}

export default CareerModal