import { useState } from 'react';
import { Send } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { EmailShareFormData } from '@/types';

interface EmailShareDialogProps {
  onShare: (data: EmailShareFormData) => void;
  trigger?: React.ReactNode;
}

export default function EmailShareDialog({ onShare, trigger }: EmailShareDialogProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onShare({ recipientEmail: email, message });
    setOpen(false);
    setEmail('');
    setMessage('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm">
            <Send className="h-4 w-4 mr-2" />
            Share via Email
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share via Email</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Recipient Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="recipient@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Add a personal message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Send</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}