import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { MessageCircle } from 'lucide-react';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products } = useProducts();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const product = products.find(p => p.id === id);

  // Reset active image when product changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="font-serif text-2xl">Product Not Found</h2>
        <button onClick={() => navigate('/shop')} className="text-sm tracking-widest uppercase underline hover:text-gray-600 transition-colors duration-300">
          Return to Shop
        </button>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const phoneNumber = '2347084382462'; // Target phone number
    const message = `Hello Vicky_Joe Cosmetics & Jewelry, I would like to order: ${product.name} (₦${product.price.toLocaleString()})`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-[4/5] bg-brand-secondary overflow-hidden">
            <img 
              src={product.images[activeImageIndex] || product.images[0]} 
              alt={product.name}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative flex-shrink-0 w-20 h-24 sm:w-24 sm:h-32 bg-gray-50 overflow-hidden transition-all duration-300 ${activeImageIndex === index ? 'ring-2 ring-black ring-offset-2 opacity-100' : 'opacity-60 hover:opacity-100'}`}
                >
                  <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center space-y-10 py-8">
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-gray-500">
              {product.category} &middot; {product.subCategory}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl leading-tight text-brand-primary">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600">₦{product.price.toLocaleString()}</p>
          </div>

          <div className="prose prose-sm text-gray-600 leading-relaxed font-light">
            <p>{product.description}</p>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <button 
              onClick={handleWhatsAppOrder}
              className="w-full bg-black text-white py-4 text-xs tracking-widest uppercase flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </button>
          </div>

          <div className="space-y-4 text-sm text-gray-500">
            <div className="flex justify-between border-b border-gray-100 pb-4">
              <span>Delivery</span>
              <span>Available nationwide</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 pb-4">
              <span>Authenticity</span>
              <span>100% Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
