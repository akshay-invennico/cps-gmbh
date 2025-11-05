'use client';
import routes from '@/app/routes';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/home-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0"></div>

        <h1 className="heading text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#1D1D1B] leading-tight break-words z-20 mb-[300px] mr-[330px]">
          High-Performance Films & Plastics.
          <br className="hidden sm:block" />
          Engineered for Precision.
        </h1>


      <div className='absolute bottom-0 right-0 max-w-2xl bg-[#BEE3F366]/40 backdrop-blur-[14px] p-10 md:p-[60px] shadow-lg'>
        <p className="mt-2 text-base md:text-[20px] text-[#1D1D1B] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        </p>

        <div className="mt-5 flex flex-wrap justify-left gap-4">
          <Link
            href={routes.products}
            className="btn btn-primary"
          >
            Explore Products →
          </Link>

          <Link
            href={routes.industries}
            className="btn btn-outline-secondary"
          >
            Explore Applications
          </Link>
        </div>
      </div>


      <div className="absolute bottom-8 left-8 cursor-pointer z-10" onClick={handleScroll}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Image src="/assets/scroll.svg" alt='Scroll Icon' height={35} width={28} />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
