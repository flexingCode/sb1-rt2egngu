import React from 'react';
import { Box, Typography } from '@mui/material';
import type { TaskCardProps } from '../types';

export const TaskGroupDetailsCard: React.FC<TaskCardProps> = ({ imageSrc, title }) => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = 'https://via.placeholder.com/200x200?text=No+Image';
  };

  return (
    <Box
      sx={{
        maxWidth: '205px',
        justifyContent: 'center',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'rgba(216, 234, 252, 1)',
        backgroundColor: '#FFF',
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: '164px',
        margin: 'auto 0',
        padding: '24px 16px',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <Box
        component="img"
        loading="lazy"
        src={imageSrc}
        alt={title}
        onError={handleImageError}
        sx={{
          aspectRatio: '1',
          objectFit: 'contain',
          objectPosition: 'center',
          width: '86px',
          alignSelf: 'stretch',
          margin: 'auto 0',
        }}
      />
      <Typography
        variant="body2"
        sx={{
          color: '#262626',
          textAlign: 'center',
          marginTop: '10px',
          fontWeight: 700,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};