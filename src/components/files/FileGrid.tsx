import React from 'react';
import { Grid, Card, CardContent, Typography, Checkbox, Box } from '@mui/material';
import { FileIcon } from './FileIcon';
import type { FileItem } from '../../types/file';

interface FileGridProps {
  files: FileItem[];
}

export const FileGrid: React.FC<FileGridProps> = ({ files }) => {
  const [selectedFiles, setSelectedFiles] = React.useState<string[]>([]);

  const handleSelect = (fileId: string) => {
    setSelectedFiles(prev => 
      prev.includes(fileId)
        ? prev.filter(id => id !== fileId)
        : [...prev, fileId]
    );
  };

  return (
    <Grid container spacing={3}>
      {files.map((file) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={file.id}>
          <Card
            sx={{
              height: '100%',
              position: 'relative',
              '&:hover': {
                boxShadow: 6,
              },
            }}
          >
            <Box sx={{ position: 'absolute', top: 8, left: 8 }}>
              <Checkbox
                checked={selectedFiles.includes(file.id)}
                onChange={() => handleSelect(file.id)}
              />
            </Box>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <FileIcon type={file.type} size={48} />
              </Box>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  mb: 1,
                  textAlign: 'center',
                }}
              >
                {file.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  textAlign: 'center',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {file.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};