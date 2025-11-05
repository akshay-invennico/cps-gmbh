import React from 'react'
import Hero from './Hero'
import Opportunities from './Opportunities'
import Careers from './Benefits'
import TestimonialSection from '@/components/shared/testimonial/Testimonial'
import FaqSection from '@/components/shared/faq/FaqSection'
import { faqData } from '@/components/shared/faq/faqData'
import CTASection from '@/components/shared/cta/CallToAction'
import { careersData } from '@/components/shared/cta/ctaData'

const page = () => {
  return (
    <div>
      <Hero />
      <Opportunities />
      <Careers />
      <TestimonialSection />
      <FaqSection data={faqData}/>
      <CTASection data={careersData} />
    </div>
  )
}

export default page