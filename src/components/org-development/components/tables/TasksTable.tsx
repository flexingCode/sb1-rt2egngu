import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { Task } from '../../../../types/task';
import { TasksTableRow } from './TasksTableRow';
import { useNavigate } from 'react-router-dom';

interface TasksTableProps {
  tasks: Task[];
}

export const TasksTable: React.FC<TasksTableProps> = ({ tasks }) => {
  const navigate = useNavigate();

  const handleView = (id: string) => {
    navigate(`/org-development/tasks/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Days Until Due</TableCell>
            <TableCell>Sort Order</TableCell>
            <TableCell>Completion Type</TableCell>
            <TableCell>Document</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Video</TableCell>
            <TableCell>Audio</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TasksTableRow
              key={task.id}
              task={task}
              onView={handleView}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};