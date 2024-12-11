import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { Eye } from 'lucide-react';
import { TaskGroup } from '../../../types/taskGroup';

interface TaskGroupsTableProps {
  taskGroups: TaskGroup[];
}

export const TaskGroupsTable: React.FC<TaskGroupsTableProps> = ({ taskGroups }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Objective</TableCell>
            <TableCell>Number of Tasks</TableCell>
            <TableCell>ID</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {taskGroups.map((taskGroup) => (
            <TableRow key={taskGroup.id}>
              <TableCell>{taskGroup.title}</TableCell>
              <TableCell>{taskGroup.objective}</TableCell>
              <TableCell>{taskGroup.numberOfTasks}</TableCell>
              <TableCell>{taskGroup.id}</TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Eye size={16} />}
                  onClick={() => console.log('View task group:', taskGroup.id)}
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};