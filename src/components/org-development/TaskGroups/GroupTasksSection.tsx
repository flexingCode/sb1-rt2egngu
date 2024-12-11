import React from 'react';
import { Box } from '@mui/material';
import { NavigateFunction } from 'react-router-dom';
import { CollapsibleSection } from './CollapsibleSection';
import { TaskGroupsTable } from './TaskGroupsTable';
import type { BusinessGroup } from '../../../types/businessGroup';
import type { TaskGroup } from '../../../types/taskGroup';

interface GroupTasksSectionProps {
  businessGroup: BusinessGroup;
  taskGroups: TaskGroup[];
  onNavigate: NavigateFunction;
  onCreate: () => void;
}

export const GroupTasksSection: React.FC<GroupTasksSectionProps> = ({
  businessGroup,
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
    <Box sx={{ mb: 6 }}>
      <CollapsibleSection
        title="Group-Wide Task Groups"
        subtitle={businessGroup.name}
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