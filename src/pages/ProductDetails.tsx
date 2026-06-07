import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data';
import { MessageCircle } from 'lucide-react';

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="font-serif text-2xl">Product Not Found</h2>
        <button onClick={() => navigate('/shop')} className="text-sm tracking-widest uppercase underline">
          Return to Shop
        </button>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const phoneNumber = '2348000000000'; // Target phone number
    const message = `Hello Vicky_Joe Cosmetics & Jewelry, I would like to order: ${product.name} (₦${product.price.toLocaleString()})`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {/* Gallery */}
        <div className="relative aspect-[4/5] bg-brand-secondary">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
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
              className="w-full bg-black text-white py-4 text-xs tracking-widest uppercase flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors"
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
