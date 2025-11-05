"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import routes from "../routes";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('explore-industries');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/industries-cta.jpg"
          alt="Hero Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="container mx-auto px-6 md:px-0 flex flex-col md:flex-row items-end justify-between mt-40" style={{maxWidth: "1280px"}}>
        <div className="max-w-xl mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-semibold leading-tight">
            Delivering Precision, 
            Performance & Reliability 
            to Every Industry We Serve
          </h1>
        </div>

        <div className="max-w-md text-sm sm:text-base md:text-[15px] text-gray-200 leading-relaxed mr-20">
          <p className="mb-6">
            From flexible packaging and automotive engineering to medical and
            technical innovations, CPS GmbH delivers high-performance films and
            plastics trusted across global industries. Our materials are
            engineered for durability, precision, and certified compliance
            ensuring consistent results in every application.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Button type="button" onClick={handleScroll} className="btn btn-primary">
              Explore Industries →
            </Button>
            <Link href={routes.products} className="btn btn-outline-primary">
              View Product Solutions →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
