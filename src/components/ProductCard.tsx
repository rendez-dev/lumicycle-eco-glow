import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard = ({ name, description, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 gradient-card hover:scale-[1.02] hover:shadow-card">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-5">
        <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {description}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold bg-gradient-glow bg-clip-text text-transparent">
            Rp {price.toLocaleString('id-ID')}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn">
          <ShoppingCart className="mr-2 h-4 w-4 group-hover/btn:animate-bounce" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
