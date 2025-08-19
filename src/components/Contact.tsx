import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  MessageSquare, 
  Calendar,
  ArrowRight,
  Clock,
  CheckCircle2
} from "lucide-react";

const contactOptions = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a detailed proposal within 24 hours",
    action: "contact@datavista.co.uk",
    href: "mailto:contact@datavista.co.uk",
    primary: true
  },
  {
    icon: Calendar,
    title: "Book a Call",
    description: "30-minute strategy session to discuss your needs",
    action: "Schedule Free Consultation",
    href: "https://calendly.com/datavista",
    primary: false
  },
  {
    icon: MessageSquare,
    title: "Quick Questions?",
    description: "Chat with our team for immediate answers",
    action: "Start Live Chat",
    href: "mailto:contact@datavista.co.uk?subject=Quick Question",
    primary: false
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We analyze your current setup and business goals"
  },
  {
    step: "02", 
    title: "Custom Strategy",
    description: "Tailored analytics roadmap with clear milestones"
  },
  {
    step: "03",
    title: "Implementation",
    description: "Expert setup with thorough testing and validation"
  },
  {
    step: "04",
    title: "Optimization",
    description: "Ongoing support and continuous improvement"
  }
];

export default function Contact() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="bg-gradient-primary bg-clip-text text-transparent">Analytics</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can help you make better data-driven decisions and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Options */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6 mb-12">
              {contactOptions.map((option, index) => (
                <a 
                  key={index} 
                  href={option.href}
                  target={option.title === "Book a Call" ? "_blank" : undefined}
                  rel={option.title === "Book a Call" ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  <Card className={`cursor-pointer hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 ${option.primary ? 'ring-2 ring-primary/20' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg flex-shrink-0 ${option.primary ? 'bg-gradient-primary' : 'bg-accent/20'}`}>
                          <option.icon className={`h-6 w-6 ${option.primary ? 'text-white' : 'text-accent'}`} />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-lg mb-1">{option.title}</h4>
                          <p className="text-muted-foreground mb-3">{option.description}</p>
                          <div className="flex items-center text-primary font-medium">
                            <span>{option.action}</span>
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {/* Our Process */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Our Process</h3>
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Start Your Project</CardTitle>
                <CardDescription>
                  Tell us about your analytics needs and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john@company.com" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Company</label>
                  <Input placeholder="Your company name" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Project Details</label>
                  <Textarea 
                    placeholder="Tell us about your current analytics setup, challenges, and goals..."
                    className="min-h-32"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    By submitting this form, you agree to our privacy policy. We'll never share your information.
                  </p>
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>

                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>We typically respond within 4 hours</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}