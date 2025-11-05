import React from 'react'
import Hero from './Hero'
import Partners from '@/components/shared/partners/Partners'
import ContactSection from '@/components/shared/contact/Contact'
import CTASection from '@/components/shared/cta/CallToAction'
import { ctaData } from '@/components/shared/cta/ctaData'

const page = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <ContactSection />
      <CTASection data={ctaData}/>
    </div>
  )
}

export default page