import React from 'react';
import { Box, Typography, IconButton, Collapse } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  action?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  title,
  children,
  defaultExpanded = true,
  action,
}) => {
  const [expanded, setExpanded] = React.useState(defaultExpanded);

  return (
    <Box sx={{ mb: 4 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <IconButton
            size="small"
            sx={{ 
              mr: 1, 
              transform: expanded ? 'rotate(90deg)' : 'none', 
              transition: 'transform 0.2s' 
            }}
          >
            <KeyboardArrowRight />
          </IconButton>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </Box>
        {action && (
          <Box>
            {action}
          </Box>
        )}
      </Box>
      <Collapse in={expanded}>
        <Box sx={{ ml: 6 }}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};