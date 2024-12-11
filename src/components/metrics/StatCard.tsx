import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import { TrendIndicator } from './TrendIndicator';

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon }) => {
  return (
    <Card sx={{ p: 3, height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 48,
            height: 48,
            borderRadius: 2,
            bgcolor: 'primary.light',
            color: 'primary.main',
            mr: 2,
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 0.5, fontWeight: 500 }}
          >
            {title}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 600, lineHeight: 1 }}>
            {value}
          </Typography>
        </Box>
      </Box>
      <TrendIndicator value={change} />
    </Card>
  );
};