import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
      <Link to="/">
        <Box
          component="img"
          src="/onboardian-logo.svg"
          alt="Onboardian Automotive Inc."
          sx={{
            height: '32px',
            width: 'auto',
            objectFit: 'contain',
            filter: 'brightness(1)',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              filter: 'brightness(1.1)',
              transform: 'scale(1.02)',
            },
          }}
        />
      </Link>
    </Box>
  );
};