import React from 'react';
import { DataTable } from '../../common/DataTable';
import { Button } from '@mui/material';
import { Eye } from 'lucide-react';
import { NavigateFunction } from 'react-router-dom';
import type { Column } from '../../common/DataTable';
import type { TaskGroup } from '../../../types/taskGroup';

interface TaskGroupsTableProps {
  taskGroups: TaskGroup[];
  onSearch: (query: string) => void;
  onNavigate: NavigateFunction;
}

const columns: Column[] = [
  { id: 'title', label: 'Title', minWidth: 200 },
  { id: 'objective', label: 'Objective', minWidth: 300 },
  { id: 'numberOfTasks', label: 'Number of Tasks', minWidth: 150 },
  { id: 'id', label: 'ID', minWidth: 100 },
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

export const TaskGroupsTable: React.FC<TaskGroupsTableProps> = ({
  taskGroups,
  onSearch,
  onNavigate,
}) => {
  const tableData = React.useMemo(() => 
    taskGroups.map(group => ({
      ...group,
      actions: () => onNavigate(`/task-group-details/${group.id}`),
    })),
    [taskGroups, onNavigate]
  );

  return (
    <DataTable
      title=""
      columns={columns}
      data={tableData}
      onSearch={onSearch}
    />
  );
};