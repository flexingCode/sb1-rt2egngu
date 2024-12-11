import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataTable, Column } from '../components/common/DataTable';
import { useBreadcrumbs } from '../contexts/BreadcrumbContext';

const columns: Column[] = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'question', label: 'Question', minWidth: 300 },
  { id: 'answer', label: 'Answer', minWidth: 400 },
];

const mockData = [
  {
    id: 1,
    question: 'What are the working hours?',
    answer: 'Our standard working hours are Monday to Friday, 9:00 AM to 5:00 PM.',
  },
  {
    id: 2,
    question: 'How do I request time off?',
    answer: 'Submit a time-off request through the HR portal at least two weeks in advance.',
  },
  {
    id: 3,
    question: 'What is the dress code?',
    answer: 'Business casual attire is required. Please refer to the employee handbook for specific guidelines.',
  },
  {
    id: 4,
    question: 'How do I access my benefits information?',
    answer: 'Log in to the employee portal and navigate to the Benefits section.',
  },
  {
    id: 5,
    question: 'What is the policy for remote work?',
    answer: 'Remote work arrangements must be approved by your direct supervisor and HR.',
  },
];

export const FAQs = () => {
  const { setBreadcrumbs } = useBreadcrumbs();
  const [activeSite, setActiveSite] = React.useState('Premier Corporate');

  React.useEffect(() => {
    setBreadcrumbs(['Dashboard', 'FAQs']);
  }, [setBreadcrumbs]);

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Implement search logic
  };

  const handleCreate = () => {
    console.log('Create new FAQ');
    // Implement create logic
  };

  const handleExport = () => {
    console.log('Export FAQs');
    // Implement export logic
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Site: {activeSite}
      </Typography>
      <DataTable
        title="FAQs"
        columns={columns}
        data={mockData}
        onSearch={handleSearch}
        onCreate={handleCreate}
        onExport={handleExport}
      />
    </Box>
  );
};