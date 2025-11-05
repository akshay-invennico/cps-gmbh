import React from 'react'
import Hero from './Hero'
import StatsSection from './Stats'
import Industries from './Industries'
import ProductsCta from '../products/ProductsCta'
import Partners from '@/components/shared/partners/Partners'
import TestimonialSection from '@/components/shared/testimonial/Testimonial'
import ContactSection from '@/components/shared/contact/Contact'
import BlogsMain from '@/components/shared/blogs/BlogsMain'
import FaqSection from '@/components/shared/faq/FaqSection'
import { faqData } from '@/components/shared/faq/faqData'

const page = () => {
  return (
    <div>
        <Hero />
        <StatsSection />
        <Industries />
        <ProductsCta />
        <Partners />
        <TestimonialSection />
        <ContactSection />
        <BlogsMain />
        <FaqSection data={faqData}/>
    </div>
  )
}

export default page