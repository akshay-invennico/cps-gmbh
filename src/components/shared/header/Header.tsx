'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from './../../../../public/assets/cps-logo.svg';
import white_logo from './../../../../public/assets/cps-logo-white.png';
import Button from '@/components/ui/button/Button';
import routes from '@/app/routes';
import LeadFormModal from '../contact/LeadFormModal';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isLeadModalOpen, setLeadModalOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<'EN' | 'GE'>('EN');

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === routes.home) {
      const SCROLL_THRESHOLD = 80;

      const handleScroll = () => {
        setHasBackground(window.scrollY > SCROLL_THRESHOLD);
      };

      handleScroll();

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setHasBackground(true);
    }
  }, [pathname]);

  const menuItems = [
    { label: 'About us', href: routes.about, key: 'about' },
    { label: 'Products', href: routes.products, key: 'products' },
    { label: 'Applications', href: routes.industries, key: 'applications' },
    { label: 'News & Insights', href: routes.newsAndInsights, key: 'news' },
    { label: 'FAQ\'s', href: routes.faq, key: 'faq' },
    { label: 'Careers', href: routes.careers, key: 'careers' },
    { label: 'Contact Us', href: routes.contact, key: 'contact' }
  ];

  const productSubmenu = [
    { label: 'Products Overview', href: routes.products },
    { label: "ECC 1020", href: '/ecc-1020' },
    { label: "P-tex® 2000 electra", href: '/p-tex-2000-electra' },
    { label: "TP 455 black & white", href: '/tp-455-black-white' },
    { label: "ECC 4060", href: '/ecc-4060' },
    { label: "TP190", href: '/tp190' },
    { label: "P-tex® 5480 black", href: '/p-tex-5480-black' },
    { label: 'ABS extrusions', href: '/abs-extrusions' },
    { label: 'PE 1000', href: '/pe-1000' },
  ];

  return (
    <>
      <LeadFormModal
        isOpen={isLeadModalOpen}
        onClose={() => setLeadModalOpen(false)}
      />

      <header
        className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300
          ${pathname === routes.home
            ? hasBackground
              ? 'bg-white border-b border-[#EEF3F5]'
              : 'bg-transparent'
            : 'bg-white border-b border-[#EEF3F5]'
          }
  `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          <Link href={routes.home} className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Logo"
              width={90}
              height={30}
              priority
              className="object-contain"
            />
          </Link>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center text-base font-medium space-x-2">
              <Button
                type="button"
                onClick={() => setActiveLanguage('EN')}
                className={`cursor-pointer transition-colors font-medium ${activeLanguage === 'EN'
                  ? 'text-[#009FE3]'
                  : 'text-[#1D1D1B] hover:text-[#009FE3]'
                  }`}
              >
                EN
              </Button>
              <span className="text-[#1D1D1B]">|</span>
              <Button
                type="button"
                onClick={() => setActiveLanguage('GE')}
                className={`cursor-pointer transition-colors font-medium ${activeLanguage === 'GE'
                  ? 'text-[#009FE3]'
                  : 'text-[#1D1D1B] hover:text-[#009FE3]'
                  }`}
              >
                GE
              </Button>
            </div>

            <Button
              type="button"
              className="header-btn"
              onClick={() => setLeadModalOpen(true)}
            >
              Request Info →
            </Button>

            <Button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="p-2 cursor-pointer"
            >
              <Image src='/assets/menu.svg' alt='Menu' height={42} width={42} />
            </Button>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#1D1D1B] transform 
        ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 z-[99999]`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 border-b">
          <Image src={white_logo} alt="Logo" width={120} height={40} className="object-contain" />
          <div className='flex items-center'>
            <Button
              type="button"
              className="header-btn mr-6"
              onClick={() => {
                setMenuOpen(false);
                setLeadModalOpen(true);
              }}
            >
              Request Info →
            </Button>

            <Button type="button" onClick={() => setMenuOpen(false)} className="p-2 cursor-pointer">
              <X size={26} color="#FFFFFF" />
            </Button>
          </div>
        </div>

        <nav className="max-w-7xl mx-auto mt-14 pl-6 flex flex-col space-y-8 font-medium relative">
          {menuItems.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.key)}
              onMouseLeave={() => item.key !== "products" && setActiveMenu(null)}
            >
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl transition-colors relative 
                ${activeMenu === item.key ? 'text-white' : 'text-gray-400'}
              `}
              >
                {item.label}
                <span className={`absolute left-0 -bottom-1 h-[2px] w-full bg-white transition-opacity
                  ${activeMenu === item.key ? "opacity-100" : "opacity-0"}`}
                />
              </Link>
            </div>
          ))}
        </nav>

        {activeMenu === "products" && (
          <div
            className="hidden md:block absolute top-0 left-[320px] 2xl:left-[800px] h-full max-w-7xl bg-[#1D1D1B] px-2 py-20 transition-opacity"
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="w-fit grid grid-cols-1 gap-y-6 text-white text-lg mt-16">
              {productSubmenu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative overflow-hidden text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white group-hover:w-full transition-all" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
