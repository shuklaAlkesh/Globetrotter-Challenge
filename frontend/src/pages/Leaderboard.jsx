import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  Tabs,
  Tab,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PublicIcon from '@mui/icons-material/Public';

const LeaderboardTable = ({ data }) => (
  <TableContainer 
    component={Paper} 
    sx={{ 
      borderRadius: 2, 
      overflow: 'hidden',
      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}
  >
    <Table>
      <TableHead>
        <TableRow sx={{ backgroundColor: 'primary.main' }}>
          <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Rank</TableCell>
          <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Player</TableCell>
          <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Score</TableCell>
          <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Destinations</TableCell>
          <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((player, index) => (
          <TableRow
            key={player.id}
            component={motion.tr}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              },
              '& td': {
                color: 'text.primary',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            <TableCell>
              {index < 3 ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmojiEventsIcon sx={{ color: ['#FFD700', '#C0C0C0', '#CD7F32'][index] }} />
                  {index + 1}
                </Box>
              ) : (
                index + 1
              )}
            </TableCell>
            <TableCell>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar src={player.avatar} alt={player.name} />
                <Typography>{player.name}</Typography>
              </Box>
            </TableCell>
            <TableCell>
              <Typography fontWeight="bold" color="primary.main">
                {player.score}
              </Typography>
            </TableCell>
            <TableCell>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PublicIcon sx={{ color: 'primary.main' }} />
                {player.destinations}
              </Box>
            </TableCell>
            <TableCell>
              <Chip
                label={player.status}
                color={player.status === 'Online' ? 'success' : 'default'}
                size="small"
                sx={{
                  backgroundColor: player.status === 'Online' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                  color: player.status === 'Online' ? '#4CAF50' : 'text.secondary',
                }}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const Leaderboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();

  // Mock data - replace with actual data from your backend
  const leaderboardData = [
    { id: 1, name: 'John Doe', score: 9500, destinations: 45, status: 'Online', avatar: null },
    { id: 2, name: 'Jane Smith', score: 8900, destinations: 42, status: 'Offline', avatar: null },
    { id: 3, name: 'Mike Johnson', score: 8500, destinations: 40, status: 'Online', avatar: null },
    { id: 4, name: 'Sarah Wilson', score: 8200, destinations: 38, status: 'Offline', avatar: null },
    { id: 5, name: 'David Brown', score: 8000, destinations: 37, status: 'Online', avatar: null },
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{ mb: 6 }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Global Leaderboard
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textAlign: 'center', mb: 4 }}
          >
            Compete with players from around the world
          </Typography>

          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            sx={{
              mb: 4,
              '& .MuiTab-root': {
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: 'primary.main',
              },
            }}
          >
            <Tab label="Global" />
            <Tab label="Weekly" />
            <Tab label="Monthly" />
          </Tabs>

          <LeaderboardTable data={leaderboardData} />
        </Box>
      </Container>
    </Box>
  );
};

export default Leaderboard; 