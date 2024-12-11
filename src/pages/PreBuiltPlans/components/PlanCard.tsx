import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, Typography, Chip } from '@mui/material';
import { Plan } from '../types';

export const PlanCard: React.FC<Plan> = ({ id, title, badge, imageUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/org-development/pre-built-plans/${id}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        minWidth: 280,
        maxWidth: 280,
        borderRadius: '12px',
        boxShadow: '6px 6px 54px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.2s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      <Box
        sx={{
          height: 160,
          overflow: 'hidden',
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <CardContent sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#262626',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            {title}
          </Typography>
          <Chip
            label={badge}
            sx={{
              backgroundColor: '#00498B',
              color: 'white',
              fontSize: '12px',
              height: '24px',
              fontFamily: 'Poppins, sans-serif',
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};