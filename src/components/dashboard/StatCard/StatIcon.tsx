import React from 'react';
import { Avatar } from '@mui/material';

interface StatIconProps {
  icon: React.ReactNode;
  bgColor: string;
}

export const StatIcon: React.FC<StatIconProps> = ({ icon, bgColor }) => {
  return (
    <Avatar
      sx={{
        bgcolor: bgColor,
        width: 56,
        height: 56,
        '& .MuiSvgIcon-root': {
          fontSize: 28,
        },
      }}
    >
      {icon}
    </Avatar>
  );
};