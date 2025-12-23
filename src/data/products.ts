import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Crochet Products',
    slug: 'crochet',
    image: '/placeholder.svg',
    description: 'Handmade crochet items crafted with love'
  },
  {
    id: '2',
    name: 'Saree Tassels',
    slug: 'saree-tassels',
    image: '/placeholder.svg',
    description: 'Elegant tassels for your beautiful sarees'
  },
  {
    id: '3',
    name: 'Custom Orders',
    slug: 'custom-orders',
    image: '/placeholder.svg',
    description: 'Made-to-order pieces just for you'
  },
  {
    id: '4',
    name: 'Gift Items',
    slug: 'gift-items',
    image: '/placeholder.svg',
    description: 'Perfect handmade gifts for your loved ones'
  },
  {
    id: '5',
    name: 'Home Decor',
    slug: 'decor',
    image: '/placeholder.svg',
    description: 'Beautiful handcrafted decor for your home'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Floral Crochet Bag',
    price: 1299,
    originalPrice: 1599,
    description: 'A beautifully handcrafted crochet bag featuring intricate floral patterns. Made with premium cotton yarn, this bag is perfect for everyday use or as a statement accessory. Each piece is unique and made with care.',
    shortDescription: 'Handmade floral crochet bag with premium cotton',
    category: 'crochet',
    images: ['/placeholder.svg'],
    inStock: true,
    isMadeToOrder: false,
    colors: ['Cream', 'Blush Pink', 'Sage Green'],
    featured: true,
    badge: 'Bestseller'
  },
  {
    id: '2',
    name: 'Golden Saree Tassels',
    price: 599,
    description: 'Exquisite golden tassels handmade to add elegance to your sarees. These tassels feature intricate beadwork and are perfect for weddings and special occasions.',
    shortDescription: 'Elegant golden tassels with beadwork',
    category: 'saree-tassels',
    images: ['/placeholder.svg'],
    inStock: true,
    isMadeToOrder: true,
    deliveryDays: 5,
    colors: ['Gold', 'Silver', 'Rose Gold'],
    featured: true
  },
  {
    id: '3',
    name: 'Macrame Wall Hanging',
    price: 1899,
    description: 'A stunning macrame wall hanging that adds bohemian charm to any space. Handcrafted with natural cotton rope, this piece features intricate knotwork patterns.',
    shortDescription: 'Bohemian macrame wall art',
    category: 'decor',
    images: ['/placeholder.svg'],
    inStock: true,
    isMadeToOrder: false,
    sizes: ['Small (12")', 'Medium (18")', 'Large (24")'],
    featured: true,
    badge: 'New'
  },
  {
    id: '4',
    name: 'Crochet Baby Booties',
    price: 449,
    description: 'Adorable handmade baby booties perfect for gifting. Soft, comfortable, and made with baby-safe yarn.',
    shortDescription: 'Soft handmade booties for babies',
    category: 'gift-items',
    images: ['/placeholder.svg'],
    inStock: true,
    isMadeToOrder: true,
    deliveryDays: 3,
    colors: ['White', 'Pink', 'Blue', 'Yellow'],
    sizes: ['0-3 months', '3-6 months', '6-12 months'],
    featured: true
  },
  {
    id: '5',
    name: 'Silk Thread Tassels Set',
    price: 899,
    originalPrice: 1099,
    description: 'A set of 6 premium silk thread tassels in assorted colors. Perfect for sarees, lehengas, or craft projects.',
    shortDescription: 'Premium silk thread tassel set',
    category: 'saree-tassels',
    images: ['/placeholder.svg'],
    inStock: true,
    isMadeToOrder: false,
    featured: false
  },
  {
    id: '6',
    name: 'Amigurumi Teddy Bear',
    price: 799,
    description: 'A cute and cuddly handmade teddy bear crafted in the Japanese amigurumi style. Perfect gift for children and collectors.',
    shortDescription: 'Handmade amigurumi teddy bear',
    category: 'gift-items',
    images: ['/placeholder.svg'],
    inStock: false,
    isMadeToOrder: true,
    deliveryDays: 7,
    colors: ['Brown', 'Cream', 'Pink'],
    featured: true,
    badge: 'Made to Order'
  },
  {
    id: '7',
    name: 'Crochet Coasters Set',
    price: 349,
    description: 'Set of 6 beautiful crochet coasters in earthy tones. Adds a handmade touch to your table setting.',
    shortDescription: 'Handmade crochet coaster set',
    category: 'decor',
    images: ['/placeholder.svg'],
    inStock: true,
    isMadeToOrder: false,
    colors: ['Earth Tones', 'Pastels', 'Neutrals'],
    featured: false
  },
  {
    id: '8',
    name: 'Bridal Saree Tassels',
    price: 1499,
    originalPrice: 1899,
    description: 'Luxurious bridal tassels with pearl and crystal embellishments. Custom-made to match your bridal saree.',
    shortDescription: 'Premium bridal tassels with crystals',
    category: 'saree-tassels',
    images: ['/placeholder.svg'],
    inStock: true,
    isMadeToOrder: true,
    deliveryDays: 10,
    colors: ['Red & Gold', 'Pink & Silver', 'Custom Color'],
    featured: true,
    badge: 'Premium'
  }
];
