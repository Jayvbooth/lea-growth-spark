
import { BlogPost } from "@/types/blog";

// Extract unique categories from blog posts
export const categories: string[] = [...new Set(blogPosts.map(post => post.category))];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Ways to Improve Your Lead Generation Strategy in 2025",
    slug: "improve-lead-generation-strategy-2025",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg"
    },
    publishDate: "2025-01-15",
    lastUpdated: "2025-02-01",
    category: "Lead Generation",
    tags: ["lead generation", "marketing", "strategy", "sales"],
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    excerpt: "Discover the most effective strategies to boost your lead generation efforts in 2025 and beyond.",
    content: `
      <h2>Introduction to Modern Lead Generation</h2>
      <p>In today's competitive business landscape, generating high-quality leads is more crucial than ever. With the digital transformation accelerating, companies need to adapt their lead generation strategies to stay ahead.</p>
      
      <h2>1. Leverage AI-Powered Lead Scoring</h2>
      <p>Artificial intelligence has revolutionized how we qualify leads. By implementing AI-powered lead scoring systems, you can automatically identify your most promising prospects based on behavior patterns and engagement metrics.</p>
      
      <h2>2. Personalized Content Marketing</h2>
      <p>Generic content no longer cuts it. Today's consumers expect personalized experiences tailored to their specific needs and pain points. Use data analytics to create hyper-targeted content that speaks directly to different segments of your audience.</p>
      
      <h2>3. Interactive Lead Magnets</h2>
      <p>Static ebooks and whitepapers are being replaced by interactive content like assessments, calculators, and quizzes. These not only attract more leads but also provide valuable insights about your prospects' needs.</p>
      
      <h2>4. Optimize for Voice Search</h2>
      <p>With the rising popularity of voice-activated devices, optimizing your content for voice search is no longer optional. Focus on natural language phrases and question-based keywords to capture this growing segment.</p>
      
      <h2>5. Social Selling Strategies</h2>
      <p>Social media platforms have evolved into powerful lead generation tools. Equip your sales team with social selling techniques to build relationships and identify opportunities through platforms like LinkedIn and Twitter.</p>
      
      <h2>Conclusion</h2>
      <p>Implementing these strategies will help you generate more qualified leads and accelerate your business growth. Remember that the key is to continuously test and refine your approach based on performance data.</p>
    `,
    readTime: 8,
    seo: {
      metaTitle: "10 Effective Lead Generation Strategies for 2025 | Leadea",
      metaDescription: "Discover proven lead generation strategies to boost your sales pipeline and increase conversion rates in 2025. Learn from industry experts at Leadea.",
      keywords: ["lead generation strategies", "sales leads", "lead qualification", "marketing automation", "B2B leads"],
      canonical: "https://leadea.com/blog/improve-lead-generation-strategy-2025"
    }
  },
  {
    id: "2",
    title: "The Complete Guide to Business Automation in 2025",
    slug: "complete-guide-business-automation-2025",
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg"
    },
    publishDate: "2025-02-10",
    category: "Business Automation",
    tags: ["automation", "workflow", "productivity", "technology"],
    featuredImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    excerpt: "Learn how to leverage business automation to streamline operations and boost productivity in your organization.",
    content: `
      <h2>The Automation Revolution</h2>
      <p>Business automation has transformed from a luxury to a necessity in today's fast-paced market. Companies that embrace automation gain a significant competitive advantage through increased efficiency and reduced costs.</p>
      
      <h2>Key Areas for Automation</h2>
      <p>From customer service to financial operations, nearly every aspect of business can benefit from some degree of automation. We'll explore the most impactful areas to focus your automation efforts.</p>
      
      <h2>Selecting the Right Automation Tools</h2>
      <p>With thousands of automation tools available, choosing the right solutions for your specific needs can be overwhelming. Learn how to evaluate options based on your business requirements, scalability, and integration capabilities.</p>
      
      <h2>Implementation Best Practices</h2>
      <p>Successful automation implementation requires careful planning and change management. Discover proven approaches to minimize disruption and maximize adoption within your organization.</p>
      
      <h2>Measuring Automation ROI</h2>
      <p>How do you know if your automation initiatives are delivering value? We'll cover the key metrics and methods to accurately measure the return on your automation investments.</p>
      
      <h2>Future Trends in Business Automation</h2>
      <p>From hyperautomation to autonomous systems, get a glimpse of what's on the horizon for business automation in the coming years.</p>
    `,
    readTime: 12,
    seo: {
      metaTitle: "Complete Guide to Business Automation in 2025 | Leadea",
      metaDescription: "Master business automation with our comprehensive guide covering implementation strategies, best tools, and future trends for 2025 and beyond.",
      keywords: ["business automation", "workflow automation", "automation tools", "RPA", "process optimization"],
      canonical: "https://leadea.com/blog/complete-guide-business-automation-2025"
    }
  },
  {
    id: "3",
    title: "How to Build a Data-Driven Marketing Strategy",
    slug: "build-data-driven-marketing-strategy",
    author: {
      name: "Emma Rodriguez",
      avatar: "/placeholder.svg"
    },
    publishDate: "2025-01-28",
    category: "Marketing",
    tags: ["data", "marketing", "analytics", "strategy"],
    featuredImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    excerpt: "Transform your marketing approach by leveraging data analytics for more targeted and effective campaigns.",
    content: `
      <h2>The Data Advantage in Marketing</h2>
      <p>Modern marketing thrives on data. Organizations that effectively collect, analyze, and act on customer data consistently outperform their competitors in both acquisition and retention.</p>
      
      <h2>Building Your Data Infrastructure</h2>
      <p>Before you can implement a data-driven strategy, you need the right foundation. Learn about the essential tools and systems required to effectively gather and organize marketing data.</p>
      
      <h2>From Data to Insights</h2>
      <p>Data alone isn't valuable - it's the insights you extract that matter. Discover techniques for analyzing marketing data and identifying actionable patterns and opportunities.</p>
      
      <h2>Personalization at Scale</h2>
      <p>One of the biggest benefits of data-driven marketing is the ability to deliver personalized experiences to large audiences. We'll explore how to implement personalization without sacrificing efficiency.</p>
      
      <h2>Testing and Optimization</h2>
      <p>A truly data-driven approach requires continuous testing and refinement. Learn how to establish an effective testing program that drives ongoing improvement in your marketing performance.</p>
      
      <h2>Privacy Considerations</h2>
      <p>With increasing regulation around data collection and usage, marketers must balance personalization with privacy. We'll cover best practices for responsible data usage in your marketing efforts.</p>
    `,
    readTime: 10,
    seo: {
      metaTitle: "Building an Effective Data-Driven Marketing Strategy | Leadea",
      metaDescription: "Learn how to create and implement a data-driven marketing strategy that delivers personalized experiences and measurable results.",
      keywords: ["data-driven marketing", "marketing analytics", "personalization", "customer insights", "marketing optimization"],
      canonical: "https://leadea.com/blog/build-data-driven-marketing-strategy"
    }
  }
];

export const getRecentBlogPosts = (count: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, count);
};

export const getRelatedPosts = (currentPostId: string, count: number = 3): BlogPost[] => {
  const currentPost = blogPosts.find(post => post.id === currentPostId);
  
  if (!currentPost) return getRecentBlogPosts(count);
  
  return blogPosts
    .filter(post => post.id !== currentPostId)
    .sort((a, b) => {
      // Count matching tags
      const aTags = a.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const bTags = b.tags.filter(tag => currentPost.tags.includes(tag)).length;
      
      // Sort by matching category, then by matching tags
      if (a.category === currentPost.category && b.category !== currentPost.category) return -1;
      if (b.category === currentPost.category && a.category !== currentPost.category) return 1;
      return bTags - aTags;
    })
    .slice(0, count);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

export const getAllBlogCategories = (): string[] => {
  return [...new Set(blogPosts.map(post => post.category))];
};

export const getAllBlogTags = (): string[] => {
  const allTags = blogPosts.flatMap(post => post.tags);
  return [...new Set(allTags)];
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

export const searchBlogPosts = (query: string): BlogPost[] => {
  const searchTerm = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};
