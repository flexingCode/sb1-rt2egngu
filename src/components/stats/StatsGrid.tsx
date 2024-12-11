import React from 'react';
import { Grid } from '@mui/material';
import { StatCard } from './StatCard';
import { ProgressCard } from './ProgressCard';

interface StatsGridProps {
  totalTasks: number;
  startedTasks: number;
  completedTasks: number;
}

export const StatsGrid: React.FC<StatsGridProps> = ({
  totalTasks,
  startedTasks,
  completedTasks,
}) => {
  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          type="total"
          value={totalTasks}
          label="Total Tasks"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          type="started"
          value={startedTasks}
          label="Started"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          type="completed"
          value={completedTasks}
          label="Completed"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ProgressCard value={progressPercentage} />
      </Grid>
    </Grid>
  );
};