"use client";
import React, { useState } from "react";
import { FaqItem } from "./faqData";
import { ChevronDown, ChevronUp } from "lucide-react";
import Button from "@/components/ui/button/Button";

interface Category {
  label: string;
  key: string;
}

interface FaqSectionProps {
  data: Record<string, FaqItem[]>;
  variant?: "default" | "faqPage";
}

const categories: Category[] = [
  { label: "All FAQ’s", key: "all" },
  { label: "How to get Info", key: "info" },
  { label: "How to Connect with CPS", key: "connect" },
  { label: "Product Details", key: "product" },
  { label: "Buy Product", key: "buy" },
  { label: "Access Resource", key: "access" },
  { label: "Visit Site", key: "visit" },
  { label: "Contact Us", key: "contact" },
  { label: "Our Locations", key: "locations" },
];

const FaqSection: React.FC<FaqSectionProps> = ({ data, variant = "default" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (key: string) => {
    setSelectedCategory(key);
    setOpenIndex(null);
  };

  const activeFaqs =
    selectedCategory === "all"
      ? Object.values(data).flat()
      : data[selectedCategory] || [];

  if (variant === "faqPage") {
    return (
      <section className="w-full bg-[#F8F8F8] py-12 px-4 md:px-8 lg:px-16 text-gray-900 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/3 w-full space-y-4">
            <div>
              <h2 className="text-2xl font-bold mb-3">Everything You Need to Know</h2>
              <p className="text-sm text-[#67696B]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div className="space-x-3 space-y-2">
              {categories.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleCategoryChange(item.key)}
                  className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer
                ${selectedCategory === item.key
                      ? 'bg-[#009FE3] text-white'
                      : 'bg-gray-200 text-[#67696B] hover:bg-gray-300'
                    }
              `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </aside>

          <div className="lg:w-2/3 w-full">
            <h3 className="text-xl font-semibold mb-6">
              {categories.find((c) => c.key === selectedCategory)?.label}
            </h3>

            <div className="space-y-3 text-left">
              {activeFaqs.length > 0 ? (
                activeFaqs.map((item, index) => (
                  <div
                    key={index}
                    className="border border-[#EDEDED] rounded-md overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center text-left px-4 md:px-6 py-4 font-semibold cursor-pointer hover:bg-gray-50"
                    >
                      <span>{item.question}</span>
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-[#67696B]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#67696B]" />
                      )}
                    </button>

                    {openIndex === index && (
                      <div className="px-4 md:px-6 pb-4 text-[#67696B] text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-[#67696B] text-sm italic">
                  No FAQs available for this category.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const defaultFaqs = data["all"] || [];
  return (
    <section className="w-full bg-[#F8F8F8] pb-[100px] px-4 md:px-8 lg:px-16 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-5">
          <div className="w-[2px] h-8 mb-3 bg-[#1D1D1B] mx-auto"></div>
          <span className="text-[14px] font-medium border border-[#009FE3] text-[#009FE3] px-4 py-2 rounded-md">
            FAQs
          </span>
        </div>

        <h2 className="heading mb-10">Everything You Need to Know</h2>

        <div className="space-y-2 text-left">
          {defaultFaqs.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#EDEDED] rounded-lg overflow-hidden"
            >
              <Button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left px-5 pt-5 pb-3 cursor-pointer"
              >
                <span className="text-[#1D1D1B] text-lg font-medium leading-[30px]">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#1D1D1B]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#1D1D1B]" />
                )}
              </Button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-[#67696B] text-sm md:text-base leading-7">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
