import React from 'react';
import { Box, Typography, IconButton, Collapse } from '@mui/material';
import { NavigateFunction } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { TasksTable } from './TasksTable';
import { useTasksByType } from '../hooks/useTasksByType';

interface TaskSectionProps {
  title: string;
  type: 'group' | 'site';
  onCreate: () => void;
  onNavigate: NavigateFunction;
  expanded: boolean;
  onToggle: () => void;
}

export const TaskSection: React.FC<TaskSectionProps> = ({
  title,
  type,
  onCreate,
  onNavigate,
  expanded,
  onToggle,
}) => {
  const tasks = useTasksByType(type);

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  const handleExport = () => {
    console.log('Export tasks');
  };

  return (
    <Box sx={{ mb: 6 }}>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          cursor: 'pointer',
          mb: 2,
        }}
        onClick={onToggle}
      >
        <IconButton
          size="small"
          sx={{
            transform: expanded ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s ease-in-out',
            mr: 1,
          }}
        >
          <ChevronDown size={20} />
        </IconButton>
        <Typography variant="h6">
          {title}
        </Typography>
      </Box>

      <Collapse in={expanded}>
        <Box sx={{ pl: 4 }}>
          <TasksTable
            tasks={tasks}
            onSearch={handleSearch}
            onCreate={onCreate}
            onExport={handleExport}
            onNavigate={onNavigate}
          />
        </Box>
      </Collapse>
    </Box>
  );
};