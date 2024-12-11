import React from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useBreadcrumbs } from '../../contexts/BreadcrumbContext';
import { CreateTaskDialog } from '../../components/org-development/components/CreateTaskDialog';
import { TaskGroupHeader } from './components/TaskGroupHeader';
import { CompletedTasksSection } from './components/CompletedTasksSection';
import { FramedTasksSection } from './components/FramedTasksSection';
import { mockGroupTasks } from '../../data/mockGroupTasks';
import type { Task } from '../../types/task';

export const TaskGroupLandingPage: React.FC = () => {
  const { planId } = useParams<{ planId: string }>();
  const { setBreadcrumbs } = useBreadcrumbs();
  const [createDialogOpen, setCreateDialogOpen] = React.useState(false);
  const [selectedTemplate, setSelectedTemplate] = React.useState<Task | null>(null);
  const [completedTasks, setCompletedTasks] = React.useState<Task[]>([]);

  const taskGroup = {
    title: 'New Hire Onboarding',
    description: 'A new hire onboarding plan is a structured roadmap designed to integrate new employees into an organization.',
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
    totalTasks: mockGroupTasks.length,
    startedTasks: 1,
    completedTasks: completedTasks.length,
  };

  React.useEffect(() => {
    setBreadcrumbs(['Dashboard', 'Org Development', 'Pre-Built Plans', taskGroup.title]);
  }, [setBreadcrumbs, taskGroup.title]);

  const handleCreateTask = (template: Task) => {
    setSelectedTemplate(template);
    setCreateDialogOpen(true);
  };

  const handleTaskSubmit = (task: Partial<Task>) => {
    const newTask: Task = {
      ...task,
      id: `task-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } as Task;
    
    setCompletedTasks(prev => [...prev, newTask]);
    setCreateDialogOpen(false);
    setSelectedTemplate(null);
  };

  const handleAssign = () => {
    console.log('Assign button clicked');
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <TaskGroupHeader
        title={taskGroup.title}
        description={taskGroup.description}
        imageUrl={taskGroup.imageUrl}
        totalTasks={taskGroup.totalTasks}
        startedTasks={taskGroup.startedTasks}
        completedTasks={taskGroup.completedTasks}
      />

      <CompletedTasksSection
        tasks={completedTasks}
        onAssign={handleAssign}
      />

      <FramedTasksSection
        tasks={mockGroupTasks}
        onAssign={handleAssign}
        onCreateTask={handleCreateTask}
      />

      <CreateTaskDialog
        open={createDialogOpen}
        onClose={() => {
          setCreateDialogOpen(false);
          setSelectedTemplate(null);
        }}
        onSubmit={handleTaskSubmit}
        type="site"
        initialData={selectedTemplate}
      />
    </Box>
  );
};