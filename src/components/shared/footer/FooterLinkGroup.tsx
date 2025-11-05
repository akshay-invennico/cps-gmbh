import React from "react";
import { LinkItem } from "./footerData";
import Link from "next/link";

interface FooterLinkGroupProps {
  title: string;
  links: LinkItem[];
}

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => (
  <div>
    <h3 className="font-semibold mb-3 text-white">{title}</h3>
    <ul className="space-y-2 text-white mt-10">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className={` ${
              link.highlight ? "text-[#009FE3] font-medium" : ""
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinkGroup;
