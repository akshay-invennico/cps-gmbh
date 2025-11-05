import React from "react";
import { ContactInfo } from "./footerData";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Link from "next/link";

interface FooterContactCardProps {
  contact: ContactInfo;
}

const FooterContactCard: React.FC<FooterContactCardProps> = ({ contact }) => (
  <div>
    <h4 className="font-medium text-xl leading-7 text-white mb-5">{contact.title}</h4>
    <div className="space-y-2 text-white leading-6">
      <p className="flex items-start gap-2">
        <MapPin />
        <span>{contact.address}</span>
      </p>

      {contact.phone && (
        <Link
          href={`tel:${contact.phone}`}
          className="flex items-center gap-2 transition-colors"
        >
          <Phone /> {contact.phone}
        </Link>
      )}

      {contact.email && (
        <Link
          href={`mailto:${contact.email}`}
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <Mail /> {contact.email}
        </Link>
      )}

      {contact.hours && (
        <p className="flex items-center gap-2">
          <Clock /> {contact.hours}
        </p>
      )}
    </div>
  </div>
);

export default FooterContactCard;
