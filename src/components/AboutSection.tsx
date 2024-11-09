import { Zap, Shield, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with performance in mind, ensuring quick load times and smooth interactions.',
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    description: 'Your data is protected with industry-leading security measures.',
  },
  {
    icon: Rocket,
    title: 'Future Ready',
    description: 'Using cutting-edge technology to keep you ahead of the curve.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We're dedicated to creating exceptional web experiences that combine beauty with functionality.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}