import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataTable } from '../components/common/DataTable';
import type { Column } from '../components/common/DataTable';

const columns: Column[] = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'firstName', label: 'First Name', minWidth: 100 },
  { id: 'lastName', label: 'Last Name', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'role', label: 'Role', minWidth: 100 },
];

const mockData = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    role: 'Admin',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    role: 'User',
  },
];

export const Users: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  const handleCreate = () => {
    console.log('Create new user');
  };

  const handleExport = () => {
    console.log('Export users');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Users
      </Typography>
      <DataTable
        title="Users"
        columns={columns}
        data={mockData}
        onSearch={handleSearch}
        onCreate={handleCreate}
        onExport={handleExport}
      />
    </Box>
  );
};