import React from "react";
import Breadcrumb, { BreadcrumbItem } from "@/components/ui/breadcrumb/Breadcrumb";

const Hero: React.FC = () => {
  const bgImage = "/assets/about.jpg";

  const breadcrumbPaths: BreadcrumbItem[] = [
    { label: "About Us" }
  ];

  return (
    <section className="relative w-full overflow-hidden min-h-[400px] md:min-h-[500px] flex items-end">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
        role="img"
        aria-label="Industrial background image representing technical plastics"
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-24 lg:py-32">
        <Breadcrumb items={breadcrumbPaths} isAbout={true}/>

        <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-semibold text-white mb-4 leading-[50px] md:leading-[75px]">
          Shaping the Future of Technical Plastics
        </h1>

        <p className="text-lg sm:text-[20px] text-white max-w-4xl font-light">
          CPS GmbH drives global industries with advanced materials and German engineering expertise.
        </p>
      </div>
    </section>
  );
};

export default Hero;
