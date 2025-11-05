import React from "react";
import FaqSection from "@/components/shared/faq/FaqSection";
import { faqData2 } from "@/components/shared/faq/faqData";
import CTASection from "@/components/shared/cta/CallToAction";
import { ctaData } from "@/components/shared/cta/ctaData";

const FaqPage = () => {
  return (
    <main>
      <FaqSection data={faqData2} variant="faqPage" />
      <CTASection data={ctaData}/>
    </main>
  );
};

export default FaqPage;
