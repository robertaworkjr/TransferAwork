import { Check } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const features = [
  'Unlimited file transfers',
  'Files up to 2GB',
  'Email sharing',
  'Secure encryption',
  'Priority support',
  'No monthly fees',
];

export default function PricingSection() {
  const handlePayPalCheckout = () => {
    window.open('https://www.paypal.com/paypalme/robertaworkjr/9.99', '_blank');
  };

  return (
    <section id="pricing" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          One plan, one payment, lifetime access
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <Card className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary/60" />
          
          <CardHeader className="text-center pt-8">
            <div className="text-2xl font-bold">Lifetime Access</div>
            <div className="flex items-center justify-center mt-4">
              <span className="text-4xl font-bold">$9.99</span>
              <span className="text-muted-foreground ml-2">/ once</span>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter>
            <Button 
              className="w-full bg-[#0070ba] hover:bg-[#003087] text-white"
              onClick={handlePayPalCheckout}
            >
              <svg 
                className="h-5 w-5 mr-2" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M20.067 8.478c.492.315.844.825.983 1.39l.001.005c.172.692.028 1.503-.403 2.16l-.002.004c-.432.656-1.11 1.116-1.893 1.29l-.019.004c-.383.086-.777.13-1.172.131h-.003c-.681.002-1.36-.128-1.995-.384l-.034-.013c-.144.931-.824 1.909-1.787 2.056l-.014.002c-.931.148-1.397.222-2.095.222h-.003c-.698 0-1.165-.074-2.095-.222l-.014-.002c-.963-.147-1.642-1.125-1.786-2.056l-.035.013c-.634.256-1.313.386-1.994.384h-.003c-.395-.001-.789-.045-1.172-.131l-.019-.004c-.783-.174-1.461-.634-1.893-1.29l-.002-.004c-.431-.657-.575-1.468-.403-2.16l.001-.005c.139-.565.491-1.075.983-1.39l-.001-.002c.4-.257.867-.4 1.345-.41h.004c.541-.012 1.078.107 1.563.344l-.014-.089c-.089-.58-.015-1.174.213-1.718l.008-.019c.232-.549.603-1.033 1.075-1.399l.011-.008c.478-.372 1.045-.626 1.648-.736l.022-.003c.604-.114 1.226-.104 1.826.03l.279-1.787C14.194 2.653 15.112 2 16.172 2h.005c1.06 0 1.979.653 2.384 1.59l.279 1.787c.6-.134 1.222-.144 1.826-.03l.022.003c.603.11 1.17.364 1.648.736l.011.008c.472.366.843.85 1.075 1.399l.008.019c.228.544.302 1.138.213 1.718l-.014.089c.485-.237 1.022-.356 1.563-.344h.004c.478.01.945.153 1.345.41l-.001.002zM7.276 18.956l-.279 1.787C6.593 21.68 5.675 22.333 4.615 22.333h-.005c-1.06 0-1.979-.653-2.384-1.59l-.279-1.787c-.6.134-1.222.144-1.826.03l-.022-.003C-.504 18.873-1.071 18.619-1.549 18.247l-.011-.008c-.472-.366-.843-.85-1.075-1.399l-.008-.019c-.228-.544-.302-1.138-.213-1.718l.014-.089c-.485.237-1.022.356-1.563.344h-.004c-.478-.01-.945-.153-1.345-.41l.001-.002c-.492-.315-.844-.825-.983-1.39l-.001-.005c-.172-.692-.028-1.503.403-2.16l.002-.004c.432-.656 1.11-1.116 1.893-1.29l.019-.004c.383-.086.777-.13 1.172-.131h.003c.681-.002 1.36.128 1.995.384l.034.013c.144-.931.824-1.909 1.787-2.056l.014-.002c.931-.148 1.397-.222 2.095-.222h.003c.698 0 1.165.074 2.095.222l.014.002c.963.147 1.642 1.125 1.786 2.056l.035-.013c.634-.256 1.313-.386 1.994-.384h.003c.395.001.789.045 1.172.131l.019.004c.783.174 1.461.634 1.893 1.29l.002.004c.431.657.575 1.468.403 2.16l-.001.005c-.139.565-.491 1.075-.983 1.39l.001.002c-.4.257-.867.4-1.345.41h-.004c-.541.012-1.078-.107-1.563-.344l.014.089c.089.58.015 1.174-.213 1.718l-.008.019c-.232.549-.603 1.033-1.075 1.399l-.011.008c-.478.372-1.045.626-1.648.736l-.022.003c-.604.114-1.226.104-1.826-.03z"/>
              </svg>
              Pay with PayPal
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}