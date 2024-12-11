import React from 'react';
import { Box, Typography, IconButton, Collapse, Button } from '@mui/material';
import { ChevronDown } from 'lucide-react';

interface CollapsibleSectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  onCreate: () => void;
  onExport: () => void;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  subtitle,
  children,
  onCreate,
  onExport,
}) => {
  const [expanded, setExpanded] = React.useState(true);

  return (
    <Box>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          py: 2,
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: 1,
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <IconButton size="small">
            <ChevronDown 
              style={{ 
                transform: expanded ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s'
              }}
            />
          </IconButton>
          <Typography variant="h6">
            {title} {subtitle}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            onClick={onCreate}
            sx={{
              bgcolor: '#00498B',
              '&:hover': { bgcolor: '#003A73' },
              textTransform: 'none',
            }}
          >
            Create
          </Button>
          <Button
            variant="outlined"
            onClick={onExport}
            sx={{
              color: '#00498B',
              borderColor: '#00498B',
              '&:hover': {
                borderColor: '#003A73',
                bgcolor: 'rgba(0, 73, 139, 0.04)',
              },
              textTransform: 'none',
            }}
          >
            Export
          </Button>
        </Box>
      </Box>
      <Collapse in={expanded}>
        {children}
      </Collapse>
    </Box>
  );
};