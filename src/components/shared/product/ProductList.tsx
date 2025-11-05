import React from 'react';
import ProductCard from '@/components/ui/card/Card';
import Link from 'next/link';
import { PRODUCTS } from './products';
import routes from '@/app/routes';

const ProductList = () => {
  return (
    <section className="bg-[#2F8DCB]">
      <div className='max-w-7xl mx-auto'>
        <div className=" text-white pt-16 px-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-10 h-[2px] bg-white"></span>
                <span className="inline-block border border-white px-4 py-2 rounded-[6px] text-sm font-medium">
                  Our Products
                </span>
              </div>
              <h1 className="heading mb-6 lg:mb-0 max-w-lg">
                Reliable films and plastics for global industries
              </h1>
            </div>

            <div className="max-w-xl">
              <p className="text-base font-light mb-4">
                From advanced extrusion films engineered for precision and clarity,
                to ultra-high-molecular-weight polyethylene (UHMWPE) designed for strength
                and durability, and a wide range of high-density plastics that support
                critical industrial applications. CPFS GmbH develops materials that combine
                performance, safety, innovation.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href={routes.products}
                  className="btn btn-primary bg-white text-[#009FE3] font-medium"
                >
                  Explore all Products →
                </Link>
                <Link
                  href={routes.industries}
                  className="btn btn-outline-primary border border-white text-white bg-transparent"
                >
                  Explore Applications
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 pb-[60px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-3">
            {PRODUCTS.slice(0, 8).map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                subtitle={product.subtitle}
                imageSrc={product.imageSrc}
                material={product.material}
                thicknessRange={product.thicknessRange}
                applications={product.applications}
                className='bg-[#1D1D1B]'
                slug={product.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductList;