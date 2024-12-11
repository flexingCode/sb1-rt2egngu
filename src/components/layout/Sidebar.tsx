import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  GraduationCap, 
  FileText, 
  HelpCircle, 
  MapPin, 
  Network, 
  Newspaper 
} from 'lucide-react';
import { Logo } from './Logo';

const menuItems = [
  { path: '/', label: 'Dashboard', icon: <LayoutDashboard /> },
  { path: '/users', label: 'Users', icon: <Users /> },
  { path: '/sites', label: 'Sites', icon: <Building2 /> },
  { path: '/enrollments', label: 'Enrollments', icon: <GraduationCap /> },
  { path: '/files', label: 'Files', icon: <FileText /> },
  { path: '/faqs', label: 'FAQs', icon: <HelpCircle /> },
  { path: '/map-pins', label: 'Map Pins', icon: <MapPin /> },
  { path: '/org-development', label: 'Org Development', icon: <Network /> },
  { path: '/news-feeds', label: 'News Feeds', icon: <Newspaper /> },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          bgcolor: '#FFFFFF',
          border: 'none',
          boxShadow: '4px 0 10px rgba(0, 0, 0, 0.05)',
        },
      }}
    >
      <Logo />
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.path}
            onClick={() => navigate(item.path)}
            sx={{
              borderRadius: '12px',
              mx: 2,
              mb: 0.5,
              backgroundColor: location.pathname === item.path ? 'primary.light' : 'transparent',
              color: location.pathname === item.path ? 'primary.main' : 'text.primary',
              '&:hover': {
                backgroundColor: 'primary.light',
                cursor: 'pointer',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: 'Poppins, sans-serif',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};