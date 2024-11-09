import { Download, File, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileTransfer } from '@/types';
import EmailShareDialog from './EmailShareDialog';

interface RecentTransfersSectionProps {
  transfers: FileTransfer[];
}

function formatFileSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(1)} ${units[unitIndex]}`;
}

export default function RecentTransfersSection({ transfers }: RecentTransfersSectionProps) {
  return (
    <section id="transfers" className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Recent Transfers</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Access and manage your recently transferred files
        </p>
      </div>

      <div className="grid gap-4 max-w-3xl mx-auto">
        {transfers.length === 0 ? (
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              <File className="h-12 w-12 mx-auto mb-4" />
              <p>No transfers yet</p>
            </CardContent>
          </Card>
        ) : (
          transfers.map((transfer) => (
            <Card key={transfer.id} className="group hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <File className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{transfer.fileName}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{formatFileSize(transfer.size)}</span>
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      <span>
                        {new Date(transfer.uploadDate).toLocaleDateString()}
                      </span>
                      {transfer.recipientEmail && (
                        <>
                          <span>•</span>
                          <Send className="h-4 w-4" />
                          <span>{transfer.recipientEmail}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <EmailShareDialog
                      onShare={() => {}}
                      trigger={
                        <Button variant="ghost" size="icon">
                          <Send className="h-4 w-4" />
                        </Button>
                      }
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                    >
                      <a href={transfer.downloadUrl} download={transfer.fileName}>
                        <Download className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </section>
  );
}