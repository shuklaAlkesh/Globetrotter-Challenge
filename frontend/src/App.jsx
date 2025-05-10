import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GameBoard from './components/GameBoard';
import UserForm from './components/UserForm';
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

  const handleStartGame = () => {
    if (user) {
      setGameState('playing');
    } else {
      setGameState('registration');
    }
  };

  const handleUserSubmit = async (userData) => {
    try {
      const newUser = await createUser({
        username: userData.username || `user_${Date.now()}`,
        name: userData.name || 'Anonymous',
        age: userData.age || 0
      });
      setUser(newUser);
      setGameState('playing');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user. Please try again.');
    }
  };

  const updateScore = async (newScore) => {
    if (!user || !user._id) {
      console.error('No user or user ID available');
      return;
    }

    try {
      console.log('Updating score for user:', user._id, 'New score:', newScore);
      const updatedUser = await updateUserScore(user._id, newScore);
      console.log('Score updated successfully:', updatedUser);
      setScore(newScore);
      setUser(updatedUser);
    } catch (error) {
      console.error('Error updating score:', error);
      // Don't update the UI if the score update fails
    }
  };

  const renderGameContent = () => {
    switch (gameState) {
      case 'home':
        return <Home onStartGame={handleStartGame} />;
      case 'registration':
        return <UserForm onSubmit={handleUserSubmit} />;
      case 'playing':
        return <GameBoard onScoreUpdate={updateScore} user={user} setGameState={setGameState} />;
      default:
        return <Home onStartGame={handleStartGame} />;
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
              <Route path="/" element={renderGameContent()} />
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
