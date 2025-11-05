import React from "react";

const stats = [
  { value: "25+", label: "Industries served across packaging, automotive, medical, and technical sectors." },
  { value: "500+", label: "Tailor-made material solutions designed to meet precise industrial requirements." },
  { value: "100%", label: "Certified materials meeting global ISO and CE standards." },
];

const StatsSection = () => {
  return (
    <section className="bg-[#F8F8F8] py-10 md:py-[100px]">
      <div style={{ maxWidth: "1280px" }} className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((item, idx) => (
          <div key={idx} className="flex items-center justify-evenly">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-5xl font-bold text-sky-500 mb-2">{item.value}</h3>
              <p className="text-[#67696B] text-sm md:text-base max-w-[250px]">{item.label}</p>
            </div>

            {idx < stats.length - 1 && (
              <div className="h-[143px] w-px bg-[#EDEDED] hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
