"use client"
import React from "react"
import TeamMemberCard from "@/components/shared/teamMembers/TeamCard"
import { TEAM_MEMBERS } from "@/components/shared/teamMembers/teamData"

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8F8F8] font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12">
          <span className="inline-block border text-[#009FE3] border-[#009FE3] px-4 py-2 rounded-[6px] text-sm font-medium">
            Our Leadership
          </span>
          <h2 className="heading text-[#1D1D1B] mt-4">
            Guided by Expertise, Driven by Innovation
          </h2>
          <p className="mt-3 text-lg text-[#67696B] max-w-3xl">
            Our leadership fosters a culture of precision, collaboration, and continuous improvement across every department.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
