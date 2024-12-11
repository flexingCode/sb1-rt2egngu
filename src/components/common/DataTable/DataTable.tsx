import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { Add as AddIcon, FileDownload as FileDownloadIcon } from '@mui/icons-material';

export interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'left' | 'right' | 'center';
  format?: (value: any) => string;
}

interface DataTableProps {
  title: string;
  columns: Column[];
  data: any[];
  onSearch?: (query: string) => void;
  onCreate?: () => void;
  onExport?: () => void;
}

export const DataTable: React.FC<DataTableProps> = ({
  title,
  columns,
  data,
  onSearch,
  onCreate,
  onExport,
}) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {onCreate && (
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={onCreate}
                sx={{ bgcolor: '#00498B', '&:hover': { bgcolor: '#003A73' } }}
              >
                Create
              </Button>
            )}
            {onExport && (
              <Button
                variant="outlined"
                startIcon={<FileDownloadIcon />}
                onClick={onExport}
              >
                Export
              </Button>
            )}
          </Box>
        </Box>
        {onSearch && (
          <TextField
            placeholder="Search"
            size="small"
            onChange={(e) => onSearch(e.target.value)}
            sx={{ width: 300, mb: 2 }}
          />
        )}
      </Box>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format ? column.format(value) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};