import React from 'react';
import {
  Dashboard,
  People,
  Description,
  Business,
  School,
  Help,
  LocationOn,
  Newspaper,
  AccountTree,
} from '@mui/icons-material';
import type { UserRole } from '../../../types/user';

export interface MenuItem {
  label: string;
  icon: React.ReactNode;
  path: string;
  roles?: UserRole[];
}

export const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: <Dashboard />,
    path: '/',
  },
  {
    label: 'Users',
    icon: <People />,
    path: '/users',
    roles: ['admin', 'manager'],
  },
  {
    label: 'Sites',
    icon: <Business />,
    path: '/sites',
  },
  {
    label: 'Enrollments',
    icon: <School />,
    path: '/enrollments',
    roles: ['admin', 'manager'],
  },
  {
    label: 'Files',
    icon: <Description />,
    path: '/files',
  },
  {
    label: 'FAQs',
    icon: <Help />,
    path: '/faqs',
  },
  {
    label: 'Map Pins',
    icon: <LocationOn />,
    path: '/map-pins',
  },
  {
    label: 'Org Development',
    icon: <AccountTree />,
    path: '/org-development',
  },
  {
    label: 'News Feeds',
    icon: <Newspaper />,
    path: '/news-feeds',
  },
];