import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface SidebarItemProps {
  label: string;
  icon: React.ReactNode;
  path: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon,
  path,
  isActive = false,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
    if (onClick) onClick();
  };

  return (
    <ListItem
      onClick={handleClick}
      sx={{
        borderRadius: '12px',
        mb: 0.5,
        backgroundColor: isActive ? '#D8EAFC' : 'transparent',
        color: isActive ? '#00498B' : '#262626',
        '&:hover': {
          backgroundColor: '#D8EAFC',
          cursor: 'pointer',
        },
        padding: '8px 12px',
      }}
    >
      <ListItemIcon 
        sx={{ 
          minWidth: 32,
          color: 'inherit',
          '& .MuiSvgIcon-root': {
            fontSize: 20,
          },
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={label}
        primaryTypographyProps={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
        }}
      />
    </ListItem>
  );
};