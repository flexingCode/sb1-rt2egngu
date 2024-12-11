import React from 'react';
import { Box, Button } from '@mui/material';
import { Add as AddIcon, FileDownload as FileDownloadIcon } from '@mui/icons-material';

interface ActionButtonsProps {
  onCreate?: () => void;
  onExport?: () => void;
  createDisabled?: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  onCreate, 
  onExport,
  createDisabled = false 
}) => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {onCreate && (
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={onCreate}
          disabled={createDisabled}
          sx={{
            bgcolor: '#00498B',
            '&:hover': { bgcolor: '#003A73' },
            textTransform: 'none',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Create
        </Button>
      )}
      {onExport && (
        <Button
          variant="outlined"
          startIcon={<FileDownloadIcon />}
          onClick={onExport}
          sx={{
            color: '#00498B',
            borderColor: '#00498B',
            '&:hover': {
              borderColor: '#003A73',
              bgcolor: 'rgba(0, 73, 139, 0.04)',
            },
            textTransform: 'none',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Export
        </Button>
      )}
    </Box>
  );
};