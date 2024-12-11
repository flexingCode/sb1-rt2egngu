import React from 'react';
import { Box, Typography } from '@mui/material';
import { PlanCard } from './PlanCard';
import { Plan } from '../types';

interface PlanSectionProps {
  title: string;
  plans: Plan[];
}

export const PlanSection: React.FC<PlanSectionProps> = ({ title, plans }) => {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#606060',
          mb: 3,
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          overflowX: 'auto',
          pb: 2,
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#F5F5F5',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#E0E0E0',
            borderRadius: '4px',
          },
        }}
      >
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </Box>
    </Box>
  );
};