import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { ProgressBar } from './ProgressBar';
import type { RankingRowProps } from '../types';

export const RankingRow: React.FC<RankingRowProps> = ({
  rank,
  imageSrc,
  name,
  completion,
  dueTasks,
  completed,
  isLate,
}) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#FFF',
      borderTop: '1px solid rgba(240, 240, 245, 1)',
      borderBottom: '1px solid rgba(240, 240, 245, 1)',
      padding: '8px 16px',
      width: '100%',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontWeight: 600,
          minWidth: 24,
          textAlign: 'center',
        }}
      >
        {rank}
      </Typography>
      <Avatar
        src={imageSrc}
        alt={`Profile avatar of ${name}`}
        sx={{
          width: 37,
          height: 37,
        }}
      />
      <Typography
        variant="body2"
        sx={{
          fontWeight: 400,
        }}
      >
        {name}
      </Typography>
    </Box>

    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <ProgressBar percentage={completion} isLate={isLate} />
      <Typography variant="body2" sx={{ fontWeight: 700 }}>
        {completion}%
      </Typography>
    </Box>

    <Typography
      variant="body2"
      sx={{
        paddingX: 2,
        textAlign: 'center',
      }}
    >
      {dueTasks}
    </Typography>

    <Typography
      variant="body2"
      sx={{
        paddingX: 2,
        textAlign: 'center',
      }}
    >
      {completed}
    </Typography>
  </Box>
);