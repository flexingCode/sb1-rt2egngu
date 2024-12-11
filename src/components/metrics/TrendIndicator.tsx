import React from 'react';
import { Box, Typography } from '@mui/material';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TrendIndicatorProps {
  value: number;
}

export const TrendIndicator: React.FC<TrendIndicatorProps> = ({ value }) => {
  const isPositive = value >= 0;
  const Icon = isPositive ? TrendingUp : TrendingDown;
  const color = isPositive ? '#10B981' : '#EF4444';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        color,
      }}
    >
      <Icon size={16} style={{ marginRight: 4 }} />
      <Typography
        variant="body2"
        component="span"
        sx={{ fontWeight: 600, mr: 1 }}
      >
        {isPositive ? '+' : ''}{value}%
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
      >
        vs last month
      </Typography>
    </Box>
  );
};