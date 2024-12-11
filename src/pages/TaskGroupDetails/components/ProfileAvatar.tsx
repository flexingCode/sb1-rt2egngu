import React from 'react';
import { Box } from '@mui/material';
import type { ProfileProps } from '../types';

export const ProfileAvatar: React.FC<ProfileProps> = ({ imageSrc, name }) => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = 'https://via.placeholder.com/150x150?text=No+Image';
  };

  return (
    <Box
      component="img"
      loading="lazy"
      src={imageSrc}
      alt={`Profile avatar of ${name}`}
      onError={handleImageError}
      sx={{
        aspectRatio: '1',
        objectFit: 'cover',
        objectPosition: 'center',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '1px solid #ddd',
      }}
    />
  );
};