export interface Product {
    id: string;
    name: string;
    category: 'cosmetics' | 'jewelry';
    subCategory: string;
    price: number;
    description: string;
    images: string[];
    isNew?: boolean;
    featured?: boolean;
}
