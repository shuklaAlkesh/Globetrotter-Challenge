import { useState, useEffect } from 'react';
import { Button, Card, Typography, Box, Grid, CircularProgress, Container, LinearProgress, Tooltip, IconButton } from '@mui/material';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { getDestinations } from '../data/api';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import TimerIcon from '@mui/icons-material/Timer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import Settings from './Settings';

export default function GameBoard({ onScoreUpdate, user, setGameState }) {
  const [destinations, setDestinations] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFunFact, setShowFunFact] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds per question
  const [showHint, setShowHint] = useState(false);
  const [streak, setStreak] = useState(0);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState({
    soundEnabled: true,
    soundVolume: 70,
    questionTimer: 30,
    difficulty: 'medium',
    theme: 'dark'
  });
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  // Timer effect
  useEffect(() => {
    if (selectedAnswer === null && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [selectedAnswer, timeLeft]);

  // Reset timer for new question
  useEffect(() => {
    setTimeLeft(30);
    setShowHint(false);
  }, [currentQuestionIndex]);

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('gameSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Save settings to localStorage when they change
  const handleSettingsChange = (newSettings) => {
    setSettings(newSettings);
    localStorage.setItem('gameSettings', JSON.stringify(newSettings));
  };

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getDestinations();
        if (data && data.length > 0) {
          setDestinations(data);
          setCurrentQuestionIndex(0);
          setSelectedAnswer(null);
          setShowFunFact(false);
          setFeedbackMessage('');
        } else {
          setError('No questions available. Please try again later.');
        }
      } catch (error) {
        console.error('Error fetching destinations:', error);
        setError(error.message || 'Failed to load game data. Please try again.');
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
      // Play correct answer sound if enabled
      if (settings.soundEnabled) {
        const audio = new Audio('/sounds/correct.mp3');
        audio.volume = settings.soundVolume / 100;
        audio.play().catch(() => {}); // Ignore errors if sound fails to play
      }

      // Update streak and correct answers count
      setStreak(prev => prev + 1);
      setCorrectAnswers(prev => prev + 1);
      
      // Calculate new score with fixed bonuses
      const basePoints = 10;
      const streakBonus = Math.floor(streak / 3) * 5; // 5 bonus points every 3 correct answers
      const timeBonus = Math.min(Math.floor(timeLeft / 5), 5); // Max 5 points for time bonus
      const newScore = currentScore + basePoints + streakBonus + timeBonus;
      
      // Update score
      setCurrentScore(newScore);
      if (onScoreUpdate) {
        onScoreUpdate(newScore);
      }

      // Happy confetti for correct answer
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4CAF50', '#45a049', '#81C784'],
        shapes: ['star'],
        scalar: 1.2,
      });

      // Random encouraging messages for correct answers
      const correctMessages = [
        "Excellent! You're a geography genius! 🌟",
        "Perfect! Your knowledge is impressive! 🎯",
        "Outstanding! You're on fire! 🔥",
        "Brilliant! You're crushing it! 💪",
        "Amazing! You're a true globetrotter! 🌍"
      ];
      setFeedbackMessage(correctMessages[Math.floor(Math.random() * correctMessages.length)]);
    } else {
      // Play wrong answer sound if enabled
      if (settings.soundEnabled) {
        const audio = new Audio('/sounds/wrong.mp3');
        audio.volume = settings.soundVolume / 100;
        audio.play().catch(() => {}); // Ignore errors if sound fails to play
      }

      // Reset streak and update incorrect answers count
      setStreak(0);
      setIncorrectAnswers(prev => prev + 1);
      
      // Calculate penalty
      const penalty = 5;
      const newScore = Math.max(0, currentScore - penalty); // Ensure score doesn't go below 0
      
      // Update score
      setCurrentScore(newScore);
      if (onScoreUpdate) {
        onScoreUpdate(newScore);
      }

      // Sad emoji confetti for wrong answer
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f44336', '#e53935', '#ef5350'],
        shapes: ['circle'],
        scalar: 1.5,
        ticks: 200,
        gravity: 1.5,
        decay: 0.9,
        startVelocity: 30,
      });

      // Encouraging messages for wrong answers
      const wrongMessages = [
        "Not quite, but don't give up! You're learning! 📚",
        "Close one! Keep going, you're getting better! 💫",
        "That's okay! Every mistake is a chance to learn! 🌱",
        "Nice try! You're still doing great! 🎯",
        "Keep exploring! The world is full of wonders! 🌍"
      ];
      setFeedbackMessage(wrongMessages[Math.floor(Math.random() * wrongMessages.length)]);
    }

    // Move to next question after 3 seconds
    setTimeout(() => {
      if (currentQuestionIndex < destinations.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowFunFact(false);
        setFeedbackMessage('');
      } else {
        // Game Over
        setGameState('home');
      }
    }, 3000);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < destinations.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFunFact(false);
      setFeedbackMessage('');
      setTimeLeft(30);
      setShowHint(false);
    } else {
      // Game Over
      setGameState('home');
    }
  };

  const handlePlayAgain = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFunFact(false);
    setFeedbackMessage('');
    setTimeLeft(30);
    setShowHint(false);
    setStreak(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setCurrentScore(0); // Reset score when playing again
    if (onScoreUpdate) {
      onScoreUpdate(0);
    }
  };

  if (loading) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minHeight="100vh"
        sx={{
          background: 'linear-gradient(145deg, #1a237e 0%, #0d47a1 100%)',
        }}
      >
        <CircularProgress size={60} sx={{ color: '#fff' }} />
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
        minHeight="100vh"
        gap={2}
        sx={{
          background: 'linear-gradient(145deg, #1a237e 0%, #0d47a1 100%)',
          color: 'white',
          padding: 2,
          textAlign: 'center'
        }}
      >
        <Typography variant="h5" color="error">
          {error}
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
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
        minHeight="100vh"
        sx={{
          background: 'linear-gradient(145deg, #1a237e 0%, #0d47a1 100%)',
        }}
      >
        <CircularProgress size={60} sx={{ color: '#fff' }} />
      </Box>
    );
  }

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'transparent',
      py: 4
    }}>
      <Container maxWidth="md">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentQuestionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
            <Card 
              elevation={3}
              sx={{ 
                p: { xs: 2, md: 4 }, 
                borderRadius: 4,
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Settings Button */}
              <IconButton
                onClick={() => setSettingsOpen(true)}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  color: '#fff',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                <SettingsIcon />
              </IconButton>

              {/* Progress Bar */}
              <Box sx={{ width: '100%', mb: 3 }}>
                <LinearProgress 
                  variant="determinate" 
                  value={(currentQuestionIndex / destinations.length) * 100}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
                    }
                  }}
                />
              </Box>

              {/* Updated Stats Bar */}
              <Box sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3,
                gap: 2
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <EmojiEventsIcon sx={{ color: '#fff', fontSize: 28 }} />
                  </motion.div>
                  <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
                    Score: {currentScore}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    background: 'rgba(76, 175, 80, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    border: '1px solid rgba(76, 175, 80, 0.3)'
                  }}>
                    <SentimentVerySatisfiedIcon sx={{ color: '#4CAF50', fontSize: 24 }} />
                    <Typography variant="body1" sx={{ color: '#4CAF50', fontWeight: 600 }}>
                      Correct: {correctAnswers}
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    background: 'rgba(244, 67, 54, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    border: '1px solid rgba(244, 67, 54, 0.3)'
                  }}>
                    <SentimentVeryDissatisfiedIcon sx={{ color: '#f44336', fontSize: 24 }} />
                    <Typography variant="body1" sx={{ color: '#f44336', fontWeight: 600 }}>
                      Incorrect: {incorrectAnswers}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TimerIcon sx={{ color: timeLeft < 10 ? '#f44336' : '#fff', fontSize: 28 }} />
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: timeLeft < 10 ? '#f44336' : '#fff',
                      fontWeight: 'bold',
                      animation: timeLeft < 10 ? 'pulse 1s infinite' : 'none'
                    }}
                  >
                    {timeLeft}s
                  </Typography>
                </Box>

                {streak > 0 && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TrendingUpIcon sx={{ color: '#4CAF50', fontSize: 28 }} />
                    <Typography variant="h6" sx={{ color: '#4CAF50', fontWeight: 'bold' }}>
                      Streak: {streak}x
                    </Typography>
                  </Box>
                )}
              </Box>

              {/* Question Counter */}
              <Typography 
                variant="h4" 
                gutterBottom 
                textAlign="center"
                sx={{ 
                  fontWeight: 'bold',
                  mb: 4,
                  mt: 2,
                  background: 'linear-gradient(45deg, #fff 30%, #e3f2fd 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
            Question {currentQuestionIndex + 1} of {destinations.length}
          </Typography>
          
              {/* Clues Section */}
              <Box sx={{ mb: 4 }}>
          {currentDestination.clues.map((clue, index) => (
            <motion.div
              key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
                    <Card
                      elevation={1}
                      sx={{
                        p: 2,
                        mb: 2,
                        borderRadius: 4,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                          background: 'rgba(255, 255, 255, 0.08)',
                        }
                      }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <LocationOnIcon sx={{ color: '#fff', fontSize: 28 }} />
                      </motion.div>
                      <Typography variant="h6" sx={{ fontWeight: 500, color: '#fff' }}>
                Clue {index + 1}: {clue}
              </Typography>
                    </Card>
            </motion.div>
          ))}
              </Box>

              {/* Hint Button */}
              {!showHint && !selectedAnswer && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                  <Tooltip title="Get a hint (costs 5 points)">
                    <Button
                      variant="outlined"
                      startIcon={<HelpOutlineIcon />}
                      onClick={() => {
                        setShowHint(true);
                        if (user) {
                          onScoreUpdate(user.score - 5);
                        }
                      }}
                      sx={{
                        borderRadius: '30px',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        color: '#fff',
                        '&:hover': {
                          borderColor: '#fff',
                          background: 'rgba(255, 255, 255, 0.1)',
                        }
                      }}
                    >
                      Need a Hint?
                    </Button>
                  </Tooltip>
                </Box>
              )}

              {/* Hint Display */}
              {showHint && !selectedAnswer && (
                <Box
                  sx={{
                    mb: 3,
                    p: 2,
                    borderRadius: 2,
                    background: 'rgba(33, 150, 243, 0.1)',
                    border: '1px solid rgba(33, 150, 243, 0.3)',
                  }}
                >
                  <Typography variant="body1" sx={{ color: '#fff', textAlign: 'center' }}>
                    Hint: The answer is in {currentDestination.country}
                  </Typography>
                </Box>
              )}

              <Box sx={{ 
                mt: 4,
                display: 'flex',
                justifyContent: 'center'
              }}>
                <Grid container spacing={2} maxWidth="md">
                  {currentDestination.options.map((option) => (
                    <Grid key={option} item xs={12} md={6}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                    <Button
                      fullWidth
                          variant={selectedAnswer === option ? 
                            (option === currentDestination.correctAnswer ? "contained" : "contained") 
                            : "outlined"}
                      color={selectedAnswer === option ? 
                        (option === currentDestination.correctAnswer ? "success" : "error") 
                        : "primary"}
                      onClick={() => handleAnswer(option)}
                      disabled={selectedAnswer !== null}
                      sx={{ 
                            py: 2.5,
                            borderRadius: '30px',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            background: selectedAnswer === option ? 
                              (option === currentDestination.correctAnswer ? 
                                'linear-gradient(45deg, #4caf50 30%, #45a049 90%)' : 
                                'linear-gradient(45deg, #f44336 30%, #e53935 90%)') :
                              'transparent',
                            border: '2px solid rgba(255, 255, 255, 0.2)',
                            color: selectedAnswer === option ? 'white' : '#fff',
                            boxShadow: selectedAnswer === option ? 
                              '0 8px 16px rgba(0, 0, 0, 0.3)' : 
                              '0 4px 8px rgba(0, 0, 0, 0.2)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
                              background: selectedAnswer === option ? 
                                (option === currentDestination.correctAnswer ? 
                                  'linear-gradient(45deg, #4caf50 30%, #45a049 90%)' : 
                                  'linear-gradient(45deg, #f44336 30%, #e53935 90%)') :
                                'rgba(255, 255, 255, 0.1)',
                            }
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
                    transition={{ duration: 0.5 }}
              >
                    <Card
                      elevation={2}
                  sx={{ 
                    mt: 4,
                        p: 3,
                        borderRadius: 4,
                        background: 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2,
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                          background: 'rgba(255, 255, 255, 0.08)',
                        }
                      }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <LightbulbIcon sx={{ color: '#fff', fontSize: 28 }} />
                      </motion.div>
                      <Box>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            mb: 1, 
                            fontWeight: 600,
                            color: '#fff'
                          }}
                        >
                          Did You Know?
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#fff' }}>
                          {currentDestination.funFact}
                        </Typography>
                      </Box>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Add feedback message */}
              <AnimatePresence>
                {feedbackMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        mb: 3,
                        p: 2,
                        borderRadius: 2,
                        background: selectedAnswer === currentDestination?.correctAnswer
                          ? 'rgba(76, 175, 80, 0.1)'
                          : 'rgba(244, 67, 54, 0.1)',
                        border: '1px solid',
                        borderColor: selectedAnswer === currentDestination?.correctAnswer
                          ? 'rgba(76, 175, 80, 0.3)'
                          : 'rgba(244, 67, 54, 0.3)',
                      }}
                    >
                      {selectedAnswer === currentDestination?.correctAnswer ? (
                        <SentimentVerySatisfiedIcon sx={{ color: '#4CAF50', fontSize: 28 }} />
                      ) : (
                        <SentimentVeryDissatisfiedIcon sx={{ color: '#f44336', fontSize: 28 }} />
                      )}
                      <Typography
                        variant="h6"
                        sx={{
                          color: selectedAnswer === currentDestination?.correctAnswer
                            ? '#4CAF50'
                            : '#f44336',
                          fontWeight: 600,
                        }}
                      >
                        {feedbackMessage}
                </Typography>
                    </Box>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next Button */}
          {selectedAnswer && (
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
              <Button
                variant="contained"
                onClick={handleNextQuestion}
                sx={{
                  borderRadius: '30px',
                  background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
                  color: '#fff',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1976d2 30%, #1E88E5 90%)',
                  }
                }}
              >
                {currentQuestionIndex < destinations.length - 1 ? 'Next Question' : 'Finish Game'}
              </Button>
              <Button
                variant="outlined"
                onClick={handlePlayAgain}
                sx={{
                  borderRadius: '30px',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    borderColor: '#fff',
                    background: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                Play Again
              </Button>
            </Box>
          )}
        </Card>
      </motion.div>
    </AnimatePresence>
      </Container>

      {/* Settings Dialog */}
      <Settings
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        settings={settings}
        onSettingsChange={handleSettingsChange}
      />
    </Box>
  );
}

// Add this to your CSS
const styles = `
@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
`;
