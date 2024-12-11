import React from 'react';
import { Button, Chip } from '@mui/material';
import { Eye } from 'lucide-react';
import { DataTable } from '../../../common/DataTable';
import type { Column } from '../../../common/DataTable';
import type { Task } from '../../../../types/task';
import { NavigateFunction } from 'react-router-dom';

interface TasksTableProps {
  tasks: Task[];
  onSearch: (query: string) => void;
  onCreate: () => void;
  onExport: () => void;
  onNavigate: NavigateFunction;
}

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

export const TasksTable: React.FC<TasksTableProps> = ({
  tasks,
  onSearch,
  onCreate,
  onExport,
  onNavigate,
}) => {
  const tableData = React.useMemo(() => 
    tasks.map(task => ({
      ...task,
      actions: () => onNavigate(`/tasks/${task.id}`),
    })),
    [tasks, onNavigate]
  );

  return (
    <DataTable
      title=""
      columns={columns}
      data={tableData}
      onSearch={onSearch}
      onCreate={onCreate}
      onExport={onExport}
    />
  );
};