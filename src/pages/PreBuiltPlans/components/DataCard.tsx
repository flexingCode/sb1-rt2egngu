import React from 'react';
import { Box, Card, Typography, Icon } from '@mui/material';

interface DataCardProps {
  title: string;
  value: number;
  icon: string;
  color?: string;
}

export const DataCard: React.FC<DataCardProps> = ({ 
  title, 
  value, 
  icon,
  color = '#00498B'
}) => {
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
        <Box 
          sx={{ 
            bgcolor: `${color}10`,
            borderRadius: '12px',
            p: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon sx={{ fontSize: 28, color: color }}>{icon}</Icon>
        </Box>
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
            {title}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};