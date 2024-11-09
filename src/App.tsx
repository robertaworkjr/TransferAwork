import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FileUploadSection from '@/components/FileUploadSection';
import RecentTransfersSection from '@/components/RecentTransfersSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import { FileTransfer, EmailShareFormData } from '@/types';

function App() {
  const [recentTransfers, setRecentTransfers] = useState<FileTransfer[]>([]);
  const { toast } = useToast();

  const handleFileUpload = (files: File[], emailData?: EmailShareFormData) => {
    if (files.length > 0) {
      const newTransfers: FileTransfer[] = files.map((file) => ({
        id: crypto.randomUUID(),
        fileName: file.name,
        size: file.size,
        uploadDate: new Date(),
        downloadUrl: URL.createObjectURL(file),
        status: 'completed',
        recipientEmail: emailData?.recipientEmail,
      }));

      setRecentTransfers((prev) => [...newTransfers, ...prev]);
      toast({
        title: 'Upload Successful!',
        description: `${files.length} file${files.length > 1 ? 's' : ''} uploaded successfully.`,
      });

      if (emailData?.recipientEmail) {
        toast({
          title: 'Email Sent!',
          description: `File${files.length > 1 ? 's' : ''} shared with ${emailData.recipientEmail}`,
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="space-y-24">
        <HeroSection />
        <FileUploadSection onFileUpload={handleFileUpload} />
        <RecentTransfersSection transfers={recentTransfers} />
        <FeaturesSection />
        <PricingSection />
      </main>
    </div>
  );
}

export default App;