import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data';
import { motion } from 'motion/react';

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');

  const filteredProducts = categoryFilter 
    ? products.filter(p => p.category === categoryFilter)
    : products;

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-6">
        <h1 className="font-serif text-4xl md:text-5xl text-brand-primary">The Complete Collection</h1>
        <div className="flex justify-center space-x-8 text-sm tracking-widest uppercase text-gray-500">
          <button 
            onClick={() => setSearchParams({})}
            className={`hover:text-black transition-colors ${!categoryFilter ? 'text-black font-semibold' : ''}`}
          >
            All
          </button>
          <button 
            onClick={() => setSearchParams({ category: 'jewelry' })}
            className={`hover:text-black transition-colors ${categoryFilter === 'jewelry' ? 'text-black font-semibold' : ''}`}
          >
            Jewelry
          </button>
          <button 
            onClick={() => setSearchParams({ category: 'cosmetics' })}
            className={`hover:text-black transition-colors ${categoryFilter === 'cosmetics' ? 'text-black font-semibold' : ''}`}
          >
            Cosmetics
          </button>
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {filteredProducts.map((product) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
