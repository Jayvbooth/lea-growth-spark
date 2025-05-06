
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
  status?: "draft" | "published";
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    canonical?: string;
  };
}

export type BlogFormData = Omit<BlogPost, "id" | "readTime" | "slug"> & {
  id?: string;
};
