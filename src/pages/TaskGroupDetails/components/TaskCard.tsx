import React from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import { FileText } from 'lucide-react';

interface TaskCardProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ title, description, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        height: '100%',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        border: '1px solid #E0E0E0',
        borderRadius: 2,
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
          borderColor: 'primary.main',
        },
      }}
    >
      <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            minHeight: 140,
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: '12px',
              backgroundColor: '#00498B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <FileText size={24} />
          </Box>
          <Typography
            variant="subtitle2"
            align="center"
            sx={{
              fontWeight: 600,
              color: '#262626',
              fontSize: '0.875rem',
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};