import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PublicIcon from '@mui/icons-material/Public';
import PsychologyIcon from '@mui/icons-material/Psychology';
import StarIcon from '@mui/icons-material/Star';
import ExploreIcon from '@mui/icons-material/Explore';
import TimerIcon from '@mui/icons-material/Timer';

const AchievementCard = ({ icon: Icon, title, description, progress, status }) => (
  <Paper
    component={motion.div}
    whileHover={{ y: -5 }}
    sx={{
      p: { xs: 2, sm: 2.5 },
      height: '100%',
      minHeight: { xs: '180px', sm: '200px' },
      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
      borderRadius: 3,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
    }}
  >
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'flex-start', 
      mb: 2,
      gap: 2,
    }}>
      <Box
        sx={{
          width: { xs: 40, sm: 48 },
          height: { xs: 40, sm: 48 },
          minWidth: { xs: 40, sm: 48 },
          borderRadius: '50%',
          backgroundColor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon sx={{ fontSize: { xs: 24, sm: 28 }, color: 'white' }} />
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography 
          variant="h6" 
          fontWeight="bold"
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem' },
            mb: 1,
            lineHeight: 1.2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>
        <Chip
          label={status}
          color={status === 'Completed' ? 'success' : 'primary'}
          size="small"
          sx={{
            height: '24px',
            fontSize: '0.75rem',
            backgroundColor: status === 'Completed' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(33, 150, 243, 0.2)',
            color: status === 'Completed' ? '#4CAF50' : 'primary.main',
          }}
        />
      </Box>
    </Box>
    <Typography 
      color="text.secondary" 
      sx={{ 
        mb: 2,
        fontSize: { xs: '0.9rem', sm: '1rem' },
        flex: 1,
        lineHeight: 1.5,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
      }}
    >
      {description}
    </Typography>
    <Box sx={{ 
      mt: 'auto',
      pt: 2,
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        mb: 1,
        alignItems: 'center',
      }}>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}
        >
          Progress
        </Typography>
        <Typography 
          variant="body2" 
          color="primary.main" 
          fontWeight="bold"
          sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}
        >
          {progress}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: { xs: 6, sm: 8 },
          borderRadius: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          '& .MuiLinearProgress-bar': {
            borderRadius: 4,
            background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
          },
        }}
      />
    </Box>
  </Paper>
);

const Achievements = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const achievements = [
    {
      id: 1,
      title: 'World Explorer',
      description: 'Visit 50 different destinations around the world',
      progress: 75,
      status: 'In Progress',
      icon: ExploreIcon,
    },
    {
      id: 2,
      title: 'Quick Thinker',
      description: 'Solve 100 clues in under 30 seconds each',
      progress: 100,
      status: 'Completed',
      icon: TimerIcon,
    },
    {
      id: 3,
      title: 'Geography Master',
      description: 'Correctly identify 200 landmarks',
      progress: 60,
      status: 'In Progress',
      icon: PublicIcon,
    },
    {
      id: 4,
      title: 'Puzzle Solver',
      description: 'Complete 50 cryptic clue challenges',
      progress: 90,
      status: 'In Progress',
      icon: PsychologyIcon,
    },
    {
      id: 5,
      title: 'Top Player',
      description: 'Reach the top 10 on the global leaderboard',
      progress: 100,
      status: 'Completed',
      icon: StarIcon,
    },
    {
      id: 6,
      title: 'Achievement Hunter',
      description: 'Unlock 25 different achievements',
      progress: 40,
      status: 'In Progress',
      icon: EmojiEventsIcon,
    },
  ];

  // Split achievements into two rows
  const firstRow = achievements.slice(0, 3);
  const secondRow = achievements.slice(3);

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      py: { xs: 3, sm: 6 },
      px: { xs: 1, sm: 2, md: 4 }
    }}>
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{ mb: { xs: 3, sm: 4 } }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              textAlign: 'center',
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
              background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Your Achievements
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ 
              textAlign: 'center', 
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: '0.9rem', sm: '1.1rem' },
              px: { xs: 2, sm: 0 }
            }}
          >
            Track your progress and unlock new achievements
          </Typography>

          {/* First Row */}
          <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} sx={{ mb: { xs: 4, sm: 5, md: 6 } }}>
            {firstRow.map((achievement) => (
              <Grid item xs={12} sm={6} md={4} key={achievement.id}>
                <AchievementCard {...achievement} />
              </Grid>
            ))}
          </Grid>

          {/* Second Row */}
          <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
            {secondRow.map((achievement) => (
              <Grid item xs={12} sm={6} md={4} key={achievement.id}>
                <AchievementCard {...achievement} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Achievements; 