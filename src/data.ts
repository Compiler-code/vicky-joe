import { Product } from './types';

import img1 from './assets/actual/1.png';
import img2 from './assets/actual/2.png';
import img3 from './assets/actual/3.png';
import img4 from './assets/actual/4.png';
import img5 from './assets/actual/5.png';
import img6 from './assets/actual/6.png';
import img7 from './assets/actual/7.png';

export const products: Product[] = [
  {
    id: 'f-001',
    name: 'Chromatic Chronicles - Ruby',
    category: 'cosmetics',
    subCategory: 'fragrance',
    price: 350000,
    description: 'A masterpiece of olfactory craftsmanship. This exquisite ruby fragrance blends rich, intoxicating notes encapsulated in a breathtakingly elegant bottle.',
    images: [img1],
    isNew: true,
    featured: true,
  },
  {
    id: 'f-002',
    name: 'Chromatic Chronicles - Sapphire',
    category: 'cosmetics',
    subCategory: 'fragrance',
    price: 350000,
    description: 'A masterpiece of olfactory craftsmanship. This exquisite sapphire fragrance blends fresh, aquatic notes encapsulated in a breathtakingly elegant bottle.',
    images: [img2],
    featured: true,
  },
  {
    id: 'f-003',
    name: 'Maison Des Coeurs - Amour',
    category: 'cosmetics',
    subCategory: 'fragrance',
    price: 420000,
    description: 'A delicate and romantic fragrance from the Maison Des Coeurs collection, representing the eternal essence of love.',
    images: [img3],
  },
  {
    id: 'f-004',
    name: 'Cherie Trefle - Purple Diamond',
    category: 'cosmetics',
    subCategory: 'fragrance',
    price: 280000,
    description: 'A vibrant and playful scent encapsulated in a beautifully etched purple bottle. Perfect for everyday luxury.',
    images: [img4],
    featured: true,
  },
  {
    id: 'f-005',
    name: 'Chromatic Chronicles - Emerald',
    category: 'cosmetics',
    subCategory: 'fragrance',
    price: 350000,
    description: 'A masterpiece of olfactory craftsmanship. This exquisite emerald fragrance blends earthy, natural notes encapsulated in a breathtakingly elegant bottle.',
    images: [img5],
    isNew: true,
  },
  {
    id: 'f-006',
    name: 'Maison Des Coeurs - Passion',
    category: 'cosmetics',
    subCategory: 'fragrance',
    price: 420000,
    description: 'A bold, sensual fragrance from the Maison Des Coeurs collection, representing pure, unbridled passion.',
    images: [img6],
  },
  {
    id: 'f-007',
    name: 'Chromatic Chronicles - Amethyst',
    category: 'cosmetics',
    subCategory: 'fragrance',
    price: 350000,
    description: 'A masterpiece of olfactory craftsmanship. This exquisite amethyst fragrance blends sweet, floral notes encapsulated in a breathtakingly elegant bottle.',
    images: [img7],
    featured: true,
  }
];
