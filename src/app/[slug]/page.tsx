import React from 'react'
import Hero from './Hero'
import ProductDescription from './ProductDescription'
import { ALL_PRODUCTS } from './productDetails'
import ProductsCta from '../products/ProductsCta'
import Advantages from '@/components/shared/advantages/Advantages'
import ContactSection from '@/components/shared/contact/Contact'
import FaqSection from '@/components/shared/faq/FaqSection'
import { faqData } from '@/components/shared/faq/faqData'

interface ProductPageProps {
  params: { slug: string };
}

const page: React.FC<ProductPageProps> = async ({ params }) => {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.id === slug);

  if (!product) {
    return <div className="text-center py-20 text-xl">Product not found.</div>;
  }

  return (
    <div>
      <Hero product={product} />
      <ProductDescription content={product.details} />
      <ProductsCta />
      <Advantages />
      <ContactSection />
      <FaqSection data={faqData} />
    </div>
  )
}

export default page