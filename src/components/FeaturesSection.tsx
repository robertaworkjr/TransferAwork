import { Shield, Zap, Link2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Zap,
    title: 'Fast Transfers',
    description: 'Upload and download files quickly with our optimized transfer system.',
  },
  {
    icon: Shield,
    title: 'Secure Sharing',
    description: 'Your files are encrypted and protected during transfer.',
  },
  {
    icon: Link2,
    title: 'Easy Sharing',
    description: 'Share files instantly with downloadable links.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Choose TransferAwork</h2>
              <p className="text-muted-foreground">
                Simple, fast, and secure file transfers for everyone
              </p>
            </div>
            
            <div className="grid gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="group hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative hidden md:block h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Features"
              className="object-cover w-full h-full rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}