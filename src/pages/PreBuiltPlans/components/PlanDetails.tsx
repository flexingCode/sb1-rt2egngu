import React from 'react';
import { Box, Typography, Button, Grid, Card } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useBreadcrumbs } from '../../../contexts/BreadcrumbContext';

interface Task {
  id: string;
  title: string;
}

interface PlanDetailsProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  badge: string;
  tasks: Task[];
  onUsePlan: () => void;
}

export const PlanDetails: React.FC<PlanDetailsProps> = ({
  title,
  description,
  imageUrl,
  tasks,
  onUsePlan,
}) => {
  const { setBreadcrumbs } = useBreadcrumbs();

  React.useEffect(() => {
    setBreadcrumbs(['Dashboard', 'Org Development', 'Pre-Built Plans', title]);
  }, [setBreadcrumbs, title]);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '24px',
              fontWeight: 600,
              color: '#262626',
              mb: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#606060',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Overview
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={onUsePlan}
          sx={{
            bgcolor: '#00498B',
            borderRadius: '8px',
            textTransform: 'none',
            px: 3,
            py: 1,
            '&:hover': {
              bgcolor: '#003A73',
            },
          }}
        >
          Use the Plan
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
        <Box
          component="img"
          src={imageUrl}
          alt={title}
          sx={{
            width: 300,
            height: 200,
            objectFit: 'cover',
            borderRadius: '12px',
            boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.1)',
          }}
        />
        <Typography
          sx={{
            flex: 1,
            fontSize: '16px',
            lineHeight: 1.5,
            color: '#606060',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {description}
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {tasks.map((task) => (
          <Grid item xs={12} sm={6} md={3} key={task.id}>
            <Card
              sx={{
                p: 2,
                height: '100%',
                borderRadius: '8px',
                boxShadow: '2px 2px 15px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.1)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#262626',
                  textAlign: 'center',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {task.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};