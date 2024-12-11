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
import { TaskGroup } from '../../../../types/taskGroup';
import { TaskGroupsTableRow } from './TaskGroupsTableRow';

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
            <TaskGroupsTableRow
              key={taskGroup.id}
              taskGroup={taskGroup}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};