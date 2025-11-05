import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import ContactItem from './ContactItem';

const ContactInfo = () => {
  return (
    <div className="bg-[#BEE3F3] p-8 md:p-12 lg:p-10 rounded-xl h-full">
      <h3 className="text-xl md:text-xl font-semibold text-black mb-3 leading-7">
        Prefer to reach out directly?
      </h3>
      <p className="text-[#000000] mb-7">
        Get in touch with our team directly for quick support.
      </p>

      {/* Contact Details */}
      <div className="space-y-6 mb-10">
        <ContactItem
          Icon={Phone}
          text="+49 (0) 8031 901173 – 0"
        />
        <ContactItem
          Icon={Mail}
          text="info@cps-gmbh.net"
        />
        <ContactItem
          Icon={Clock}
          text="Mo – Th : 8:00 - 16:00   Fri : 8:00 - 13:00"
        />
      </div>

      

      {/* Locations */}
      <div className="space-y-6">
        <h4 className="text-xl md:text-xl font-semibold text-black mb-3 leading-7">
          Where to Find Us?
        </h4>
        <p className="text-[#000000] mb-7">
          Your trusted partner across all our locations.
        </p>

        <ContactItem
          Icon={MapPin}
          text="Meisenstraße 3, 83101 Germany"
        />
        <ContactItem
          Icon={MapPin}
          text="Heisenbergstraße 1, 48691 Germany"
        />
        <ContactItem
          Icon={MapPin}
          text="CPS China Co., Ltd 3,Building6,No.14..."
        />
      </div>
    </div>
  );
};

export default ContactInfo;
