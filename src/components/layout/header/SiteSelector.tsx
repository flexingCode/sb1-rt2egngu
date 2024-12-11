import React from 'react';
import { Box, Typography, FormControl, MenuItem } from '@mui/material';
import { StyledDropdown } from '../../common/StyledDropdown';
import { useApp } from '../../../contexts/AppContext';
import { mockSites } from '../../../data/mockSites';

export const SiteSelector: React.FC = () => {
  const { activeBusinessGroup, activeSite, setActiveSite } = useApp();

  const filteredSites = React.useMemo(() => 
    mockSites.filter(site => site.businessGroupId === activeBusinessGroup?.id),
    [activeBusinessGroup]
  );

  const handleSiteChange = (event: any) => {
    const selectedSite = mockSites.find(s => s.id === event.target.value);
    if (selectedSite) {
      setActiveSite(selectedSite);
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
        Active Site:
      </Typography>
      <FormControl>
        <StyledDropdown
          value={activeSite?.id || ''}
          onChange={handleSiteChange}
          displayEmpty
          disabled={!activeBusinessGroup || filteredSites.length === 0}
        >
          {filteredSites.map((site) => (
            <MenuItem key={site.id} value={site.id}>
              {site.name}
            </MenuItem>
          ))}
        </StyledDropdown>
      </FormControl>
    </Box>
  );
};