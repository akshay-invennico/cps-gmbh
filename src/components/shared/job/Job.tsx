import routes from "@/app/routes";
import Button from "@/components/ui/button/Button";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import Link from "next/link";

interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  type: 'Full Time' | 'Part Time' | 'Contract';
  category: string;
}

export const jobData: Job[] = [
  {
    id: 1,
    title: 'Machine and Plant Operator',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    location: 'Vreden location',
    type: 'Full Time',
    category: 'Plant Operator',
  },
  {
    id: 2,
    title: 'Senior Electrical Engineer',
    description: 'Focus on designing, developing, and testing electrical systems and components for various projects, ensuring compliance with industry standards.',
    location: 'Dortmund, Germany',
    type: 'Full Time',
    category: 'Electrical Engineer',
  },
  {
    id: 3,
    title: 'Civil Construction Supervisor',
    description: 'Oversee daily site operations, manage teams, and ensure projects are completed on schedule and within budget, specializing in structural design.',
    location: 'Munich, Germany',
    type: 'Full Time',
    category: 'Civil Engineer',
  },
  {
    id: 4,
    title: 'Mechanical Design Specialist',
    description: 'Develop and analyze mechanical systems and machines, including producing detailed blueprints and specifications for manufacturing processes.',
    location: 'Vreden location',
    type: 'Part Time',
    category: 'Mechanical Engineer',
  },
  {
    id: 5,
    title: 'Junior Plant Technician',
    description: 'Assist in the routine maintenance and troubleshooting of plant equipment, focusing on operational efficiency and safety procedures.',
    location: 'Berlin, Germany',
    type: 'Contract',
    category: 'Plant Operator',
  },
  {
    id: 6,
    title: 'Automation Electrical Engineer',
    description: 'Design and implement industrial automation systems, including PLC programming and HMI development, to optimize production lines.',
    location: 'Vreden location',
    type: 'Full Time',
    category: 'Electrical Engineer',
  },
];

const JobCard: React.FC<Job> = (job) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-[#1D1D1B] mb-2 leading-tight">{job.title}</h3>
        <p className="text-[#67696B] text-sm mb-4">
          {job.description}
          <span className="text-[#009FE3] cursor-pointer font-medium">...more</span>
        </p>

        <div className="flex items-center text-sm text-[#67696B] mb-6 space-x-4">
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-[#67696B]" />
            {job.location}
          </span>
          <span className="text-[#67696B]">•</span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1 text-[#67696B]" />
            {job.type}
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 border-t pt-4">
        <Button
        type="button"
          className="text-sm font-medium text-[#67696B] hover:text-gray-900 transition duration-150 py-2"
          onClick={() => console.log(`Viewing description for ${job.title}`)}
        >
          View Job Description
        </Button>

        <Link
          href={routes.careersSlug}
          className="btn btn-outline-primary rounded-lg"
        >
          Apply Now
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default JobCard;