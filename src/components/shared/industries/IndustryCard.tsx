import Image from "next/image";

interface ProductCardProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  material?: string;
  thicknessRange?: string;
  applications?: string;
  buttonLabel?: string;
  className?: string;
}

const IndustryCard = ({
  title,
  subtitle,
  imageSrc,
  className = "",
}: ProductCardProps) => {
  return (
    <div
      className={`bg-white border border-[#EDEDED] rounded-lg p-6 flex flex-col justify-between relative overflow-hidden ${className}`}
    >
      {/* Image */}
      <div className="flex justify-left mb-5">
        <Image
          src={imageSrc}
          alt={title}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Details */}
         <h3 className="text-[22px] font-semibold mb-3">{title}</h3>
          {subtitle && (
            <p className="font-medium text-[#67696B]">{subtitle}</p>
          )}

      {/* Bottom Accent (optional border dots like your image) */}
      <div className="absolute top-2 left-2 w-1 h-1 bg-[#1D1D1B] rounded-full"></div>
      <div className="absolute top-2 right-2 w-1 h-1 bg-[#1D1D1B] rounded-full"></div>
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#1D1D1B] rounded-full"></div>
      <div className="absolute bottom-2 right-2 w-1 h-1 bg-[#1D1D1B] rounded-full"></div>
    </div>
  );
}

export default IndustryCard;