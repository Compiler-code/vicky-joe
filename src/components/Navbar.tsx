import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Mobile Menu Button - Left */}
          <div className="flex-1 md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-gray-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[1.5]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[1.5]" />
              )}
            </button>
          </div>

          {/* Desktop Links - Left */}
          <div className="hidden md:flex flex-1 items-center space-x-8">
            <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-gray-600 transition-colors">
              Jewelry
            </Link>
            <Link to="/shop?category=cosmetics" className="text-sm tracking-widest uppercase hover:text-gray-600 transition-colors">
              Cosmetics
            </Link>
          </div>
          
          {/* Logo - Center */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link to="/" className="font-serif text-xl md:text-2xl tracking-widest uppercase">
              Vicky & Joe
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex-1 flex items-center justify-end space-x-4 md:space-x-6">
            <button className="text-gray-800 hover:text-gray-500 transition-colors" aria-label="Search">
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button className="text-gray-800 hover:text-gray-500 transition-colors" aria-label="Account">
              <User className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 overflow-hidden md:hidden shadow-lg"
          >
             <div className="flex flex-col space-y-6 py-8 px-4 text-center">
                <Link 
                  to="/shop" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif tracking-widest uppercase text-brand-primary"
                >
                  Jewelry
                </Link>
                <Link 
                  to="/shop?category=cosmetics" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif tracking-widest uppercase text-brand-primary"
                >
                  Cosmetics
                </Link>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
