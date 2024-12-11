import React from 'react';
import { Box, Typography, Button, Collapse, IconButton, Chip } from '@mui/material';
import { DataTable } from '../common/DataTable';
import type { Column } from '../common/DataTable';
import { useNavigate } from 'react-router-dom';
import { mockGroupTasks } from '../../data/mockGroupTasks';
import { mockSiteTasks } from '../../data/mockSiteTasks';
import { useApp } from '../../contexts/AppContext';
import { CreateTaskDialog } from './dialogs/CreateTaskDialog';
import type { Task } from '../../types/task';
import { ChevronDown } from 'lucide-react';
import { Eye } from 'lucide-react';

const columns: Column[] = [
  { id: 'title', label: 'Title', minWidth: 200 },
  { id: 'description', label: 'Description', minWidth: 300 },
  { id: 'daysUntilDue', label: 'Days Until Due', minWidth: 120 },
  { id: 'completionType', label: 'Completion Type', minWidth: 150 },
  { 
    id: 'status', 
    label: 'Status', 
    minWidth: 100,
    format: (value: string) => (
      <Chip
        label={value}
        color={value === 'active' ? 'success' : value === 'pending' ? 'warning' : 'default'}
        size="small"
      />
    ),
  },
  { 
    id: 'actions', 
    label: 'Actions', 
    minWidth: 100,
    align: 'right',
    format: (value: () => void) => (
      <Button
        variant="outlined"
        size="small"
        startIcon={<Eye size={16} />}
        onClick={value}
        sx={{
          textTransform: 'none',
          borderColor: 'primary.main',
          color: 'primary.main',
          '&:hover': {
            borderColor: 'primary.dark',
            backgroundColor: 'primary.light',
          },
        }}
      >
        View
      </Button>
    ),
  },
];

// Rest of the component code remains the same...