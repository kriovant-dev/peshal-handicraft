import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CustomOrderCTA() {
  return (
    <section className="py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 text-primary mb-6">
              <Palette className="w-5 h-5" />
              <span className="font-medium text-sm tracking-widest uppercase">Custom Orders</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] mb-6">
              Something
              <br />
              <span className="italic text-primary">Unique?</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
              Share your vision and we'll craft a one-of-a-kind piece just for you. 
              Custom colors, designs, and sizes — your imagination is the only limit.
            </p>

            <Button
              variant="hero"
              size="xl"
              asChild
              className="rounded-full"
            >
              <Link to="/custom-order">
                Start Your Custom Order
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
              
              {/* Main visual */}
              <div className="relative bg-card border border-border rounded-3xl p-8 shadow-elevated">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 pb-4 border-b border-border">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Your Design</p>
                      <p className="text-sm text-muted-foreground">Share your vision</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 pb-4 border-b border-border">
                    <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">We Craft It</p>
                      <p className="text-sm text-muted-foreground">With love & care</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-soft-pink/30 flex items-center justify-center">
                      <span className="text-2xl">📦</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Delivered</p>
                      <p className="text-sm text-muted-foreground">Right to your door</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
