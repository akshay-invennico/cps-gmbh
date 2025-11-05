"use client";
import React, { JSX } from "react";
import FooterSection from "./FooterSection";
import FooterContactCard from "./FooterContactCard";
import { footerData } from "./footerData";
import { Linkedin, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import routes from "@/app/routes";

const iconMap: Record<string, JSX.Element> = {
  linkedin: <Linkedin />,
  facebook: <Facebook />,
  twitter: <Twitter />,
};

const Footer: React.FC = () => (
  <footer className="bg-[#1D1D1B] text-white text-sm">
    <FooterSection />

    <div className="max-w-7xl mx-auto px-6 pt-14 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {footerData.contacts.map((c) => (
        <FooterContactCard key={c.title} contact={c} />
      ))}
    </div>
    
    <div className="bg-[#171717] py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-white font-semibold">
        <p>© {new Date().getFullYear()} CPS GmbH | All Rights Reserved</p>
        <div className="flex items-center gap-4">
          <Link href={routes.privacyPolicy} className="hover:text-white">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href={routes.termsAndConditions} className="hover:text-white">
            Terms & Conditions
          </Link>
          <div className="flex items-center gap-3 ml-4">
            {footerData.socialLinks.map((s) => (
              <Link
                key={s.icon}
                href={s.href}
                className="hover:text-white transition-colors"
              >
                {iconMap[s.icon]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
