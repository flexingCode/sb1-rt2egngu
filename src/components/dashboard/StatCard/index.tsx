import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';
import { StatIcon } from './StatIcon';
import { StatValue } from './StatValue';
import type { StatCardProps } from '../../../types/dashboard';

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  iconBgColor,
  percentageChange,
  period,
  className,
}) => {
  return (
    <Card
      className={className}
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
            <StatValue
              value={value}
              percentageChange={percentageChange}
              period={period}
            />
          </Box>
          <StatIcon icon={icon} bgColor={iconBgColor} />
        </Box>
      </CardContent>
    </Card>
  );
};