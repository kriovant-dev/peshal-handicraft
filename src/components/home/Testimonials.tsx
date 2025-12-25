import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Absolutely stunning work! The crochet bag I ordered exceeded my expectations. The attention to detail is remarkable.',
    product: 'Floral Crochet Bag',
  },
  {
    id: 2,
    name: 'Anjali Patel',
    location: 'Jaipur',
    rating: 5,
    text: 'The saree tassels were perfect for my wedding. Beautiful craftsmanship and delivered on time!',
    product: 'Bridal Saree Tassels',
  },
  {
    id: 3,
    name: 'Meera Krishnan',
    location: 'Bangalore',
    rating: 5,
    text: 'Love my custom macrame wall hanging! It adds such a beautiful touch to my living room.',
    product: 'Macrame Wall Hanging',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-[1.1]">
            Happy <span className="italic text-primary">Customers</span>
          </h2>
        </motion.div>

        {/* Testimonials - Horizontal scroll on mobile, grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${index === 1 ? 'md:-mt-8' : ''}`}
            >
              <div className="bg-card rounded-3xl p-8 border border-border h-full relative overflow-hidden group hover:border-primary/30 transition-colors">
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground text-lg mb-6 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Product tag */}
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  {testimonial.product}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="font-display text-lg font-semibold text-primary">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
