import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { StatIcon } from './StatIcon';

interface StatCardProps {
  type: 'total' | 'started' | 'completed';
  value: number;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ type, value, label }) => {
  return (
    <Card
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        borderRadius: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
        <StatIcon type={type} />
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: '1.75rem',
              lineHeight: 1,
              mb: 0.5,
            }}
          >
            {value}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              fontSize: '0.875rem',
              fontWeight: 500,
            }}
          >
            {label}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};