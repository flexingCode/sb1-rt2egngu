import React from 'react';
import { Box, Typography, Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import { ChevronRight } from 'lucide-react';
import { useBreadcrumbs } from '../../contexts/BreadcrumbContext';

export const Breadcrumbs: React.FC = () => {
  const { breadcrumbs } = useBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <Box sx={{ mb: 3 }}>
      <MuiBreadcrumbs
        separator={<ChevronRight size={16} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs.map((crumb, index) => (
          <Typography
            key={index}
            sx={{
              color: index === breadcrumbs.length - 1 ? 'text.primary' : 'text.secondary',
              fontSize: '14px',
              fontWeight: index === breadcrumbs.length - 1 ? 600 : 400,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            {crumb}
          </Typography>
        ))}
      </MuiBreadcrumbs>
    </Box>
  );
};