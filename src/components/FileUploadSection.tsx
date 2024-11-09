import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import EmailShareDialog from './EmailShareDialog';
import { EmailShareFormData } from '@/types';

interface FileUploadSectionProps {
  onFileUpload: (files: File[], emailData?: EmailShareFormData) => void;
}

export default function FileUploadSection({ onFileUpload }: FileUploadSectionProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFileUpload(acceptedFiles);
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: 2 * 1024 * 1024 * 1024, // 2GB
  });

  return (
    <section id="upload" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Upload UI */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Upload Your Files</h2>
              <p className="text-muted-foreground">
                Drag and drop your files or click to browse. Share them instantly with anyone.
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-4">
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                    ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25 hover:border-primary/50'}`}
                >
                  <input {...getInputProps()} />
                  <Upload className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-medium">
                    {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    or click to select files
                  </p>
                </div>

                <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-4">
                    <File className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Storage used</span>
                        <span>0 GB / 2 GB</span>
                      </div>
                      <Progress value={0} />
                    </div>
                  </div>
                  <EmailShareDialog onShare={() => {}} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Image */}
          <div className="relative hidden md:block h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
              alt="File Transfer"
              className="object-cover w-full h-full rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}