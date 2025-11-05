export interface TeamMember {
  id: number
  name: string
  title: string
  imageUrl: string
  email: string
  phone: string
  extraDetail: string
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Adalbert Loidl",
    title: "Chief Executive Officer",
    imageUrl: "/assets/team-members/member1.jpg",
    email: "adalbert.loidl@cps-gmbh.net",
    phone: "+49 (0)8031 901173-0",
    extraDetail: "Founder & CEO, CPS GmbH Germany",
  },
  {
    id: 2,
    name: "Reinhold Koggenhorst",
    title: "Head of Finance",
    imageUrl: "/assets/team-members/member2.jpg",
    email: "reinhold.k@cps-gmbh.net",
    phone: "+49 (0)8031 901173-1",
    extraDetail: "Finance Director, CPS GmbH Germany",
  },
  {
    id: 3,
    name: "Peace Peng",
    title: "Chief Strategy Officer",
    imageUrl: "/assets/team-members/member3.jpg",
    email: "peace.peng@cps-china.co",
    phone: "+86 21 6875 1234",
    extraDetail: "CEO, CPS China Co.",
  },
  {
    id: 4,
    name: "Stefan Esau",
    title: "Technical Manager",
    imageUrl: "/assets/team-members/member4.jpg",
    email: "stefan.esau@cps-gmbh.net",
    phone: "+49 (0)8031 901173-2",
    extraDetail: "Head of Engineering, CPS GmbH Germany",
  },
  {
    id: 5,
    name: "Josef Thoma",
    title: "Head of Sales",
    imageUrl: "/assets/team-members/member1.jpg",
    email: "josef.thoma@cps-gmbh.net",
    phone: "+49 (0)8031 901173-3",
    extraDetail: "Sales Director, CPS GmbH Europe",
  },
  {
    id: 6,
    name: "Florian Wrobel",
    title: "Head of Research & Development",
    imageUrl: "/assets/team-members/member2.jpg",
    email: "florian.wrobel@cps-gmbh.net",
    phone: "+49 (0)8031 901173-4",
    extraDetail: "Innovation Lead, CPS GmbH Germany",
  },
]
