import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
} from '@mui/material';
import {
  Description as DocumentIcon,
  VideoLibrary as VideoIcon,
  AudioFile as AudioIcon,
  Image as ImageIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import { Task } from '../../../types/task';

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6" component="div">
            {task.title}
          </Typography>
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </Box>
        
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {task.description}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          {task.hasDocument && <DocumentIcon color="action" />}
          {task.hasVideo && <VideoIcon color="action" />}
          {task.hasAudio && <AudioIcon color="action" />}
          {task.hasImage && <ImageIcon color="action" />}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip
            label={task.completionType}
            size="small"
            color="primary"
          />
          <Typography variant="caption" color="text.secondary">
            Due in {task.daysUntilDue} days
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};