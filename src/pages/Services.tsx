import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Create stunning, responsive websites and web applications",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "PHP", "Responsive Design"],
    features: [
      "Custom website design and development",
      "E-commerce platforms",
      "Content management systems",
      "Progressive web applications",
      "RESTful API integration",
    ],
  },
  {
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    description: "Implement cutting-edge AI and ML solutions for your projects",
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],
    features: [
      "Predictive modeling and analysis",
      "Natural language processing",
      "Image recognition and classification",
      "Recommendation systems",
      "Deep learning implementations",
    ],
  },
  {
    icon: Cpu,
    title: "Internet of Things (IoT)",
    description: "Build smart, connected devices and IoT ecosystems",
    technologies: ["Arduino", "Raspberry Pi", "ESP32", "MQTT", "Sensors", "Cloud IoT"],
    features: [
      "Smart home automation",
      "Industrial IoT solutions",
      "Sensor networks",
      "Real-time data monitoring",
      "Edge computing implementations",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Develop native and cross-platform mobile applications",
    technologies: ["Android", "Flutter", "Dart", "Java", "Kotlin", "Firebase"],
    features: [
      "Native Android applications",
      "Cross-platform Flutter apps",
      "UI/UX design",
      "Backend integration",
      "App store deployment",
    ],
  },
  {
    icon: Database,
    title: "Database & Cloud Integration",
    description: "Design scalable databases and cloud-based solutions",
    technologies: ["MySQL", "MongoDB", "PostgreSQL", "AWS", "Firebase", "Azure"],
    features: [
      "Database design and optimization",
      "Cloud infrastructure setup",
      "Data migration services",
      "API development",
      "Scalable backend solutions",
    ],
  },
  {
    icon: GraduationCap,
    title: "Custom Academic Projects",
    description: "Tailored solutions for all departments and disciplines",
    technologies: ["All Domains", "Research Support", "Documentation", "Presentation"],
    features: [
      "Engineering project guidance",
      "Computer science applications",
      "Arts and science projects",
      "Research paper support",
      "Comprehensive documentation",
    ],
  },
];

export default function Services() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive technical solutions across all domains. We provide end-to-end support 
            from concept to completion.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="overflow-hidden transition-all hover:shadow-lg"
            >
              <CardHeader className="bg-muted/50">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2 text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold">Technologies We Use:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold">What We Offer:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="mx-auto max-w-2xl gradient-primary text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Ready to Start Your Project?</CardTitle>
              <CardDescription className="text-white/90">
                Let's discuss your requirements and bring your ideas to life
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="shadow-lg">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
