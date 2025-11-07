import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = ["All", "Bottles", "Bags", "Lamps", "Home", "Accessories"];

const products = [
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
  {
    id: "4",
    name: "Recycled LED Lamp",
    description: "Lampu meja dari plastik daur ulang dengan LED RGB adjustable",
    price: 399000,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    category: "Lamps"
  },
  {
    id: "5",
    name: "Eco Phone Case",
    description: "Case HP biodegradable dengan motif bioluminescent",
    price: 129000,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800&q=80",
    category: "Accessories"
  },
  {
    id: "6",
    name: "Glow Yoga Mat",
    description: "Matras yoga dari karet daur ulang dengan line guides yang menyala",
    price: 449000,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80",
    category: "Accessories"
  },
  {
    id: "7",
    name: "Recycled Backpack",
    description: "Tas ransel dengan built-in solar panel dan USB charging port",
    price: 599000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    category: "Bags"
  },
  {
    id: "8",
    name: "Neon Wall Clock",
    description: "Jam dinding dengan frame daur ulang dan LED strip accent",
    price: 249000,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800&q=80",
    category: "Home"
  },
  {
    id: "9",
    name: "EcoSmart Tumbler",
    description: "Tumbler thermal dengan temperature display LED",
    price: 279000,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    category: "Bottles"
  },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-glow bg-clip-text text-transparent">
              Shop Our Collection
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan produk ramah lingkungan yang sempurna untuk gaya hidup berkelanjutan Anda
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-primary text-primary-foreground" 
                : "border-border hover:border-primary"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No products found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
