import React from 'react';
import { Box, Typography, Grid, Paper, Collapse, IconButton } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useBreadcrumbs } from '../../contexts/BreadcrumbContext';
import { TaskCard } from './components/TaskCard';
import { ProgressStats } from './components/ProgressStats';
import { SpotlightTabs } from './components/SpotlightTabs';
import { RankingTable } from './components/RankingTable';
import { AssigneesList } from './components/AssigneesList';
import { DateRangePicker } from './components/DateRangePicker';
import { ChevronRight } from 'lucide-react';
import { mockAssignees } from '../../data/mockAssignees';

const mockTasks = [
  { id: '1', title: 'Office Mgr. Paperwork', description: 'Complete all required paperwork with the office manager' },
  { id: '2', title: 'Sign Pay Plan', description: 'Review and sign your compensation plan' },
  { id: '3', title: 'Clock In/Out Process', description: 'Learn the time tracking system and procedures' },
  { id: '4', title: 'Your Work Area', description: 'Get familiar with your workspace and equipment' },
  { id: '5', title: 'Meet the Team', description: 'Introduction to your team members and key contacts' },
  { id: '6', title: 'Job Overview', description: 'Detailed overview of your role and responsibilities' },
];

export const TaskGroupDetailsLayout: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { setBreadcrumbs } = useBreadcrumbs();
  const [sectionsExpanded, setSectionsExpanded] = React.useState({
    tasks: true,
    progress: true,
    rankings: true,
  });

  // Calculate totals from mockAssignees data
  const totalAssignees = mockAssignees.length; // Should be 15
  const totalTasksPerPerson = mockAssignees[0].totalTasks; // 20 tasks per person
  const totalCompletedTasks = mockAssignees.reduce((sum, assignee) => sum + assignee.tasksCompleted, 0);
  const totalOverdueTasks = mockAssignees.reduce((sum, assignee) => 
    sum + (assignee.totalTasks - assignee.tasksCompleted), 0);

  React.useEffect(() => {
    setBreadcrumbs(['Dashboard', 'Org Development', 'New Hire Onboarding']);
  }, [setBreadcrumbs]);

  const toggleSection = (section: keyof typeof sectionsExpanded) => {
    setSectionsExpanded(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const SectionHeader: React.FC<{ title: string, section: keyof typeof sectionsExpanded }> = ({ title, section }) => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 2,
        cursor: 'pointer',
      }}
      onClick={() => toggleSection(section)}
    >
      <IconButton size="small">
        <ChevronRight
          style={{
            transform: sectionsExpanded[section] ? 'rotate(90deg)' : 'none',
            transition: 'transform 0.2s',
          }}
        />
      </IconButton>
      <Typography variant="h6" sx={{ ml: 1 }}>
        {title}
      </Typography>
    </Box>
  );

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
        <SectionHeader title="Plan Tasks" section="tasks" />
        <Collapse in={sectionsExpanded.tasks}>
          <Grid container spacing={3}>
            {mockTasks.map((task) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={task.id}>
                <TaskCard title={task.title} description={task.description} />
              </Grid>
            ))}
          </Grid>
        </Collapse>
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
        <SectionHeader title="Progress Tracking" section="progress" />
        <Collapse in={sectionsExpanded.progress}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, borderRadius: 2 }}>
                <ProgressStats
                  assignees={totalAssignees}
                  totalTasks={totalTasksPerPerson}
                  targetDays={14}
                  completed={totalCompletedTasks}
                  overdue={totalOverdueTasks}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, borderRadius: 2 }}>
                <SpotlightTabs />
              </Paper>
            </Grid>
          </Grid>
        </Collapse>
      </Box>

      {/* Rankings */}
      <Box>
        <SectionHeader title="Rankings" section="rankings" />
        <Collapse in={sectionsExpanded.rankings}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <RankingTable />
          </Paper>
        </Collapse>
      </Box>
    </Box>
  );
};