import React from 'react';
import { Box, Typography, IconButton, Collapse } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';

interface CollapsibleSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  action?: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  subtitle,
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
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            flexGrow: 1,
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <IconButton
            size="small"
            sx={{ mr: 1, transform: expanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}
          >
            <KeyboardArrowRight />
          </IconButton>
          <Typography variant="h6" component="div">
            {title}
            {subtitle && (
              <Typography
                component="span"
                variant="h6"
                color="text.secondary"
                sx={{ ml: 1 }}
              >
                {subtitle}
              </Typography>
            )}
          </Typography>
        </Box>
        {action && (
          <Box sx={{ ml: 2 }}>
            {action}
          </Box>
        )}
      </Box>
      <Collapse in={expanded}>
        <Box sx={{ ml: 6 }}>{children}</Box>
      </Collapse>
    </Box>
  );
};