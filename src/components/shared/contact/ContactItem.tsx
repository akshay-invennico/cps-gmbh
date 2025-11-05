import React from "react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ContactItemProps {
  Icon: LucideIcon;
  text: string;
  subtext?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ Icon, text, subtext = "" }) => {
  const isEmail = text.includes("@");
  const isPhone = /[0-9]/.test(text) && !isEmail;

  const link =
    isEmail ? `mailto:${text}` :
    isPhone ? `tel:${text.replace(/\s+/g, "")}` :
    null;

  const Content = (
    <div>
      <p className="text-black text-lg font-medium leading-7">{text}</p>
      {subtext && <p className="text-black text-lg font-medium leading-7">{subtext}</p>}
    </div>
  );

  return (
    <div className="flex items-start mb-4">
      <div className='h-8 w-8 bg-[#1D1D1B] rounded-full flex items-center justify-center mr-3'>
      <Icon size={15} className="text-white" />
      </div>

      {link ? (
        <Link href={link} className="text-black text-lg font-medium leading-7 transition-colors duration-200">
          {Content}
        </Link>
      ) : (
        Content
      )}
    </div>
  );
};

export default ContactItem;
