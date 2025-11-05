import { ShieldCheck, Layers, Package, Eye } from "lucide-react";
import { ReactNode } from "react";

interface Industry {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: {
    icon: ReactNode;
    label: string;
  }[];
}

export const industriesData: Industry[] = [
  {
    title: "Durable & High-Clarity Packaging Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/industries/industries1.jpg",
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
    benefits: [
      { icon: <ShieldCheck className="w-10 h-10 text-[#009FE3]" />, label: "Barrier Protection" },
      { icon: <Layers className="w-10 h-10 text-[#009FE3]" />, label: "Sustainable Materials" },
      { icon: <Package className="w-10 h-10 text-[#009FE3]" />, label: "Custom Sizes & Finishes" },
      { icon: <Eye className="w-10 h-10 text-[#009FE3]" />, label: "High Transparency" },
    ],
  },
  {
    title: "Lightweight, Impact-Resistant Automotive Plastics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/industries/industries2.jpg",
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
    benefits: [
      { icon: <ShieldCheck className="w-10 h-10 text-[#009FE3]" />, label: "Barrier Protection" },
      { icon: <Layers className="w-10 h-10 text-[#009FE3]" />, label: "Sustainable Materials" },
      { icon: <Package className="w-10 h-10 text-[#009FE3]" />, label: "Custom Sizes & Finishes" },
      { icon: <Eye className="w-10 h-10 text-[#009FE3]" />, label: "High Transparency" },
    ],
  },
  {
    title: "Advanced Plastics for Machinery & Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/industries/industries3.jpg",
    features: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
    benefits: [
      { icon: <ShieldCheck className="w-10 h-10 text-[#009FE3]" />, label: "Barrier Protection" },
      { icon: <Layers className="w-10 h-10 text-[#009FE3]" />, label: "Sustainable Materials" },
      { icon: <Package className="w-10 h-10 text-[#009FE3]" />, label: "Custom Sizes & Finishes" },
      { icon: <Eye className="w-10 h-10 text-[#009FE3]" />, label: "High Transparency" },
    ],
  },
];
