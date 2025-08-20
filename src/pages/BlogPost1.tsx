import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

export default function BlogPost1() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <article className="max-w-4xl mx-auto px-6 py-32">
        {/* Header */}
        <div className="mb-8">
          <Link to="/#blog">
            <Button variant="outline" size="sm" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 rounded-lg bg-gradient-primary">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <Badge variant="secondary">Analytics Setup</Badge>
              <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>15 January 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>8 min read</span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Complete Guide to GA4 Implementation for E-commerce
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Learn how to properly set up Google Analytics 4 for your online store, including enhanced ecommerce tracking and custom events.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <h2>Why GA4 is Essential for E-commerce</h2>
          <p>
            Google Analytics 4 represents a fundamental shift in how we track and understand user behavior. Unlike Universal Analytics, GA4 is built around events and provides more sophisticated cross-platform tracking capabilities that are crucial for modern e-commerce businesses.
          </p>

          <h2>Setting Up Your GA4 Property</h2>
          <h3>1. Create Your GA4 Property</h3>
          <p>
            Start by creating a new GA4 property in your Google Analytics account. Navigate to Admin → Create Property and select "GA4" as your property type. Choose your business information carefully as this affects your available features and reporting.
          </p>

          <h3>2. Install the GA4 Tracking Code</h3>
          <p>
            You have several options for implementing GA4:
          </p>
          <ul>
            <li><strong>Google Tag Manager (Recommended):</strong> Provides the most flexibility and control</li>
            <li><strong>Direct Installation:</strong> Add the gtag code directly to your website</li>
            <li><strong>Plugin/Extension:</strong> Use platform-specific plugins for WordPress, Shopify, etc.</li>
          </ul>

          <h2>Enhanced E-commerce Configuration</h2>
          <h3>Core E-commerce Events</h3>
          <p>
            GA4 requires specific events to track the complete customer journey. Here are the essential events you need to implement:
          </p>
          
          <h4>Purchase Events</h4>
          <p>
            The purchase event is the most critical for e-commerce tracking. It should include:
          </p>
          <ul>
            <li>Transaction ID</li>
            <li>Currency</li>
            <li>Value (total purchase amount)</li>
            <li>Items array with product details</li>
          </ul>

          <h4>Product Interaction Events</h4>
          <ul>
            <li><strong>view_item:</strong> When users view product pages</li>
            <li><strong>add_to_cart:</strong> When items are added to cart</li>
            <li><strong>remove_from_cart:</strong> When items are removed</li>
            <li><strong>begin_checkout:</strong> When checkout process starts</li>
          </ul>

          <h2>Custom Events for Better Insights</h2>
          <p>
            Beyond standard e-commerce events, consider implementing custom events that matter to your business:
          </p>
          
          <h3>Engagement Events</h3>
          <ul>
            <li>Newsletter signups</li>
            <li>Product reviews submitted</li>
            <li>Video engagement</li>
            <li>PDF downloads</li>
          </ul>

          <h3>Marketing Events</h3>
          <ul>
            <li>Coupon code usage</li>
            <li>Social media clicks</li>
            <li>Email link clicks</li>
            <li>Search functionality usage</li>
          </ul>

          <h2>Setting Up Conversions</h2>
          <p>
            In GA4, conversions are simply events marked as conversion events. Navigate to Admin → Events → Mark as conversion to designate important events as conversions. Key conversions for e-commerce include:
          </p>
          <ul>
            <li>Purchase</li>
            <li>Add to cart</li>
            <li>Begin checkout</li>
            <li>Lead generation events</li>
          </ul>

          <h2>Creating Audiences</h2>
          <p>
            GA4's audience builder allows you to create sophisticated user segments for remarketing and analysis:
          </p>

          <h3>High-Value Customer Audiences</h3>
          <ul>
            <li>Users who purchased in the last 30 days</li>
            <li>Users with purchase value above average</li>
            <li>Repeat customers (more than one purchase)</li>
          </ul>

          <h3>Remarketing Audiences</h3>
          <ul>
            <li>Cart abandoners</li>
            <li>Product page viewers who didn't purchase</li>
            <li>Category browsers</li>
          </ul>

          <h2>Data Import and Integration</h2>
          <p>
            GA4 allows you to import additional data to enrich your analytics:
          </p>
          
          <h3>Cost Data Import</h3>
          <p>
            Import advertising cost data from platforms not automatically connected to Google Ads to get a complete view of your marketing ROI.
          </p>

          <h3>Customer Data Import</h3>
          <p>
            Import customer lifetime value, subscription status, and other CRM data to enhance your analysis capabilities.
          </p>

          <h2>Reporting and Analysis</h2>
          <h3>Key Reports to Monitor</h3>
          <ul>
            <li><strong>Acquisition Reports:</strong> How users find your site</li>
            <li><strong>Engagement Reports:</strong> How users interact with your content</li>
            <li><strong>Monetization Reports:</strong> Revenue and conversion data</li>
            <li><strong>Retention Reports:</strong> User return patterns</li>
          </ul>

          <h3>Custom Reporting</h3>
          <p>
            Use GA4's exploration reports to create custom analysis:
          </p>
          <ul>
            <li>Funnel analysis for checkout process</li>
            <li>Path exploration for user journey mapping</li>
            <li>Cohort analysis for user retention</li>
          </ul>

          <h2>Common Implementation Mistakes</h2>
          <h3>1. Incorrect Parameter Naming</h3>
          <p>
            GA4 is case-sensitive and requires specific parameter names. Always use the recommended event and parameter names from Google's documentation.
          </p>

          <h3>2. Missing Enhanced E-commerce Parameters</h3>
          <p>
            Ensure all required parameters are included in your e-commerce events, particularly item arrays with all necessary product information.
          </p>

          <h3>3. Not Testing Implementation</h3>
          <p>
            Always test your implementation using GA4's DebugView before going live. This helps identify tracking issues early.
          </p>

          <h2>Next Steps</h2>
          <p>
            Once your GA4 implementation is complete, focus on:
          </p>
          <ul>
            <li>Setting up custom dashboards in Google Analytics</li>
            <li>Connecting GA4 to Google Ads for enhanced campaign optimization</li>
            <li>Implementing server-side tracking for improved data accuracy</li>
            <li>Creating automated reports and alerts</li>
          </ul>

          <p>
            Need help with your GA4 implementation? Our team specializes in comprehensive analytics setup and optimization. Contact us for a free consultation to ensure your e-commerce tracking is set up correctly from day one.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-primary/10 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Need Help with GA4 Implementation?</h3>
          <p className="text-muted-foreground mb-6">
            Get expert assistance with your GA4 setup and ensure you're tracking everything correctly from the start.
          </p>
          <Button variant="hero">
            Book Free Consultation
          </Button>
        </div>
      </article>
    </div>
  );
}