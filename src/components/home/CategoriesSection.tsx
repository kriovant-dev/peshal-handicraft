import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import crochetBagImg from '@/assets/product-crochet-bag.jpg';
import sareeTasselsImg from '@/assets/product-saree-tassels.jpg';
import macrameImg from '@/assets/product-macrame.jpg';
import amigurumiImg from '@/assets/product-amigurumi.jpg';

const categories = [
  {
    id: 'crochet',
    name: 'Crochet Products',
    description: 'Handmade bags, accessories & more',
    image: crochetBagImg,
    color: 'from-soft-pink/80 to-transparent',
  },
  {
    id: 'saree-tassels',
    name: 'Saree Tassels',
    description: 'Elegant tassels for every occasion',
    image: sareeTasselsImg,
    color: 'from-terracotta/80 to-transparent',
  },
  {
    id: 'decor',
    name: 'Home Decor',
    description: 'Beautiful pieces for your space',
    image: macrameImg,
    color: 'from-olive/80 to-transparent',
  },
  {
    id: 'gift-items',
    name: 'Gift Items',
    description: 'Perfect handmade gifts',
    image: amigurumiImg,
    color: 'from-accent/80 to-transparent',
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Explore our curated collection of handcrafted treasures
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/shop?category=${category.id}`}
                className="group block relative aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="font-display text-lg md:text-xl font-semibold text-background mb-1">
                    {category.name}
                  </h3>
                  <p className="text-background/70 text-xs md:text-sm hidden md:block">
                    {category.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-background" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
