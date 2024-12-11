import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { CircularProgressWithLabel } from './CircularProgressWithLabel';

interface ProgressStatsProps {
  assignees: number;
  totalTasks: number;
  targetDays: number;
  completed: number;
  overdue: number;
}

export const ProgressStats: React.FC<ProgressStatsProps> = ({
  assignees,
  totalTasks,
  targetDays,
  completed,
  overdue,
}) => {
  const completedPercentage = Math.round((completed / totalTasks) * 100);
  const overduePercentage = Math.round((overdue / totalTasks) * 100);

  return (
    <Box>
      <Grid container spacing={4}>
        {/* Stats */}
        <Grid item xs={12} md={5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Box>
              <Typography variant="h3" fontWeight="bold" color="#262626">
                {assignees}
              </Typography>
              <Typography color="text.secondary" fontSize="1rem">
                # of Assignees
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" fontWeight="bold" color="#262626">
                {totalTasks}
              </Typography>
              <Typography color="text.secondary" fontSize="1rem">
                Total Tasks
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" fontWeight="bold" color="#262626">
                {targetDays}
              </Typography>
              <Typography color="text.secondary" fontSize="1rem">
                Target Days
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Progress Circles */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: 'flex',
              gap: 6,
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <CircularProgressWithLabel
              value={completedPercentage}
              color="#4CAF50"
              label={completed}
              subLabel="Completed"
              size={160}
              strokeWidth={12}
              interactive
              onClick={() => console.log('Completed tasks clicked')}
            />
            <CircularProgressWithLabel
              value={overduePercentage}
              color="#ED058B"
              label={overdue}
              subLabel="Overdue"
              size={160}
              strokeWidth={12}
              interactive
              onClick={() => console.log('Overdue tasks clicked')}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};