import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] grid md:grid-cols-2">
      {/* Left Content */}
      <div className="flex items-center justify-center p-8 md:p-16">
        <div className="max-w-xl space-y-8">
          <h1 className="text-5xl font-bold leading-tight">
            Transfer Files
            <span className="block text-primary">Without Limits</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Share files up to 2GB instantly with secure, encrypted transfers.
            One-time payment, lifetime access.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="group" asChild>
              <a href="#upload">
                Start Uploading
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#pricing">View Pricing</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80"
            alt="Tech Background"
            className="object-cover w-full h-full mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-transparent" />
      </div>
    </section>
  );
}