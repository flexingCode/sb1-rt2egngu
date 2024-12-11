import React from 'react';
import { Box, Typography, Button, Collapse, IconButton } from '@mui/material';
import { DataTable } from '../common/DataTable';
import type { Column } from '../common/DataTable';
import { useNavigate } from 'react-router-dom';
import { mockTaskGroups } from '../../data/mockTaskGroups';
import { mockSiteTaskGroups } from '../../data/mockSiteTaskGroups';
import { useApp } from '../../contexts/AppContext';
import { CreateTaskGroupDialog } from './dialogs/CreateTaskGroupDialog';
import type { TaskGroup } from '../../types/taskGroup';
import { Eye, ChevronDown } from 'lucide-react';

const columns: Column[] = [
  { id: 'title', label: 'Title', minWidth: 200 },
  { id: 'objective', label: 'Objective', minWidth: 300 },
  { id: 'numberOfTasks', label: 'Number of Tasks', minWidth: 150 },
  { id: 'id', label: 'ID', minWidth: 100 },
  { 
    id: 'actions', 
    label: 'Actions', 
    minWidth: 100,
    align: 'right',
    format: (value: () => void) => (
      <Button
        variant="outlined"
        size="small"
        startIcon={<Eye size={16} />}
        onClick={value}
        sx={{
          textTransform: 'none',
          borderColor: 'primary.main',
          color: 'primary.main',
          '&:hover': {
            borderColor: 'primary.dark',
            backgroundColor: 'primary.light',
          },
        }}
      >
        View
      </Button>
    ),
  },
];

const CollapsibleSection: React.FC<{
  title: string;
  subtitle: string;
  children: React.ReactNode;
  onCreate: () => void;
  onExport: () => void;
}> = ({ title, subtitle, children, onCreate, onExport }) => {
  const [expanded, setExpanded] = React.useState(true);

  return (
    <Box>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 2,
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <IconButton size="small">
            <ChevronDown 
              style={{ 
                transform: expanded ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s'
              }}
            />
          </IconButton>
          <Typography variant="h6">
            {title} - {subtitle}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            onClick={onCreate}
            sx={{
              bgcolor: '#00498B',
              '&:hover': { bgcolor: '#003A73' },
              textTransform: 'none',
            }}
          >
            Create
          </Button>
          <Button
            variant="outlined"
            onClick={onExport}
            sx={{
              color: '#00498B',
              borderColor: '#00498B',
              '&:hover': {
                borderColor: '#003A73',
                bgcolor: 'rgba(0, 73, 139, 0.04)',
              },
              textTransform: 'none',
            }}
          >
            Export
          </Button>
        </Box>
      </Box>
      <Collapse in={expanded}>
        {children}
      </Collapse>
    </Box>
  );
};

export const TaskGroups: React.FC = () => {
  const navigate = useNavigate();
  const { activeBusinessGroup, activeSite } = useApp();
  const [createDialogOpen, setCreateDialogOpen] = React.useState(false);
  const [createType, setCreateType] = React.useState<'group' | 'site'>('group');

  const groupTaskGroups = React.useMemo(() => {
    if (!activeBusinessGroup) return [];
    return mockTaskGroups
      .filter(group => group.groupId === activeBusinessGroup.id)
      .map(group => ({
        ...group,
        actions: () => navigate(`/task-group-details/${group.id}`),
      }));
  }, [activeBusinessGroup, navigate]);

  const siteTaskGroups = React.useMemo(() => {
    if (!activeSite) return [];
    return mockSiteTaskGroups
      .filter(group => group.siteId === activeSite.id)
      .map(group => ({
        ...group,
        actions: () => navigate(`/task-group-details/${group.id}`),
      }));
  }, [activeSite, navigate]);

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

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  const handleExport = () => {
    console.log('Export task groups');
  };

  return (
    <Box>
      {activeBusinessGroup && (
        <Box sx={{ mb: 6 }}>
          <CollapsibleSection
            title="Group-Wide Task Groups"
            subtitle={activeBusinessGroup.name}
            onCreate={handleCreateGroup}
            onExport={handleExport}
          >
            <DataTable
              title=""
              columns={columns}
              data={groupTaskGroups}
              onSearch={handleSearch}
            />
          </CollapsibleSection>
        </Box>
      )}

      {activeSite && (
        <Box>
          <CollapsibleSection
            title="Site-Specific Task Groups"
            subtitle={activeSite.name}
            onCreate={handleCreateSite}
            onExport={handleExport}
          >
            <DataTable
              title=""
              columns={columns}
              data={siteTaskGroups}
              onSearch={handleSearch}
            />
          </CollapsibleSection>
        </Box>
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