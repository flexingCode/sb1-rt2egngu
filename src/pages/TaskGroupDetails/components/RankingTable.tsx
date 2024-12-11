import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Box,
  LinearProgress,
  Typography,
} from '@mui/material';
import { mockAssignees } from '../../../data/mockAssignees';

export const RankingTable: React.FC = () => {
  const sortedAssignees = [...mockAssignees].sort((a, b) => b.completion - a.completion);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600, color: '#262626' }}>Rank</TableCell>
            <TableCell sx={{ fontWeight: 600, color: '#262626' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 600, color: '#262626' }}>Completion %</TableCell>
            <TableCell align="center" sx={{ fontWeight: 600, color: '#262626' }}>Due Tasks</TableCell>
            <TableCell align="center" sx={{ fontWeight: 600, color: '#262626' }}>Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedAssignees.map((assignee, index) => (
            <TableRow 
              key={assignee.id} 
              hover
              sx={{
                '&:hover': {
                  backgroundColor: '#F5F8FA',
                },
                '& td': {
                  borderColor: '#E0E0E0',
                },
              }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar 
                    src={assignee.avatar}
                    sx={{ 
                      width: 40, 
                      height: 40,
                      border: '2px solid white',
                      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <Typography sx={{ fontWeight: 500 }}>{assignee.name}</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: 200 }}>
                  <LinearProgress
                    variant="determinate"
                    value={assignee.completion}
                    sx={{
                      width: '100%',
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: '#E0E0E0',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: assignee.completion === 100 ? '#4CAF50' : '#2196F3',
                        borderRadius: 4,
                      },
                    }}
                  />
                  <Typography sx={{ fontWeight: 500 }}>{assignee.completion}%</Typography>
                </Box>
              </TableCell>
              <TableCell align="center">{assignee.totalTasks}</TableCell>
              <TableCell align="center">{assignee.tasksCompleted}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};