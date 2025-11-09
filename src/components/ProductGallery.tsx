import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";

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

export const ProductGallery = ({ images, productName, onImageClick }: ProductGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full space-y-4">
      {/* Main Image Slider */}
      <div className="relative group">
        <Swiper
          spaceBetween={10}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs, Zoom]}
          zoom={true}
          className="rounded-xl overflow-hidden aspect-square bg-secondary/20"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.id}>
              <div className="swiper-zoom-container relative h-full w-full">
                <img
                  src={image.url}
                  alt={image.altText}
                  className="w-full h-full object-cover cursor-zoom-in"
                />
                {/* Angle Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm border border-border">
                    {image.angle}
                  </Badge>
                </div>
                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm border border-border">
                    {index + 1} / {images.length}
                  </Badge>
                </div>
                {/* Fullscreen Button */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur-sm"
                  onClick={() => onImageClick?.(index)}
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-background/90 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-colors">
              <ChevronLeft className="h-6 w-6" />
            </div>
          </button>
          <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-background/90 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-colors">
              <ChevronRight className="h-6 w-6" />
            </div>
          </button>
        </Swiper>

        {/* Zoom Hint */}
        <p className="text-xs text-muted-foreground text-center mt-2">
          💡 Click pada gambar untuk zoom, drag untuk pan
        </p>
      </div>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          640: { slidesPerView: 5 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 7 },
        }}
        className="thumbnail-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`thumb-${image.id}`}>
            <div
              className={`
                relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all
                ${activeIndex === index 
                  ? "border-primary shadow-lg scale-105" 
                  : "border-border hover:border-primary/50"
                }
              `}
            >
              <img
                src={image.url}
                alt={image.altText}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-2">
                <span className="text-[10px] font-medium text-foreground truncate w-full">
                  {image.angle}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
