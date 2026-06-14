import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase block mb-6">
              Vicky & Joe
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Discover the art of elegance with our curated collection of premium cosmetics and fine jewelry. Built for the modern aesthete.
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase font-semibold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/shop?category=jewelry" className="hover:text-black transition-colors duration-300">Fine Jewelry</Link></li>
              <li><Link to="/shop?category=cosmetics" className="hover:text-black transition-colors duration-300">Cosmetics & Beauty</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase font-semibold mb-6">Client Care</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/contact" className="hover:text-black transition-colors duration-300">Contact Us</Link></li>
              <li><Link to="/shipping-returns" className="hover:text-black transition-colors duration-300">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="hover:text-black transition-colors duration-300">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vicky_Joe Cosmetics & Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-black transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-black transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
