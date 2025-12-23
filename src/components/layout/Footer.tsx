import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold">Peshal Handicraft</h3>
            <p className="text-background/70 font-body text-sm leading-relaxed">
              Handcrafted with love. Every piece tells a story of tradition, care, and artistry.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@peshalhandicraft.com"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-medium">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: 'Shop All', path: '/shop' },
                { name: 'Custom Orders', path: '/custom-order' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-medium">Categories</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: 'Crochet Products', path: '/shop?category=crochet' },
                { name: 'Saree Tassels', path: '/shop?category=saree-tassels' },
                { name: 'Gift Items', path: '/shop?category=gift-items' },
                { name: 'Home Decor', path: '/shop?category=decor' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-medium">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <a
                href="mailto:hello@peshalhandicraft.com"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@peshalhandicraft.com
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Peshal Handicraft. All rights reserved. Made with ♥ in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
