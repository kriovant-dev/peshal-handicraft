import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

export default function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header with side accent */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium text-sm tracking-widest uppercase">Bestsellers</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-[1.1] mb-4">
              Most Loved
              <span className="block text-muted-foreground/60 text-2xl md:text-3xl mt-2 font-normal">
                by our customers
              </span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-12 lg:col-span-4 flex items-end justify-start lg:justify-end"
          >
            <Button variant="outline" size="lg" asChild className="group rounded-full px-6">
              <Link to="/shop">
                View All
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Products in staggered grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={index % 2 === 1 ? 'lg:mt-12' : ''}
            >
              <ProductCard product={product} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
