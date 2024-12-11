import React from 'react';
import { Grid } from '@mui/material';
import { StatCard } from './StatCard/StatCard';
import { dashboardStats } from '../../data/dashboardStats';

export const DashboardStats: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {dashboardStats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
          <StatCard {...stat} />
        </Grid>
      ))}
    </Grid>
  );
};