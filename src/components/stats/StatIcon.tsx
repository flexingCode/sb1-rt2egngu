import React from 'react';
import { Box } from '@mui/material';
import {
  Assignment as AssignmentIcon,
  PlayCircle as PlayCircleIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

type StatIconType = 'total' | 'started' | 'completed';

interface StatIconProps {
  type: StatIconType;
  size?: number;
}

export const StatIcon: React.FC<StatIconProps> = ({ type, size = 24 }) => {
  const getIcon = () => {
    switch (type) {
      case 'total':
        return <AssignmentIcon sx={{ fontSize: size, color: '#00498B' }} />;
      case 'started':
        return <PlayCircleIcon sx={{ fontSize: size, color: '#FFA000' }} />;
      case 'completed':
        return <CheckCircleIcon sx={{ fontSize: size, color: '#4CAF50' }} />;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: '12px',
        bgcolor: (theme) => {
          switch (type) {
            case 'total':
              return 'rgba(0, 73, 139, 0.1)';
            case 'started':
              return 'rgba(255, 160, 0, 0.1)';
            case 'completed':
              return 'rgba(76, 175, 80, 0.1)';
          }
        },
      }}
    >
      {getIcon()}
    </Box>
  );
};