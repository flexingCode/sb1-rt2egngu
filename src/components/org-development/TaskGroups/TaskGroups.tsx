import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../../contexts/AppContext';
import { GroupTasksSection } from './GroupTasksSection';
import { SiteTasksSection } from './SiteTasksSection';
import { useTaskGroups } from './hooks/useTaskGroups';
import { CreateTaskGroupDialog } from '../dialogs/CreateTaskGroupDialog';
import type { TaskGroup } from '../../../types/taskGroup';

export const TaskGroups: React.FC = () => {
  const navigate = useNavigate();
  const { activeBusinessGroup, activeSite } = useApp();
  const { groupTaskGroups, siteTaskGroups } = useTaskGroups();
  const [createDialogOpen, setCreateDialogOpen] = React.useState(false);
  const [createType, setCreateType] = React.useState<'group' | 'site'>('group');

  const handleCreateGroup = () => {
    setCreateType('group');
    setCreateDialogOpen(true);
  };

  const handleCreateSite = () => {
    setCreateType('site');
    setCreateDialogOpen(true);
  };

  const handleCreateSubmit = (taskGroup: Partial<TaskGroup>) => {
    console.log('Creating new task group:', taskGroup);
    setCreateDialogOpen(false);
  };

  return (
    <Box>
      {activeBusinessGroup && (
        <GroupTasksSection
          businessGroup={activeBusinessGroup}
          taskGroups={groupTaskGroups}
          onNavigate={navigate}
          onCreate={handleCreateGroup}
        />
      )}

      {activeSite && (
        <SiteTasksSection
          site={activeSite}
          taskGroups={siteTaskGroups}
          onNavigate={navigate}
          onCreate={handleCreateSite}
        />
      )}

      <CreateTaskGroupDialog
        open={createDialogOpen}
        onClose={() => setCreateDialogOpen(false)}
        onSubmit={handleCreateSubmit}
        type={createType}
      />
    </Box>
  );
};