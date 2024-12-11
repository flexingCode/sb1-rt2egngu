import React from 'react';
import { Card, CardContent, Box, Typography, Avatar } from '@mui/material';
import { TrendingUp as TrendingUpIcon } from '@mui/icons-material';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBgColor: string;
  percentageChange: number;
  period?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  iconBgColor,
  percentageChange,
  period = 'vs last month',
}) => {
  const isPositive = percentageChange >= 0;

  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: 3,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'text.secondary',
                fontWeight: 600,
                mb: 0.5,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                letterSpacing: '0.5px',
              }}
            >
              {value}
            </Typography>
          </Box>
          <Avatar
            sx={{
              bgcolor: iconBgColor,
              width: 56,
              height: 56,
              '& .MuiSvgIcon-root': {
                fontSize: 28,
              },
            }}
          >
            {icon}
          </Avatar>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mt: 2,
          }}
        >
          <TrendingUpIcon
            sx={{
              fontSize: 20,
              color: isPositive ? 'success.main' : 'error.main',
              transform: isPositive ? 'none' : 'rotate(180deg)',
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: isPositive ? 'success.main' : 'error.main',
              fontWeight: 600,
            }}
          >
            {isPositive ? '+' : ''}
            {percentageChange}%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {period}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};