import React from 'react';
import { Select, SelectProps, styled } from '@mui/material';

const StyledSelect = styled(Select)(({ theme }) => ({
  height: '40px',
  minWidth: '240px',
  backgroundColor: '#E7F3FF',
  borderRadius: '8px',
  border: `1px solid ${theme.palette.primary.main}`,
  fontFamily: 'Poppins, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  color: theme.palette.primary.main,
  '& .MuiSelect-select': {
    padding: '8px 16px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover': {
    backgroundColor: '#D6E9FF',
  },
  '&.Mui-focused': {
    backgroundColor: '#D6E9FF',
    border: `1px solid ${theme.palette.primary.main}`,
  },
  '& .MuiSelect-icon': {
    color: theme.palette.primary.main,
  },
  '&.Mui-disabled': {
    backgroundColor: '#F5F5F5',
    border: '1px solid #E0E0E0',
    color: '#9E9E9E',
  },
}));

export const StyledDropdown = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  return <StyledSelect {...props} ref={ref} />;
});

StyledDropdown.displayName = 'StyledDropdown';