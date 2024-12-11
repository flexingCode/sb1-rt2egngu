import React from 'react';
import { Box, Typography } from '@mui/material';
import { StatsGrid } from '../../../components/stats/StatsGrid';

interface TaskGroupHeaderProps {
  title: string;
  description: string;
  imageUrl: string;
  totalTasks: number;
  startedTasks: number;
  completedTasks: number;
}

export const TaskGroupHeader: React.FC<TaskGroupHeaderProps> = ({
  title,
  description,
  imageUrl,
  totalTasks,
  startedTasks,
  completedTasks,
}) => {
  return (
    <Box sx={{ mb: 6, display: 'flex', gap: 4 }}>
      <Box 
        component="img"
        src={imageUrl}
        alt={title}
        sx={{ 
          width: 300,
          height: 200,
          objectFit: 'cover',
          borderRadius: 2,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      />
      <Box sx={{ flex: 1 }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 700,
            mb: 2,
            fontSize: '2rem',
          }}
        >
          {title}
        </Typography>
        <Typography 
          color="text.secondary" 
          sx={{ 
            mb: 4,
            fontSize: '1rem',
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
        <StatsGrid
          totalTasks={totalTasks}
          startedTasks={startedTasks}
          completedTasks={completedTasks}
        />
      </Box>
    </Box>
  );
};