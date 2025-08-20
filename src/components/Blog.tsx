import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp, BarChart3, Target } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to GA4 Implementation for E-commerce",
    description: "Learn how to properly set up Google Analytics 4 for your online store, including enhanced ecommerce tracking and custom events.",
    category: "Analytics Setup",
    date: "2024-01-15",
    readTime: "8 min read",
    featured: true,
    icon: BarChart3
  },
  {
    id: 2,
    title: "Attribution Modeling: Beyond Last-Click",
    description: "Understand different attribution models and how to choose the right one for your business to optimize marketing spend.",
    category: "Attribution",
    date: "2024-01-10",
    readTime: "6 min read",
    featured: false,
    icon: Target
  },
  {
    id: 3,
    title: "Server-Side Tracking: The Future of Analytics",
    description: "Why server-side tracking is becoming essential and how to implement it for better data accuracy and privacy compliance.",
    category: "Advanced Analytics",
    date: "2024-01-05",
    readTime: "10 min read",
    featured: true,
    icon: TrendingUp
  },
  {
    id: 4,
    title: "Data Studio to Looker Studio Migration Guide",
    description: "Step-by-step guide to migrating your reporting from Google Data Studio to the new Looker Studio platform.",
    category: "Reporting",
    date: "2023-12-28",
    readTime: "7 min read",
    featured: false,
    icon: BarChart3
  },
  {
    id: 5,
    title: "Privacy-First Analytics: Preparing for a Cookieless Future",
    description: "How to adapt your analytics strategy for increased privacy regulations and the phase-out of third-party cookies.",
    category: "Privacy",
    date: "2023-12-20",
    readTime: "9 min read",
    featured: false,
    icon: Target
  },
  {
    id: 6,
    title: "Custom Event Tracking: Measuring What Matters",
    description: "Learn how to set up custom events in GA4 to track user interactions that are specific to your business goals.",
    category: "Event Tracking",
    date: "2023-12-15",
    readTime: "5 min read",
    featured: false,
    icon: TrendingUp
  }
];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with our expert insights on analytics, tracking, and data-driven decision making.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Featured Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="cursor-pointer hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 ring-2 ring-primary/10">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-gradient-primary flex-shrink-0">
                      <post.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-base">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-GB', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h3 className="text-2xl font-bold mb-8">All Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="cursor-pointer hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-lg bg-accent/20 flex-shrink-0">
                      <post.icon className="h-5 w-5 text-accent" />
                    </div>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                  <CardDescription>
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-GB', { 
                        day: 'numeric', 
                        month: 'short' 
                      })}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full">
                    Read More
                    <ArrowRight className="h-3 w-3 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg">
            View All Articles
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}