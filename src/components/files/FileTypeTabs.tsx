import React from 'react';
import { Tabs, Tab } from '@mui/material';
import {
  Description as DocumentIcon,
  AudioFile as AudioIcon,
  Image as ImageIcon,
  VideoFile as VideoIcon,
} from '@mui/icons-material';

interface FileTypeTabsProps {
  value: string;
  onChange: (event: React.SyntheticEvent, newValue: 'all' | 'documents' | 'audio' | 'image' | 'video') => void;
}

export const FileTypeTabs: React.FC<FileTypeTabsProps> = ({ value, onChange }) => {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      sx={{ mb: 3 }}
      TabIndicatorProps={{
        sx: { backgroundColor: 'primary.main' }
      }}
    >
      <Tab
        label="All"
        value="all"
        sx={{ textTransform: 'none' }}
      />
      <Tab
        icon={<DocumentIcon />}
        label="Documents"
        value="documents"
        sx={{ textTransform: 'none' }}
      />
      <Tab
        icon={<AudioIcon />}
        label="Audio"
        value="audio"
        sx={{ textTransform: 'none' }}
      />
      <Tab
        icon={<ImageIcon />}
        label="Images"
        value="image"
        sx={{ textTransform: 'none' }}
      />
      <Tab
        icon={<VideoIcon />}
        label="Videos"
        value="video"
        sx={{ textTransform: 'none' }}
      />
    </Tabs>
  );
};