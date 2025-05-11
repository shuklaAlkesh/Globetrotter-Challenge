import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom';
import Home from './components/Home';
import GameBoard from './components/GameBoard';
import UserForm from './components/UserForm';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Leaderboard from './pages/Leaderboard';
import Achievements from './pages/Achievements';
import About from './pages/About';
import { createUser, updateUserScore } from './data/api';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#2196f3' },
    secondary: { main: '#ff4081' },
    background: {
      default: '#0a1929',
      paper: 'rgba(255, 255, 255, 0.05)',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

export default function App() {
  const [score, setScore] = useState(0);
  const [user, setUser] = useState(null);
  const [gameState, setGameState] = useState('home');

  // Check for existing user on component mount
  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const savedAge = localStorage.getItem('age');
    const savedScore = localStorage.getItem('userScore');
    if (savedUsername) {
      setUser({
        username: savedUsername,
        age: savedAge,
        name: savedUsername,
        score: savedScore ? parseInt(savedScore) : 0
      });
      if (savedScore) {
        setScore(parseInt(savedScore));
      }
    }
  }, []);

  const handleStartGame = () => {
    if (user) {
      setGameState('playing');
    } else {
      setGameState('registration');
    }
  };

  const handleUserSubmit = async (userData) => {
    try {
      const newUser = {
        username: userData.username,
        name: userData.username,
        age: userData.age
      };
      setUser(newUser);
      setGameState('playing');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user. Please try again.');
    }
  };

  const updateScore = async (newScore) => {
    if (!user) {
      console.error('No user available');
      return;
    }

    try {
      setScore(newScore);
      // Update user state with new score
      setUser(prevUser => ({
        ...prevUser,
        score: newScore
      }));
      // Save score to localStorage
      localStorage.setItem('userScore', newScore);
    } catch (error) {
      console.error('Error updating score:', error);
    }
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="app-container">
          <Navbar 
            username={user?.name} 
            score={score}
            onScrollTo={(section) => {
              const element = document.getElementById(section);
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          />
          <main style={{ flex: 1, padding: '20px 0' }}>
            <Routes>
              <Route path="/" element={<Home onStartGame={handleStartGame} />} />
              <Route path="/game" element={
                !user ? (
                  <UserProfile onUserRegistered={handleUserSubmit} />
                ) : gameState === 'playing' ? (
                  <GameBoard onScoreUpdate={updateScore} user={user} setGameState={setGameState} />
                ) : (
                  <UserProfile onUserRegistered={handleUserSubmit} />
                )
              } />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}
