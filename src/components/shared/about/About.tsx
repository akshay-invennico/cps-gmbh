import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative w-full py-20 bg-[#F8F8F8] flex flex-col items-center text-center overflow-hidden">
      <div className="hidden md:block absolute inset-0 z-0">
        <Image
          src="/assets/bg.svg"
          alt="Background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full px-6">
        {/* Tag */}
        <div className="inline-block mb-5">
          <div className="w-[2px] h-8 mb-3 bg-[#1D1D1B] mx-auto"></div>
          <span className="text-[14px] font-medium border border-[#009FE3] text-[#009FE3] px-4 py-2 rounded-md">
            About Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="heading text-[#1D1D1B]">
          Engineering Excellence in <br className="hidden sm:block" />
          Films & Plastics Since 2002
        </h2>

        {/* Paragraph */}
        <p className="mt-3 mb-4 max-w-4xl mx-auto text-[#67696B] leading-relaxed text-base md:text-lg">
          CPS GmbH is a trusted German manufacturer with decades of expertise in
          engineering high-performance technical materials. We specialize in
          advanced extrusion films, UHMW/HE/HDPE solutions, and a wide range of
          precision plastics tailored for demanding industrial applications. Our
          products are relied upon across global sectors including packaging,
          automotive, medical, and technical industries, where performance and
          safety are critical.
        </p>

        {/* Images */}
        <div className="max-w-7xl px-4 pb-12 mx-auto">
          <div className="hidden md:flex items-center justify-between">
            <Image
              src="/assets/aboutImg1.png"
              alt="About 1"
              width={300}
              height={195}
              className="object-cover w-72 h-48"
            />
            <Image
              src="/assets/aboutImg2.png"
              alt="About 2"
              width={300}
              height={195}
              className="object-cover w-72 h-48"
            />
          </div>

          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/assets/aboutImg3.png"
              alt="About 3"
              width={450}
              height={300}
              className="object-cover w-[450px] h-[300px]"
            />
          </div>

          <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none py-3">
            <Image
              src="/assets/aboutImg1.png"
              alt="About 1"
              width={250}
              height={160}
              className="object-cover flex-shrink-0 snap-start rounded-lg"
            />
            <Image
              src="/assets/aboutImg2.png"
              alt="About 2"
              width={250}
              height={160}
              className="object-cover flex-shrink-0 snap-start rounded-lg"
            />
            <Image
              src="/assets/aboutImg3.png"
              alt="About 3"
              width={300}
              height={200}
              className="object-cover flex-shrink-0 snap-start rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;