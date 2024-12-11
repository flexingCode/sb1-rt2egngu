import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';
import { Eye } from 'lucide-react';
import { TaskGroup } from '../../../../types/taskGroup';
import { useNavigate } from 'react-router-dom';

interface TaskGroupsTableRowProps {
  taskGroup: TaskGroup;
}

export const TaskGroupsTableRow: React.FC<TaskGroupsTableRowProps> = ({ taskGroup }) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/task-group-details/${taskGroup.id}`);
  };

  return (
    <TableRow>
      <TableCell>{taskGroup.title}</TableCell>
      <TableCell>{taskGroup.objective}</TableCell>
      <TableCell>{taskGroup.numberOfTasks}</TableCell>
      <TableCell>{taskGroup.id}</TableCell>
      <TableCell align="right">
        <Button
          variant="outlined"
          size="small"
          startIcon={<Eye size={16} />}
          onClick={handleView}
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