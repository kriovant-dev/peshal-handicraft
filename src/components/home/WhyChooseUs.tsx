import { motion } from 'framer-motion';
import { Heart, Palette, Truck, Shield } from 'lucide-react';
import aboutImage from '@/assets/about-crafting.jpg';

const features = [
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every piece handcrafted with care by skilled artisans.',
  },
  {
    icon: Palette,
    title: 'Fully Customizable',
    description: 'Choose colors, sizes, and designs to match your vision.',
  },
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Only the finest materials for lasting beauty.',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    description: 'Safe shipping across India with tracking.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img 
                  src={aboutImage} 
                  alt="Artisan crafting"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Why Us</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-[1.1] mb-6">
                Crafted with
                <br />
                <span className="italic text-primary">Tradition & Care</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                We blend traditional Indian craftsmanship with contemporary design to create pieces that tell a story.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
