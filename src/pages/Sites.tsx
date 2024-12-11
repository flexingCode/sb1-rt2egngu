import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataTable, Column } from '../components/common/DataTable';
import { useBreadcrumbs } from '../contexts/BreadcrumbContext';

const columns: Column[] = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { 
    id: 'pic', 
    label: 'Site Location Profile', 
    minWidth: 100,
  },
  { id: 'name', label: 'Name', minWidth: 200 },
  { id: 'address', label: 'Address', minWidth: 300 },
  { 
    id: 'enabled', 
    label: 'Enabled', 
    minWidth: 100,
    format: (value: boolean) => value ? 'Yes' : 'No',
  },
];

const mockData = [
  {
    id: 1,
    pic: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&h=200&q=80',
    name: 'Freedom Chevrolet Big Stone Gap',
    address: '1234 Main St, Big Stone Gap, VA 24219',
    enabled: true,
  },
  {
    id: 2,
    pic: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=200&h=200&q=80',
    name: 'Premier Automotive',
    address: '5678 Market St, Johnson City, TN 37601',
    enabled: true,
  },
  {
    id: 3,
    pic: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=200&h=200&q=80',
    name: 'Mountain View Ford',
    address: '910 Commerce Way, Bristol, VA 24201',
    enabled: false,
  },
];

export const Sites = () => {
  const { setBreadcrumbs } = useBreadcrumbs();

  React.useEffect(() => {
    setBreadcrumbs(['Dashboard', 'Sites']);
  }, [setBreadcrumbs]);

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Implement search logic
  };

  const handleCreate = () => {
    console.log('Create new site');
    // Implement create logic
  };

  const handleExport = () => {
    console.log('Export sites');
    // Implement export logic
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Sites
      </Typography>
      <DataTable
        title="Sites"
        columns={columns}
        data={mockData}
        onSearch={handleSearch}
        onCreate={handleCreate}
        onExport={handleExport}
      />
    </Box>
  );
};