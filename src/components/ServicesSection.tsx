import { 
  Palette, 
  Code, 
  BarChart, 
  Smartphone,
  Cloud,
  Lock
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Create beautiful and intuitive user interfaces.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Build modern and responsive web applications.',
  },
  {
    icon: BarChart,
    title: 'Analytics',
    description: 'Track and analyze your business metrics.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Develop cross-platform mobile applications.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable and reliable cloud infrastructure.',
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Protect your data with advanced security.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive solutions tailored to your needs.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card 
              key={service.title} 
              className="group hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="p-3 rounded-full bg-primary/10 inline-block group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}