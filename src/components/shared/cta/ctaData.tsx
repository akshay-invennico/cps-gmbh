"use client"
import { ArrowRight } from "lucide-react";

export const ctaData = {
  badgeText: "Your Reliable Partner",
  heading: "Partner with CPS for Reliable Films & Plastics",
  subtitle:
    "From extrusion films and UHMWPE to advanced technical plastics, CPS GmbH delivers certified materials engineered for performance, safety, and sustainability. Our products support industries worldwide with precision and innovation.",
  buttons: [
    {
      label: "Request Info",
      type: "secondary",
      icon: <ArrowRight className="w-4 h-4" />,
      onClick: () => alert("Request Info clicked"),
    },
    {
      label: "Explore Products",
      type: "outline-secondary",
      onClick: () => alert("Explore Products clicked"),
    },
  ],
  imageSrc: "/assets/cta-grid.svg",
  imageAlt: "Grid pattern background",
  gradientFrom: "#009de0",
  gradientTo: "#00b0f0",
};

export const careersData = {
  badgeText: "Join Our Team",
  heading: "Take Your Career to the Next Level with CPS",
  subtitle:
    "Be part of a company that values innovation, growth, and collaboration.Shape the future with us and make an impact every day.",
  buttons: [
    {
      label: "View Open Positions",
      type: "secondary",
      icon: <ArrowRight className="w-4 h-4" />,
      onClick: () => alert("Request Info clicked"),
    },
  ],
  imageSrc: "/assets/cta-grid.svg",
  imageAlt: "Grid pattern background",
  gradientFrom: "#009de0",
  gradientTo: "#00b0f0",
};