import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Container, Box, TextField, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import ChallengePopup from './ChallengePopup';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './UserProfile.css';

const UserProfile = ({ onUserRegistered }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already registered
    const savedUsername = localStorage.getItem('username');
    const savedAge = localStorage.getItem('age');
    if (savedUsername) {
      setUsername(savedUsername);
      setAge(savedAge || '');
      setIsRegistered(true);
    }
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    if (username.trim() && age.trim()) {
      localStorage.setItem('username', username);
      localStorage.setItem('age', age);
      setIsRegistered(true);
      if (onUserRegistered) {
        onUserRegistered({ 
          username: username.trim(),
          age: parseInt(age.trim(), 10)
        });
      }
    }
  };

  const handleChallengeFriend = () => {
    setShowSharePopup(true);
  };

  const handlePlayGame = () => {
    if (isRegistered) {
      // Set game state to playing and navigate
      if (onUserRegistered) {
        onUserRegistered({ 
          username: username,
          age: parseInt(age, 10)
        });
      }
      navigate('/game');
    } else {
      // If not registered, show registration form
      setIsRegistered(false);
    }
  };

  if (!isRegistered) {
    return (
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card sx={{ mt: 4, borderRadius: 4, boxShadow: 3 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography 
                variant="h4" 
                component="h2" 
                align="center" 
                gutterBottom 
                sx={{ fontWeight: 'bold', mb: 3 }}
              >
                Welcome to Globetrotter!
              </Typography>
              <form onSubmit={handleRegister}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                    fullWidth
                    variant="outlined"
                    inputProps={{ min: 1, max: 120 }}
                    sx={{ mb: 2 }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{ 
                      py: 1.5, 
                      borderRadius: '30px',
                      fontSize: '1.1rem'
                    }}
                  >
                    Start Your Journey
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
                  Welcome, {username}!
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Ready to test your geography knowledge? Choose an option below to get started!
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    onClick={handlePlayGame}
                    variant="contained"
                    size="large"
                    startIcon={<PlayArrowIcon />}
                    sx={{ 
                      px: 4, 
                      py: 1.5, 
                      borderRadius: '30px',
                      fontSize: '1.1rem',
                      flex: { xs: '1 1 100%', sm: '0 1 auto' }
                    }}
                  >
                    Play Game
                  </Button>
                  <Button
                    onClick={handleChallengeFriend}
                    variant="outlined"
                    size="large"
                    sx={{ 
                      px: 4, 
                      py: 1.5, 
                      borderRadius: '30px',
                      fontSize: '1.1rem',
                      flex: { xs: '1 1 100%', sm: '0 1 auto' }
                    }}
                  >
                    Challenge a Friend
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </motion.div>

        {showSharePopup && (
          <ChallengePopup 
            username={username} 
            onClose={() => setShowSharePopup(false)} 
          />
        )}
      </Box>
    </Container>
  );
};

export default UserProfile; 