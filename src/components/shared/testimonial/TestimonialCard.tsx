import Image from "next/image";


type Testimonial = {
  quote: string;
  body: string;
  avatarSrc: string;
  author: string;
  title: string;
}
interface TestimonialCard {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCard> = ({ testimonial }) => (
  <div className="w-full md:w-[49%] flex-shrink-0 bg-[#1D1D1B] text-white p-8 rounded-xl shadow-2xl h-auto md:h-[350px] mx-auto">
    <Image src='/icons/quote.svg' alt="Quote icon" height={60} width={60} className="mb-5" />

    <h3 className="text-2xl font-semibold italic mb-4 font-[Times_Now,_Times,_serif] leading-[30px] tracking-wide">
      “{testimonial.quote}”
    </h3>

    <p className="text-lg mb-6 italic leading-[26px] font-[Times_Now,_Times,_serif]">
      {testimonial.body}
    </p>

    <div className="flex items-center">
      <Image
        src={testimonial.avatarSrc}
        alt={testimonial.author}
        className="h-12 w-12 rounded-full object-cover mr-4 ring-2 ring-[#009FE3]"
        width={48}
        height={48}
      />
      <div>
        <p className="font-medium text-lg">{testimonial.author}</p>
        <p className="text-sm">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;