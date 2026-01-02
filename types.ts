
export interface Product {
  id: string;
  title: string;
  category: string;
  priceRange: string;
  mainImg: string;
  hoverImg: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface BlogItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}
