import React from 'react';
import { Button } from '@mui/material';
import { PersonAdd as PersonAddIcon } from '@mui/icons-material';

interface AssignButtonProps {
  onClick?: () => void;
}

export const AssignButton: React.FC<AssignButtonProps> = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      startIcon={<PersonAddIcon sx={{ fontSize: 20 }} />}
      onClick={onClick}
      sx={{
        bgcolor: '#00498B',
        color: 'white',
        borderRadius: '8px',
        textTransform: 'none',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        px: 2,
        py: 1,
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          bgcolor: '#003A73',
          transform: 'translateY(-2px)',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      Assign
    </Button>
  );
};