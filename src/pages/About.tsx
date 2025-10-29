import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Award, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower college students with professional project support, transforming innovative ideas into real-world solutions across all academic domains.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the most trusted academic project partner, helping students achieve excellence and build confidence in their technical abilities.",
  },
  {
    icon: Heart,
    title: "Commitment",
    description: "We are dedicated to student success, providing personalized guidance, expert mentorship, and unwavering support throughout every project journey.",
  },
];

const principles = [
  {
    icon: Users,
    title: "Student-Focused",
    description: "Every decision we make prioritizes student learning, growth, and project success.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in project delivery, ensuring professional-grade outcomes.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.",
  },
];

export default function About() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            About <span className="text-gradient">Bug 2 Build</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Your trusted partner in academic excellence and innovation
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-20">
          <Card className="mx-auto max-w-4xl animate-scale-in">
            <CardContent className="prose prose-lg dark:prose-invert max-w-none p-8">
              <p className="text-center text-lg leading-relaxed text-muted-foreground">
                Bug 2 Build was founded with a simple yet powerful vision: to help college students 
                transform their academic ideas into real, working solutions. We understand the challenges 
                students face when working on final year and academic projects — from concept development 
                to technical implementation. That's why we offer comprehensive, end-to-end guidance across 
                all domains, ensuring every student has the support they need to succeed.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission, Vision, Commitment */}
        <div className="mb-20 animate-fade-in">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Our <span className="text-gradient">Core Values</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="text-center transition-all hover:shadow-lg animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="mb-12 text-center text-3xl font-bold">
            What Drives <span className="text-gradient">Us</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle, index) => (
              <Card 
                key={index} 
                className="group transition-all hover:shadow-lg hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <CardHeader>
                  <principle.icon className="mb-3 h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                  <CardTitle>{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Who We Help */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Card className="gradient-primary text-white">
            <CardHeader>
              <CardTitle className="text-center text-3xl text-white">
                Who We Help
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Engineering Students</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>• Computer Science & IT</li>
                    <li>• Electronics & Communication</li>
                    <li>• Mechanical & Civil Engineering</li>
                    <li>• Electrical Engineering</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">All Disciplines</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>• Arts & Science Students</li>
                    <li>• Management Students</li>
                    <li>• Research Scholars</li>
                    <li>• Polytechnic Students</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-center text-lg text-white/90">
                We work with students from all colleges and disciplines, providing tailored solutions 
                for every academic need.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
