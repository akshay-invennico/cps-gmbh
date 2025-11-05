import React from 'react'
import Hero from './Hero'
import CompanyOverview from './CompanyOverview'
import Mission from './Mission'
import Journey from './Journey'
import TeamSection from './TeamMember'
import Partners from '@/components/shared/partners/Partners'
import CTASection from '@/components/shared/cta/CallToAction'
import Presence from './Presence'
import { careersData } from '@/components/shared/cta/ctaData'
const page = () => {
  return (
    <div>
      <Hero />
      <CompanyOverview />
      <Mission />
      <Journey />
      <TeamSection />
      <Presence />
      <Partners />
      <CTASection data={careersData}/>
    </div>
  )
}

export default page