import React from 'react'
import Hero from './Hero'
import Content from '../privacy-policy/Content'
import CTASection from '@/components/shared/cta/CallToAction'
import { ctaData } from '@/components/shared/cta/ctaData'

const page = () => {
  return (
    <div>
      <Hero />
      <Content />
      <Content />
      <Content />
      <CTASection data={ctaData}/>
    </div>
  )
}

export default page