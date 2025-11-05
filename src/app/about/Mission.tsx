'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Drawer from '@/components/ui/drawer/Drawer';
import { drawerData, DrawerItem } from '@/components/ui/drawer/drawerData'; 

const Mission: React.FC = () => {
  const [openDrawerId, setOpenDrawerId] = useState<DrawerItem['id']>(drawerData[0].id);

  const handleToggle = (id: DrawerItem['id']) => {
    setOpenDrawerId(id);
  };

  return (
    <section className="bg-[#F8F8F8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-16 max-w-4xl">
          <div className="inline-block relative pb-1 mb-2">
            <span className="inline-block border text-[#009FE3] border-[#009FE3] px-4 py-2 rounded-[6px] text-sm font-medium">
              Our Mission, Vision & Values
            </span>
          </div>
          <h2 className="heading text-[#1D1D1B]">
            Driven by Innovation, Guided by Integrity
          </h2>
          <p  className="max-w-2xl mx-auto text-[#67696B] md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="lg:w-[30%] flex-shrink-0">
            <div className="">
              <Image
                src={'/assets/mission.jpg'}
                alt="Worker in a factory inspecting bottles, representing quality control"
                className='h-[400px] object-cover border border-[#EDEDED] rounded-lg'
                height={500}
                width={400}
              />
            </div>
          </div>

          <div className="lg:w-[70%] flex-grow flex space-x-2 sm:space-x-4 h-[400px] overflow-hidden">
            {drawerData.map((item) => (
              <Drawer
                key={item.id}
                item={item}
                isOpen={openDrawerId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;