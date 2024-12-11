import React from 'react';
import {
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
  Assignment as AssignmentIcon,
  ExitToApp as ExitToAppIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import type { StatData } from '../types/dashboard';

export const dashboardStats: StatData[] = [
  {
    title: 'Total Employees',
    value: '2,737',
    icon: <PeopleIcon />,
    iconBgColor: 'rgba(2, 204, 92, 0.1)',
    percentageChange: 1.8,
  },
  {
    title: 'Variable Count',
    value: '42',
    icon: <TrendingUpIcon />,
    iconBgColor: 'rgba(0, 170, 233, 0.1)',
    percentageChange: 1.8,
  },
  {
    title: 'Fixed Count',
    value: '26',
    icon: <AssignmentIcon />,
    iconBgColor: 'rgba(0, 113, 233, 0.1)',
    percentageChange: 1.8,
  },
  {
    title: 'New Hires',
    value: '14',
    icon: <PersonIcon />,
    iconBgColor: 'rgba(178, 70, 252, 0.1)',
    percentageChange: 1.8,
  },
  {
    title: 'Turnover',
    value: '166',
    icon: <ExitToAppIcon />,
    iconBgColor: 'rgba(237, 5, 138, 0.1)',
    percentageChange: 1.8,
  },
];