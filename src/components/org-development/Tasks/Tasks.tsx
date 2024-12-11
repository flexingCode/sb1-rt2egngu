import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../../contexts/AppContext';
import { TaskSection } from './components/TaskSection';
import { CreateTaskDialog } from '../dialogs/CreateTaskDialog';
import type { Task } from '../../../types/task';

export const Tasks: React.FC = () => {
  const navigate = useNavigate();
  const { activeBusinessGroup, activeSite } = useApp();
  const [createDialogOpen, setCreateDialogOpen] = React.useState(false);
  const [createType, setCreateType] = React.useState<'group' | 'site'>('group');
  const [sectionsExpanded, setSectionsExpanded] = React.useState({
    group: true,
    site: true,
  });

  const handleCreateGroup = () => {
    setCreateType('group');
    setCreateDialogOpen(true);
  };

  const handleCreateSite = () => {
    setCreateType('site');
    setCreateDialogOpen(true);
  };

  const handleCreateSubmit = (task: Partial<Task>) => {
    console.log('Creating new task:', task);
    setCreateDialogOpen(false);
  };

  const toggleSection = (section: 'group' | 'site') => {
    setSectionsExpanded(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Box>
      {activeBusinessGroup && (
        <TaskSection
          title={`Group-Wide Tasks - ${activeBusinessGroup.name}`}
          type="group"
          onCreate={handleCreateGroup}
          onNavigate={navigate}
          expanded={sectionsExpanded.group}
          onToggle={() => toggleSection('group')}
        />
      )}

      {activeSite && (
        <TaskSection
          title={`Site-Specific Tasks - ${activeSite.name}`}
          type="site"
          onCreate={handleCreateSite}
          onNavigate={navigate}
          expanded={sectionsExpanded.site}
          onToggle={() => toggleSection('site')}
        />
      )}

      <CreateTaskDialog
        open={createDialogOpen}
        onClose={() => setCreateDialogOpen(false)}
        onSubmit={handleCreateSubmit}
        type={createType}
      />
    </Box>
  );
};