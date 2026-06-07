import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] bg-brand-secondary overflow-hidden mb-6">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] tracking-widest uppercase font-medium">
            New
          </div>
        )}
      </div>
      <div className="text-center space-y-2">
        <p className="text-[11px] tracking-[0.2em] text-gray-500 uppercase">{product.category}</p>
        <h3 className="font-serif text-lg text-brand-primary">{product.name}</h3>
        <p className="text-sm text-gray-600">₦{product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}
