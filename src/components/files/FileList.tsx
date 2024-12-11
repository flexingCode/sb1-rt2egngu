import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from '@mui/material';
import { FileIcon } from './FileIcon';
import type { FileItem } from '../../types/file';

interface FileListProps {
  files: FileItem[];
}

export const FileList: React.FC<FileListProps> = ({ files }) => {
  const [selectedFiles, setSelectedFiles] = React.useState<string[]>([]);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedFiles(files.map(file => file.id));
    } else {
      setSelectedFiles([]);
    }
  };

  const handleSelect = (fileId: string) => {
    setSelectedFiles(prev => 
      prev.includes(fileId)
        ? prev.filter(id => id !== fileId)
        : [...prev, fileId]
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={selectedFiles.length > 0 && selectedFiles.length < files.length}
                checked={selectedFiles.length === files.length}
                onChange={handleSelectAll}
              />
            </TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Date Added</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file) => (
            <TableRow
              key={file.id}
              hover
              selected={selectedFiles.includes(file.id)}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedFiles.includes(file.id)}
                  onChange={() => handleSelect(file.id)}
                />
              </TableCell>
              <TableCell>
                <FileIcon type={file.type} size={24} />
              </TableCell>
              <TableCell>{file.title}</TableCell>
              <TableCell>{file.description}</TableCell>
              <TableCell>{file.dateAdded}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};