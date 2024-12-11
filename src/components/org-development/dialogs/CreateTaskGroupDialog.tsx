import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Box,
  Typography,
  Autocomplete,
  Chip,
} from '@mui/material';
import { useApp } from '../../../contexts/AppContext';
import type { TaskGroup } from '../../../types/taskGroup';
import { mockGroupTasks } from '../../../data/mockGroupTasks';

interface CreateTaskGroupDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (taskGroup: Partial<TaskGroup>) => void;
  type: 'group' | 'site';
}

const taskGroupTypes = [
  'Onboarding',
  'Training',
  'Compliance',
  'Sales',
  'Service',
  'Parts',
  'Administration',
  'Marketing',
  'Other'
];

export const CreateTaskGroupDialog: React.FC<CreateTaskGroupDialogProps> = ({
  open,
  onClose,
  onSubmit,
  type,
}) => {
  const { activeBusinessGroup, activeSite } = useApp();
  const [formData, setFormData] = React.useState<Partial<TaskGroup> & { selectedTasks: string[] }>({
    title: '',
    objective: '',
    type: '',
    selectedTasks: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name as string]: value }));
  };

  const handleTasksChange = (_event: React.SyntheticEvent, value: string[]) => {
    setFormData(prev => ({ ...prev, selectedTasks: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const taskGroup = {
      ...formData,
      numberOfTasks: formData.selectedTasks.length,
      groupId: type === 'group' ? activeBusinessGroup?.id : undefined,
      siteId: type === 'site' ? activeSite?.id : undefined,
    };
    onSubmit(taskGroup);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontFamily: 'Poppins, sans-serif', p: 3 }}>
        Create {type === 'group' ? 'Group' : 'Site'} Task Group
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              required
              name="title"
              label="Task Group Name"
              placeholder="Enter a title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
            />

            <TextField
              required
              name="objective"
              label="Description"
              placeholder="Enter a description"
              value={formData.objective}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
            />

            <FormControl fullWidth required>
              <Select
                name="type"
                value={formData.type}
                onChange={handleChange}
                displayEmpty
                placeholder="Type of Task Group"
                sx={{ borderRadius: 1 }}
              >
                <MenuItem value="" disabled>Type of Task Group</MenuItem>
                {taskGroupTypes.map((type) => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Add Tasks
              </Typography>
              <Autocomplete
                multiple
                options={mockGroupTasks.map(task => task.id)}
                getOptionLabel={(taskId) => 
                  mockGroupTasks.find(task => task.id === taskId)?.title || ''
                }
                value={formData.selectedTasks}
                onChange={handleTasksChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select tasks"
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                  />
                )}
                renderTags={(value, getTagProps) =>
                  value.map((taskId, index) => {
                    const task = mockGroupTasks.find(t => t.id === taskId);
                    return (
                      <Chip
                        label={task?.title}
                        {...getTagProps({ index })}
                        key={taskId}
                      />
                    );
                  })
                }
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3, gap: 2 }}>
          <Button 
            onClick={onClose}
            variant="contained"
            sx={{
              bgcolor: '#DC2626',
              '&:hover': { bgcolor: '#B91C1C' },
              width: '200px',
              py: 1.5,
              textTransform: 'none',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: '#00498B',
              '&:hover': { bgcolor: '#003A73' },
              width: '200px',
              py: 1.5,
              textTransform: 'none',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};