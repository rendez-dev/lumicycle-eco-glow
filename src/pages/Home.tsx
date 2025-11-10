import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/ProductGallery";
import { Link } from "react-router-dom";
import { ArrowRight, Recycle, Lightbulb, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/lumicycle-logo.png";
import { featuredProduct } from "@/data/product";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern -mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-neon-pink/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-neon-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-neon-orange/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-3 animate-slideUp">
            {/* Logo */}
            <div className="flex justify-center">
              <img 
              src={logo} 
              alt="LUMICYCLE Logo" 
              className="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain hover:animate-pulse transition-all duration-300"
              />
            </div>

            <div className="flex flex-col items-center -mt-20">
              <h1 className="text-10xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-glow bg-clip-text text-transparent">
                  LUMICYCLE
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wider mt-2">
                Be Luminous with Recycle
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
                Produk ramah lingkungan yang bercahaya. Kami percaya bahwa keberlanjutan
                bisa indah, modern, dan menginspirasi.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link to="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 group">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-border hover:border-primary px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-glow bg-clip-text text-transparent">
              Featured Product
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Produk unggulan kami dengan berbagai sudut pandang
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Product Gallery */}
            <div className="w-full">
              <ProductGallery 
                images={featuredProduct.images} 
                productName={featuredProduct.name}
              />
            </div>
            
            {/* Product Details */}
            <div className="space-y-6 lg:sticky lg:top-24">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {featuredProduct.category}
                </Badge>
                <h3 className="text-3xl font-bold mb-3">{featuredProduct.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {featuredProduct.description}
                </p>
              </div>
              
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold bg-gradient-glow bg-clip-text text-transparent">
                  Rp {featuredProduct.price.toLocaleString('id-ID')}
                </span>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Features:</h4>
                <ul className="space-y-2">
                  {featuredProduct.features.slice(0, 5).map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-3 pt-4">
                <a 
                  href="https://wa.me/6289625100376?text=Halo%20LUMICYCLE%2C%20saya%20ingin%20bertanya%20tentang%20produk%20Anda" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white group">
                    <svg 
                      className="mr-2 h-5 w-5 group-hover:animate-bounce" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Hubungi Kami
                  </Button>
                </a>
                <Link to="/shop" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    View More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Care */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Mengapa Kami Peduli?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Setiap produk yang kami ciptakan adalah langkah menuju masa depan yang lebih cerah
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3 p-6 rounded-xl gradient-card border border-border hover:border-primary/50 transition-all">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-glow flex items-center justify-center">
                <Recycle className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">100% Recycled</h3>
              <p className="text-sm text-muted-foreground">
                Semua produk dibuat dari bahan daur ulang berkualitas tinggi
              </p>
            </div>
            
            <div className="text-center space-y-3 p-6 rounded-xl gradient-card border border-border hover:border-primary/50 transition-all">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-glow flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">Innovative Design</h3>
              <p className="text-sm text-muted-foreground">
                Teknologi modern bertemu dengan estetika futuristik
              </p>
            </div>
            
            <div className="text-center space-y-3 p-6 rounded-xl gradient-card border border-border hover:border-primary/50 transition-all">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-glow flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Made with Love</h3>
              <p className="text-sm text-muted-foreground">
                Dibuat dengan perhatian penuh terhadap detail dan planet kita
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
