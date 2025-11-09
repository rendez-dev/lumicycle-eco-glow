export interface ProductImage {
    id: string;
    url: string;
    angle: string;
    altText: string;
    isPrimary?: boolean;
}
interface ProductGalleryProps {
    images: ProductImage[];
    productName: string;
    onImageClick?: (index: number) => void;
}
export declare const ProductGallery: ({ images, productName, onImageClick }: ProductGalleryProps) => import("react/jsx-runtime").JSX.Element;
export {};
