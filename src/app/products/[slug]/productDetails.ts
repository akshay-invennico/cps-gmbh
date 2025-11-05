import { Product } from "./Hero";
import { ProductDetailsContent } from "./ProductDescription";

export const DUMMY_PRODUCT_DATA: Product = {
  id: 'ec-transparent',
  name: 'EC 3010 transparent & white',
  tagline: 'Engineered for superior transparency and durability',
  description:
    "EC 3010 is a UV base-stabalized, deep-drawable, back printable and cut-firm extruted foil of TPU - Blend which is in clear and white version available.",
  imageUrl: '/assets/products/product1.svg', 
  dataSheetUrl: 'https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf',
  infoRequestUrl: '/request-info?product=co-x-40',
  backgroundColor: '#BEE3F3', 
};

export const DUMMY_DETAILS_CONTENT: ProductDetailsContent = {
  title: "EC 3010 transparent & white",
  mainDescription:
    "EC 3010 is a UV base-stabalized, deep-drawable, back printable and cut-firm extruted foil of TPU - Blend which is in clear and white version available. EC 3010 is a UV base-stabalized, deep-drawable, back printable and cut-firm extruted foil of TPU - Blend which is in clear and white version available. EC 3010 is a UV base-stabalized, deep-drawable, back printable and cut-firm extruted foil of TPU - Blend which is in clear and white version available.",
  downloads: [
    { label: "Data Sheet", url: "https://www.cps-gmbh.net/download/datenblaetter/EC_3010_DS_clear_white_v240111.pdf", icon: "dataSheet" },
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
    { property: "Color", value: "Natural / Customized as per client request" },
  ],
  applications: {
    heading: "Applications",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    list: [
      { title: "High Clarity", description: "Provides excellent visual appeal for product display." },
      { title: "Multi-Layer Strength", description: "Superior durability and tear resistance." },
      { title: "Heat Sealable", description: "Compatible with standard packaging equipment." },
      { title: "Customizable Thickness & Width", description: "Tailored for different packaging lines." },
      { title: "Print-Ready Surface", description: "Excellent adhesion for inks and coatings." },
      { title: "Consistent Performance", description: "Uniform gauge and properties across rolls." },
    ],
  },
};