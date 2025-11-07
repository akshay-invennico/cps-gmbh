"use client"
import routes from "@/app/routes";
import Button from "@/components/ui/button/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LeadFormModal from "../contact/LeadFormModal";

const Advantages = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="relative w-full py-[100px] bg-[#F8F8F8] flex flex-col items-center text-center">
                <div className="hidden md:block absolute inset-0 z-0">
                    <Image
                        src="/assets/bg.svg"
                        alt="Background"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="max-w-7xl px-4 z-10 pb-44">
                    <div className="inline-block mb-5">
                        <div className="w-[2px] h-8 mb-3 bg-[#1D1D1B] mx-auto"></div>
                        <span className="text-[14px] font-medium border border-[#009FE3] text-[#009FE3] px-4 py-2 rounded-md leading-[100%]">
                            The CPS Advantage
                        </span>
                    </div>

                    <h2 className="heading text-[#1D1D1B]">
                        Trusted by industries worldwide for innovation, reliability, and performance.
                    </h2>

                    <p className="mt-4 text-lg text-[#67696B]">
                        Partner with CPS GmbH for materials that deliver performance, safety, and trust.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center mt-4 gap-3 sm:gap-4">
                        <Button
                            type="button"
                            className="btn btn-primary"
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

                    <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0  items-center justify-between w-full mt-6">
                        <div className="h-[180px] w-[315px] flex flex-col items-center justify-center border border-dashed border-[#EDEDED] p-6 rounded-full bg-[#F8F8F8] text-center">
                            <div className="mb-4">
                                <Image src='/icons/advantages/engineer.svg' alt="Earth Icon" height={60} width={49.3} />
                            </div>
                            <p className="text-[22px] font-semibold text-[#1D1D1B] leading-tight">
                                German Engineering <br />Excellence
                            </p>
                        </div>

                        <div className="h-[180px] w-[315px] flex flex-col items-center justify-center border border-dashed border-[#EDEDED] p-6 rounded-full bg-[#F8F8F8] text-center">
                            <div className="mb-4">
                                <Image src='/icons/advantages/earth.svg' alt="Earth Icon" height={60} width={49.3} />
                            </div>
                            <p className="text-[22px] font-semibold text-[#1D1D1B] leading-tight">
                                Sustainability <br />Commitment
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 items-center justify-center w-full mt-6 gap-x-5">
                        <div className="h-[180px] w-[315px] flex flex-col items-center justify-center border border-dashed border-[#EDEDED] p-6 rounded-full bg-[#F8F8F8] text-center">
                            <div className="mb-4">
                                <Image src='/icons/advantages/certificate.svg' alt="Certificate Icon" height={60} width={49.3} />
                            </div>
                            <p className="text-[22px] font-semibold text-[#1D1D1B] leading-tight">
                                Certified Quality &<br />Compliance
                            </p>
                        </div>
                        <div className="h-[180px] w-[315px] flex flex-col items-center justify-center border border-dashed border-[#EDEDED] p-6 rounded-full bg-[#F8F8F8] text-center">
                            <div className="mb-4">
                                <Image src='/icons/advantages/sustainability.svg' alt="Sustainability Icon" height={60} width={49.3} />
                            </div>
                            <p className="text-[22px] font-semibold text-[#1D1D1B] leading-tight">
                                Industry-Wide &<br /> Expertise
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <LeadFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}


export default Advantages;