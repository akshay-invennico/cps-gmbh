import React from "react";
import Image from "next/image";
import FooterLinkGroup from "./FooterLinkGroup";
import { footerData } from "./footerData";

const FooterSection = () => (
  <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700">
    <div>
      <Image
        src={footerData.companyInfo.logoSrc}
        alt="CPS GmbH Logo"
        width={120}
        height={40}
      />
      <p className="mt-4 text-white leading-relaxed">
        {footerData.companyInfo.description}
      </p>
    </div>

    <FooterLinkGroup title="Quick Links" links={footerData.quickLinks} />

    <FooterLinkGroup title="Products" links={footerData.products} />

    <div>
      <h3 className="font-semibold mb-3 text-white">
        Certifications & Standards
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-10">
        {footerData.certifications.map((src, idx) => (
          <Image key={idx} src={src} alt={`cert-${idx}`} width={141} height={90} />
        ))}
      </div>
    </div>
  </div>
);

export default FooterSection;
