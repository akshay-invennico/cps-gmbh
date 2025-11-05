import React from 'react';

interface TimelineItem {
  year: number;
  title: string;
  details: string[];
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    year: 1972,
    title: "The Genesis: Founding and Early Innovations",
    details: [
      "Founding of SOLITE GmbH in Rohrdorf.",
      "Production of glass-fiber reinforced plastic composite components for ski construction.",
      "Establishment of our own extrusion for trends: Development of the first embossed extruded 'fish scale' tread.",
    ],
  },
  {
    year: 1985,
    title: "Market Expansion and Core Product Focus",
    details: [
      "Expanded production capacity by opening a new facility.",
      "Shifted focus to high-performance polymer extrusion.",
      "Secured major contracts with international sports equipment manufacturers.",
    ],
  },
  {
    year: 1994,
    title: "High-Quality Surface Film Production",
    details: [
      "Extrusion of high-quality surface films for the ski industry.",
      "Implementation of new quality control standards (ISO 9001 certification).",
      "Invested in cutting-edge film coating technologies.",
    ],
  },
  {
    year: 2007,
    title: "Corporate Evolution: Founding of CPS",
    details: [
      "Founding of CPS GmbH, establishing a new legal structure.",
      "Acquisition of specialized machinery for custom plastic shaping.",
      "Began research into sustainable and recycled polymer materials.",
    ],
  },
  {
    year: 2008,
    title: "Strategic Acquisition and Material Production",
    details: [
      "Acquisition of the sintering plant (formerly IMS).",
      "Production of ultra-high molecular weight polyethylene (UHMW-PE) sintered P-tex® treads.",
      "Launched a dedicated R&D division for materials science.",
    ],
  },
  {
    year: 2015,
    title: "Global Reach and Advanced Composites",
    details: [
      "Opened first international sales office in Asia.",
      "Introduced a new line of advanced carbon-fiber reinforced composites.",
      "Achieved record annual turnover, cementing market leadership.",
    ],
  },
  {
    year: 2022,
    title: "Sustainability and Digital Transformation",
    details: [
      "Completed transition to 100% renewable energy at main production site.",
      "Launched digital inventory and supply chain management system.",
      "Named 'Innovation Leader' by a leading industry magazine.",
    ],
  },
];

const Journey: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-8 bg-[#BEE3F3] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <span className="inline-block border text-[#009FE3] border-[#009FE3] px-4 py-2 rounded-[6px] text-sm font-medium">
          Our Rich History
        </span>

        <h1 className="heading text-[#1D1D1B] mt-4">
          From a Local Manufacturer to a Global Materials Partner
        </h1>

        <p className="text-[#67696B] mb-12 max-w-4xl">
          Founded in Germany with a passion for precision engineering, CPS GmbH has
          grown from a small film manufacturer into a global leader in
          high-performance plastics — combining German craftsmanship with modern
          innovation to serve industries worldwide.
        </p>

        <div className="relative">
          <div className="flex overflow-x-auto no-scrollbar px-4">
            {TIMELINE_DATA.map((item) => (
              <div
                key={item.year}
                className="relative flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px]"
              >
                <div className="mt-8 bg-inherit border border-white border-l-0 p-6 text-left h-full">
                  <h3 className="text-xl font-bold text-[#1D1D1B] mb-2">{item.year}</h3>
                  <h4 className="font-semibold text-[#1D1D1B] mb-2">{item.title}</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-[#1D1D1B]">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Journey;
