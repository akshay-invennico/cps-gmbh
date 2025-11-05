"use client"
import React, { useState } from "react"
import { ChevronUp, Mail, Phone, Info } from "lucide-react"
import { TeamMember } from "./teamData"
import Image from "next/image"
import Link from "next/link"
import Button from "@/components/ui/button/Button"

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-[#F8F8F8] rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <div className="relative aspect-[4/3] bg-gray-200">
        <Image
          src={member.imageUrl}
          alt={member.name}
          className="object-cover w-full h-full"
          height={100}
          width={100}
        />
      </div>

      <div className="relative p-4 bg-sky-600 text-white">
        <h3 className="text-xl font-semibold mb-0 leading-tight">{member.name}</h3>
        <p className="text-sm font-light opacity-90 leading-snug">{member.title}</p>

        {member.extraDetail && (
          <p className="text-xs italic opacity-80 mt-1 leading-snug flex items-center">
            <Info className="w-3 h-3 mr-1" /> {member.extraDetail}
          </p>
        )}

        <Button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/40 transition duration-200 focus:outline-none focus:ring-2 focus:ring-white z-10"
        >
          <ChevronUp
            className={`w-5 h-5 text-white transition-transform duration-300 ${isExpanded ? "rotate-0" : "rotate-180"
              }`}
          />
        </Button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-40 mt-4" : "max-h-0"
            }`}
        >
          <div className="pt-2 border-t border-white border-opacity-30 space-y-2">
            <div className="flex items-center text-sm">
              <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
              <Link href={`mailto:${member.email}`} className="truncate hover:underline">
                {member.email}
              </Link>
            </div>
            <div className="flex items-center text-sm">
              <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
              <Link href={`tel:${member.phone.replace(/[^+\d]/g, "")}`} className="truncate hover:underline">
                {member.phone}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMemberCard
