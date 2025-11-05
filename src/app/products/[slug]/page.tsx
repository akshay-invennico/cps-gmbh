import React from 'react'
import Hero from './Hero'
import ProductDescription from './ProductDescription'
import { DUMMY_PRODUCT_DATA } from './productDetails'
import { DUMMY_DETAILS_CONTENT } from './productDetails'
import ProductsCta from '../ProductsCta'
import Advantages from '@/components/shared/advantages/Advantages'
import ContactSection from '@/components/shared/contact/Contact'
import FaqSection from '@/components/shared/faq/FaqSection'
import { faqData } from '@/components/shared/faq/faqData'


const page = () => {
  return (
    <div>
      <Hero product={DUMMY_PRODUCT_DATA} />
      <ProductDescription content={DUMMY_DETAILS_CONTENT} />
      <ProductsCta />
      <Advantages />
      <ContactSection />
      <FaqSection data={faqData} />
    </div>
  )
}

export default page