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
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Hear from our happy customers who love their handcrafted pieces
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Product */}
              <p className="text-sm text-primary font-medium mb-4">
                Ordered: {testimonial.product}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-semibold text-primary">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
