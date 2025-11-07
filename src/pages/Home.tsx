import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { ArrowRight, Recycle, Lightbulb, Heart } from "lucide-react";
import logo from "@/assets/lumicycle-logo.png";

const featuredProducts = [
  {
    id: "1",
    name: "EcoGlow Bottle",
    description: "Botol minum LED daur ulang dengan teknologi self-cleaning UV",
    price: 299000,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
    category: "Bottles"
  },
  {
    id: "2",
    name: "Luminous Tote Bag",
    description: "Tas belanja dengan reflective strips dari bahan daur ulang",
    price: 199000,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    category: "Bags"
  },
  {
    id: "3",
    name: "Neon Plant Pot",
    description: "Pot tanaman biodegradable dengan glow-in-the-dark accent",
    price: 149000,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
    category: "Home"
  },
];

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

      {/* Featured Products */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-glow bg-clip-text text-transparent">
              Featured Products
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Koleksi pilihan produk daur ulang kami yang paling populer
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/shop">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
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
            <div className="text-center space-y-4 p-6 rounded-xl gradient-card border border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-glow flex items-center justify-center">
                <Recycle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">100% Recycled</h3>
              <p className="text-sm text-muted-foreground">
                Semua produk dibuat dari bahan daur ulang berkualitas tinggi
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-xl gradient-card border border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-glow flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Innovative Design</h3>
              <p className="text-sm text-muted-foreground">
                Teknologi modern bertemu dengan estetika futuristik
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-xl gradient-card border border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-glow flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary-foreground" />
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
