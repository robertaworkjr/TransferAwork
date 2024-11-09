import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SignUpSectionProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function SignUpSection({ email, setEmail, onSubmit }: SignUpSectionProps) {
  return (
    <section id="signup" className="py-16">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="text-muted-foreground mb-8">
          Subscribe to our newsletter for the latest updates and exclusive content.
        </p>
        <form onSubmit={onSubmit} className="flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" className="group">
            Subscribe
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </div>
    </section>
  );
}