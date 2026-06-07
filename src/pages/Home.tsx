import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data';

export function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative text-center text-white space-y-6 max-w-3xl px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight"
          >
            The Art of Elegance
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase font-light"
          >
            Fine Jewelry & Premium Cosmetics
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8"
          >
            <Link to="/shop" className="bg-white text-black px-8 py-4 text-xs tracking-widest uppercase hover:bg-gray-100 transition-colors">
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-primary">Curated Selections</h2>
          <p className="text-xs md:text-sm tracking-widest uppercase text-gray-400">Discover Our Most Coveted Pieces</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16">
          <Link to="/shop" className="inline-block border border-black px-12 py-4 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-colors">
            View All
          </Link>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-brand-secondary py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-5xl text-brand-primary leading-tight">
            Crafting beauty that transcends time.
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
            At Vicky & Joe, we believe that true elegance lies in the exquisite details. From the finest, ethically sourced diamonds to advanced skincare formulations designed to illuminate your natural beauty, our collections are a testament to uncompromising quality and timeless design.
          </p>
        </div>
      </section>
    </div>
  );
}
