import type { ProductImage } from "./ProductGallery";
interface ImageLightboxProps {
    images: ProductImage[];
    initialIndex: number;
    isOpen: boolean;
    onClose: () => void;
}
export declare const ImageLightbox: ({ images, initialIndex, isOpen, onClose }: ImageLightboxProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
