import { useState, useEffect } from 'react';
import { Button, Card, Typography, Box, Grid, CircularProgress } from '@mui/material';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { getDestinations } from '../data/api';

export default function GameBoard({ onScoreUpdate, user, setGameState }) {
  const [destinations, setDestinations] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFunFact, setShowFunFact] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        const data = await getDestinations();
        setDestinations(data);
        setCurrentQuestionIndex(0);
      } catch (error) {
        console.error('Error fetching destinations:', error);
        setError('Failed to load game data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowFunFact(true);

    if (answer === currentDestination.correctAnswer) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      if (user) {
        onScoreUpdate(prev => prev + 10);
      }
    } else {
      if (user) {
        onScoreUpdate(prev => prev - 5);
      }
    }

    // Move to next question after 3 seconds
    setTimeout(() => {
      if (currentQuestionIndex < destinations.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowFunFact(false);
      } else {
        // Game Over
        setGameState('home');
      }
    }, 3000);
  };

  if (loading) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="60vh"
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box 
        display="flex" 
        flexDirection="column"
        justifyContent="center" 
        alignItems="center" 
        minHeight="60vh"
        gap={2}
      >
        <Typography variant="h6" color="error">{error}</Typography>
        <Button 
          variant="contained" 
          onClick={() => window.location.reload()}
        >
          Try Again
        </Button>
      </Box>
    );
  }

  const currentDestination = destinations[currentQuestionIndex];

  if (!currentDestination) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="60vh"
      >
        <Typography variant="h6">No questions available. Please try again later.</Typography>
      </Box>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
          <Typography variant="h5" gutterBottom textAlign="center">
            Question {currentQuestionIndex + 1} of {destinations.length}
          </Typography>
          
          {currentDestination.clues.map((clue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Clue {index + 1}: {clue}
              </Typography>
            </motion.div>
          ))}
          
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={2}>
              {currentDestination.options.map((option) => (
                <Grid key={option} xs={12} md={6}>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      color={selectedAnswer === option ? 
                        (option === currentDestination.correctAnswer ? "success" : "error") 
                        : "primary"}
                      onClick={() => handleAnswer(option)}
                      disabled={selectedAnswer !== null}
                      sx={{ 
                        py: 2,
                        borderRadius: 2,
                        fontSize: '1.1rem'
                      }}
                    >
                      {option}
                    </Button>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          <AnimatePresence>
            {showFunFact && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mt: 4,
                    p: 2,
                    bgcolor: 'background.paper',
                    borderRadius: 2
                  }}
                >
                  Fun Fact: {currentDestination.funFact}
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
