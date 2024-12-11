export interface Task {
  id: string;
  title: string;
  description: string;
  daysUntilDue: number;
  sortOrder: number;
  completionType: 'signature' | 'document' | 'video' | 'audio' | 'image' | 'checkbox';
  hasDocument: boolean;
  hasImage: boolean;
  hasVideo: boolean;
  hasAudio: boolean;
  siteId: string;
  groupId: string;
  taskGroupId: string;
  status: 'active' | 'completed' | 'pending';
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
}