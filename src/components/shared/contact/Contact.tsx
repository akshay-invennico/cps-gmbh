/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import LeadForm from './LeadForm';
import ContactInfo from './ContactInfo';


const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8F8F8] px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12 md:mb-10">

          <div className="inline-flex items-center gap-2">
            <span className="w-10 h-[2px] bg-[#1D1D1B]"></span>
            <span className="text-[14px] font-medium border border-[#009FE3] text-[#009FE3] px-4 py-2 rounded-md">
              Get in Touch
            </span>
          </div>
          <h2 className="heading text-[#1D1D1B] mt-5">
            Let's Talk About Your Requirements
          </h2>
          <p className="text-[#67696B] mt-3">
            Whether you need product specifications, technical support, or career opportunities — our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-5 items-stretch">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          <div className="lg:col-span-7">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
