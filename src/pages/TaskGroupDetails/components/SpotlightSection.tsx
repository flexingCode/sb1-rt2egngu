import React from 'react';
import { Box, Typography, Avatar, AvatarGroup, Tooltip } from '@mui/material';

interface Profile {
  id: string;
  name: string;
  avatar: string;
}

interface SpotlightSectionProps {
  title: string;
  status: 'On Time' | 'Late';
  profiles: Profile[];
}

export const SpotlightSection: React.FC<SpotlightSectionProps> = ({
  title,
  status,
  profiles,
}) => {
  const borderColor = status === 'Late' ? '#ED058B' : '#4CAF50';

  return (
    <Box
      sx={{
        p: 2,
        border: `1px solid ${borderColor}`,
        borderRadius: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: borderColor,
            }}
          />
          <Typography variant="body2" color="text.secondary">
            {status}
          </Typography>
        </Box>
      </Box>
      <AvatarGroup
        max={7}
        sx={{
          '& .MuiAvatar-root': {
            width: 40,
            height: 40,
            fontSize: '1rem',
            border: '2px solid white',
          },
        }}
      >
        {profiles.map((profile) => (
          <Tooltip key={profile.id} title={profile.name}>
            <Avatar src={profile.avatar} alt={profile.name} />
          </Tooltip>
        ))}
      </AvatarGroup>
    </Box>
  );
};