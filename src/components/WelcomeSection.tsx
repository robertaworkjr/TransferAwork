import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WelcomeSection() {
  return (
    <section id="welcome" className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-center space-y-8 animate-fade-in">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Welcome to ModernApp
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience the future of web applications with our sleek, intuitive design and powerful features.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}