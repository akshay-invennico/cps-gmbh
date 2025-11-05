'use client'
import React, { useState } from 'react';
import ProductCard from '@/components/ui/card/Card';
import { PRODUCTS } from '@/components/shared/product/products';
import Button from '@/components/ui/button/Button';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(PRODUCTS.map(product => product.category))];

  const filteredProducts = PRODUCTS.filter(product =>
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <section id='explore-products' className="bg-[#F8F8F8]">
      <div className='max-w-7xl mx-auto'>
        <div className=" text-black pt-[100px] px-4">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-10 h-[2px] bg-[#1D1D1B]"></span>
            <span className="inline-block border text-[#009FE3] border-[#009FE3] px-4 py-2 rounded-[6px] text-sm font-medium">
              Our Products
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end">
            <h1 className="heading text-[#1D1D1B] mb-8 max-w-2xl">
              Engineered Materials for Industrial Excellence
            </h1>
          </div>
        </div>

        <div className="px-4 mb-10">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                type='button'
                onClick={() => handleCategoryChange(category)}
                className={`
                px-5 py-5 rounded-lg text-base leading-[100%] font-medium transition-colors duration-200 cursor-pointer
                ${selectedCategory === category
                    ? 'bg-[#009FE3] text-white'
                    : 'bg-gray-200 text-[#1D1D1B]'
                  }
              `}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="pb-[100px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                subtitle={product.subtitle}
                imageSrc={product.imageSrc}
                material={product.material}
                thicknessRange={product.thicknessRange}
                applications={product.applications}
                className="bg-primary-dark shadow-xl"
                slug={product.id}
              />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center text-[#67696B] text-lg py-10">
              No products found in the selected category.
            </p>
          )}
        </div>
      </div>

    </section>
  );
}

export default Products;