import React from 'react';
import { Box } from '@mui/material';
import type { ProgressBarProps } from '../types';

export const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, isLate }) => {
  const progressWidth = Math.max(percentage, 0);

  return (
    <Box
      sx={{
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        width: '100px',
        margin: 'auto 0',
      }}
      aria-label={`Progress bar with ${percentage}% completion`}
    >
      <Box
        sx={{
          borderRadius: '12px',
          backgroundColor: 'rgba(216, 234, 252, 1)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          height: '8px',
        }}
      >
        <Box
          sx={{
            borderRadius: '12px',
            background: isLate
              ? 'linear-gradient(106deg, #ED048B -30.65%, #FB636B 133.29%)'
              : '#0094D4',
            height: '100%',
            width: `${progressWidth}%`,
            transition: 'width 0.3s ease-in-out',
          }}
        />
      </Box>
    </Box>
  );
};