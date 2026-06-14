import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [searchQuery, setSearchQuery] = useState('');
  
  const { products } = useProducts();

  const filteredProducts = products.filter(p => {
    if (categoryFilter && p.category !== categoryFilter) return false;
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-6 max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-brand-primary">The Complete Collection</h1>
        
        <div className="relative max-w-md mx-auto mt-8 mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 stroke-[1.5]" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black sm:text-sm transition-all duration-300"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm tracking-widest uppercase text-gray-500">
          <button 
            onClick={() => setSearchParams({})}
            className={`hover:text-black transition-colors duration-300 ${!categoryFilter ? 'text-black font-semibold' : ''}`}
          >
            All
          </button>
          <button 
            onClick={() => setSearchParams({ category: 'jewelry' })}
            className={`hover:text-black transition-colors duration-300 ${categoryFilter === 'jewelry' ? 'text-black font-semibold' : ''}`}
          >
            Jewelry
          </button>
          <button 
            onClick={() => setSearchParams({ category: 'cosmetics' })}
            className={`hover:text-black transition-colors duration-300 ${categoryFilter === 'cosmetics' ? 'text-black font-semibold' : ''}`}
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
