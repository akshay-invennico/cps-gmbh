"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import routes from '../routes';
import Button from '@/components/ui/button/Button';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: '30+',
    label: 'Years of engineering expertise in films & plastics',
  },
  {
    value: '12+',
    label: 'Product Lines covering extrusion films-more',
  },
  {
    value: '50+',
    label: 'Countries served across different industries',
  },
  {
    value: '10+',
    label: 'Certifications meeting ISO, CE, and GDS',
  },
];

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('explore-products');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden text-white bg-gray-900">
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/products-hero.png"
        alt="High-Performance Materials Background"
        priority
        width={1920}
        height={1080}
      />

      <div className="absolute inset-0 bg-black/50 md:bg-black/60"></div>

      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-5xl text-left">
          <h1
            className="text-4xl sm:text-5xl lg:text-[54px] font-semibold leading-[75px] tracking-[1%]"
          >
            Comprehensive Range of
            High-Performance Materials
          </h1>

          <p className="mt-6 text-base md:text-[20px] text-white pr-0 md:pr-10 leading-8">
            From extrusion films engineered for clarity and precision, to ultra-durable **UHMWPE**
            and **HDPE** for technical performance. Our portfolio also includes **ABS**, specialty
            plastics, and bio-based solutions, all designed to deliver innovation, reliability, and
            sustainability across industries.
          </p>

          <div className="my-6 flex flex-col sm:flex-row gap-4">
            <Button
              type='button'
              onClick={handleScroll}
              className="btn btn-primary"
            >
              Explore all Products →
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

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row justify-between items-start lg:items-center">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 w-full lg:w-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center">
                <div className="text-left py-2">
                  <p className="text-[32px] font-semibold text-white mb-2">{stat.value}</p>
                  <p className="text-base text-white max-w-[150px]">{stat.label}</p>
                </div>
                {index < stats.length - 1 && (
                  <div className="h-20 w-px bg-[#3C4F57] ml-5 hidden md:block " />
                )}
              </div>
            ))}
          </div>

          <div
            className="absolute lg:static right-0 bottom-4 lg:py-2 flex flex-col items-center cursor-pointer mt-4 lg:mt-0"
            onClick={handleScroll}
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Image src='/assets/products-scroll.svg' alt='Products Scroll Icon' height={52} width={192} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;