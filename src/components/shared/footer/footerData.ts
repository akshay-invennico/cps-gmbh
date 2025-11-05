// components/layout/Footer/footerData.ts

import routes from "@/app/routes";

export interface LinkItem {
  label: string;
  href: string;
  highlight?: boolean;
}

export interface ContactInfo {
  title: string;
  address: string;
  phone: string;
  email: string;
  hours?: string;
}

export interface FooterData {
  companyInfo: {
    description: string;
    logoSrc: string;
  };
  quickLinks: LinkItem[];
  products: LinkItem[];
  certifications: string[];
  contacts: ContactInfo[];
  socialLinks: { icon: string; href: string }[];
}

export const footerData: FooterData = {
  companyInfo: {
    logoSrc: "/assets/cps-logo-white.png",
    description:
      "CPS GmbH is a trusted German manufacturer of high-performance extrusion films, UHMWPE/HDPE, and advanced technical plastics. We deliver innovation, reliability, and sustainability to industries worldwide.",
  },

  quickLinks: [
    { label: "Industries We Serve", href: routes.industries },
    { label: "FAQs", href: routes.faq },
    { label: "Careers", href: routes.careers },
    { label: "About Us", href: routes.about },
    { label: "News & Insights", href: routes.newsAndInsights },
    { label: "Contact Us", href: routes.contact },
  ],

  products: [
    { label: "Micro Films", href: routes.productsSlug },
    { label: "P-Tex UHMWPE", href: routes.productsSlug },
    { label: "HDPE Materials", href: routes.productsSlug },
    { label: "ARIS Plastics", href: routes.productsSlug },
    { label: "Ship Materials", href: routes.productsSlug },
    { label: "Everesetlean Extrusion Films", href: routes.productsSlug },
    { label: "View all", href: routes.products, highlight: true },
  ],

  certifications: ["/assets/footer/certificate1.png", "/assets/footer/certificate2.png", "/assets/footer/certificate3.png", "/assets/footer/certificate4.png"],

  contacts: [
    {
      title: "Company Headquarters",
      address: "Meesenstraße 3, 36103 Flieden, Germany",
      phone: "+49 (0) 8031 901173 – 0",
      email: "info@cps-gmbh.net",
      hours: "Mo – Th: 8:00 - 16:00 | Fri: 8:00 - 13:00",
    },
    {
      title: "Vreden Location",
      address: "Heekerstraße 1, 48691 Vreden, Germany",
      phone: "+49 (0) 8031 901173 – 350",
      email: "info@cps-gmbh.net",
      hours: "Mo – Th: 8:00 - 16:00 | Fri: 8:00 - 13:00",
    },
    {
      title: "Shaoxing Location",
      address:
        "CPS China Co., Ltd, 3 Building No.14 YiShan Road",
      phone: "0086-575-88769800",
      email: "info@cps-gmbh.net",
      hours: "Mo – Th: 8:00 - 16:00 | Fri: 8:00 - 13:00",
    },
  ],

  socialLinks: [
    { icon: "linkedin", href: "#" },
    { icon: "facebook", href: "#" },
    { icon: "twitter", href: "#" },
  ],
};
