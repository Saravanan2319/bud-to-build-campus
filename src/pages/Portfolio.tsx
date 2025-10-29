import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Cpu, Smartphone, Database, FileText } from "lucide-react";

const projects = [
  {
    icon: Code,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce website with React frontend and PHP backend, featuring payment integration and admin dashboard.",
    technologies: ["React", "PHP", "MySQL", "Payment Gateway"],
    department: "Computer Science",
  },
  {
    icon: Brain,
    title: "Disease Prediction System",
    category: "AI & Machine Learning",
    description: "ML-based health diagnosis system using symptom analysis and predictive algorithms for early disease detection.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Flask"],
    department: "Information Technology",
  },
  {
    icon: Cpu,
    title: "Smart Home Automation",
    category: "IoT",
    description: "IoT-based home automation system with voice control, mobile app, and real-time monitoring capabilities.",
    technologies: ["Arduino", "ESP32", "Mobile App", "Cloud"],
    department: "Electronics & Communication",
  },
  {
    icon: Smartphone,
    title: "Student Management App",
    category: "Mobile Development",
    description: "Cross-platform mobile application for student attendance, grade tracking, and campus communication.",
    technologies: ["Flutter", "Firebase", "Dart", "REST API"],
    department: "Computer Applications",
  },
  {
    icon: Database,
    title: "Inventory Management System",
    category: "Database & Backend",
    description: "Comprehensive inventory tracking system with real-time stock updates, reporting, and multi-user support.",
    technologies: ["Node.js", "MongoDB", "Express", "React"],
    department: "Information Systems",
  },
  {
    icon: FileText,
    title: "Research Paper Analysis",
    category: "Data Science",
    description: "NLP-based system for automated research paper summarization and topic extraction from academic documents.",
    technologies: ["Python", "NLP", "NLTK", "Machine Learning"],
    department: "Computer Science",
  },
];

export default function Portfolio() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore successful projects we've helped students build across various domains
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group transition-all hover:shadow-xl hover:-translate-y-2"
            >
              <CardHeader>
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <project.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="mb-2 text-sm font-semibold">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full bg-muted px-3 py-1 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">Department:</span> {project.department}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="mx-auto max-w-3xl text-center gradient-secondary text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Your Project Could Be Next!
              </CardTitle>
              <CardDescription className="text-white/90">
                Let's work together to create something amazing for your academic success
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </main>
  );
}
