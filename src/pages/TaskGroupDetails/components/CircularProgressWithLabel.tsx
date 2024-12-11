import React from 'react';
import { Box, Typography } from '@mui/material';

interface CircularProgressWithLabelProps {
  value: number;
  color: string;
  label: number | string;
  subLabel: string;
  size?: number;
  strokeWidth?: number;
  interactive?: boolean;
  onClick?: () => void;
}

export const CircularProgressWithLabel: React.FC<CircularProgressWithLabelProps> = ({
  value,
  color,
  label,
  subLabel,
  size = 160,
  strokeWidth = 12,
  interactive = false,
  onClick,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        width: size, 
        height: size,
        cursor: interactive ? 'pointer' : 'default',
        '&:hover': interactive ? {
          transform: 'scale(1.05)',
          transition: 'transform 0.2s ease-in-out',
        } : {},
      }}
      onClick={interactive ? onClick : undefined}
    >
      {/* SVG Progress Circle */}
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#F5F5F5"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.5s ease',
          }}
        />
      </svg>

      {/* Center Label */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'rotate(0deg)',
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontWeight: 700,
            color,
            lineHeight: 1,
            mb: 0.5,
          }}
        >
          {label}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            fontWeight: 500,
          }}
        >
          {subLabel}
        </Typography>
      </Box>
    </Box>
  );
};