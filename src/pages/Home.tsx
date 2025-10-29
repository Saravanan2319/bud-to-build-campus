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
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl animate-fade-in">
              From <span className="text-gradient">Idea to Innovation</span>
              <br />
              Your Project Partner
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Empowering college students to turn innovative ideas into real working solutions. 
              Professional guidance across all domains — from concept to completion.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact">
                <Button size="lg" className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all hover-scale">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="hover-scale">
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
          <div className="mb-12 text-center animate-fade-in">
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
                className="group transition-all hover:shadow-lg hover:-translate-y-1 bg-card border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
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
            <div className="mb-12 text-center animate-fade-in">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Why Choose <span className="text-gradient">Bug 2 Build?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Your success is our mission
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Students Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-6 py-2 animate-scale-in">
              <span className="text-primary font-semibold">💼 Attention Engineering Students!</span>
            </div>
            <p className="mb-8 text-lg md:text-xl">
              I provide end-to-end project development support across various domains — with <span className="text-primary font-semibold">reasonable and negotiable pricing</span>.
            </p>
            <p className="mb-8 text-muted-foreground">
              📩 For professional project assistance or collaboration, feel free to DM
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <a 
                href="https://www.instagram.com/bug2build__/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 transition-all hover:shadow-lg hover:-translate-y-1 hover-scale"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.youtube.com/@Bug2BuildYT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 transition-all hover:shadow-lg hover:-translate-y-1 hover-scale"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/saravanansekar2003/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 transition-all hover:shadow-lg hover:-translate-y-1 hover-scale"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Build Your Project?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Let's turn your academic vision into reality. Get in touch today!
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all hover-scale">
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
