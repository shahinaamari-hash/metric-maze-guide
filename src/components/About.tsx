import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Briefcase, 
  CheckCircle2,
  Rocket,
  Brain
} from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Google Analytics Certified",
    description: "Advanced GA4 and Google Marketing Platform certifications"
  },
  {
    icon: Users,
    title: "50+ Enterprise Clients",
    description: "Trusted by Fortune 500 companies and fast-growing startups"
  },
  {
    icon: Briefcase,
    title: "Industry Expertise",
    description: "Deep experience in e-commerce, SaaS, and lead generation"
  }
];

const values = [
  {
    icon: Brain,
    title: "Data-Driven Decisions",
    description: "Every recommendation is backed by solid data and proven methodologies."
  },
  {
    icon: Rocket,
    title: "Future-Proof Solutions",
    description: "We build analytics systems that scale with your business and adapt to changes."
  },
  {
    icon: CheckCircle2,
    title: "Privacy-First Approach",
    description: "Compliance and user privacy are at the core of everything we implement."
  }
];

export default function About() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Data Vista</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're not just another analytics agency. We're your strategic partner in building 
              a data-driven culture that drives sustainable growth. With years of experience 
              implementing analytics solutions for businesses of all sizes, we understand that 
              good data is the foundation of great decisions.
            </p>

            <div className="space-y-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-accent/20 flex-shrink-0">
                    <value.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="mb-8">
              <a href="https://calendly.com/datavista" target="_blank" rel="noopener noreferrer" className="text-white">
                Start Your Analytics Journey
              </a>
            </Button>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-accent flex-shrink-0">
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-6 rounded-lg bg-card border">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-sm text-muted-foreground">
                  Data Accuracy Rate
                </div>
              </div>
              <div className="text-center p-6 rounded-lg bg-card border">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  2.5x
                </div>
                <div className="text-sm text-muted-foreground">
                  Average ROI Improvement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}