'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/button/Button';
import Link from 'next/link';
import routes from '@/app/routes';

const WINTER_IMAGE_URL = '/assets/ski-image.jpg';

const features = [
  'Lightweight, high-strength composite materials.',
  'Precision manufacturing for professional athletes.',
  'Customizable designs for various terrains.',
  'Eco-conscious production with advanced safety standards.',
];

export default function Details() {
  return (
    <section className="relative bg-[#F8F8F8] overflow-hidden">
      <div >
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1">
            {/* Image Half */}
            <div className="relative h-72 sm:h-[420px] lg:h-[748px]">
              <Image
                src={WINTER_IMAGE_URL}
                alt="Athlete skiing in a snowy, sunny landscape"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent lg:from-black/10" />
            </div>

            <div className="hidden lg:block" />
          </div>

          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
            <div className="bg-white/70 backdrop-blur-[10px] p-6 md:p-10 lg:p-20 -mt-16 sm:-mt-24 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
              <h2 className="text-2xl md:text-3xl lg:text-[44px] font-semibold text-[#1D1D1B] mb-4 leading-[62px]">
                Ride the Future of Winter Sports
              </h2>

              <p className="text-[#1D1D1B] text-[20px] mb-4 max-w-2xl">
                Discover CPFS-engineered ski and snowboard solutions designed for performance, precision, and durability.
              </p>

              <ul className="space-y-2 mb-5">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                      <Image src='/icons/hand-arrow.svg' alt='Hand Arrow' height={30} width={30} className='mr-2' />
                    <span className="text-[#1D1D1B] text-[20px] font-normal leading-7">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => console.log('Explore Ski & Snowboard Range clicked')}
                >
                  Explore Ski & Snowboard Range →
                </Button>

                <Link
                  href={routes.industries}
                  className="btn btn-outline-primary"
                >
                  Explore Applications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
