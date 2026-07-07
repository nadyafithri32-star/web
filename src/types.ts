export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon identifier
}

export interface ProductItem {
  id: string;
  category: string;
  title: string;
  description: string;
  badgeColor: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  category: 'Semua' | 'Pengguna' | 'Operator' | 'Mitra Hotel' | 'Mitra Bandara';
}

export interface ArticleItem {
  id: string;
  category: 'Teknologi' | 'Tips & Trik' | 'Berita' | 'Panduan Mitra';
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl: string;
  featured?: boolean;
}

export interface WeatherData {
  temperature: number;
  weatherCode: number;
  condition: string;
  loading: boolean;
  error: boolean;
}
