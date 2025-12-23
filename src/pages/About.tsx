import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import aboutImage from '@/assets/about-crafting.jpg';

const stats = [
  { icon: Heart, value: '500+', label: 'Happy Customers' },
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: Users, value: '10+', label: 'Skilled Artisans' },
  { icon: Clock, value: '1000+', label: 'Products Crafted' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Peshal Handicraft</title>
        <meta
          name="description"
          content="Learn about Peshal Handicraft's journey, our skilled artisans, and our commitment to preserving traditional Indian handicrafts while creating beautiful handmade products."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-muted/30" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Our Story
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Where tradition meets creativity. Every stitch tells a story of 
                heritage, passion, and the artistry of Indian craftsmanship.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img
                    src={aboutImage}
                    alt="Artisan hands crafting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-3xl -z-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                  Handcrafted with Love, Made with Care
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Peshal Handicraft was born from a deep love for traditional Indian craftsmanship 
                    and a desire to bring handmade beauty into modern homes. Based in the vibrant 
                    city of Jaipur, we work with talented local artisans who have inherited their 
                    skills through generations.
                  </p>
                  <p>
                    Each piece in our collection is carefully crafted by hand, ensuring that no two 
                    items are exactly alike. From delicate crochet bags to elegant saree tassels, 
                    every product carries the warmth of human touch and the precision of skilled hands.
                  </p>
                  <p>
                    We believe in sustainable practices and fair trade. Our artisans work from their 
                    homes, earning fair wages while preserving age-old techniques. When you buy from 
                    Peshal Handicraft, you're not just getting a product—you're supporting a legacy.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-display text-3xl font-semibold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Our Crafting Process
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                From raw materials to finished products, every step is handled with care
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Material Selection',
                  description: 'We source premium quality yarns, threads, and materials from trusted suppliers.',
                },
                {
                  step: '02',
                  title: 'Handcrafting',
                  description: 'Our skilled artisans carefully create each piece using traditional techniques.',
                },
                {
                  step: '03',
                  title: 'Quality Check',
                  description: 'Every product undergoes thorough inspection before reaching you.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 bg-card rounded-2xl border border-border"
                >
                  <span className="font-display text-5xl font-bold text-primary/10 absolute top-4 right-4">
                    {item.step}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
