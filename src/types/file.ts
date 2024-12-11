export interface FileItem {
  id: string;
  title: string;
  description: string;
  type: 'documents' | 'audio' | 'image' | 'video';
  dateAdded: string;
}