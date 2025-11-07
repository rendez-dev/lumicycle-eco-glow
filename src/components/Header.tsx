import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/lumicycle-logo.png";

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
<Link to="/" className="relative flex items-center justify-center gap-2">
  {/* Logo container */}
  <div className="relative flex items-center justify-center group">
    {/* Teks di tengah logo */}
    <span
      className="absolute text-[10px] sm:text-xs text-pink-300 tracking-widest text-center"
      style={{ top: "15%", left: "50%", transform: "translateX(-50%)" }}
    />

    {/* Logo */}
    <img
      src={logo}
      alt="LUMICYCLE Logo"
      className="h-20 sm:h-24 w-auto object-contain transition-all duration-300 group-hover:scale-105"
    />
  </div>
  <div className="flex flex-col justify-center -ml-1 space-y-0.5">
    <span className="text-xl font-bold tracking-wider text-muted-foreground">
      LUMICYCLE
    </span>
    <span className="text-xs text-muted-foreground tracking-widest">
      Be Luminous with Recycle
    </span>
  </div>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative hover:bg-secondary">
                <ShoppingCart className="h-10 w-10" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-slideUp">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
