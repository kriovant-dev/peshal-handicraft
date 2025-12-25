import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight } from 'lucide-react';
import crochetBagImg from '@/assets/product-crochet-bag.jpg';
import sareeTasselsImg from '@/assets/product-saree-tassels.jpg';
import macrameImg from '@/assets/product-macrame.jpg';
import amigurumiImg from '@/assets/product-amigurumi.jpg';
import aboutImage from '@/assets/about-crafting.jpg';
import heroImage from '@/assets/hero-handicraft.jpg';

const galleryImages = [
  { src: crochetBagImg, alt: 'Crochet bag' },
  { src: sareeTasselsImg, alt: 'Saree tassels' },
  { src: macrameImg, alt: 'Macrame wall hanging' },
  { src: amigurumiImg, alt: 'Amigurumi teddy' },
  { src: aboutImage, alt: 'Artisan crafting' },
  { src: heroImage, alt: 'Handicraft collection' },
];

export default function InstagramGallery() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-background/60 mb-4">
              <Instagram className="w-5 h-5" />
              <span className="font-medium">@peshalhandicraft</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.1]">
              Follow Our
              <span className="italic text-background/60"> Journey</span>
            </h2>
          </div>
          <a 
            href="https://instagram.com/peshalhandicraft" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-background/80 hover:text-background transition-colors group"
          >
            View on Instagram
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Masonry-style Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {galleryImages.map((image, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/peshalhandicraft"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
