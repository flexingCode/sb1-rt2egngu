import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
} from '@mui/material';
import { Eye } from 'lucide-react';
import { Task } from '../../../types/task';

interface TasksTableProps {
  tasks: Task[];
}

export const TasksTable: React.FC<TasksTableProps> = ({ tasks }) => {
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
            <TableRow key={task.id}>
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
                  onClick={() => console.log('View task:', task.id)}
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