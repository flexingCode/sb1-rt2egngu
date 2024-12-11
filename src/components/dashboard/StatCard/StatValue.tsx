import React from 'react';
import { Box, Typography } from '@mui/material';
import { TrendingUp as TrendingUpIcon } from '@mui/icons-material';

interface StatValueProps {
  title: string;
  value: string;
  percentageChange: number;
  period?: string;
}

export const StatValue: React.FC<StatValueProps> = ({
  title,
  value,
  percentageChange,
  period = 'vs last month',
}) => {
  const isPositive = percentageChange >= 0;

  return (
    <Box>
      <Typography
        variant="subtitle1"
        sx={{
          color: 'text.secondary',
          fontWeight: 600,
          mb: 0.5,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          letterSpacing: '0.5px',
          mb: 2,
        }}
      >
        {value}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <TrendingUpIcon
          sx={{
            fontSize: 20,
            color: isPositive ? 'success.main' : 'error.main',
            transform: isPositive ? 'none' : 'rotate(180deg)',
          }}
        />
        <Typography
          variant="body2"
          sx={{
            color: isPositive ? 'success.main' : 'error.main',
            fontWeight: 600,
          }}
        >
          {isPositive ? '+' : ''}
          {percentageChange}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {period}
        </Typography>
      </Box>
    </Box>
  );
};