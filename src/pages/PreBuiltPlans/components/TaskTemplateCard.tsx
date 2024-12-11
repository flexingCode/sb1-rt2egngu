import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { Task } from '../../../types/task';

interface TaskTemplateCardProps {
  task: Task;
  onClick: () => void;
}

export const TaskTemplateCard: React.FC<TaskTemplateCardProps> = ({ task, onClick }) => {
  return (
    <Card 
      sx={{ 
        height: '100%',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
          '& .add-icon': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      }}
      onClick={onClick}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', mb: 2 }}>
          <IconButton 
            className="add-icon"
            sx={{ 
              opacity: 0.8,
              transform: 'scale(0.9)',
              transition: 'all 0.2s ease-in-out',
              bgcolor: '#00498B',
              color: 'white',
              width: '48px',
              height: '48px',
              '&:hover': {
                bgcolor: '#003A73',
              },
            }}
          >
            <AddIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </Box>
        
        <Typography 
          variant="h6" 
          component="div"
          sx={{
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '1rem',
            mb: 1,
          }}
        >
          {task.title}
        </Typography>
      </CardContent>
    </Card>
  );
};