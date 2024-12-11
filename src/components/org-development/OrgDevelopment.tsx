import React from 'react';
import { Box, Typography, ToggleButtonGroup, ToggleButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Tasks } from './Tasks';
import { TaskGroups } from './TaskGroups';
import { useBreadcrumbs } from '../../contexts/BreadcrumbContext';
import { PreBuiltPlansIcon, OnboardianGPTIcon } from '../../assets/icons';
import { useApp } from '../../contexts/AppContext';

export const OrgDevelopment: React.FC = () => {
  const [view, setView] = React.useState<'taskGroups' | 'tasks'>('taskGroups');
  const { setBreadcrumbs } = useBreadcrumbs();
  const navigate = useNavigate();
  const { activeBusinessGroup, activeSite } = useApp();

  React.useEffect(() => {
    setBreadcrumbs(['Dashboard', 'Org Development', view === 'taskGroups' ? 'Task Groups' : 'Tasks']);
  }, [setBreadcrumbs, view]);

  const handleViewChange = (
    _event: React.MouseEvent<HTMLElement>,
    newView: 'taskGroups' | 'tasks' | null
  ) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const handlePreBuiltPlansClick = () => {
    navigate('/org-development/pre-built-plans');
  };

  const handleOnboardianGPTClick = () => {
    console.log('Onboardian GPT clicked');
  };

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Org Development {activeSite && `- ${activeSite.name}`}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <ToggleButtonGroup
              value={view}
              exclusive
              onChange={handleViewChange}
              aria-label="view selector"
              sx={{
                '& .MuiToggleButton-root': {
                  borderRadius: '8px',
                  mx: 0.5,
                  px: 3,
                  py: 1,
                  border: '1px solid',
                  borderColor: 'primary.main',
                  '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                  },
                },
              }}
            >
              <ToggleButton value="taskGroups">Task Groups</ToggleButton>
              <ToggleButton value="tasks">Tasks</ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              sx={{
                height: 40,
                minWidth: 196,
                borderRadius: 20,
                border: '1px solid #E6E6E6',
                color: '#4F4F4F',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 500,
                fontFamily: 'Poppins, sans-serif',
                '&:hover': {
                  backgroundColor: '#FAFAFA',
                  borderColor: '#E0E0E0',
                },
              }}
              startIcon={<PreBuiltPlansIcon />}
              onClick={handlePreBuiltPlansClick}
            >
              Pre-Built Plans
            </Button>
            <Button
              variant="outlined"
              sx={{
                height: 40,
                minWidth: 183,
                borderRadius: 20,
                border: '1px solid #E6E6E6',
                color: '#828282',
                textTransform: 'none',
                fontSize: 14,
                fontWeight: 500,
                fontFamily: 'Poppins, sans-serif',
                '&:hover': {
                  backgroundColor: '#FAFAFA',
                  borderColor: '#E0E0E0',
                },
              }}
              startIcon={<OnboardianGPTIcon />}
              onClick={handleOnboardianGPTClick}
            >
              Onboardian GPT
            </Button>
          </Box>
        </Box>
      </Box>

      {view === 'taskGroups' ? <TaskGroups /> : <Tasks />}
    </Box>
  );
};