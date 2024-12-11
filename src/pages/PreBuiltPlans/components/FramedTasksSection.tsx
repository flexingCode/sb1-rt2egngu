import React from 'react';
import { Grid } from '@mui/material';
import { Section } from './Section';
import { TaskTemplateCard } from './TaskTemplateCard';
import { AssignButton } from '../../../components/common/AssignButton';
import type { Task } from '../../../types/task';

interface FramedTasksSectionProps {
  tasks: Task[];
  onAssign: () => void;
  onCreateTask: (task: Task) => void;
}

export const FramedTasksSection: React.FC<FramedTasksSectionProps> = ({
  tasks,
  onAssign,
  onCreateTask,
}) => {
  return (
    <Section 
      title="Framed Out But Not Built Tasks"
      action={<AssignButton onClick={onAssign} />}
    >
      <Grid container spacing={3}>
        {tasks.map((template) => (
          <Grid item xs={12} sm={6} md={3} key={template.id}>
            <TaskTemplateCard
              task={template}
              onClick={() => onCreateTask(template)}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};