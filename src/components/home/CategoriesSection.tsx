import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import crochetBagImg from '@/assets/product-crochet-bag.jpg';
import sareeTasselsImg from '@/assets/product-saree-tassels.jpg';
import macrameImg from '@/assets/product-macrame.jpg';
import amigurumiImg from '@/assets/product-amigurumi.jpg';

const categories = [
  {
    id: 'crochet',
    name: 'Crochet',
    tagline: 'Handwoven elegance',
    image: crochetBagImg,
  },
  {
    id: 'saree-tassels',
    name: 'Saree Tassels',
    tagline: 'Traditional artistry',
    image: sareeTasselsImg,
  },
  {
    id: 'decor',
    name: 'Home Decor',
    tagline: 'Artisan pieces',
    image: macrameImg,
  },
  {
    id: 'gift-items',
    name: 'Gifts',
    tagline: 'Made with love',
    image: amigurumiImg,
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Asymmetric Layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Left Column - Title + First Category */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4 lg:mb-8"
            >
              <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Collections</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1]">
                Explore Our
                <br />
                <span className="italic text-primary">Craft</span>
              </h2>
            </motion.div>

            {/* First large category */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1"
            >
              <Link
                to={`/shop?category=${categories[0].id}`}
                className="group block relative h-full min-h-[300px] lg:min-h-[400px] rounded-3xl overflow-hidden"
              >
                <img
                  src={categories[0].image}
                  alt={categories[0].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <p className="text-background/70 text-sm mb-1">{categories[0].tagline}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl lg:text-3xl font-medium text-background">
                      {categories[0].name}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-background/40 transition-colors">
                      <ArrowRight className="w-5 h-5 text-background" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Three Categories */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
            {/* Large top category */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-2"
            >
              <Link
                to={`/shop?category=${categories[1].id}`}
                className="group block relative h-[250px] lg:h-[280px] rounded-3xl overflow-hidden"
              >
                <img
                  src={categories[1].image}
                  alt={categories[1].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                  <p className="text-background/70 text-sm mb-1">{categories[1].tagline}</p>
                  <div className="flex items-center gap-4">
                    <h3 className="font-display text-2xl lg:text-3xl font-medium text-background">
                      {categories[1].name}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-background/40 transition-colors">
                      <ArrowRight className="w-5 h-5 text-background" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Two smaller categories */}
            {categories.slice(2).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={`/shop?category=${category.id}`}
                  className="group block relative h-[200px] lg:h-[260px] rounded-3xl overflow-hidden"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-background/70 text-xs mb-1">{category.tagline}</p>
                    <h3 className="font-display text-xl font-medium text-background">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
