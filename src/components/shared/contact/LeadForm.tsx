'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@/components/ui/button/Button';
import Dropdown, { DropdownOptionProps } from '@/components/ui/dropdown/Dropdown';
import toast from 'react-hot-toast';

interface LeadFormValues {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  company: Yup.string().required('Company name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string()
    .matches(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
      'Invalid phone number format'
    )
    .nullable(),
  inquiryType: Yup.string()
    .oneOf(['technical', 'sales', 'career', 'other'], 'Invalid inquiry type')
    .required('Inquiry Type is required'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

interface LeadFormProps {
  className?: string;
  isModal?: boolean;
}

const LeadForm: React.FC<LeadFormProps> = ({ className, isModal = false }) => {
  const [loading, setLoading] = useState(false);
  const inquiryOptions: DropdownOptionProps[] = [
    { value: 'technical', label: 'Technical Support' },
    { value: 'sales', label: 'Sales Inquiry' },
    { value: 'career', label: 'Career Opportunity' },
    { value: 'other', label: 'Other' },
  ];

  const sendLeadData = async (values: LeadFormValues) => {
    const res = await fetch("/api/send-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    return res.json();
  };

  const handleSubmit = async (values: LeadFormValues, { resetForm }: any) => {
    try {
      setLoading(true);
      const data = await sendLeadData(values);

      if (!data.success) {
        toast.error("Failed to send form. Please try again!");
        return;
      }

      toast.success("Message sent successfully");
      setLoading(false);
      resetForm();
    } catch (error) {
      toast.error("Something went wrong! Please try later.");
      console.error("Lead submit error:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={`bg-[#1D1D1B] p-8 md:p-12 lg:p-10 rounded-xl h-full ${className}`}>
        <Formik<LeadFormValues>
          initialValues={{
            fullName: '',
            company: '',
            email: '',
            phone: '',
            inquiryType: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => {
            const selectedInquiryOption =
              inquiryOptions.find(o => o.value === values.inquiryType) || null;

            return (
              <>
                {isModal && <div className="mb-12 md:mb-10">

                  <div className="inline-flex items-center gap-2">
                    <span className="text-[14px]  font-medium border border-[#009FE3] text-[#009FE3] px-4 py-2 rounded-md">
                      Request Info
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-white mt-5">
                    Let&apos;s Talk About Your Requirements
                  </h2>
                  <p className="text-white mt-3">
                    Whether you need product specifications, technical support, or career opportunities — our team is here to help.
                  </p>
                </div>}

                <Form className="space-y-8">
                  <div className="flex flex-wrap justify-between gap-y-8">
                    <div className="w-full md:w-[48%]">
                      <label className="block text-white text-base font-medium leading-6 mb-1">Full Name *</label>
                      <Field
                        name="fullName"
                        placeholder="Ex: John Doe"
                        autoComplete="off"
                        className="w-full bg-[#1D1D1B] text-white border-b border-white px-0 py-3 focus:border-[#009FE3] focus:outline-none placeholder:text-[#535353] placeholder:text-sm"
                      />
                      <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs mt-1" />
                    </div>

                    <div className="w-full md:w-[48%]">
                      <label className="block text-white text-base font-medium leading-6 mb-1">Company / Organization *</label>
                      <Field
                        name="company"
                        placeholder="Ex: CPS GmbH"
                        autoComplete="off"
                        className="w-full bg-[#1D1D1B] text-white border-b border-white px-0 py-3 focus:border-[#009FE3] focus:outline-none placeholder:text-[#535353] placeholder:text-sm"
                      />
                      <ErrorMessage name="company" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between gap-y-8">
                    <div className="w-full md:w-[48%]">
                      <label className="block text-white text-base font-medium leading-6 mb-1">Email Address *</label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Ex: johndoe@example.com"
                        autoComplete="off"
                        className="w-full bg-[#1D1D1B] text-white border-b border-white px-0 py-3 focus:border-[#009FE3] focus:outline-none placeholder:text-[#535353] placeholder:text-sm"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                    </div>

                    <div className="w-full md:w-[48%]">
                      <label className="block text-white text-base font-medium leading-6 mb-1">Phone Number</label>
                      <Field
                        name="phone"
                        type="tel"
                        placeholder="+49 98XXXXXXXX"
                        autoComplete="off"
                        className="w-full bg-[#1D1D1B] text-white border-b border-white px-0 py-3 focus:border-[#009FE3] focus:outline-none placeholder:text-[#535353] placeholder:text-sm"
                      />
                      <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-base font-medium leading-6 mb-1">
                      Inquiry Type *
                    </label>

                    <Dropdown
                      name="inquiryType"
                      options={inquiryOptions}
                      value={selectedInquiryOption}
                      onSelect={(opt) => setFieldValue("inquiryType", opt.value)}
                      placement="Select Inquiry Type"
                      isRequired
                    />
                    <ErrorMessage name="inquiryType" component="div" className="text-red-500 text-xs mt-1" />
                  </div>

                  <div>
                    <label className="block text-white text-base font-medium leading-6 mb-1">Message / Requirements *</label>
                    <Field
                      as="textarea"
                      name="message"
                      rows={3}
                      placeholder="Tell us briefly how we can assist you"
                      autoComplete="off"
                      className="w-full bg-[#1D1D1B] text-white border-b border-white px-0 py-3 focus:border-[#009FE3] focus:outline-none placeholder:text-[#535353] placeholder:text-sm"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 text-xs mt-1" />
                  </div>

                  <Button disabled={loading} type="submit" className="btn btn-primary">
                    {loading ? 'Submitting...' : 'Submit Query →'}
                  </Button>
                </Form>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default LeadForm;
