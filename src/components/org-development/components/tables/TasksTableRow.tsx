import React from 'react';
import { TableRow, TableCell, Chip, Button } from '@mui/material';
import { Eye } from 'lucide-react';
import { Task } from '../../../../types/task';

interface TasksTableRowProps {
  task: Task;
  onView: (id: string) => void;
}

export const TasksTableRow: React.FC<TasksTableRowProps> = ({ task, onView }) => {
  return (
    <TableRow>
      <TableCell>{task.title}</TableCell>
      <TableCell>{task.daysUntilDue}</TableCell>
      <TableCell>{task.sortOrder}</TableCell>
      <TableCell>{task.completionType}</TableCell>
      <TableCell>{task.hasDocument ? 'Yes' : 'No'}</TableCell>
      <TableCell>{task.hasImage ? 'Yes' : 'No'}</TableCell>
      <TableCell>{task.hasVideo ? 'Yes' : 'No'}</TableCell>
      <TableCell>{task.hasAudio ? 'Yes' : 'No'}</TableCell>
      <TableCell>
        <Chip
          label={task.status}
          color={
            task.status === 'active' ? 'success' :
            task.status === 'pending' ? 'warning' : 'default'
          }
          size="small"
        />
      </TableCell>
      <TableCell align="right">
        <Button
          variant="outlined"
          size="small"
          startIcon={<Eye size={16} />}
          onClick={() => onView(task.id)}
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
      </TableCell>
    </TableRow>
  );
};