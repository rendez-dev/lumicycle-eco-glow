import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ProductGallery } from "@/components/ProductGallery";
import { ImageLightbox } from "@/components/ImageLightbox";
import { useState } from "react";
import { featuredProduct } from "@/data/product";
import { Truck, Shield, Sparkles, Recycle, Zap, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Shop() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-8 space-y-4">
          <Badge variant="secondary" className="mb-2">
            <Sparkles className="h-3 w-3 mr-1" />
            Featured Product
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-glow bg-clip-text text-transparent">
              {featuredProduct.name}
            </span>
          </h1>
          <p className="text-foreground max-w-2xl mx-auto text-lg">
            {featuredProduct.description}
          </p>
        </div>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Column - Gallery */}
          <div className="w-full">
            <ProductGallery
              images={featuredProduct.images}
              productName={featuredProduct.name}
              onImageClick={handleImageClick}
            />
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            {/* Price & Category */}
            <Card className="gradient-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-sm">
                    {featuredProduct.category}
                  </Badge>
                  <Badge variant="secondary" className="text-sm bg-green-500/10 text-green-500 border-green-500/20">
                    <Recycle className="h-3 w-3 mr-1" />
                    Eco-Friendly
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-primary">
                    <span className="text-4xl md:text-5xl font-bold bg-gradient-glow bg-clip-text text-primary">
                      Rp {featuredProduct.price.toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                  <Separator />

                  {/* Contact Button */}
                  <a 
                    href="https://wa.me/6289625100376?text=Halo%20LUMICYCLE%2C%20saya%20ingin%20membeli%20produk%20Anda" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="lg" 
                      className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white group"
                    >
                      <svg 
                        className="mr-2 h-5 w-5 group-hover:animate-bounce" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Hubungi Kami untuk Membeli
                    </Button>
                  </a>

                  {/* Quick Info */}
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    <div className="text-center p-3 rounded-lg bg-secondary/30 border border-border">
                      <Truck className="h-5 w-5 mx-auto mb-1 text-primary" />
                      <p className="text-xs font-medium">Free Shipping</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-secondary/30 border border-border">
                      <Shield className="h-5 w-5 mx-auto mb-1 text-primary" />
                      <p className="text-xs font-medium">1 Year Warranty</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-secondary/30 border border-border">
                      <Zap className="h-5 w-5 mx-auto mb-1 text-primary" />
                      <p className="text-xs font-medium">Fast Delivery</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="gradient-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {featuredProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Story Section */}
        <Card className="gradient-card border-border mb-12">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-glow flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold">
                  {featuredProduct.storyTitle || "Our Story"}
                </h2>
              </div>
              
              <div className="prose prose-invert max-w-none">
                {featuredProduct.story.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>

              <div className="text-center mt-8 pt-8 border-t border-border">
                <p className="text-lg font-medium bg-gradient-glow bg-clip-text text-transparent">
                  Be Luminous with Recycle! ✨
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="gradient-card border-border hover:border-primary/50 transition-all text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-glow flex items-center justify-center">
                <Recycle className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">100% Recycled</h3>
              <p className="text-sm text-muted-foreground">
                Setiap produk dibuat dari bahan daur ulang berkualitas tinggi
              </p>
            </CardContent>
          </Card>

          <Card className="gradient-card border-border hover:border-primary/50 transition-all text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-glow flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">Smart Technology</h3>
              <p className="text-sm text-muted-foreground">
                Teknologi modern yang ramah lingkungan dan inovatif
              </p>
            </CardContent>
          </Card>

          <Card className="gradient-card border-border hover:border-primary/50 transition-all text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-glow flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">Premium Design</h3>
              <p className="text-sm text-muted-foreground">
                Desain futuristik yang indah dan menginspirasi
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        images={featuredProduct.images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
