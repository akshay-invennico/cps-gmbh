import React from 'react'
import Hero from './Hero'
import Products from './Products'
import ProductsCta from './ProductsCta'
import Advantages from '@/components/shared/advantages/Advantages'
import TestimonialSection from '@/components/shared/testimonial/Testimonial'
import ContactSection from '@/components/shared/contact/Contact'
import BlogsMain from '@/components/shared/blogs/BlogsMain'
import CTASection from '@/components/shared/cta/CallToAction'
import FaqSection from '@/components/shared/faq/FaqSection'
import { faqData } from '@/components/shared/faq/faqData'
import { ctaData } from '@/components/shared/cta/ctaData'

const page = () => {
  return (
    <div>
        <Hero />
        <Products />
        <ProductsCta />
        <Advantages />
        <TestimonialSection />
        <ContactSection />
        <BlogsMain />
        <FaqSection data={faqData} />
        <CTASection data={ctaData}/>
    </div>
  )
}

export default page