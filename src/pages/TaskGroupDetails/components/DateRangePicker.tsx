import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Calendar } from 'lucide-react';

export const DateRangePicker: React.FC = () => {
  return (
    <Button
      variant="outlined"
      startIcon={<Calendar size={16} />}
      sx={{
        borderColor: '#E0E0E0',
        color: '#262626',
        textTransform: 'none',
        padding: '8px 16px',
        '&:hover': {
          borderColor: '#00498B',
          backgroundColor: 'transparent',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box>
          <Typography variant="caption" color="text.secondary" display="block">
            Start
          </Typography>
          <Typography variant="body2" fontWeight={500}>
            11-01-2024
          </Typography>
        </Box>
        <Typography color="text.secondary">-</Typography>
        <Box>
          <Typography variant="caption" color="text.secondary" display="block">
            End
          </Typography>
          <Typography variant="body2" fontWeight={500}>
            11-01-2024
          </Typography>
        </Box>
      </Box>
    </Button>
  );
};