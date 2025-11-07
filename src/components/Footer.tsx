import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import logo from "@/assets/lumicycle-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="LUMICYCLE Logo" 
                className="w-10 h-10 object-contain animate-glow"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider bg-gradient-glow bg-clip-text text-transparent">
                  LUMICYCLE
                </span>
                <span className="text-xs text-muted-foreground">
                  Be Luminous with Recycle
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Menggabungkan keindahan cahaya dengan keberlanjutan lingkungan. 
              Setiap produk kami dibuat dengan cinta untuk planet kita.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/lumicycle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center group"
              >
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="mailto:hello@lumicycle.com"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-colors flex items-center justify-center group"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LUMICYCLE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
