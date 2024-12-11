import React from 'react';
import { Box, Card, CircularProgress, Typography } from '@mui/material';

interface ProgressCardProps {
  value: number;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({ value }) => {
  return (
    <Card
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        borderRadius: 2,
      }}
    >
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant="determinate"
          value={value}
          size={80}
          thickness={4}
          sx={{ color: '#4CAF50' }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            color="text.secondary"
            sx={{ fontWeight: 600 }}
          >
            {`${Math.round(value)}%`}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};