export interface Assignee {
  id: string;
  name: string;
  avatar: string;
  completion: number;
  tasksCompleted: number;
  totalTasks: number;
  status: 'onTime' | 'late';
}