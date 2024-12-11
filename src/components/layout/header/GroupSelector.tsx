import React from 'react';
import { Box, Typography, FormControl, MenuItem } from '@mui/material';
import { StyledDropdown } from '../../common/StyledDropdown';
import { useApp } from '../../../contexts/AppContext';
import { mockBusinessGroups } from '../../../data/mockBusinessGroups';

export const GroupSelector: React.FC = () => {
  const { activeBusinessGroup, setActiveBusinessGroup } = useApp();

  const handleGroupChange = (event: any) => {
    const selectedGroup = mockBusinessGroups.find(g => g.id === event.target.value);
    if (selectedGroup) {
      setActiveBusinessGroup(selectedGroup);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography
        component="span"
        sx={{
          fontSize: '14px',
          fontWeight: 500,
          color: 'text.secondary',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        Active Group:
      </Typography>
      <FormControl>
        <StyledDropdown
          value={activeBusinessGroup?.id || ''}
          onChange={handleGroupChange}
          displayEmpty
        >
          {mockBusinessGroups.map((group) => (
            <MenuItem key={group.id} value={group.id}>
              {group.name}
            </MenuItem>
          ))}
        </StyledDropdown>
      </FormControl>
    </Box>
  );
};