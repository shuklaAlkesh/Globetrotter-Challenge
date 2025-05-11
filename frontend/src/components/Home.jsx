import { Typography, Button, Container, Box, Grid, Card, CardContent, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import PublicIcon from '@mui/icons-material/Public';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { useNavigate } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import ChallengePopup from './ChallengePopup';
import { useState } from 'react';

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
  const [openShareDialog, setOpenShareDialog] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const username = localStorage.getItem('username') || 'Player';

  const handleStartGame = () => {
    onStartGame();
    navigate('/game');
  };

  const handleShareClick = () => {
    setShowSharePopup(true);
  };

  const handleCloseShareDialog = () => {
    setOpenShareDialog(false);
  };

  const handleWhatsAppShare = () => {
    const shareText = "Join me in exploring the world through clues and trivia! Challenge me on Globetrotter: ";
    const shareUrl = window.location.origin;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + shareUrl)}`;
    window.open(whatsappUrl, '_blank');
    handleCloseShareDialog();
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
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="outlined"
                size="large"
                onClick={handleShareClick}
                startIcon={<PersonAddIcon />}
                sx={{ 
                  px: 4, 
                  py: 1.5, 
                  borderRadius: '30px',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.light',
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                  }
                }}
              >
                Challenge a Friend
              </Button>
            </motion.div>
          </Box>

          {showSharePopup && (
            <ChallengePopup 
              username={username} 
              onClose={() => setShowSharePopup(false)} 
            />
          )}

          {/* Share Dialog */}
          <Dialog 
            open={openShareDialog} 
            onClose={handleCloseShareDialog}
            PaperProps={{
              sx: {
                borderRadius: 3,
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }
            }}
          >
            <DialogTitle sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              pb: 1
            }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Challenge Your Friends!
              </Typography>
              <IconButton onClick={handleCloseShareDialog} size="small">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Share Globetrotter with your friends and challenge them to beat your score!
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                  onClick={handleWhatsAppShare}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '30px',
                    background: 'linear-gradient(45deg, #25D366 30%, #128C7E 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #128C7E 30%, #075E54 90%)',
                    }
                  }}
                >
                  Share on WhatsApp
                </Button>
              </Box>
            </DialogContent>
          </Dialog>
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
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 4,
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '2.5rem' },
              background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            How to Play
          </Typography>
          <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} justifyContent="center">
            {/* Top Row - Two Cards */}
            <Grid item xs={12} sm={6} md={5}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    minHeight: { xs: '200px', sm: '220px' },
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 4,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      '& .icon-container': {
                        transform: 'scale(1.1)',
                        backgroundColor: 'rgba(33, 150, 243, 0.2)',
                      },
                      '& .card-content': {
                        transform: 'translateY(-5px)',
                      },
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #2196f3, #1976d2)',
                      opacity: 0.8,
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, sm: 3.5 } }} className="card-content">
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: 3,
                      gap: 2.5,
                    }}>
                      <Box
                        className="icon-container"
                        sx={{
                          width: { xs: 56, sm: 64 },
                          height: { xs: 56, sm: 64 },
                          minWidth: { xs: 56, sm: 64 },
                          borderRadius: '16px',
                          background: 'linear-gradient(145deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.3s ease-in-out',
                          border: '1px solid rgba(33, 150, 243, 0.2)',
                        }}
                      >
                        <PersonAddIcon sx={{ fontSize: { xs: 28, sm: 32 }, color: 'primary.main' }} />
                      </Box>
                      <Box>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 'bold', 
                            color: '#fff',
                            fontSize: { xs: '1.2rem', sm: '1.35rem' },
                            mb: 0.5,
                          }}
                        >
                          1. Sign Up
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'text.secondary',
                            opacity: 0.8,
                            fontSize: { xs: '0.85rem', sm: '0.9rem' },
                          }}
                        >
                          Create your account
                        </Typography>
                      </Box>
                    </Box>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ 
                        fontSize: { xs: '0.95rem', sm: '1.05rem' },
                        lineHeight: 1.7,
                        opacity: 0.9,
                      }}
                    >
                      Create your account to start your journey. Track your progress and compete on the global leaderboard.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    minHeight: { xs: '200px', sm: '220px' },
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 4,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      '& .icon-container': {
                        transform: 'scale(1.1)',
                        backgroundColor: 'rgba(33, 150, 243, 0.2)',
                      },
                      '& .card-content': {
                        transform: 'translateY(-5px)',
                      },
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #2196f3, #1976d2)',
                      opacity: 0.8,
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, sm: 3.5 } }} className="card-content">
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: 3,
                      gap: 2.5,
                    }}>
                      <Box
                        className="icon-container"
                        sx={{
                          width: { xs: 56, sm: 64 },
                          height: { xs: 56, sm: 64 },
                          minWidth: { xs: 56, sm: 64 },
                          borderRadius: '16px',
                          background: 'linear-gradient(145deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.3s ease-in-out',
                          border: '1px solid rgba(33, 150, 243, 0.2)',
                        }}
                      >
                        <SearchIcon sx={{ fontSize: { xs: 28, sm: 32 }, color: 'primary.main' }} />
                      </Box>
                      <Box>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 'bold', 
                            color: '#fff',
                            fontSize: { xs: '1.2rem', sm: '1.35rem' },
                            mb: 0.5,
                          }}
                        >
                          2. Read Clues
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'text.secondary',
                            opacity: 0.8,
                            fontSize: { xs: '0.85rem', sm: '0.9rem' },
                          }}
                        >
                          Analyze the hints
                        </Typography>
                      </Box>
                    </Box>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ 
                        fontSize: { xs: '0.95rem', sm: '1.05rem' },
                        lineHeight: 1.7,
                        opacity: 0.9,
                      }}
                    >
                      Read the clues carefully and use your knowledge to identify the correct location or landmark.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            {/* Bottom Row - One Centered Card */}
            <Grid item xs={12} sm={8} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    minHeight: { xs: '200px', sm: '220px' },
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 4,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      '& .icon-container': {
                        transform: 'scale(1.1)',
                        backgroundColor: 'rgba(33, 150, 243, 0.2)',
                      },
                      '& .card-content': {
                        transform: 'translateY(-5px)',
                      },
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #2196f3, #1976d2)',
                      opacity: 0.8,
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, sm: 3.5 } }} className="card-content">
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: 3,
                      gap: 2.5,
                    }}>
                      <Box
                        className="icon-container"
                        sx={{
                          width: { xs: 56, sm: 64 },
                          height: { xs: 56, sm: 64 },
                          minWidth: { xs: 56, sm: 64 },
                          borderRadius: '16px',
                          background: 'linear-gradient(145deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.3s ease-in-out',
                          border: '1px solid rgba(33, 150, 243, 0.2)',
                        }}
                      >
                        <EmojiEventsIcon sx={{ fontSize: { xs: 28, sm: 32 }, color: 'primary.main' }} />
                      </Box>
                      <Box>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 'bold', 
                            color: '#fff',
                            fontSize: { xs: '1.2rem', sm: '1.35rem' },
                            mb: 0.5,
                          }}
                        >
                          3. Score Points
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'text.secondary',
                            opacity: 0.8,
                            fontSize: { xs: '0.85rem', sm: '0.9rem' },
                          }}
                        >
                          Climb the ranks
                        </Typography>
                      </Box>
                    </Box>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ 
                        fontSize: { xs: '0.95rem', sm: '1.05rem' },
                        lineHeight: 1.7,
                        opacity: 0.9,
                      }}
                    >
                      Earn points for correct answers and climb the global leaderboard. Compete with players worldwide!
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
