import React from 'react';
import { Box, Avatar, AvatarGroup, Tooltip, Paper } from '@mui/material';
import { mockAssignees } from '../../../data/mockAssignees';

export const AssigneesList: React.FC = () => {
  return (
    <Paper 
      sx={{ 
        p: 2, 
        borderRadius: 2, 
        bgcolor: '#FFFFFF',
        maxWidth: '100%',
        overflowX: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <AvatarGroup
          max={15}
          sx={{
            '& .MuiAvatar-root': {
              width: 40,
              height: 40,
              fontSize: '1rem',
              border: '2px solid white',
              marginLeft: -1,
              cursor: 'pointer',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
                zIndex: 2,
              },
            },
          }}
        >
          {mockAssignees.map((assignee) => (
            <Tooltip 
              key={assignee.id} 
              title={`${assignee.name} - ${assignee.completion}% Complete`}
              placement="top"
              arrow
            >
              <Avatar
                alt={assignee.name}
                src={assignee.avatar}
              />
            </Tooltip>
          ))}
        </AvatarGroup>
      </Box>
    </Paper>
  );
};