import Hero from "@/components/shared/hero/Hero";
import AboutSection from "@/components/shared/about/About";
import ProductList from "@/components/shared/product/ProductList";
import Details from "@/components/shared/details/Details";
import IndustriesList from "@/components/shared/industries/Industries";
import Advantages from "@/components/shared/advantages/Advantages";
import TestimonialSection from "@/components/shared/testimonial/Testimonial";
import ContactSection from "@/components/shared/contact/Contact";
import BlogsMain from "@/components/shared/blogs/BlogsMain";
import CTASection from "@/components/shared/cta/CallToAction";
import { ctaData } from "@/components/shared/cta/ctaData";


export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        id="next-section"
        className="h-full bg-[#F8F8F8] flex items-center justify-center"
      >
        <AboutSection />
      </section>

      <ProductList />
      <Details />
      <IndustriesList />
      <Advantages />
      <TestimonialSection />
      <ContactSection />
      <BlogsMain />
      <CTASection data={ctaData} />
    </>
  );
}
