export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  category: 'crochet' | 'saree-tassels' | 'custom-orders' | 'gift-items' | 'decor';
  images: string[];
  inStock: boolean;
  isMadeToOrder: boolean;
  deliveryDays?: number;
  colors?: string[];
  sizes?: string[];
  featured?: boolean;
  badge?: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
  customNotes?: string;
}

export interface CustomOrderRequest {
  id: string;
  productType: string;
  referenceImage?: string;
  colorPreference: string;
  quantity: number;
  notes: string;
  contactMethod: 'whatsapp' | 'email';
  contactInfo: string;
  status: 'new' | 'in-progress' | 'completed' | 'shipped';
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}
