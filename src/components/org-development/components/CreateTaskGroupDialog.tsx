import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Autocomplete,
  Chip,
} from '@mui/material';
import { useApp } from '../../../contexts/AppContext';
import { TaskGroup } from '../../../types/taskGroup';
import { useTasks } from '../../../hooks/useTasks';

interface CreateTaskGroupDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (taskGroup: Partial<TaskGroup>) => void;
  type: 'group' | 'site' | null;
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
  const { allTasks } = useTasks();
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

  const getTitle = () => {
    if (type === 'group') return 'Create Group Task Group';
    if (type === 'site') return 'Create Site Task Group';
    return 'Create Task Group';
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontFamily: 'Poppins, sans-serif' }}>
        {getTitle()}
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              required
              name="title"
              label="Task Group Name"
              placeholder="Enter a title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
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
            />

            <FormControl fullWidth required>
              <InputLabel>Type of Task Group</InputLabel>
              <Select
                name="type"
                value={formData.type}
                onChange={handleChange}
                label="Type of Task Group"
              >
                {taskGroupTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box>
              <Typography variant="subtitle1" gutterBottom>
                Add Tasks
              </Typography>
              <Autocomplete
                multiple
                options={allTasks.map(task => task.id)}
                getOptionLabel={(taskId) => 
                  allTasks.find(task => task.id === taskId)?.title || ''
                }
                value={formData.selectedTasks}
                onChange={handleTasksChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select tasks"
                  />
                )}
                renderTags={(value, getTagProps) =>
                  value.map((taskId, index) => {
                    const task = allTasks.find(t => t.id === taskId);
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
        <DialogActions sx={{ p: 3 }}>
          <Button 
            onClick={onClose}
            variant="contained"
            sx={{
              bgcolor: '#DC2626',
              '&:hover': { bgcolor: '#B91C1C' },
              width: '200px',
              py: 1.5,
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
            }}
          >
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};