import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import { Bell } from 'lucide-react';
import { IconButton, Avatar } from '@mui/material';
import { GroupSelector } from './header/GroupSelector';
import { SiteSelector } from './header/SiteSelector';

export const Header: React.FC = () => {
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{ 
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, px: 3 }}>
        <Box sx={{ display: 'flex', gap: 3, flex: 1 }}>
          <GroupSelector />
          <SiteSelector />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton size="large" color="inherit">
            <Bell size={20} />
          </IconButton>
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            sx={{ width: 32, height: 32 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};