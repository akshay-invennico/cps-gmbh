import React from 'react';
import { MapPin, Phone, Printer, Mail, Clock } from 'lucide-react';

interface ContactDetail {
  icon: 'address' | 'phone' | 'fax' | 'email' | 'hours';
  value: string;
}

export interface LocationData {
  title: string;
  details: ContactDetail[];
}

const IconMapper = ({ type }: { type: ContactDetail['icon'] }) => {
  const baseClasses = "w-4 h-4 text-[#67696B] mr-3 shrink-0";
  switch (type) {
    case 'address':
      return <MapPin className={baseClasses} />;
    case 'phone':
      return <Phone className={baseClasses} />;
    case 'fax':
      return <Printer className={baseClasses} />;
    case 'email':
      return <Mail className={baseClasses} />;
    case 'hours':
      return <Clock className={baseClasses} />;
    default:
      return null;
  }
};


const ContactCard = ({ location }: { location: LocationData }) => (
  <div className="p-8 border-b lg:border-r lg:border-b-0 border-gray-200 last:border-r-0">
    <h3 className="text-xl font-semibold text-gray-800 mb-6 leading-tight">
      {location.title}
    </h3>

    <div className="space-y-4">
      {location.details.map((detail, index) => (
        <div key={index} className="flex items-start text-sm text-[#67696B]">
          <IconMapper type={detail.icon} />
          <span className={detail.icon === 'hours' ? 'font-medium' : ''}>
            {detail.value}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default ContactCard;