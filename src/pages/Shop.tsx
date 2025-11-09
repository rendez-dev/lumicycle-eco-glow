import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ProductGallery } from "@/components/ProductGallery";
import { ImageLightbox } from "@/components/ImageLightbox";
import { useState } from "react";
import { featuredProduct } from "@/data/product";
import { ShoppingCart, Truck, Shield, Sparkles, Recycle, Zap, CheckCircle2 } from "lucide-react";

export default function Shop() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleAddToCart = () => {
    // Handle add to cart logic here
    console.log(`Added ${quantity} item(s) to cart`);
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
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
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
                    <span className="text-4xl md:text-5xl font-bold bg-gradient-glow bg-clip-text text-primary">
                      Rp {featuredProduct.price.toLocaleString('id-ID')}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">Harga sudah termasuk PPN</p>
                  </div>

                  <Separator />

                  {/* Quantity Selector */}
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">Jumlah:</span>
                    <div className="flex items-center border border-border rounded-lg">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="rounded-r-none"
                      >
                        -
                      </Button>
                      <span className="px-4 py-2 min-w-[3rem] text-center font-medium">
                        {quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                        className="rounded-l-none"
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Add to Cart
                  </Button>

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

            {/* Specifications */}
            <Card className="gradient-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Specifications</h3>
                <dl className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <dt className="text-sm text-muted-foreground">Material</dt>
                    <dd className="text-sm font-medium text-right">{featuredProduct.specifications.material}</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <dt className="text-sm text-muted-foreground">Dimensions</dt>
                    <dd className="text-sm font-medium">{featuredProduct.specifications.dimensions}</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <dt className="text-sm text-muted-foreground">Weight</dt>
                    <dd className="text-sm font-medium">{featuredProduct.specifications.weight}</dd>
                  </div>
                  {featuredProduct.specifications.capacity && (
                    <div className="flex justify-between py-2 border-b border-border">
                      <dt className="text-sm text-muted-foreground">Capacity</dt>
                      <dd className="text-sm font-medium">{featuredProduct.specifications.capacity}</dd>
                    </div>
                  )}
                  {featuredProduct.specifications.technology && (
                    <div className="flex justify-between py-2">
                      <dt className="text-sm text-muted-foreground">Technology</dt>
                      <dd className="text-sm font-medium text-right">{featuredProduct.specifications.technology}</dd>
                    </div>
                  )}
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Story Section */}
        <Card className="gradient-card border-border mb-12">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-glow bg-clip-text text-transparent">
                    Our Story
                  </span>
                </h2>
                <Separator className="w-24 mx-auto" />
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
