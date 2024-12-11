import React from 'react';
import { Grid, Card, Typography } from '@mui/material';
import { Section } from './Section';
import { TaskCard } from './TaskCard';
import { AssignButton } from '../../../components/common/AssignButton';
import type { Task } from '../../../types/task';

interface CompletedTasksSectionProps {
  tasks: Task[];
  onAssign: () => void;
}

export const CompletedTasksSection: React.FC<CompletedTasksSectionProps> = ({
  tasks,
  onAssign,
}) => {
  return (
    <Section 
      title="Complete & Ready Tasks"
      action={<AssignButton onClick={onAssign} />}
    >
      {tasks.length > 0 ? (
        <Grid container spacing={3}>
          {tasks.map((task) => (
            <Grid item xs={12} sm={6} md={4} key={task.id}>
              <TaskCard task={task} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Card sx={{ p: 6, textAlign: 'center', bgcolor: '#F8FAFC' }}>
          <Typography color="text.secondary" sx={{ fontSize: '1.1rem' }}>
            No Tasks Built Yet
          </Typography>
        </Card>
      )}
    </Section>
  );
};