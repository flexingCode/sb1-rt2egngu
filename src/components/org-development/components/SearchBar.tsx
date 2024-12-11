import React from 'react';
import { Box, TextField } from '@mui/material';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        placeholder="Search..."
        size="small"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{ width: 300 }}
      />
    </Box>
  );
};