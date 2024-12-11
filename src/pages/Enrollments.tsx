import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataTable, Column } from '../components/common/DataTable';
import { useBreadcrumbs } from '../contexts/BreadcrumbContext';

const columns: Column[] = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { 
    id: 'user', 
    label: 'User', 
    minWidth: 150,
    format: (value) => (
      <Typography
        component="a"
        href={`/users/${value.id}`}
        sx={{
          color: '#00498B',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        {value.name}
      </Typography>
    ),
  },
  { 
    id: 'plan', 
    label: 'Plan', 
    minWidth: 200,
    format: (value) => (
      <Typography
        component="a"
        href={`/plans/${value.id}`}
        sx={{
          color: '#00498B',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        {value.name}
      </Typography>
    ),
  },
  { 
    id: 'status', 
    label: 'Status', 
    minWidth: 120,
    format: (value) => (
      <Typography
        sx={{
          color: value === 'Active' ? '#4CAF50' : 
                value === 'Completed' ? '#2196F3' : 
                value === 'Pending' ? '#FFA000' : '#757575',
          fontWeight: 500,
        }}
      >
        {value}
      </Typography>
    ),
  },
  { 
    id: 'startDate', 
    label: 'Start Date', 
    minWidth: 120,
    format: (value) => new Date(value).toLocaleDateString(),
  },
  { 
    id: 'actions', 
    label: 'Actions', 
    minWidth: 100,
    format: (value) => (
      <Typography
        component="a"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          // Handle close enrollment action
          console.log('Close enrollment:', value);
        }}
        sx={{
          color: '#F44336',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        Close Enrollment
      </Typography>
    ),
  },
];

const mockData = [
  {
    id: 1,
    user: { id: 101, name: 'John Doe' },
    plan: { id: 201, name: 'Automotive Sales Training' },
    status: 'Active',
    startDate: '2024-02-01',
    actions: 1,
  },
  {
    id: 2,
    user: { id: 102, name: 'Jane Smith' },
    plan: { id: 202, name: 'Customer Service Excellence' },
    status: 'Completed',
    startDate: '2024-01-15',
    actions: 2,
  },
  {
    id: 3,
    user: { id: 103, name: 'Mike Johnson' },
    plan: { id: 203, name: 'Leadership Development' },
    status: 'Pending',
    startDate: '2024-02-15',
    actions: 3,
  },
];

export const Enrollments = () => {
  const { setBreadcrumbs } = useBreadcrumbs();

  React.useEffect(() => {
    setBreadcrumbs(['Dashboard', 'Site Management', 'Enrollments']);
  }, [setBreadcrumbs]);

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Implement search logic
  };

  const handleCreate = () => {
    console.log('Create new enrollment');
    // Implement create enrollment modal
  };

  const handleExport = () => {
    console.log('Export enrollments');
    // Implement export functionality
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Enrollments
      </Typography>
      <DataTable
        title="Enrollments"
        columns={columns}
        data={mockData}
        onSearch={handleSearch}
        onCreate={handleCreate}
        onExport={handleExport}
      />
    </Box>
  );
};