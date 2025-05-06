
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: {
    name: string;
    avatar: string;
  };
  publishDate: string;
  lastUpdated?: string;
  category: string;
  tags: string[];
  featuredImage: string;
  excerpt: string;
  content: string;
  readTime: number;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    canonical?: string;
  };
}
