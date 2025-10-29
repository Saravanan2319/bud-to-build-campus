import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Code, 
  Brain, 
  Cpu, 
  Smartphone, 
  Database, 
  GraduationCap,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "HTML, CSS, React, PHP - Build stunning, responsive websites",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Cutting-edge AI/ML solutions for innovative projects",
  },
  {
    icon: Cpu,
    title: "IoT Projects",
    description: "Smart devices and Internet of Things implementations",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Android & Flutter - Native and cross-platform apps",
  },
  {
    icon: Database,
    title: "Database & Cloud",
    description: "Scalable database solutions and cloud integration",
  },
  {
    icon: GraduationCap,
    title: "Custom Academic Projects",
    description: "Tailored solutions for all departments and disciplines",
  },
];

const features = [
  "End-to-end project guidance",
  "All domains covered",
  "Expert mentorship",
  "Timely delivery",
  "Affordable pricing",
  "24/7 support",
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 z-0" />
        
        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              From <span className="text-gradient">Idea to Innovation</span>
              <br />
              Your Project Partner
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Empowering college students to turn innovative ideas into real working solutions. 
              Professional guidance across all domains — from concept to completion.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact">
                <Button size="lg" className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Comprehensive <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Expert support across all technical domains
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group transition-all hover:shadow-lg hover:-translate-y-1 bg-card border-border"
              >
                <CardHeader>
                  <service.icon className="h-12 w-12 mb-3 text-primary group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services">
              <Button size="lg" variant="outline">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Why Choose <span className="text-gradient">Bud 2 Build?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Your success is our mission
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md"
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Build Your Project?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Let's turn your academic vision into reality. Get in touch today!
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all">
                Get Project Help
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
