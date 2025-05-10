import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import PublicIcon from '@mui/icons-material/Public';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PsychologyIcon from '@mui/icons-material/Psychology';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Paper
    component={motion.div}
    whileHover={{ y: -10 }}
    sx={{
      p: 3,
      height: '100%',
      background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
      borderRadius: 2,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Icon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
    </Box>
    <Typography color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          sx={{
            textAlign: 'center',
            mb: 8,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Welcome to Globetrotter
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}
          >
            Test your knowledge of world destinations through cryptic clues and unlock fascinating facts about each location.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #0d47a1 30%, #1a237e 90%)',
              },
            }}
          >
            Start Playing
          </Button>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={PublicIcon}
              title="Global Destinations"
              description="Explore hundreds of fascinating places from around the world. Each destination comes with unique clues and interesting facts."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={PsychologyIcon}
              title="Cryptic Clues"
              description="Challenge yourself with cleverly crafted clues that test your knowledge of world landmarks, cultures, and geography."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={EmojiEventsIcon}
              title="Compete & Win"
              description="Track your progress, earn points, and compete with players from around the world on our global leaderboard."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 