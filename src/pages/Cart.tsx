import { Button } from "@/components/ui/button";
import { Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {
  // Mock cart data - in real app this would come from state management
  const cartItems = [
    {
      id: "1",
      name: "EcoGlow Bottle",
      price: 299000,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200&q=80"
    },
    {
      id: "2",
      name: "Luminous Tote Bag",
      price: 199000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=200&q=80"
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 25000;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-glow bg-clip-text text-transparent">
              Shopping Cart
            </span>
          </h1>
          <p className="text-muted-foreground">
            {cartItems.length} items in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          // Empty State
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Start shopping and add some amazing products to your cart!
            </p>
            <Link to="/shop">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="gradient-card rounded-xl p-6 border border-border">
                  <div className="flex gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                      <p className="text-primary font-semibold mb-4">
                        Rp {item.price.toLocaleString('id-ID')}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            -
                          </Button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                            +
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">
                        Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="gradient-card rounded-xl p-6 border border-border sticky top-24">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">Rp {subtotal.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">Rp {shipping.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="font-bold text-lg">Total</span>
                      <span className="font-bold text-lg bg-gradient-glow bg-clip-text text-transparent">
                        Rp {total.toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-3">
                  Proceed to Checkout
                </Button>
                
                <Link to="/shop">
                  <Button variant="outline" className="w-full border-border hover:border-primary">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
