import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Target, 
  Database, 
  Zap, 
  Eye, 
  TrendingUp,
  Settings,
  Shield
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Google Analytics 4",
    techStack: ["GA4", "Google Tag Manager", "Data Studio"],
    description: "Complete GA4 setup, migration, and optimization with advanced ecommerce tracking and custom dimensions.",
    features: ["Enhanced Ecommerce", "Custom Events", "Attribution Modeling", "Audience Building"]
  },
  {
    icon: Database,
    title: "Server-Side Tracking",
    techStack: ["Server GTM", "BigQuery", "Cloud Functions"],
    description: "Bulletproof server-side tracking that bypasses ad blockers and ensures data accuracy.",
    features: ["First-Party Data", "Privacy Compliant", "Data Enrichment", "Real-time Processing"]
  },
  {
    icon: Target,
    title: "Looker Studio Dashboards",
    techStack: ["Looker Studio", "BigQuery", "Data Connectors"],
    description: "Custom dashboards that turn complex data into clear, actionable business insights.",
    features: ["Real-time Reporting", "Custom Metrics", "Automated Reports", "Executive Summaries"]
  },
  {
    icon: Eye,
    title: "Privacy-First Analytics",
    techStack: ["Matomo", "GDPR Tools", "Cookieless Tracking"],
    description: "Privacy-compliant analytics solutions that respect user privacy while providing valuable insights.",
    features: ["GDPR Compliant", "Cookieless Options", "Data Ownership", "EU Hosting"]
  },
  {
    icon: Zap,
    title: "Product Analytics",
    techStack: ["Amplitude", "Mixpanel", "PostHog"],
    description: "Deep product analytics to understand user behavior and optimize conversion funnels.",
    features: ["User Journey Mapping", "Cohort Analysis", "A/B Testing", "Retention Analysis"]
  },
  {
    icon: TrendingUp,
    title: "Attribution Modeling",
    techStack: ["Custom Models", "Machine Learning", "Multi-Touch"],
    description: "Advanced attribution models to understand the true impact of your marketing channels.",
    features: ["Multi-Touch Attribution", "Data-Driven Models", "Cross-Device Tracking", "ROI Optimization"]
  }
];

export default function Services() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From implementation to optimization, we provide comprehensive analytics solutions 
            that drive growth and improve decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-3">
                  {service.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}