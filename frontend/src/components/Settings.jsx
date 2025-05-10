import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Slider,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import TimerIcon from '@mui/icons-material/Timer';
import PaletteIcon from '@mui/icons-material/Palette';

export default function Settings({ open, onClose, settings, onSettingsChange }) {
  const [localSettings, setLocalSettings] = useState(settings);

  const handleChange = (key, value) => {
    const newSettings = { ...localSettings, [key]: value };
    setLocalSettings(newSettings);
    onSettingsChange(newSettings);
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 4,
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1,
        color: '#fff',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <SettingsIcon />
        Game Settings
      </DialogTitle>

      <DialogContent sx={{ mt: 2 }}>
        {/* Sound Settings */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: '#fff', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <VolumeUpIcon />
            Sound Settings
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={localSettings.soundEnabled}
                onChange={(e) => handleChange('soundEnabled', e.target.checked)}
                color="primary"
              />
            }
            label="Enable Sound Effects"
            sx={{ color: '#fff' }}
          />
          <Box sx={{ mt: 2 }}>
            <Typography gutterBottom sx={{ color: '#fff' }}>
              Sound Volume
            </Typography>
            <Slider
              value={localSettings.soundVolume}
              onChange={(_, value) => handleChange('soundVolume', value)}
              min={0}
              max={100}
              valueLabelDisplay="auto"
              sx={{
                color: '#2196f3',
                '& .MuiSlider-thumb': {
                  '&:hover, &.Mui-focusVisible': {
                    boxShadow: '0 0 0 8px rgba(33, 150, 243, 0.16)',
                  },
                },
              }}
            />
          </Box>
        </Box>

        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Game Settings */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ color: '#fff', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <TimerIcon />
            Game Settings
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Typography gutterBottom sx={{ color: '#fff' }}>
              Question Timer (seconds)
            </Typography>
            <Slider
              value={localSettings.questionTimer}
              onChange={(_, value) => handleChange('questionTimer', value)}
              min={10}
              max={60}
              step={5}
              valueLabelDisplay="auto"
              sx={{
                color: '#2196f3',
                '& .MuiSlider-thumb': {
                  '&:hover, &.Mui-focusVisible': {
                    boxShadow: '0 0 0 8px rgba(33, 150, 243, 0.16)',
                  },
                },
              }}
            />
          </Box>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel sx={{ color: '#fff' }}>Difficulty Level</InputLabel>
            <Select
              value={localSettings.difficulty}
              onChange={(e) => handleChange('difficulty', e.target.value)}
              label="Difficulty Level"
              sx={{
                color: '#fff',
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.23)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2196f3',
                },
              }}
            >
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="hard">Hard</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Theme Settings */}
        <Box>
          <Typography variant="h6" sx={{ color: '#fff', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <PaletteIcon />
            Theme Settings
          </Typography>
          <FormControl fullWidth>
            <InputLabel sx={{ color: '#fff' }}>Theme</InputLabel>
            <Select
              value={localSettings.theme}
              onChange={(e) => handleChange('theme', e.target.value)}
              label="Theme"
              sx={{
                color: '#fff',
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.23)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2196f3',
                },
              }}
            >
              <MenuItem value="dark">Dark</MenuItem>
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="blue">Ocean Blue</MenuItem>
              <MenuItem value="purple">Royal Purple</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <Button 
          onClick={onClose}
          variant="outlined"
          sx={{
            color: '#fff',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            '&:hover': {
              borderColor: '#fff',
              background: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          Close
        </Button>
        <Button 
          onClick={() => {
            onSettingsChange(localSettings);
            onClose();
          }}
          variant="contained"
          sx={{
            background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
            color: '#fff',
            '&:hover': {
              background: 'linear-gradient(45deg, #1976d2 30%, #1E88E5 90%)',
            },
          }}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
} 