import React from 'react';
import { Box, Typography, ToggleButtonGroup, ToggleButton, TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon, GridView as GridViewIcon, List as ListViewIcon } from '@mui/icons-material';
import { FileGrid } from '../components/files/FileGrid';
import { FileList } from '../components/files/FileList';
import { FileTypeTabs } from '../components/files/FileTypeTabs';
import { useBreadcrumbs } from '../contexts/BreadcrumbContext';
import { mockFiles } from '../data/mockFiles';

export const Files = () => {
  const [view, setView] = React.useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [fileType, setFileType] = React.useState<'all' | 'documents' | 'audio' | 'image' | 'video'>('all');
  const { setBreadcrumbs } = useBreadcrumbs();

  React.useEffect(() => {
    setBreadcrumbs(['Dashboard', 'Site Management', 'Files']);
  }, [setBreadcrumbs]);

  const handleViewChange = (_event: React.MouseEvent<HTMLElement>, newView: 'grid' | 'list' | null) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFileTypeChange = (_event: React.SyntheticEvent, newValue: 'all' | 'documents' | 'audio' | 'image' | 'video') => {
    if (newValue !== null) {
      setFileType(newValue);
    }
  };

  const filteredFiles = mockFiles.filter(file => {
    const matchesSearch = file.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         file.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = fileType === 'all' || file.type === fileType;
    return matchesSearch && matchesType;
  });

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" fontWeight="bold" fontFamily="Poppins, sans-serif">
          Files
        </Typography>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleViewChange}
          aria-label="view mode"
        >
          <ToggleButton value="grid" aria-label="grid view">
            <GridViewIcon />
          </ToggleButton>
          <ToggleButton value="list" aria-label="list view">
            <ListViewIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <FileTypeTabs value={fileType} onChange={handleFileTypeChange} />

      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Search files..."
          value={searchQuery}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            maxWidth: 400,
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        />
      </Box>

      {view === 'grid' ? (
        <FileGrid files={filteredFiles} />
      ) : (
        <FileList files={filteredFiles} />
      )}
    </Box>
  );
};