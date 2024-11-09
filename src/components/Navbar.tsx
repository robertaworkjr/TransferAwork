import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">TransferAwork</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#upload" className="text-foreground/80 hover:text-foreground transition-colors">Upload</a>
            <a href="#transfers" className="text-foreground/80 hover:text-foreground transition-colors">Transfers</a>
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</a>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}