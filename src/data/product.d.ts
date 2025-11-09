import type { ProductImage } from "@/components/ProductGallery";
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    images: ProductImage[];
    features: string[];
    specifications: {
        material: string;
        dimensions: string;
        weight: string;
        capacity?: string;
        technology?: string;
    };
    story: string;
}
export declare const featuredProduct: Product;
