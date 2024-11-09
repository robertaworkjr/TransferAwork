import { Mail, Phone, MessageSquare, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@modernapp.com',
    href: 'mailto:contact@modernapp.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MessageSquare,
    title: 'Chat',
    value: 'Live Support',
    href: '#',
  },
  {
    icon: Github,
    title: 'GitHub',
    value: '@modernapp',
    href: 'https://github.com',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="grid sm:grid-cols-2 gap-4">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.title}
                href={method.href}
                className="block"
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{method.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
        <Card>
          <CardContent className="p-6">
            <form className="space-y-4">
              <div>
                <Input placeholder="Name" />
              </div>
              <div>
                <Input type="email" placeholder="Email" />
              </div>
              <div>
                <Textarea placeholder="Message" className="min-h-[120px]" />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}