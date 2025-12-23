import { motion } from 'framer-motion';
import { Heart, Palette, Truck, Shield } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every piece is handcrafted with care and attention to detail by skilled artisans.',
  },
  {
    icon: Palette,
    title: 'Fully Customizable',
    description: 'Choose your colors, sizes, and designs. We create exactly what you envision.',
  },
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'We use only the finest materials to ensure durability and beauty.',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    description: 'Safe and secure shipping across India. Track your handmade treasures.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Experience the difference of authentic handmade craftsmanship
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
