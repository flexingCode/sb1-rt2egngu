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
  Paper,
} from '@mui/material';
import { Upload } from 'lucide-react';
import { useApp } from '../../../contexts/AppContext';
import type { Task } from '../../../types/task';

interface CreateTaskDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (task: Partial<Task>) => void;
  type: 'group' | 'site';
}

export const CreateTaskDialog: React.FC<CreateTaskDialogProps> = ({
  open,
  onClose,
  onSubmit,
  type,
}) => {
  const { activeBusinessGroup, activeSite } = useApp();
  const [formData, setFormData] = React.useState<Partial<Task>>({
    title: '',
    description: '',
    instructions: '',
    daysUntilDue: 0,
    completionType: 'CONFIRM',
    weblink: '',
    hasDocument: false,
    hasImage: false,
    hasVideo: false,
    hasAudio: false,
    status: 'active',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name as string]: value }));
  };

  const handleFileUpload = (fileType: 'document' | 'video' | 'audio' | 'image') => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = fileType === 'document' ? '.pdf,.doc,.docx' :
                   fileType === 'video' ? '.mp4,.mov,.avi' :
                   fileType === 'audio' ? '.mp3,.wav' :
                   '.jpg,.jpeg,.png,.gif';
    
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setFormData(prev => ({
          ...prev,
          [`has${fileType.charAt(0).toUpperCase() + fileType.slice(1)}`]: true
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
    onClose();
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
      <Upload size={24} color="#00498B" />
      <Typography sx={{ mt: 1 }}>{label}</Typography>
      {formData[`has${type.charAt(0).toUpperCase() + type.slice(1)}` as keyof Task] && (
        <Typography variant="caption" color="primary" sx={{ mt: 1 }}>
          File selected
        </Typography>
      )}
    </Paper>
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontFamily: 'Poppins, sans-serif', p: 3 }}>
        Create {type === 'group' ? 'Group' : 'Site'} Task
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              required
              name="title"
              label="Title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
            />

            <TextField
              required
              name="description"
              label="Description"
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
            />

            <TextField
              required
              name="instructions"
              label="Instructions"
              value={formData.instructions}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
            />

            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormControl fullWidth>
                <Select
                  name="completionType"
                  value={formData.completionType}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ borderRadius: 1 }}
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
                value={formData.daysUntilDue}
                onChange={handleChange}
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
              />
            </Box>

            <TextField
              name="weblink"
              label="Website Link"
              value={formData.weblink}
              onChange={handleChange}
              fullWidth
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
            />

            <Box>
              <Typography variant="subtitle1" gutterBottom>
                File Upload
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <FileUploadBox type="document" label="Document" />
                <FileUploadBox type="video" label="Video" />
                <FileUploadBox type="audio" label="Audio" />
                <FileUploadBox type="image" label="Image" />
              </Box>
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
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};