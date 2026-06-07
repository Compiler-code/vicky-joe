import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-1 flex items-center space-x-8">
            <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-gray-600 transition-colors">
              Jewelry
            </Link>
            <Link to="/shop?category=cosmetics" className="text-sm tracking-widest uppercase hover:text-gray-600 transition-colors">
              Cosmetics
            </Link>
          </div>
          
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase">
              Vicky & Joe
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-end space-x-6">
            <button className="text-gray-800 hover:text-gray-500 transition-colors">
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button className="text-gray-800 hover:text-gray-500 transition-colors">
              <User className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
