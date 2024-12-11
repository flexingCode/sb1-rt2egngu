import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { useBreadcrumbs } from '../../contexts/BreadcrumbContext';
import { TaskCard } from './components/TaskCard';
import { SpotlightSection } from './components/SpotlightSection';
import { RankingTable } from './components/RankingTable';
import { ProgressStats } from './components/ProgressStats';
import { AssigneesList } from './components/AssigneesList';
import { DateRangePicker } from './components/DateRangePicker';

interface TaskGroupLandingPageProps {
  planId?: string;
}

export const TaskGroupLandingPage: React.FC<TaskGroupLandingPageProps> = ({ planId }) => {
  const { setBreadcrumbs } = useBreadcrumbs();

  React.useEffect(() => {
    setBreadcrumbs(['Dashboard', 'Org Development', 'Pre-Built Plans', 'New Hire Onboarding']);
  }, [setBreadcrumbs]);

  const mockTasks = [
    { id: '1', title: 'Office Mgr. Paperwork' },
    { id: '2', title: 'Sign Pay Plan' },
    { id: '3', title: 'Clock In/Out Process' },
    { id: '4', title: 'Your Work Area' },
  ];

  return (
    <Box sx={{ p: 4 }}>
      {/* Plan Overview */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          New Hire Onboarding
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px' }}>
          A structured roadmap designed to integrate new employees into the organization.
        </Typography>
      </Box>

      {/* Plan Tasks */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Plan Tasks
        </Typography>
        <Grid container spacing={3}>
          {mockTasks.map((task) => (
            <Grid item xs={12} sm={6} md={3} key={task.id}>
              <TaskCard title={task.title} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Assignees & Date Range */}
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Assignees
          </Typography>
          <AssigneesList />
        </Box>
        <DateRangePicker />
      </Box>

      {/* Progress Tracking */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h6" gutterBottom>
          Progress Tracking
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <ProgressStats
                assignees={20}
                totalTasks={20}
                targetDays={14}
                completed={21}
                overdue={21}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Box>
                <SpotlightSection
                  title="Spotlight"
                  status="On Time"
                  profiles={[]}
                />
                <SpotlightSection
                  title="Hold Accountable"
                  status="Late"
                  profiles={[]}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Rankings */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Rankings
        </Typography>
        <Paper sx={{ p: 3 }}>
          <RankingTable />
        </Paper>
      </Box>
    </Box>
  );
};