import React from 'react';
import {
  Description as DocumentIcon,
  AudioFile as AudioIcon,
  Image as ImageIcon,
  VideoFile as VideoIcon,
} from '@mui/icons-material';

interface FileIconProps {
  type: string;
  size?: number;
}

export const FileIcon: React.FC<FileIconProps> = ({ type, size = 24 }) => {
  const iconProps = {
    sx: { fontSize: size }
  };

  switch (type) {
    case 'documents':
      return <DocumentIcon {...iconProps} />;
    case 'audio':
      return <AudioIcon {...iconProps} />;
    case 'image':
      return <ImageIcon {...iconProps} />;
    case 'video':
      return <VideoIcon {...iconProps} />;
    default:
      return <DocumentIcon {...iconProps} />;
  }
};