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
  Paper,
} from '@mui/material';
import { useApp } from '../../../contexts/AppContext';
import { Task } from '../../../types/task';
import { FileUpload as FileUploadIcon } from '@mui/icons-material';

interface CreateTaskDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (task: Partial<Task>) => void;
  type: 'group' | 'site' | null;
  initialData?: Task | null;
}

const defaultFormData: Partial<Task> = {
  title: '',
  description: '',
  instructions: '',
  daysUntilDue: 0,
  sortOrder: 0,
  completionType: 'CONFIRM',
  weblink: '',
  hasDocument: false,
  hasImage: false,
  hasVideo: false,
  hasAudio: false,
  status: 'active',
};

export const CreateTaskDialog: React.FC<CreateTaskDialogProps> = ({
  open,
  onClose,
  onSubmit,
  type,
  initialData,
}) => {
  const { activeBusinessGroup, activeSite } = useApp();
  const [formData, setFormData] = React.useState<Partial<Task>>(defaultFormData);

  React.useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        id: undefined,
      });
    } else {
      setFormData(defaultFormData);
    }
  }, [initialData, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name as string]: value }));
  };

  const handleFileUpload = (type: 'document' | 'video' | 'audio' | 'image') => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = type === 'document' ? '.pdf,.doc,.docx' :
                   type === 'video' ? '.mp4,.mov,.avi' :
                   type === 'audio' ? '.mp3,.wav' :
                   '.jpg,.jpeg,.png,.gif';
    
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setFormData(prev => ({
          ...prev,
          [`has${type.charAt(0).toUpperCase() + type.slice(1)}`]: true
        }));
      }
    };
    
    input.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const task = {
      ...formData,
      groupId: type === 'group' ? activeBusinessGroup?.id : undefined,
      siteId: type === 'site' ? activeSite?.id : undefined,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    onSubmit(task);
    setFormData(defaultFormData);
    onClose();
  };

  const getTitle = () => {
    if (type === 'group') return 'Create Group Task';
    if (type === 'site') return 'Create Site Task';
    return 'Create Task';
  };

  const FileUploadBox = ({ type, label }: { type: 'document' | 'video' | 'audio' | 'image'; label: string }) => (
    <Paper 
      variant="outlined" 
      sx={{ 
        p: 2, 
        width: '150px',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: '2px dashed #ccc',
        '&:hover': {
          borderColor: '#00498B',
          bgcolor: 'rgba(0, 73, 139, 0.04)',
        },
        bgcolor: formData[`has${type.charAt(0).toUpperCase() + type.slice(1)}` as keyof Task] ? 
          'rgba(0, 73, 139, 0.04)' : 'transparent',
        borderColor: formData[`has${type.charAt(0).toUpperCase() + type.slice(1)}` as keyof Task] ?
          '#00498B' : '#ccc',
      }}
      onClick={() => handleFileUpload(type)}
    >
      <FileUploadIcon sx={{ fontSize: 40, color: '#00498B', mb: 1 }} />
      <Typography>{label}</Typography>
      {formData[`has${type.charAt(0).toUpperCase() + type.slice(1)}` as keyof Task] && (
        <Typography variant="caption" color="primary" sx={{ mt: 1 }}>
          File selected
        </Typography>
      )}
    </Paper>
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontFamily: 'Poppins, sans-serif' }}>
        {getTitle()}
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              required
              name="title"
              label="Title"
              placeholder="Enter a title"
              value={formData.title || ''}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              required
              name="description"
              label="Description"
              placeholder="Add in your description here. What is this task for?"
              value={formData.description || ''}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
            />

            <TextField
              required
              name="instructions"
              label="Instructions"
              placeholder="Add in your instructions here. The exact steps they need to take"
              value={formData.instructions || ''}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
            />

            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Completion Type</InputLabel>
                <Select
                  name="completionType"
                  value={formData.completionType || 'CONFIRM'}
                  onChange={handleChange}
                  label="Completion Type"
                >
                  <MenuItem value="CONFIRM">Confirm</MenuItem>
                  <MenuItem value="COMPLETE">Complete</MenuItem>
                  <MenuItem value="ACCEPT">Accept</MenuItem>
                  <MenuItem value="SIGNATURE">Signature</MenuItem>
                </Select>
              </FormControl>

              <TextField
                required
                name="daysUntilDue"
                label="Days till due"
                type="number"
                value={formData.daysUntilDue || 0}
                onChange={handleChange}
                fullWidth
              />
            </Box>

            <TextField
              name="weblink"
              label="Website Link"
              placeholder="Enter your website link"
              value={formData.weblink || ''}
              onChange={handleChange}
              fullWidth
            />

            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              File Upload
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <FileUploadBox type="document" label="Document" />
              <FileUploadBox type="video" label="Video" />
              <FileUploadBox type="audio" label="Audio" />
              <FileUploadBox type="image" label="Image" />
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
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};