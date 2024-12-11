import React from 'react';
import { Box } from '@mui/material';
import { NavigateFunction } from 'react-router-dom';
import { CollapsibleSection } from './CollapsibleSection';
import { TaskGroupsTable } from './TaskGroupsTable';
import type { Site } from '../../../types/site';
import type { TaskGroup } from '../../../types/taskGroup';

interface SiteTasksSectionProps {
  site: Site;
  taskGroups: TaskGroup[];
  onNavigate: NavigateFunction;
  onCreate: () => void;
}

export const SiteTasksSection: React.FC<SiteTasksSectionProps> = ({
  site,
  taskGroups,
  onNavigate,
  onCreate,
}) => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  const handleExport = () => {
    console.log('Export task groups');
  };

  return (
    <Box>
      <CollapsibleSection
        title="Site-Specific Task Groups"
        subtitle={site.name}
        onCreate={onCreate}
        onExport={handleExport}
      >
        <TaskGroupsTable
          taskGroups={taskGroups}
          onSearch={handleSearch}
          onNavigate={onNavigate}
        />
      </CollapsibleSection>
    </Box>
  );
};