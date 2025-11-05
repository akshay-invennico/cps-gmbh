import { LocationData } from "./ContactCard";

export const locations: LocationData[] = [
  {
    title: 'Company headquarters',
    details: [
      { icon: 'address', value: 'Meisenstraße 3, 83101 Rohrdorf, Germany' },
      { icon: 'phone', value: '+49 (0), 8031 901173 – 0' },
      { icon: 'fax', value: '+49 (0), 8031 901173 – 330' },
      { icon: 'email', value: 'info@cps-gmbh.net' },
      { icon: 'hours', value: 'Mo – Th: 8:00 – 16:00 | Fri: 8:00 – 13:00' },
    ],
  },
  {
    title: 'Vreden location',
    details: [
      { icon: 'address', value: 'Heisenbergstraße 1, 48691 Vreden, Germany' },
      { icon: 'phone', value: '+49 (0), 2564 93370' },
      { icon: 'fax', value: '+49 (0), 8031 901173 – 330' },
      { icon: 'email', value: 'info@cps-gmbh.net' },
      { icon: 'hours', value: 'Mo – Th: 8:00 – 16:30 | Fri: 8:00 – 13:00' },
    ],
  },
  {
    title: 'Shaoxing location',
    details: [
      { icon: 'address', value: 'CPS China Co., Ltd 3,Building6 No.14 YinShan Road,GaoBu Street, YueCheng District, Shaoxing City, Zhejiang Province,China 312035' },
      { icon: 'phone', value: '0086 575-88778958-8001' },
      { icon: 'fax', value: '0086 575-88778968' },
      { icon: 'email', value: 'info@cps-gmbh.net' },
    ],
  },
];