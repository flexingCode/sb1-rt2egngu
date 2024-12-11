import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Users, Activity, TrendingUp, LogOut, User } from 'lucide-react';
import { StatCard } from '../components/dashboard/StatCard';
import { useBreadcrumbs } from '../contexts/BreadcrumbContext';

const dashboardStats = [
  {
    title: 'Total Employees',
    value: '2,737',
    icon: <Users size={24} />,
    iconBgColor: 'rgba(2, 204, 92, 0.1)',
    percentageChange: 1.8,
    period: 'vs last month'
  },
  {
    title: 'Variable Count',
    value: '42',
    icon: <Activity size={24} />,
    iconBgColor: 'rgba(0, 170, 233, 0.1)',
    percentageChange: 1.8,
    period: 'vs last month'
  },
  {
    title: 'Fixed Count',
    value: '26',
    icon: <TrendingUp size={24} />,
    iconBgColor: 'rgba(0, 113, 233, 0.1)',
    percentageChange: 1.8,
    period: 'vs last month'
  },
  {
    title: 'New Hires',
    value: '14',
    icon: <User size={24} />,
    iconBgColor: 'rgba(178, 70, 252, 0.1)',
    percentageChange: 1.8,
    period: 'vs last month'
  },
  {
    title: 'Turnover',
    value: '166',
    icon: <LogOut size={24} />,
    iconBgColor: 'rgba(237, 5, 138, 0.1)',
    percentageChange: 1.8,
    period: 'vs last month'
  }
];

export const Dashboard: React.FC = () => {
  const { setBreadcrumbs } = useBreadcrumbs();

  React.useEffect(() => {
    setBreadcrumbs(['Dashboard']);
  }, [setBreadcrumbs]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Users
      </Typography>

      <Grid container spacing={3}>
        {dashboardStats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};