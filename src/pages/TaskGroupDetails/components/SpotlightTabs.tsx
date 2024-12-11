import React from 'react';
import { Box, Typography, Tabs, Tab, Avatar, Chip } from '@mui/material';
import { Circle } from 'lucide-react';
import { mockAssignees, getOnTimeAssignees, getLateAssignees } from '../../../data/mockAssignees';

interface SpotlightTabsProps {
  onTimeProfiles?: typeof mockAssignees;
  lateProfiles?: typeof mockAssignees;
}

export const SpotlightTabs: React.FC<SpotlightTabsProps> = ({
  onTimeProfiles = getOnTimeAssignees(),
  lateProfiles = getLateAssignees(),
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getStatusColor = (isLate: boolean) => isLate ? '#ED058B' : '#4CAF50';

  const ProfileList = ({ profiles, isLate }: { profiles: typeof mockAssignees, isLate: boolean }) => (
    <Box sx={{ mt: 2 }}>
      {profiles.map((profile) => (
        <Box
          key={profile.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            p: 1,
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.02)',
              borderRadius: 1,
            },
          }}
        >
          <Avatar
            src={profile.avatar}
            alt={profile.name}
            sx={{
              width: 40,
              height: 40,
              border: '2px solid white',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle2">{profile.name}</Typography>
            <Typography variant="caption" color="text.secondary">
              {profile.tasksCompleted}/{profile.totalTasks} tasks completed
            </Typography>
          </Box>
          <Chip
            icon={<Circle size={8} />}
            label={`${profile.completion}%`}
            size="small"
            sx={{
              bgcolor: 'transparent',
              border: `1px solid ${getStatusColor(isLate)}`,
              color: getStatusColor(isLate),
              '& .MuiChip-icon': {
                color: getStatusColor(isLate),
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          '& .MuiTab-root': {
            textTransform: 'none',
            minWidth: 120,
            fontFamily: 'Poppins, sans-serif',
          },
        }}
      >
        <Tab
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Circle size={8} color="#4CAF50" fill="#4CAF50" />
              <span>On Time ({onTimeProfiles.length})</span>
            </Box>
          }
        />
        <Tab
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Circle size={8} color="#ED058B" fill="#ED058B" />
              <span>Late ({lateProfiles.length})</span>
            </Box>
          }
        />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {value === 0 ? (
          <ProfileList profiles={onTimeProfiles} isLate={false} />
        ) : (
          <ProfileList profiles={lateProfiles} isLate={true} />
        )}
      </Box>
    </Box>
  );
};