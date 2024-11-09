export interface FileTransfer {
  id: string;
  fileName: string;
  size: number;
  uploadDate: Date;
  downloadUrl: string;
  status: 'uploading' | 'completed' | 'failed';
  recipientEmail?: string;
}

export interface EmailShareFormData {
  recipientEmail: string;
  message?: string;
}