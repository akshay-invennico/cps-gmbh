import { Product } from "./Hero";
import { ProductDetailsContent } from "./ProductDescription";

export interface ProductFull extends Product {
  details: ProductDetailsContent;
}

export const ALL_PRODUCTS: ProductFull[] = [

  // 1
  {
    id: "ecc-1020",
    name: "ECC 1020",
    tagline: "Engineered for superior transparency and durability",
    description:
      "EC 3010 is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend, available in clear and white versions.",
    imageUrl: "/assets/products/product1.svg",
    dataSheetUrl:
      "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
    infoRequestUrl: "/request-info?product=ec-3010-transparent-white",
    backgroundColor: "#BEE3F3",
    details: {
      title: "ECC 1020",
      mainDescription:
        "EC 3010 is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend available in clear and white versions. It offers superior optical clarity and excellent surface uniformity, making it ideal for premium packaging and industrial laminations.",
      downloads: [
        {
          label: "Data Sheet",
          url: "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
          icon: "dataSheet",
        },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
        { label: "Certifications & Compliance", url: "/downloads/certifications.pdf", icon: "compliance" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
        { name: "CE", imageUrl: "/assets/footer/certificate2.png", altText: "CE Mark" },
        { name: "FDA", imageUrl: "/assets/footer/certificate3.png", altText: "FDA Approved" },
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "High clarity / Transparent" },
        { property: "Gauge (Thickness)", value: "12 – 60 microns (customizable)" },
        { property: "Width", value: "500 – 1500 mm" },
        { property: "Core Material", value: "Multi-layered PE/PP blend" },
        { property: "Tensile Strength", value: "MD: 45–55 MPa / TD: 35–45 MPa" },
        { property: "Elongation at Break", value: "MD: 200–300% / TD: 150–250%" },
        { property: "Shrinkage", value: "MD: 2–4% / TD: 1–3%" },
        { property: "Surface Treatment", value: "Corona-treated for printability" },
        { property: "Food Contact Compliance", value: "FDA / EU compliant" },
        { property: "Color", value: "Natural / Customized" },
      ],
      applications: {
        heading: "Applications",
        description:
          "Used in packaging and industrial films requiring clarity and durability.",
        list: [
          "Food packaging (snacks, bakery, confectionery)",
          "Pharmaceutical and medical packaging",
          "Pouches, bags, and laminates",
          "Barrier films for sensitive products",
          "Industrial and specialty packaging",
        ],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description:
          "Delivers excellent visual quality, strength, and processability.",
        list: [
          { title: "High Clarity", description: "Excellent visual appeal for product display." },
          { title: "Multi-Layer Strength", description: "Superior durability and tear resistance." },
          { title: "Heat Sealable", description: "Compatible with standard packaging equipment." },
          { title: "Customizable Thickness & Width", description: "Tailored for different packaging lines." },
          { title: "Print-Ready Surface", description: "Excellent adhesion for inks and coatings." },
          { title: "Consistent Performance", description: "Uniform gauge and stable properties across rolls." },
        ],
      },
    },
  },

  // 2
  {
    id: "ec-3010-transparent-white",
    name: "EC 3010 transparent & white",
    tagline: "High-performance polymer film for industrial use",
    description:
      "Durable black extrusion coating film offering exceptional heat and abrasion resistance for demanding industrial applications.",
    imageUrl: "/assets/products/product2.svg",
    dataSheetUrl: "/downloads/p-tex-3000-black.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-black",
    backgroundColor: "#EAF2F8",
    details: {
      title: "EC 3010 transparent & white",
      mainDescription:
        "EC 3010 transparent & white is a durable, UV-stabilized extrusion coating film offering high tensile strength and abrasion resistance. Designed for protective and decorative industrial applications.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-black.pdf", icon: "dataSheet" },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "Ultra High" },
        { property: "Gauge (Thickness)", value: "10 – 50 microns" },
      ],
      applications: {
        heading: "Applications",
        description: "Ideal for luxury and retail product packaging.",
        list: ["Premium retail packaging", "Window films", "Cosmetic wrap materials"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Enhanced clarity and gloss for product visibility.",
        list: [
          { title: "High Gloss", description: "Creates premium finish for retail." },
          { title: "UV Resistance", description: "Resists discoloration over time." },
        ],
      },
    },
  },

  // 3
  {
    id: "ecc-4060",
    name: "ECC 4060",
    tagline: "Clear, flexible polymer film with balanced performance",
    description:
      "A translucent extrusion film providing excellent clarity and smooth processability for packaging and lamination uses.",
    imageUrl: "/assets/products/product3.svg",
    dataSheetUrl: "/downloads/p-tex-3000-natural.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-natural",
    backgroundColor: "#E1F5FE",
    details: {
      title: "ECC 4060",
      mainDescription:
        "ECC 4060 is engineered for packaging and lamination applications where clarity and performance are essential. Offers excellent mechanical strength and adhesion properties.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-natural.pdf", icon: "dataSheet" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
      ],
      certifications: [
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Material", value: "100% recyclable blend" },
        { property: "Thickness", value: "20 – 80 microns" },
        { property: "Sustainability", value: "Fully recyclable (no PVC)" },
      ],
      applications: {
        heading: "Applications",
        description: "Used in eco-friendly packaging and sustainable products.",
        list: ["Food packaging", "Retail wraps", "Eco pouches"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Environmentally friendly without performance loss.",
        list: [
          { title: "Recyclable", description: "100% recyclable polymer film." },
          { title: "High Strength", description: "Maintains durability in thin gauges." },
        ],
      },
    },
  },

  // 4
  {
    id: "p-tex-2000-electra",
    name: "P-tex® 2000 electra",
    tagline: "Premium extrusion coating grade film",
    description:
      "High-performance natural polymer film ideal for lamination and high-barrier coating applications.",
    imageUrl: "/assets/products/product2.svg",
    dataSheetUrl: "/downloads/p-tex-4000-natural.pdf",
    infoRequestUrl: "/request-info?product=p-tex-4000-natural",
    backgroundColor: "#E3F2FD",
    details: {
      title: "P-tex® 2000 electra",
      mainDescription:
        "P-tex® 2000 electra delivers superior adhesion and thermal resistance, making it suitable for lamination and flexible barrier structures.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-4000-natural.pdf", icon: "dataSheet" },
        { label: "Certifications", url: "/downloads/certifications.pdf", icon: "compliance" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
        { name: "CE", imageUrl: "/assets/footer/certificate2.png", altText: "CE Mark" },
        { name: "FDA", imageUrl: "/assets/footer/certificate3.png", altText: "FDA Approved" },
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "High clarity / Transparent" },
        { property: "Gauge (Thickness)", value: "12 – 60 microns (customizable)" },
        { property: "Width", value: "500 – 1500 mm" },
        { property: "Core Material", value: "Multi-layered PE/PP blend" },
        { property: "Tensile Strength", value: "MD: 45–55 MPa / TD: 35–45 MPa" },
        { property: "Elongation at Break", value: "MD: 200–300% / TD: 150–250%" },
        { property: "Shrinkage", value: "MD: 2–4% / TD: 1–3%" },
        { property: "Surface Treatment", value: "Corona-treated for printability" },
        { property: "Food Contact Compliance", value: "FDA / EU compliant" },
        { property: "Color", value: "Natural / Customized" },
      ],
      applications: {
        heading: "Applications",
        description:
          "Used in packaging and industrial films requiring clarity and durability.",
        list: [
          "Food packaging (snacks, bakery, confectionery)",
          "Pharmaceutical and medical packaging",
          "Pouches, bags, and laminates",
          "Barrier films for sensitive products",
          "Industrial and specialty packaging",
        ],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description:
          "Delivers excellent visual quality, strength, and processability.",
        list: [
          { title: "High Clarity", description: "Excellent visual appeal for product display." },
          { title: "Multi-Layer Strength", description: "Superior durability and tear resistance." },
          { title: "Heat Sealable", description: "Compatible with standard packaging equipment." },
          { title: "Customizable Thickness & Width", description: "Tailored for different packaging lines." },
          { title: "Print-Ready Surface", description: "Excellent adhesion for inks and coatings." },
          { title: "Consistent Performance", description: "Uniform gauge and stable properties across rolls." },
        ],
      },
    },
  },

  // 5
  {
    id: "p-tex-2000-hc-high-clear",
    name: "P-tex® 2000 HC high clear",
    tagline: "Crystal-clear extrusion coating film",
    description:
      "Ultra-transparent film designed for optical-grade lamination and flexible packaging applications.",
    imageUrl: "/assets/products/product2.svg",
    dataSheetUrl: "/downloads/ec-4010-high-clarity.pdf",
    infoRequestUrl: "/request-info?product=ec-4010-high-clarity",
    backgroundColor: "#DDF3FF",
    details: {
      title: "P-tex® 2000 HC high clear",
      mainDescription:
        "P-tex® 2000 HC high clear combines transparency and strength, suitable for high-gloss packaging and optical film applications.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/ec-4010-high-clarity.pdf", icon: "dataSheet" },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "Ultra High" },
        { property: "Gauge (Thickness)", value: "10 – 50 microns" },
      ],
      applications: {
        heading: "Applications",
        description: "Ideal for luxury and retail product packaging.",
        list: ["Premium retail packaging", "Window films", "Cosmetic wrap materials"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Enhanced clarity and gloss for product visibility.",
        list: [
          { title: "High Gloss", description: "Creates premium finish for retail." },
          { title: "UV Resistance", description: "Resists discoloration over time." },
        ],
      },
    },
  },

  // 6
  {
    id: "p-tex-2100-black",
    name: "P-tex® 2100 black",
    tagline: "Sustainable extrusion coating film",
    description:
      "Eco-friendly extrusion coating film made with partially recycled polymers, balancing performance and sustainability.",
    imageUrl: "/assets/products/product2.svg",
    dataSheetUrl: "/downloads/ec-5010-eco.pdf",
    infoRequestUrl: "/request-info?product=ec-5010-eco",
    backgroundColor: "#E8F5E9",
    details: {
      title: "P-tex® 2100 black",
      mainDescription:
        "P-tex® 2100 black offers a sustainable solution with reduced environmental impact and excellent extrusion performance.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/ec-5010-eco.pdf", icon: "dataSheet" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
      ],
      certifications: [
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Material", value: "100% recyclable blend" },
        { property: "Thickness", value: "20 – 80 microns" },
        { property: "Sustainability", value: "Fully recyclable (no PVC)" },
      ],
      applications: {
        heading: "Applications",
        description: "Used in eco-friendly packaging and sustainable products.",
        list: ["Food packaging", "Retail wraps", "Eco pouches"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Environmentally friendly without performance loss.",
        list: [
          { title: "Recyclable", description: "100% recyclable polymer film." },
          { title: "High Strength", description: "Maintains durability in thin gauges." },
        ],
      },
    },
  },

  // 7
  {
    id: "p-tex-3000-colored",
    name: "P-tex® 3000 colored",
    tagline: "Advanced adhesion film for multilayer structures",
    description:
      "Engineered for superior bonding with paper, foil, and polymer substrates in composite packaging systems.",
    imageUrl: "/assets/products/product1.svg",
    dataSheetUrl: "/downloads/ec-6010-high-adhesion.pdf",
    infoRequestUrl: "/request-info?product=ec-6010-high-adhesion",
    backgroundColor: "#E3F2FD",
    details: {
      title: "P-tex® 3000 colored",
      mainDescription:
        "P-tex® 3000 colored delivers excellent lamination and sealing properties, ideal for flexible barrier packaging.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/ec-6010-high-adhesion.pdf", icon: "dataSheet" },
        { label: "Certifications", url: "/downloads/certifications.pdf", icon: "compliance" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
        { name: "CE", imageUrl: "/assets/footer/certificate2.png", altText: "CE Mark" },
        { name: "FDA", imageUrl: "/assets/footer/certificate3.png", altText: "FDA Approved" },
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "High clarity / Transparent" },
        { property: "Gauge (Thickness)", value: "12 – 60 microns (customizable)" },
        { property: "Width", value: "500 – 1500 mm" },
        { property: "Core Material", value: "Multi-layered PE/PP blend" },
        { property: "Tensile Strength", value: "MD: 45–55 MPa / TD: 35–45 MPa" },
        { property: "Elongation at Break", value: "MD: 200–300% / TD: 150–250%" },
        { property: "Shrinkage", value: "MD: 2–4% / TD: 1–3%" },
        { property: "Surface Treatment", value: "Corona-treated for printability" },
        { property: "Food Contact Compliance", value: "FDA / EU compliant" },
        { property: "Color", value: "Natural / Customized" },
      ],
      applications: {
        heading: "Applications",
        description:
          "Used in packaging and industrial films requiring clarity and durability.",
        list: [
          "Food packaging (snacks, bakery, confectionery)",
          "Pharmaceutical and medical packaging",
          "Pouches, bags, and laminates",
          "Barrier films for sensitive products",
          "Industrial and specialty packaging",
        ],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description:
          "Delivers excellent visual quality, strength, and processability.",
        list: [
          { title: "High Clarity", description: "Excellent visual appeal for product display." },
          { title: "Multi-Layer Strength", description: "Superior durability and tear resistance." },
          { title: "Heat Sealable", description: "Compatible with standard packaging equipment." },
          { title: "Customizable Thickness & Width", description: "Tailored for different packaging lines." },
          { title: "Print-Ready Surface", description: "Excellent adhesion for inks and coatings." },
          { title: "Consistent Performance", description: "Uniform gauge and stable properties across rolls." },
        ],
      },
    },
  },

  // 8
  {
    id: "p-tex-3000-white",
    name: "P-tex® 3000 white",
    tagline: "Elegant matte-surface extrusion film",
    description:
      "Film with refined matte texture for luxury packaging and surface enhancement.",
    imageUrl: "/assets/products/product1.svg",
    dataSheetUrl: "/downloads/ec-7010-matte-finish.pdf",
    infoRequestUrl: "/request-info?product=ec-7010-matte-finish",
    backgroundColor: "#F3F4F8",
    details: {
      title: "P-tex® 3000 white",
      mainDescription:
        "P-tex® 3000 white offers an elegant matte texture with excellent print adhesion, ideal for premium packaging applications.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/ec-7010-matte-finish.pdf", icon: "dataSheet" },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "Ultra High" },
        { property: "Gauge (Thickness)", value: "10 – 50 microns" },
      ],
      applications: {
        heading: "Applications",
        description: "Ideal for luxury and retail product packaging.",
        list: ["Premium retail packaging", "Window films", "Cosmetic wrap materials"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Enhanced clarity and gloss for product visibility.",
        list: [
          { title: "High Gloss", description: "Creates premium finish for retail." },
          { title: "UV Resistance", description: "Resists discoloration over time." },
        ],
      },
    },
  },

  // 9
  {
    id: "p-tex-3000-black",
    name: "P-tex® 3000 black",
    tagline: "High-performance sealing film",
    description:
      "Specialized extrusion coating film designed for superior sealing performance and reliability.",
    imageUrl: "/assets/products/product1.svg",
    dataSheetUrl: "/downloads/ec-8010-ultra-seal.pdf",
    infoRequestUrl: "/request-info?product=ec-8010-ultra-seal",
    backgroundColor: "#E1F5FE",
    details: {
      title: "P-tex® 3000 black",
      mainDescription:
        "P-tex® 3000 black ensures strong heat seals and consistent performance across high-speed packaging operations.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/ec-8010-ultra-seal.pdf", icon: "dataSheet" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
      ],
      certifications: [
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Material", value: "100% recyclable blend" },
        { property: "Thickness", value: "20 – 80 microns" },
        { property: "Sustainability", value: "Fully recyclable (no PVC)" },
      ],
      applications: {
        heading: "Applications",
        description: "Used in eco-friendly packaging and sustainable products.",
        list: ["Food packaging", "Retail wraps", "Eco pouches"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Environmentally friendly without performance loss.",
        list: [
          { title: "Recyclable", description: "100% recyclable polymer film." },
          { title: "High Strength", description: "Maintains durability in thin gauges." },
        ],
      },
    },
  },

  // 10
  {
    id: "p-tex-3000-clear",
    name: "P-tex® 3000 clear",
    tagline: "Engineered for superior transparency and durability",
    description:
      "EC 3010 is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend, available in clear and white versions.",
    imageUrl: "/assets/products/product1.svg",
    dataSheetUrl:
      "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
    infoRequestUrl: "/request-info?product=ec-3010-transparent-white",
    backgroundColor: "#BEE3F3",
    details: {
      title: "P-tex® 3000 clear",
      mainDescription:
        "P-tex® 3000 clear is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend available in clear and white versions. It offers superior optical clarity and excellent surface uniformity, making it ideal for premium packaging and industrial laminations.",
      downloads: [
        {
          label: "Data Sheet",
          url: "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
          icon: "dataSheet",
        },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
        { label: "Certifications & Compliance", url: "/downloads/certifications.pdf", icon: "compliance" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
        { name: "CE", imageUrl: "/assets/footer/certificate2.png", altText: "CE Mark" },
        { name: "FDA", imageUrl: "/assets/footer/certificate3.png", altText: "FDA Approved" },
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "High clarity / Transparent" },
        { property: "Gauge (Thickness)", value: "12 – 60 microns (customizable)" },
        { property: "Width", value: "500 – 1500 mm" },
        { property: "Core Material", value: "Multi-layered PE/PP blend" },
        { property: "Tensile Strength", value: "MD: 45–55 MPa / TD: 35–45 MPa" },
        { property: "Elongation at Break", value: "MD: 200–300% / TD: 150–250%" },
        { property: "Shrinkage", value: "MD: 2–4% / TD: 1–3%" },
        { property: "Surface Treatment", value: "Corona-treated for printability" },
        { property: "Food Contact Compliance", value: "FDA / EU compliant" },
        { property: "Color", value: "Natural / Customized" },
      ],
      applications: {
        heading: "Applications",
        description:
          "Used in packaging and industrial films requiring clarity and durability.",
        list: [
          "Food packaging (snacks, bakery, confectionery)",
          "Pharmaceutical and medical packaging",
          "Pouches, bags, and laminates",
          "Barrier films for sensitive products",
          "Industrial and specialty packaging",
        ],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description:
          "Delivers excellent visual quality, strength, and processability.",
        list: [
          { title: "High Clarity", description: "Excellent visual appeal for product display." },
          { title: "Multi-Layer Strength", description: "Superior durability and tear resistance." },
          { title: "Heat Sealable", description: "Compatible with standard packaging equipment." },
          { title: "Customizable Thickness & Width", description: "Tailored for different packaging lines." },
          { title: "Print-Ready Surface", description: "Excellent adhesion for inks and coatings." },
          { title: "Consistent Performance", description: "Uniform gauge and stable properties across rolls." },
        ],
      },
    },
  },

  // 11
  {
    id: "p-tex-4082-black",
    name: "P-tex® 4082 black",
    tagline: "High-performance polymer film for industrial use",
    description:
      "Durable black extrusion coating film offering exceptional heat and abrasion resistance for demanding industrial applications.",
    imageUrl: "/assets/products/product2.svg",
    dataSheetUrl: "/downloads/p-tex-3000-black.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-black",
    backgroundColor: "#EAF2F8",
    details: {
      title: "P-tex® 4082 black",
      mainDescription:
        "P-tex® 4082 black is a durable, UV-stabilized extrusion coating film offering high tensile strength and abrasion resistance. Designed for protective and decorative industrial applications.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-black.pdf", icon: "dataSheet" },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "Ultra High" },
        { property: "Gauge (Thickness)", value: "10 – 50 microns" },
      ],
      applications: {
        heading: "Applications",
        description: "Ideal for luxury and retail product packaging.",
        list: ["Premium retail packaging", "Window films", "Cosmetic wrap materials"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Enhanced clarity and gloss for product visibility.",
        list: [
          { title: "High Gloss", description: "Creates premium finish for retail." },
          { title: "UV Resistance", description: "Resists discoloration over time." },
        ],
      },
    },
  },

  // 12
  {
    id: "p-tex-4504-black",
    name: "P-tex® 4504 black",
    tagline: "Clear, flexible polymer film with balanced performance",
    description:
      "A translucent extrusion film providing excellent clarity and smooth processability for packaging and lamination uses.",
    imageUrl: "/assets/products/product3.svg",
    dataSheetUrl: "/downloads/p-tex-3000-natural.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-natural",
    backgroundColor: "#E1F5FE",
    details: {
      title: "P-tex® 4504 black",
      mainDescription:
        "P-tex® 4504 black is engineered for packaging and lamination applications where clarity and performance are essential. Offers excellent mechanical strength and adhesion properties.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-natural.pdf", icon: "dataSheet" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
      ],
      certifications: [
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Material", value: "100% recyclable blend" },
        { property: "Thickness", value: "20 – 80 microns" },
        { property: "Sustainability", value: "Fully recyclable (no PVC)" },
      ],
      applications: {
        heading: "Applications",
        description: "Used in eco-friendly packaging and sustainable products.",
        list: ["Food packaging", "Retail wraps", "Eco pouches"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Environmentally friendly without performance loss.",
        list: [
          { title: "Recyclable", description: "100% recyclable polymer film." },
          { title: "High Strength", description: "Maintains durability in thin gauges." },
        ],
      },
    },
  },

  // 13
  {
    id: "p-tex-5188-black",
    name: "P-tex® 5188 black",
    tagline: "Engineered for superior transparency and durability",
    description:
      "P-tex® 5188 black is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend, available in clear and white versions.",
    imageUrl: "/assets/products/product1.svg",
    dataSheetUrl:
      "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
    infoRequestUrl: "/request-info?product=ec-3010-transparent-white",
    backgroundColor: "#BEE3F3",
    details: {
      title: "P-tex® 5188 black",
      mainDescription:
        "P-tex® 5188 black is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend available in clear and white versions. It offers superior optical clarity and excellent surface uniformity, making it ideal for premium packaging and industrial laminations.",
      downloads: [
        {
          label: "Data Sheet",
          url: "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
          icon: "dataSheet",
        },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
        { label: "Certifications & Compliance", url: "/downloads/certifications.pdf", icon: "compliance" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
        { name: "CE", imageUrl: "/assets/footer/certificate2.png", altText: "CE Mark" },
        { name: "FDA", imageUrl: "/assets/footer/certificate3.png", altText: "FDA Approved" },
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "High clarity / Transparent" },
        { property: "Gauge (Thickness)", value: "12 – 60 microns (customizable)" },
        { property: "Width", value: "500 – 1500 mm" },
        { property: "Core Material", value: "Multi-layered PE/PP blend" },
        { property: "Tensile Strength", value: "MD: 45–55 MPa / TD: 35–45 MPa" },
        { property: "Elongation at Break", value: "MD: 200–300% / TD: 150–250%" },
        { property: "Shrinkage", value: "MD: 2–4% / TD: 1–3%" },
        { property: "Surface Treatment", value: "Corona-treated for printability" },
        { property: "Food Contact Compliance", value: "FDA / EU compliant" },
        { property: "Color", value: "Natural / Customized" },
      ],
      applications: {
        heading: "Applications",
        description:
          "Used in packaging and industrial films requiring clarity and durability.",
        list: [
          "Food packaging (snacks, bakery, confectionery)",
          "Pharmaceutical and medical packaging",
          "Pouches, bags, and laminates",
          "Barrier films for sensitive products",
          "Industrial and specialty packaging",
        ],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description:
          "Delivers excellent visual quality, strength, and processability.",
        list: [
          { title: "High Clarity", description: "Excellent visual appeal for product display." },
          { title: "Multi-Layer Strength", description: "Superior durability and tear resistance." },
          { title: "Heat Sealable", description: "Compatible with standard packaging equipment." },
          { title: "Customizable Thickness & Width", description: "Tailored for different packaging lines." },
          { title: "Print-Ready Surface", description: "Excellent adhesion for inks and coatings." },
          { title: "Consistent Performance", description: "Uniform gauge and stable properties across rolls." },
        ],
      },
    },
  },

  // 14
  {
    id: "p-tex-5480-black",
    name: "P-tex® 5480 black",
    tagline: "High-performance polymer film for industrial use",
    description:
      "Durable black extrusion coating film offering exceptional heat and abrasion resistance for demanding industrial applications.",
    imageUrl: "/assets/products/product2.svg",
    dataSheetUrl: "/downloads/p-tex-3000-black.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-black",
    backgroundColor: "#EAF2F8",
    details: {
      title: "P-tex® 5480 black",
      mainDescription:
        "P-tex® 5480 black is a durable, UV-stabilized extrusion coating film offering high tensile strength and abrasion resistance. Designed for protective and decorative industrial applications.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-black.pdf", icon: "dataSheet" },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "Ultra High" },
        { property: "Gauge (Thickness)", value: "10 – 50 microns" },
      ],
      applications: {
        heading: "Applications",
        description: "Ideal for luxury and retail product packaging.",
        list: ["Premium retail packaging", "Window films", "Cosmetic wrap materials"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Enhanced clarity and gloss for product visibility.",
        list: [
          { title: "High Gloss", description: "Creates premium finish for retail." },
          { title: "UV Resistance", description: "Resists discoloration over time." },
        ],
      },
    },
  },

  // 15
  {
    id: "p-tex-5920-black",
    name: "P-tex® 5920 black",
    tagline: "Clear, flexible polymer film with balanced performance",
    description:
      "A translucent extrusion film providing excellent clarity and smooth processability for packaging and lamination uses.",
    imageUrl: "/assets/products/product3.svg",
    dataSheetUrl: "/downloads/p-tex-3000-natural.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-natural",
    backgroundColor: "#E1F5FE",
    details: {
      title: "P-tex® 5920 black",
      mainDescription:
        "P-tex® 5920 black is engineered for packaging and lamination applications where clarity and performance are essential. Offers excellent mechanical strength and adhesion properties.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-natural.pdf", icon: "dataSheet" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
      ],
      certifications: [
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Material", value: "100% recyclable blend" },
        { property: "Thickness", value: "20 – 80 microns" },
        { property: "Sustainability", value: "Fully recyclable (no PVC)" },
      ],
      applications: {
        heading: "Applications",
        description: "Used in eco-friendly packaging and sustainable products.",
        list: ["Food packaging", "Retail wraps", "Eco pouches"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Environmentally friendly without performance loss.",
        list: [
          { title: "Recyclable", description: "100% recyclable polymer film." },
          { title: "High Strength", description: "Maintains durability in thin gauges." },
        ],
      },
    },
  },

  // 16
  {
    id: "p-tex-xc",
    name: "P-tex® XC",
    tagline: "Engineered for superior transparency and durability",
    description:
      "P-tex® XC is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend, available in clear and white versions.",
    imageUrl: "/assets/products/product1.svg",
    dataSheetUrl:
      "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
    infoRequestUrl: "/request-info?product=ec-3010-transparent-white",
    backgroundColor: "#BEE3F3",
    details: {
      title: "P-tex® XC",
      mainDescription:
        "P-tex® XC is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend available in clear and white versions. It offers superior optical clarity and excellent surface uniformity, making it ideal for premium packaging and industrial laminations.",
      downloads: [
        {
          label: "Data Sheet",
          url: "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
          icon: "dataSheet",
        },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
        { label: "Certifications & Compliance", url: "/downloads/certifications.pdf", icon: "compliance" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
        { name: "CE", imageUrl: "/assets/footer/certificate2.png", altText: "CE Mark" },
        { name: "FDA", imageUrl: "/assets/footer/certificate3.png", altText: "FDA Approved" },
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "High clarity / Transparent" },
        { property: "Gauge (Thickness)", value: "12 – 60 microns (customizable)" },
        { property: "Width", value: "500 – 1500 mm" },
        { property: "Core Material", value: "Multi-layered PE/PP blend" },
        { property: "Tensile Strength", value: "MD: 45–55 MPa / TD: 35–45 MPa" },
        { property: "Elongation at Break", value: "MD: 200–300% / TD: 150–250%" },
        { property: "Shrinkage", value: "MD: 2–4% / TD: 1–3%" },
        { property: "Surface Treatment", value: "Corona-treated for printability" },
        { property: "Food Contact Compliance", value: "FDA / EU compliant" },
        { property: "Color", value: "Natural / Customized" },
      ],
      applications: {
        heading: "Applications",
        description:
          "Used in packaging and industrial films requiring clarity and durability.",
        list: [
          "Food packaging (snacks, bakery, confectionery)",
          "Pharmaceutical and medical packaging",
          "Pouches, bags, and laminates",
          "Barrier films for sensitive products",
          "Industrial and specialty packaging",
        ],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description:
          "Delivers excellent visual quality, strength, and processability.",
        list: [
          { title: "High Clarity", description: "Excellent visual appeal for product display." },
          { title: "Multi-Layer Strength", description: "Superior durability and tear resistance." },
          { title: "Heat Sealable", description: "Compatible with standard packaging equipment." },
          { title: "Customizable Thickness & Width", description: "Tailored for different packaging lines." },
          { title: "Print-Ready Surface", description: "Excellent adhesion for inks and coatings." },
          { title: "Consistent Performance", description: "Uniform gauge and stable properties across rolls." },
        ],
      },
    },
  },

  // 17
  {
    id: "p-tex-1820-clear",
    name: "P-tex® 1820 clear",
    tagline: "High-performance polymer film for industrial use",
    description:
      "Durable black extrusion coating film offering exceptional heat and abrasion resistance for demanding industrial applications.",
    imageUrl: "/assets/products/product2.svg",
    dataSheetUrl: "/downloads/p-tex-3000-black.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-black",
    backgroundColor: "#EAF2F8",
    details: {
      title: "P-tex® 1820 clear",
      mainDescription:
        "P-tex® 1820 clear is a durable, UV-stabilized extrusion coating film offering high tensile strength and abrasion resistance. Designed for protective and decorative industrial applications.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-black.pdf", icon: "dataSheet" },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "Ultra High" },
        { property: "Gauge (Thickness)", value: "10 – 50 microns" },
      ],
      applications: {
        heading: "Applications",
        description: "Ideal for luxury and retail product packaging.",
        list: ["Premium retail packaging", "Window films", "Cosmetic wrap materials"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Enhanced clarity and gloss for product visibility.",
        list: [
          { title: "High Gloss", description: "Creates premium finish for retail." },
          { title: "UV Resistance", description: "Resists discoloration over time." },
        ],
      },
    },
  },

  // 18
  {
    id: "p-tex-1820-black",
    name: "P-tex® 1820 black",
    tagline: "Clear, flexible polymer film with balanced performance",
    description:
      "A translucent extrusion film providing excellent clarity and smooth processability for packaging and lamination uses.",
    imageUrl: "/assets/products/product3.svg",
    dataSheetUrl: "/downloads/p-tex-3000-natural.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-natural",
    backgroundColor: "#E1F5FE",
    details: {
      title: "P-tex® 1820 black",
      mainDescription:
        "P-tex® 1820 black is engineered for packaging and lamination applications where clarity and performance are essential. Offers excellent mechanical strength and adhesion properties.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-natural.pdf", icon: "dataSheet" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
      ],
      certifications: [
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Material", value: "100% recyclable blend" },
        { property: "Thickness", value: "20 – 80 microns" },
        { property: "Sustainability", value: "Fully recyclable (no PVC)" },
      ],
      applications: {
        heading: "Applications",
        description: "Used in eco-friendly packaging and sustainable products.",
        list: ["Food packaging", "Retail wraps", "Eco pouches"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Environmentally friendly without performance loss.",
        list: [
          { title: "Recyclable", description: "100% recyclable polymer film." },
          { title: "High Strength", description: "Maintains durability in thin gauges." },
        ],
      },
    },
  },

  // 19
  {
    id: "p-tex-1100-black",
    name: "P-tex® 1100 black",
    tagline: "Engineered for superior transparency and durability",
    description:
      "P-tex® 1100 black is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend, available in clear and white versions.",
    imageUrl: "/assets/products/product1.svg",
    dataSheetUrl:
      "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
    infoRequestUrl: "/request-info?product=ec-3010-transparent-white",
    backgroundColor: "#BEE3F3",
    details: {
      title: "P-tex® 1100 black",
      mainDescription:
        "P-tex® 1100 black is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend available in clear and white versions. It offers superior optical clarity and excellent surface uniformity, making it ideal for premium packaging and industrial laminations.",
      downloads: [
        {
          label: "Data Sheet",
          url: "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
          icon: "dataSheet",
        },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
        { label: "Certifications & Compliance", url: "/downloads/certifications.pdf", icon: "compliance" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
        { name: "CE", imageUrl: "/assets/footer/certificate2.png", altText: "CE Mark" },
        { name: "FDA", imageUrl: "/assets/footer/certificate3.png", altText: "FDA Approved" },
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "High clarity / Transparent" },
        { property: "Gauge (Thickness)", value: "12 – 60 microns (customizable)" },
        { property: "Width", value: "500 – 1500 mm" },
        { property: "Core Material", value: "Multi-layered PE/PP blend" },
        { property: "Tensile Strength", value: "MD: 45–55 MPa / TD: 35–45 MPa" },
        { property: "Elongation at Break", value: "MD: 200–300% / TD: 150–250%" },
        { property: "Shrinkage", value: "MD: 2–4% / TD: 1–3%" },
        { property: "Surface Treatment", value: "Corona-treated for printability" },
        { property: "Food Contact Compliance", value: "FDA / EU compliant" },
        { property: "Color", value: "Natural / Customized" },
      ],
      applications: {
        heading: "Applications",
        description:
          "Used in packaging and industrial films requiring clarity and durability.",
        list: [
          "Food packaging (snacks, bakery, confectionery)",
          "Pharmaceutical and medical packaging",
          "Pouches, bags, and laminates",
          "Barrier films for sensitive products",
          "Industrial and specialty packaging",
        ],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description:
          "Delivers excellent visual quality, strength, and processability.",
        list: [
          { title: "High Clarity", description: "Excellent visual appeal for product display." },
          { title: "Multi-Layer Strength", description: "Superior durability and tear resistance." },
          { title: "Heat Sealable", description: "Compatible with standard packaging equipment." },
          { title: "Customizable Thickness & Width", description: "Tailored for different packaging lines." },
          { title: "Print-Ready Surface", description: "Excellent adhesion for inks and coatings." },
          { title: "Consistent Performance", description: "Uniform gauge and stable properties across rolls." },
        ],
      },
    },
  },

  // 20
  {
    id: "p-tex-900-htr",
    name: "P-tex® 900 HTR",
    tagline: "High-performance polymer film for industrial use",
    description:
      "Durable black extrusion coating film offering exceptional heat and abrasion resistance for demanding industrial applications.",
    imageUrl: "/assets/products/product2.svg",
    dataSheetUrl: "/downloads/p-tex-3000-black.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-black",
    backgroundColor: "#EAF2F8",
    details: {
      title: "P-tex® 900 HTR",
      mainDescription:
        "P-tex® 900 HTR is a durable, UV-stabilized extrusion coating film offering high tensile strength and abrasion resistance. Designed for protective and decorative industrial applications.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-black.pdf", icon: "dataSheet" },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "Ultra High" },
        { property: "Gauge (Thickness)", value: "10 – 50 microns" },
      ],
      applications: {
        heading: "Applications",
        description: "Ideal for luxury and retail product packaging.",
        list: ["Premium retail packaging", "Window films", "Cosmetic wrap materials"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Enhanced clarity and gloss for product visibility.",
        list: [
          { title: "High Gloss", description: "Creates premium finish for retail." },
          { title: "UV Resistance", description: "Resists discoloration over time." },
        ],
      },
    },
  },

  // 21
  {
    id: "p-tex-800-clear-colored",
    name: "P-tex® 800 clear & colored",
    tagline: "Clear, flexible polymer film with balanced performance",
    description:
      "A translucent extrusion film providing excellent clarity and smooth processability for packaging and lamination uses.",
    imageUrl: "/assets/products/product3.svg",
    dataSheetUrl: "/downloads/p-tex-3000-natural.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-natural",
    backgroundColor: "#E1F5FE",
    details: {
      title: "P-tex® 800 clear & colored",
      mainDescription:
        "P-tex® 800 clear & colored is engineered for packaging and lamination applications where clarity and performance are essential. Offers excellent mechanical strength and adhesion properties.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-natural.pdf", icon: "dataSheet" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
      ],
      certifications: [
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Material", value: "100% recyclable blend" },
        { property: "Thickness", value: "20 – 80 microns" },
        { property: "Sustainability", value: "Fully recyclable (no PVC)" },
      ],
      applications: {
        heading: "Applications",
        description: "Used in eco-friendly packaging and sustainable products.",
        list: ["Food packaging", "Retail wraps", "Eco pouches"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Environmentally friendly without performance loss.",
        list: [
          { title: "Recyclable", description: "100% recyclable polymer film." },
          { title: "High Strength", description: "Maintains durability in thin gauges." },
        ],
      },
    },
  },

  // 22
  {
    id: "tp-455-black-white",
    name: "TP 455 black & white",
    tagline: "Engineered for superior transparency and durability",
    description:
      "TP 455 black & white is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend, available in clear and white versions.",
    imageUrl: "/assets/products/product1.svg",
    dataSheetUrl:
      "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
    infoRequestUrl: "/request-info?product=ec-3010-transparent-white",
    backgroundColor: "#BEE3F3",
    details: {
      title: "TP 455 black & white",
      mainDescription:
        "TP 455 black & white is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend available in clear and white versions. It offers superior optical clarity and excellent surface uniformity, making it ideal for premium packaging and industrial laminations.",
      downloads: [
        {
          label: "Data Sheet",
          url: "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
          icon: "dataSheet",
        },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
        { label: "Certifications & Compliance", url: "/downloads/certifications.pdf", icon: "compliance" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
        { name: "CE", imageUrl: "/assets/footer/certificate2.png", altText: "CE Mark" },
        { name: "FDA", imageUrl: "/assets/footer/certificate3.png", altText: "FDA Approved" },
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "High clarity / Transparent" },
        { property: "Gauge (Thickness)", value: "12 – 60 microns (customizable)" },
        { property: "Width", value: "500 – 1500 mm" },
        { property: "Core Material", value: "Multi-layered PE/PP blend" },
        { property: "Tensile Strength", value: "MD: 45–55 MPa / TD: 35–45 MPa" },
        { property: "Elongation at Break", value: "MD: 200–300% / TD: 150–250%" },
        { property: "Shrinkage", value: "MD: 2–4% / TD: 1–3%" },
        { property: "Surface Treatment", value: "Corona-treated for printability" },
        { property: "Food Contact Compliance", value: "FDA / EU compliant" },
        { property: "Color", value: "Natural / Customized" },
      ],
      applications: {
        heading: "Applications",
        description:
          "Used in packaging and industrial films requiring clarity and durability.",
        list: [
          "Food packaging (snacks, bakery, confectionery)",
          "Pharmaceutical and medical packaging",
          "Pouches, bags, and laminates",
          "Barrier films for sensitive products",
          "Industrial and specialty packaging",
        ],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description:
          "Delivers excellent visual quality, strength, and processability.",
        list: [
          { title: "High Clarity", description: "Excellent visual appeal for product display." },
          { title: "Multi-Layer Strength", description: "Superior durability and tear resistance." },
          { title: "Heat Sealable", description: "Compatible with standard packaging equipment." },
          { title: "Customizable Thickness & Width", description: "Tailored for different packaging lines." },
          { title: "Print-Ready Surface", description: "Excellent adhesion for inks and coatings." },
          { title: "Consistent Performance", description: "Uniform gauge and stable properties across rolls." },
        ],
      },
    },
  },

  // 23
  {
    id: "tp190",
    name: "TP190",
    tagline: "High-performance polymer film for industrial use",
    description:
      "Durable black extrusion coating film offering exceptional heat and abrasion resistance for demanding industrial applications.",
    imageUrl: "/assets/products/product2.svg",
    dataSheetUrl: "/downloads/p-tex-3000-black.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-black",
    backgroundColor: "#EAF2F8",
    details: {
      title: "TP190",
      mainDescription:
        "TP190 is a durable, UV-stabilized extrusion coating film offering high tensile strength and abrasion resistance. Designed for protective and decorative industrial applications.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-black.pdf", icon: "dataSheet" },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "Ultra High" },
        { property: "Gauge (Thickness)", value: "10 – 50 microns" },
      ],
      applications: {
        heading: "Applications",
        description: "Ideal for luxury and retail product packaging.",
        list: ["Premium retail packaging", "Window films", "Cosmetic wrap materials"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Enhanced clarity and gloss for product visibility.",
        list: [
          { title: "High Gloss", description: "Creates premium finish for retail." },
          { title: "UV Resistance", description: "Resists discoloration over time." },
        ],
      },
    },
  },

  // 24
  {
    id: "abs-extrusions",
    name: "ABS extrusions",
    tagline: "Clear, flexible polymer film with balanced performance",
    description:
      "A translucent extrusion film providing excellent clarity and smooth processability for packaging and lamination uses.",
    imageUrl: "/assets/products/product3.svg",
    dataSheetUrl: "/downloads/p-tex-3000-natural.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-natural",
    backgroundColor: "#E1F5FE",
    details: {
      title: "ABS extrusions",
      mainDescription:
        "ABS extrusions is engineered for packaging and lamination applications where clarity and performance are essential. Offers excellent mechanical strength and adhesion properties.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-natural.pdf", icon: "dataSheet" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
      ],
      certifications: [
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Material", value: "100% recyclable blend" },
        { property: "Thickness", value: "20 – 80 microns" },
        { property: "Sustainability", value: "Fully recyclable (no PVC)" },
      ],
      applications: {
        heading: "Applications",
        description: "Used in eco-friendly packaging and sustainable products.",
        list: ["Food packaging", "Retail wraps", "Eco pouches"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Environmentally friendly without performance loss.",
        list: [
          { title: "Recyclable", description: "100% recyclable polymer film." },
          { title: "High Strength", description: "Maintains durability in thin gauges." },
        ],
      },
    },
  },

  // 25
  {
    id: "abs-profiles",
    name: "ABS profiles",
    tagline: "Engineered for superior transparency and durability",
    description:
      "ABS profiles is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend, available in clear and white versions.",
    imageUrl: "/assets/products/product1.svg",
    dataSheetUrl:
      "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
    infoRequestUrl: "/request-info?product=ec-3010-transparent-white",
    backgroundColor: "#BEE3F3",
    details: {
      title: "ABS profiles",
      mainDescription:
        "ABS profiles is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend available in clear and white versions. It offers superior optical clarity and excellent surface uniformity, making it ideal for premium packaging and industrial laminations.",
      downloads: [
        {
          label: "Data Sheet",
          url: "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
          icon: "dataSheet",
        },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
        { label: "Certifications & Compliance", url: "/downloads/certifications.pdf", icon: "compliance" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
        { name: "CE", imageUrl: "/assets/footer/certificate2.png", altText: "CE Mark" },
        { name: "FDA", imageUrl: "/assets/footer/certificate3.png", altText: "FDA Approved" },
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "High clarity / Transparent" },
        { property: "Gauge (Thickness)", value: "12 – 60 microns (customizable)" },
        { property: "Width", value: "500 – 1500 mm" },
        { property: "Core Material", value: "Multi-layered PE/PP blend" },
        { property: "Tensile Strength", value: "MD: 45–55 MPa / TD: 35–45 MPa" },
        { property: "Elongation at Break", value: "MD: 200–300% / TD: 150–250%" },
        { property: "Shrinkage", value: "MD: 2–4% / TD: 1–3%" },
        { property: "Surface Treatment", value: "Corona-treated for printability" },
        { property: "Food Contact Compliance", value: "FDA / EU compliant" },
        { property: "Color", value: "Natural / Customized" },
      ],
      applications: {
        heading: "Applications",
        description:
          "Used in packaging and industrial films requiring clarity and durability.",
        list: [
          "Food packaging (snacks, bakery, confectionery)",
          "Pharmaceutical and medical packaging",
          "Pouches, bags, and laminates",
          "Barrier films for sensitive products",
          "Industrial and specialty packaging",
        ],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description:
          "Delivers excellent visual quality, strength, and processability.",
        list: [
          { title: "High Clarity", description: "Excellent visual appeal for product display." },
          { title: "Multi-Layer Strength", description: "Superior durability and tear resistance." },
          { title: "Heat Sealable", description: "Compatible with standard packaging equipment." },
          { title: "Customizable Thickness & Width", description: "Tailored for different packaging lines." },
          { title: "Print-Ready Surface", description: "Excellent adhesion for inks and coatings." },
          { title: "Consistent Performance", description: "Uniform gauge and stable properties across rolls." },
        ],
      },
    },
  },

  // 26
  {
    id: "pe-1000",
    name: "PE 1000",
    tagline: "High-performance polymer film for industrial use",
    description:
      "Durable black extrusion coating film offering exceptional heat and abrasion resistance for demanding industrial applications.",
    imageUrl: "/assets/products/product2.svg",
    dataSheetUrl: "/downloads/p-tex-3000-black.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-black",
    backgroundColor: "#EAF2F8",
    details: {
      title: "PE 1000",
      mainDescription:
        "PE 1000 is a durable, UV-stabilized extrusion coating film offering high tensile strength and abrasion resistance. Designed for protective and decorative industrial applications.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-black.pdf", icon: "dataSheet" },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "Ultra High" },
        { property: "Gauge (Thickness)", value: "10 – 50 microns" },
      ],
      applications: {
        heading: "Applications",
        description: "Ideal for luxury and retail product packaging.",
        list: ["Premium retail packaging", "Window films", "Cosmetic wrap materials"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Enhanced clarity and gloss for product visibility.",
        list: [
          { title: "High Gloss", description: "Creates premium finish for retail." },
          { title: "UV Resistance", description: "Resists discoloration over time." },
        ],
      },
    },
  },

  // 27
  {
    id: "t-series-natural",
    name: "T-series natural",
    tagline: "Clear, flexible polymer film with balanced performance",
    description:
      "A translucent extrusion film providing excellent clarity and smooth processability for packaging and lamination uses.",
    imageUrl: "/assets/products/product3.svg",
    dataSheetUrl: "/downloads/p-tex-3000-natural.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-natural",
    backgroundColor: "#E1F5FE",
    details: {
      title: "T-series natural",
      mainDescription:
        "T-series natural is engineered for packaging and lamination applications where clarity and performance are essential. Offers excellent mechanical strength and adhesion properties.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-natural.pdf", icon: "dataSheet" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
      ],
      certifications: [
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Material", value: "100% recyclable blend" },
        { property: "Thickness", value: "20 – 80 microns" },
        { property: "Sustainability", value: "Fully recyclable (no PVC)" },
      ],
      applications: {
        heading: "Applications",
        description: "Used in eco-friendly packaging and sustainable products.",
        list: ["Food packaging", "Retail wraps", "Eco pouches"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Environmentally friendly without performance loss.",
        list: [
          { title: "Recyclable", description: "100% recyclable polymer film." },
          { title: "High Strength", description: "Maintains durability in thin gauges." },
        ],
      },
    },
  },

  // 28
  {
    id: "t-series-uv-natural",
    name: "T-series UV natural",
    tagline: "Engineered for superior transparency and durability",
    description:
      "T-series UV natural is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend, available in clear and white versions.",
    imageUrl: "/assets/products/product1.svg",
    dataSheetUrl:
      "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
    infoRequestUrl: "/request-info?product=ec-3010-transparent-white",
    backgroundColor: "#BEE3F3",
    details: {
      title: "T-series UV natural",
      mainDescription:
        "T-series UV natural is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend available in clear and white versions. It offers superior optical clarity and excellent surface uniformity, making it ideal for premium packaging and industrial laminations.",
      downloads: [
        {
          label: "Data Sheet",
          url: "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
          icon: "dataSheet",
        },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
        { label: "Certifications & Compliance", url: "/downloads/certifications.pdf", icon: "compliance" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
        { name: "CE", imageUrl: "/assets/footer/certificate2.png", altText: "CE Mark" },
        { name: "FDA", imageUrl: "/assets/footer/certificate3.png", altText: "FDA Approved" },
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "High clarity / Transparent" },
        { property: "Gauge (Thickness)", value: "12 – 60 microns (customizable)" },
        { property: "Width", value: "500 – 1500 mm" },
        { property: "Core Material", value: "Multi-layered PE/PP blend" },
        { property: "Tensile Strength", value: "MD: 45–55 MPa / TD: 35–45 MPa" },
        { property: "Elongation at Break", value: "MD: 200–300% / TD: 150–250%" },
        { property: "Shrinkage", value: "MD: 2–4% / TD: 1–3%" },
        { property: "Surface Treatment", value: "Corona-treated for printability" },
        { property: "Food Contact Compliance", value: "FDA / EU compliant" },
        { property: "Color", value: "Natural / Customized" },
      ],
      applications: {
        heading: "Applications",
        description:
          "Used in packaging and industrial films requiring clarity and durability.",
        list: [
          "Food packaging (snacks, bakery, confectionery)",
          "Pharmaceutical and medical packaging",
          "Pouches, bags, and laminates",
          "Barrier films for sensitive products",
          "Industrial and specialty packaging",
        ],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description:
          "Delivers excellent visual quality, strength, and processability.",
        list: [
          { title: "High Clarity", description: "Excellent visual appeal for product display." },
          { title: "Multi-Layer Strength", description: "Superior durability and tear resistance." },
          { title: "Heat Sealable", description: "Compatible with standard packaging equipment." },
          { title: "Customizable Thickness & Width", description: "Tailored for different packaging lines." },
          { title: "Print-Ready Surface", description: "Excellent adhesion for inks and coatings." },
          { title: "Consistent Performance", description: "Uniform gauge and stable properties across rolls." },
        ],
      },
    },
  },

  // 29
  {
    id: "c-series",
    name: "C-series",
    tagline: "High-performance polymer film for industrial use",
    description:
      "Durable black extrusion coating film offering exceptional heat and abrasion resistance for demanding industrial applications.",
    imageUrl: "/assets/products/product2.svg",
    dataSheetUrl: "/downloads/p-tex-3000-black.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-black",
    backgroundColor: "#EAF2F8",
    details: {
      title: "C-series",
      mainDescription:
        "C-series is a durable, UV-stabilized extrusion coating film offering high tensile strength and abrasion resistance. Designed for protective and decorative industrial applications.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-black.pdf", icon: "dataSheet" },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "Ultra High" },
        { property: "Gauge (Thickness)", value: "10 – 50 microns" },
      ],
      applications: {
        heading: "Applications",
        description: "Ideal for luxury and retail product packaging.",
        list: ["Premium retail packaging", "Window films", "Cosmetic wrap materials"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Enhanced clarity and gloss for product visibility.",
        list: [
          { title: "High Gloss", description: "Creates premium finish for retail." },
          { title: "UV Resistance", description: "Resists discoloration over time." },
        ],
      },
    },
  },

  // 30
  {
    id: "f-series",
    name: "F-series",
    tagline: "Clear, flexible polymer film with balanced performance",
    description:
      "A translucent extrusion film providing excellent clarity and smooth processability for packaging and lamination uses.",
    imageUrl: "/assets/products/product3.svg",
    dataSheetUrl: "/downloads/p-tex-3000-natural.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-natural",
    backgroundColor: "#E1F5FE",
    details: {
      title: "F-series",
      mainDescription:
        "F-series is engineered for packaging and lamination applications where clarity and performance are essential. Offers excellent mechanical strength and adhesion properties.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-natural.pdf", icon: "dataSheet" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
      ],
      certifications: [
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Material", value: "100% recyclable blend" },
        { property: "Thickness", value: "20 – 80 microns" },
        { property: "Sustainability", value: "Fully recyclable (no PVC)" },
      ],
      applications: {
        heading: "Applications",
        description: "Used in eco-friendly packaging and sustainable products.",
        list: ["Food packaging", "Retail wraps", "Eco pouches"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Environmentally friendly without performance loss.",
        list: [
          { title: "Recyclable", description: "100% recyclable polymer film." },
          { title: "High Strength", description: "Maintains durability in thin gauges." },
        ],
      },
    },
  },

  // 31
  {
    id: "fc-series",
    name: "FC-series",
    tagline: "Engineered for superior transparency and durability",
    description:
      "FC-series is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend, available in clear and white versions.",
    imageUrl: "/assets/products/product1.svg",
    dataSheetUrl:
      "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
    infoRequestUrl: "/request-info?product=ec-3010-transparent-white",
    backgroundColor: "#BEE3F3",
    details: {
      title: "FC-series",
      mainDescription:
        "FC-series is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend available in clear and white versions. It offers superior optical clarity and excellent surface uniformity, making it ideal for premium packaging and industrial laminations.",
      downloads: [
        {
          label: "Data Sheet",
          url: "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
          icon: "dataSheet",
        },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
        { label: "Certifications & Compliance", url: "/downloads/certifications.pdf", icon: "compliance" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
        { name: "CE", imageUrl: "/assets/footer/certificate2.png", altText: "CE Mark" },
        { name: "FDA", imageUrl: "/assets/footer/certificate3.png", altText: "FDA Approved" },
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "High clarity / Transparent" },
        { property: "Gauge (Thickness)", value: "12 – 60 microns (customizable)" },
        { property: "Width", value: "500 – 1500 mm" },
        { property: "Core Material", value: "Multi-layered PE/PP blend" },
        { property: "Tensile Strength", value: "MD: 45–55 MPa / TD: 35–45 MPa" },
        { property: "Elongation at Break", value: "MD: 200–300% / TD: 150–250%" },
        { property: "Shrinkage", value: "MD: 2–4% / TD: 1–3%" },
        { property: "Surface Treatment", value: "Corona-treated for printability" },
        { property: "Food Contact Compliance", value: "FDA / EU compliant" },
        { property: "Color", value: "Natural / Customized" },
      ],
      applications: {
        heading: "Applications",
        description:
          "Used in packaging and industrial films requiring clarity and durability.",
        list: [
          "Food packaging (snacks, bakery, confectionery)",
          "Pharmaceutical and medical packaging",
          "Pouches, bags, and laminates",
          "Barrier films for sensitive products",
          "Industrial and specialty packaging",
        ],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description:
          "Delivers excellent visual quality, strength, and processability.",
        list: [
          { title: "High Clarity", description: "Excellent visual appeal for product display." },
          { title: "Multi-Layer Strength", description: "Superior durability and tear resistance." },
          { title: "Heat Sealable", description: "Compatible with standard packaging equipment." },
          { title: "Customizable Thickness & Width", description: "Tailored for different packaging lines." },
          { title: "Print-Ready Surface", description: "Excellent adhesion for inks and coatings." },
          { title: "Consistent Performance", description: "Uniform gauge and stable properties across rolls." },
        ],
      },
    },
  },

  // 32
  {
    id: "w-series",
    name: "W-series",
    tagline: "High-performance polymer film for industrial use",
    description:
      "Durable black extrusion coating film offering exceptional heat and abrasion resistance for demanding industrial applications.",
    imageUrl: "/assets/products/product2.svg",
    dataSheetUrl: "/downloads/p-tex-3000-black.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-black",
    backgroundColor: "#EAF2F8",
    details: {
      title: "W-series",
      mainDescription:
        "W-series is a durable, UV-stabilized extrusion coating film offering high tensile strength and abrasion resistance. Designed for protective and decorative industrial applications.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-black.pdf", icon: "dataSheet" },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "Ultra High" },
        { property: "Gauge (Thickness)", value: "10 – 50 microns" },
      ],
      applications: {
        heading: "Applications",
        description: "Ideal for luxury and retail product packaging.",
        list: ["Premium retail packaging", "Window films", "Cosmetic wrap materials"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Enhanced clarity and gloss for product visibility.",
        list: [
          { title: "High Gloss", description: "Creates premium finish for retail." },
          { title: "UV Resistance", description: "Resists discoloration over time." },
        ],
      },
    },
  },

  // 33
  {
    id: "umc-series",
    name: "UMC series",
    tagline: "Clear, flexible polymer film with balanced performance",
    description:
      "A translucent extrusion film providing excellent clarity and smooth processability for packaging and lamination uses.",
    imageUrl: "/assets/products/product3.svg",
    dataSheetUrl: "/downloads/p-tex-3000-natural.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-natural",
    backgroundColor: "#E1F5FE",
    details: {
      title: "UMC series",
      mainDescription:
        "UMC series is engineered for packaging and lamination applications where clarity and performance are essential. Offers excellent mechanical strength and adhesion properties.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-natural.pdf", icon: "dataSheet" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
      ],
      certifications: [
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Material", value: "100% recyclable blend" },
        { property: "Thickness", value: "20 – 80 microns" },
        { property: "Sustainability", value: "Fully recyclable (no PVC)" },
      ],
      applications: {
        heading: "Applications",
        description: "Used in eco-friendly packaging and sustainable products.",
        list: ["Food packaging", "Retail wraps", "Eco pouches"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Environmentally friendly without performance loss.",
        list: [
          { title: "Recyclable", description: "100% recyclable polymer film." },
          { title: "High Strength", description: "Maintains durability in thin gauges." },
        ],
      },
    },
  },

  // 34
  {
    id: "pa6-6",
    name: "PA6.6",
    tagline: "Engineered for superior transparency and durability",
    description:
      "PA6.6 is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend, available in clear and white versions.",
    imageUrl: "/assets/products/product1.svg",
    dataSheetUrl:
      "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
    infoRequestUrl: "/request-info?product=ec-3010-transparent-white",
    backgroundColor: "#BEE3F3",
    details: {
      title: "PA6.6",
      mainDescription:
        "PA6.6 is a UV base-stabilized, deep-drawable, back printable and cut-firm extruded foil of TPU blend available in clear and white versions. It offers superior optical clarity and excellent surface uniformity, making it ideal for premium packaging and industrial laminations.",
      downloads: [
        {
          label: "Data Sheet",
          url: "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf",
          icon: "dataSheet",
        },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
        { label: "Technical Guide", url: "/downloads/technical-guide.pdf", icon: "technical" },
        { label: "Certifications & Compliance", url: "/downloads/certifications.pdf", icon: "compliance" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
        { name: "CE", imageUrl: "/assets/footer/certificate2.png", altText: "CE Mark" },
        { name: "FDA", imageUrl: "/assets/footer/certificate3.png", altText: "FDA Approved" },
        { name: "Recyclable", imageUrl: "/assets/footer/certificate4.png", altText: "Recyclable" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "High clarity / Transparent" },
        { property: "Gauge (Thickness)", value: "12 – 60 microns (customizable)" },
        { property: "Width", value: "500 – 1500 mm" },
        { property: "Core Material", value: "Multi-layered PE/PP blend" },
        { property: "Tensile Strength", value: "MD: 45–55 MPa / TD: 35–45 MPa" },
        { property: "Elongation at Break", value: "MD: 200–300% / TD: 150–250%" },
        { property: "Shrinkage", value: "MD: 2–4% / TD: 1–3%" },
        { property: "Surface Treatment", value: "Corona-treated for printability" },
        { property: "Food Contact Compliance", value: "FDA / EU compliant" },
        { property: "Color", value: "Natural / Customized" },
      ],
      applications: {
        heading: "Applications",
        description:
          "Used in packaging and industrial films requiring clarity and durability.",
        list: [
          "Food packaging (snacks, bakery, confectionery)",
          "Pharmaceutical and medical packaging",
          "Pouches, bags, and laminates",
          "Barrier films for sensitive products",
          "Industrial and specialty packaging",
        ],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description:
          "Delivers excellent visual quality, strength, and processability.",
        list: [
          { title: "High Clarity", description: "Excellent visual appeal for product display." },
          { title: "Multi-Layer Strength", description: "Superior durability and tear resistance." },
          { title: "Heat Sealable", description: "Compatible with standard packaging equipment." },
          { title: "Customizable Thickness & Width", description: "Tailored for different packaging lines." },
          { title: "Print-Ready Surface", description: "Excellent adhesion for inks and coatings." },
          { title: "Consistent Performance", description: "Uniform gauge and stable properties across rolls." },
        ],
      },
    },
  },

  // 35
  {
    id: "pps",
    name: "PPS",
    tagline: "High-performance polymer film for industrial use",
    description:
      "Durable black extrusion coating film offering exceptional heat and abrasion resistance for demanding industrial applications.",
    imageUrl: "/assets/products/product2.svg",
    dataSheetUrl: "/downloads/p-tex-3000-black.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-black",
    backgroundColor: "#EAF2F8",
    details: {
      title: "PPS",
      mainDescription:
        "PPS is a durable, UV-stabilized extrusion coating film offering high tensile strength and abrasion resistance. Designed for protective and decorative industrial applications.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-black.pdf", icon: "dataSheet" },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "Ultra High" },
        { property: "Gauge (Thickness)", value: "10 – 50 microns" },
      ],
      applications: {
        heading: "Applications",
        description: "Ideal for luxury and retail product packaging.",
        list: ["Premium retail packaging", "Window films", "Cosmetic wrap materials"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Enhanced clarity and gloss for product visibility.",
        list: [
          { title: "High Gloss", description: "Creates premium finish for retail." },
          { title: "UV Resistance", description: "Resists discoloration over time." },
        ],
      },
    },
  },

  // 36
  {
    id: "pla-pbs-pbat-biobased",
    name: "PLA / PBS / PBAT (Biobased)",
    tagline: "High-performance polymer film for industrial use",
    description:
      "Durable black extrusion coating film offering exceptional heat and abrasion resistance for demanding industrial applications.",
    imageUrl: "/assets/products/product2.svg",
    dataSheetUrl: "/downloads/p-tex-3000-black.pdf",
    infoRequestUrl: "/request-info?product=p-tex-3000-black",
    backgroundColor: "#EAF2F8",
    details: {
      title: "PLA / PBS / PBAT (Biobased)",
      mainDescription:
        "PLA / PBS / PBAT (Biobased) is a durable, UV-stabilized extrusion coating film offering high tensile strength and abrasion resistance. Designed for protective and decorative industrial applications.",
      downloads: [
        { label: "Data Sheet", url: "/downloads/p-tex-3000-black.pdf", icon: "dataSheet" },
        { label: "Safety Data Sheet", url: "/downloads/sds.pdf", icon: "safety" },
      ],
      certifications: [
        { name: "ISO", imageUrl: "/assets/footer/certificate1.png", altText: "ISO Certified" },
      ],
      specifications: [
        { property: "Film Type", value: "Co-Extrusion" },
        { property: "Clarity", value: "Ultra High" },
        { property: "Gauge (Thickness)", value: "10 – 50 microns" },
      ],
      applications: {
        heading: "Applications",
        description: "Ideal for luxury and retail product packaging.",
        list: ["Premium retail packaging", "Window films", "Cosmetic wrap materials"],
      },
      featuresBenefits: {
        heading: "Features & Benefits",
        description: "Enhanced clarity and gloss for product visibility.",
        list: [
          { title: "High Gloss", description: "Creates premium finish for retail." },
          { title: "UV Resistance", description: "Resists discoloration over time." },
        ],
      },
    },
  },
];
