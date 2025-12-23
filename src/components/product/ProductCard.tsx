import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
            {product.badge}
          </span>
        )}

        {/* Made to Order Badge */}
        {product.isMadeToOrder && !product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-olive text-secondary-foreground">
            Made to Order
          </span>
        )}

        {/* Out of Stock Overlay */}
        {!product.inStock && !product.isMadeToOrder && (
          <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
            <span className="px-4 py-2 bg-background rounded-lg text-sm font-medium">
              Out of Stock
            </span>
          </div>
        )}

        {/* Hover Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent flex items-end justify-center pb-4 gap-2"
        >
          <Button
            variant="secondary"
            size="sm"
            className="bg-background/90 backdrop-blur-sm hover:bg-background"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            <ShoppingBag className="w-4 h-4 mr-1" />
            Add to Cart
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="bg-background/90 backdrop-blur-sm hover:bg-background h-9 w-9"
            asChild
          >
            <Link to={`/product/${product.id}`}>
              <Eye className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Like Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-background"
        >
          <Heart
            className={cn(
              "w-4 h-4 transition-colors",
              isLiked ? "fill-destructive text-destructive" : "text-foreground"
            )}
          />
        </button>
      </div>

      {/* Product Info */}
      <Link to={`/product/${product.id}`} className="block space-y-2">
        <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-1">{product.shortDescription}</p>
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-semibold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        {product.isMadeToOrder && product.deliveryDays && (
          <p className="text-xs text-olive font-medium">
            Ready in {product.deliveryDays} days
          </p>
        )}
      </Link>
    </motion.div>
  );
}
