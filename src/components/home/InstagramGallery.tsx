import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Instagram className="w-5 h-5" />
            <span className="font-medium">@peshalhandicraft</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Get inspired by our latest creations and behind-the-scenes moments
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {galleryImages.map((image, index) => (
            <motion.a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                <Instagram className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
