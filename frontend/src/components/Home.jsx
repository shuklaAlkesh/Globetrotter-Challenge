import { Typography, Button, Container, Box, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import PublicIcon from '@mui/icons-material/Public';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { useNavigate } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card sx={{ height: '100%', borderRadius: 4, boxShadow: 3 }}>
      <CardContent sx={{ textAlign: 'center', p: 4 }}>
        <Box sx={{ mb: 2 }}>
          <Icon sx={{ fontSize: 40, color: 'primary.main' }} />
        </Box>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          {title}
        </Typography>
        <Typography color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  </motion.div>
);

export default function Home({ onStartGame }) {
  const navigate = useNavigate();

  const handleStartGame = () => {
    onStartGame();
    navigate('/game');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            align="center" 
            gutterBottom 
            sx={{ fontWeight: 'bold' }}
          >
            Explore the world through{' '}
            <span style={{ color: '#2196f3' }}>clues and trivia</span>
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            color="text.secondary" 
            sx={{ mb: 6 }}
          >
            Test your travel knowledge with cryptic clues, uncover fascinating facts, 
            and explore destinations around the globe.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 8 }}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleStartGame}
                startIcon={<ArrowForwardIcon />}
                sx={{ px: 4, py: 1.5, borderRadius: '30px' }}
              >
                Start Game
              </Button>
            </motion.div>
          </Box>
        </motion.div>

        {/* Features Section */}
        <Box id="features" sx={{ mb: 8, scrollMarginTop: '64px' }}>
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            sx={{ fontWeight: 'bold', mb: 4 }}
          >
            Why You'll Love Globetrotter
          </Typography>
          <Box className="feature-grid">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FeatureCard
                icon={PsychologyIcon}
                title="Cryptic Clues"
                description="Test your knowledge with cleverly crafted clues about famous landmarks and destinations."
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FeatureCard
                icon={PublicIcon}
                title="Global Destinations"
                description="Explore hundreds of fascinating places from around the world, from famous landmarks to hidden gems."
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FeatureCard
                icon={EmojiEventsIcon}
                title="Unlock Facts & Trivia"
                description="With each correct guess, unlock interesting facts and surprising trivia about each destination."
              />
            </motion.div>
          </Box>
        </Box>

        {/* How to Play Section */}
        <Box id="how-to-play" sx={{ mb: 8, scrollMarginTop: '64px' }}>
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            sx={{ fontWeight: 'bold', mb: 4 }}
          >
            How to Play
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid xs={12} md={4}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    borderRadius: 4, 
                    boxShadow: 3,
                    bgcolor: 'background.paper',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Typography 
                      variant="h2" 
                      color="primary" 
                      sx={{ mb: 2, fontWeight: 'bold' }}
                    >
                      1
                    </Typography>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      Sign Up
                    </Typography>
                    <Typography color="text.secondary">
                      Create your account with your name and age to start your journey
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid xs={12} md={4}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    borderRadius: 4, 
                    boxShadow: 3,
                    bgcolor: 'background.paper',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Typography 
                      variant="h2" 
                      color="primary" 
                      sx={{ mb: 2, fontWeight: 'bold' }}
                    >
                      2
                    </Typography>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      Read Clues
                    </Typography>
                    <Typography color="text.secondary">
                      Carefully read the clues and choose from multiple options
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid xs={12} md={4}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    borderRadius: 4, 
                    boxShadow: 3,
                    bgcolor: 'background.paper',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Typography 
                      variant="h2" 
                      color="primary" 
                      sx={{ mb: 2, fontWeight: 'bold' }}
                    >
                      3
                    </Typography>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      Score Points
                    </Typography>
                    <Typography color="text.secondary">
                      Earn points and learn fascinating facts about each destination
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        {/* Leaderboard Section */}
        <Box id="leaderboard" sx={{ mb: 8, scrollMarginTop: '64px' }}>
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom 
            sx={{ fontWeight: 'bold', mb: 4 }}
          >
            Leaderboard
          </Typography>
          <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
            <CardContent sx={{ textAlign: 'center', p: 4 }}>
              <LeaderboardIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Compete with Global Players
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Track your progress and compare scores with players worldwide
              </Typography>
              <Button 
                variant="outlined" 
                color="primary"
                onClick={handleStartGame}
                sx={{ borderRadius: '30px' }}
              >
                Join the Competition
              </Button>
            </CardContent>
          </Card>
        </Box>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', py: 8, bgcolor: 'background.paper', borderRadius: 4 }}>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              Ready to Challenge Yourself?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Join thousands of explorers sharpening their travel smarts through fun clues and surprising facts.
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleStartGame}
                sx={{ px: 6, py: 2, borderRadius: '30px' }}
              >
                Start Your Journey
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
}
