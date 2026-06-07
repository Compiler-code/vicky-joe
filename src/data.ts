import { Product } from './types';
import diamondRingImg from './assets/images/diamond_ring_1780724958697.png';
import pearlNecklaceImg from './assets/images/pearl_necklace_1780724974599.png';
import foundationImg from './assets/images/foundation_bottle_1780724990163.png';
import facialRollerImg from './assets/images/facial_roller_1780725004529.png';

export const products: Product[] = [
  {
    id: 'j-001',
    name: 'Platinum Diamond Solitaire Ring',
    category: 'jewelry',
    subCategory: 'rings',
    price: 6800000,
    description: 'A masterpiece of craftsmanship featuring a brilliantly cut diamond set in pure platinum. This ring epitomizes timeless elegance and enduring love.',
    images: [diamondRingImg],
    isNew: true,
    featured: true,
  },
  {
    id: 'j-002',
    name: '18k Gold Pearl Necklace',
    category: 'jewelry',
    subCategory: 'necklaces',
    price: 1850000,
    description: 'Luminous South Sea pearls strung along a delicate 18k gold chain. A classic addition to any sophisticated wardrobe.',
    images: [pearlNecklaceImg],
    featured: true,
  },
  {
    id: 'j-003',
    name: 'Diamond Tennis Bracelet',
    category: 'jewelry',
    subCategory: 'bracelets',
    price: 4800000,
    description: 'An unbroken circle of radiance. Round brilliant diamonds expertly matched and set in 18k white gold.',
    images: ['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800'],
  },
  {
    id: 'c-001',
    name: 'Luminous Silk Foundation',
    category: 'cosmetics',
    subCategory: 'makeup',
    price: 105000,
    description: 'An award-winning liquid foundation that delivers buildable medium coverage and a luminous, glowy-skin finish for a natural makeup look.',
    images: [foundationImg],
    featured: true,
  },
  {
    id: 'c-002',
    name: 'Midnight Recovery Botanical Serum',
    category: 'cosmetics',
    subCategory: 'skincare',
    price: 85000,
    description: 'A nighttime facial oil that visibly restores the appearance of skin while you sleep, leaving a luxurious, youthful glow.',
    images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800'],
    isNew: true,
  },
  {
    id: 'c-003',
    name: 'Velvet Matte Lipstick',
    category: 'cosmetics',
    subCategory: 'makeup',
    price: 55000,
    description: 'A highly pigmented matte lipstick that glides on smoothly, providing rich color and comfortable wear all day.',
    images: ['https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800'],
  },
  {
    id: 'j-004',
    name: 'Emerald Cut Drop Earrings',
    category: 'jewelry',
    subCategory: 'earrings',
    price: 4200000,
    description: 'Breathtaking emerald-cut diamonds suspended from delicate platinum hooks, catching the light with every movement.',
    images: ['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800'],
  },
  {
    id: 'c-004',
    name: 'Rose Quartz Facial Roller',
    category: 'cosmetics',
    subCategory: 'accessories',
    price: 45000,
    description: 'A dual-ended rose quartz roller that massages the face, helps reduce puffiness, and promotes a radiant complexion.',
    images: [facialRollerImg],
    featured: true,
  }
];
