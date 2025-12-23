import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CustomOrderCTA from '@/components/home/CustomOrderCTA';
import Testimonials from '@/components/home/Testimonials';
import InstagramGallery from '@/components/home/InstagramGallery';

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Peshal Handicraft | Handcrafted with Love • Custom-Made Just For You</title>
        <meta
          name="description"
          content="Discover unique handmade crochet products, elegant saree tassels, custom decor, and gift items. Each piece is crafted with love by skilled Indian artisans. Shop now!"
        />
        <meta name="keywords" content="handicraft, crochet, saree tassels, handmade, Indian crafts, custom orders, gift items, home decor" />
        <link rel="canonical" href="https://peshalhandicraft.com" />
      </Helmet>
      
      <Layout>
        <HeroSection />
        <CategoriesSection />
        <FeaturedProducts />
        <WhyChooseUs />
        <CustomOrderCTA />
        <Testimonials />
        <InstagramGallery />
      </Layout>
    </>
  );
}
