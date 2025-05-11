# 🌍 Globetrotter Challenge

Welcome to Globetrotter, a fun, interactive, and AI-powered full-stack web app that challenges your knowledge of famous global destinations. Players guess locations from cryptic clues and images, unlock fun facts, compete with friends, and climb global leaderboards.

## 🎮 Live Demo
- Frontend: [https://globetrotter-travel-guessing-game-alpha.vercel.app/](https://globetrotter-travel-guessing-game-alpha.vercel.app/)
- Backend: [https://globetrotter-challenge-backend-zlqb.onrender.com](https://globetrotter-challenge-backend-zlqb.onrender.com/)

## 🚀 What is Globetrotter?
Globetrotter is a travel-themed guessing game that offers:

- Cryptic clues and images of global landmarks
- Fun trivia after every answer
- Score-based gameplay with streak bonuses
- Social features to challenge and compete with friends
- A beautifully animated, responsive, and modern UI/UX

## 🎮 Gameplay Overview

### Start Playing
- Click "Play Now" on the home page
- View a clue (text/image) and choose the correct destination
- Answer correctly to unlock a fun fact and earn points
- Wrong guesses also show fun trivia—but no points!

### Scoring System
- ✅ Correct Answer: +10 points
- ⚡ Time Bonus: +1 to +5 points (based on speed)
- 🔥 Streak Bonus: +5 points per 3 correct answers
- ❌ Wrong Answer: -5 points
- 💡 Skip Question: Limited uses

### Challenge Friends
- Share your game via WhatsApp with a dynamic image + score
- Friends can click your invite link and play with the same questions
- You see each other's scores!

## ✨ Implemented Features

### 🎯 Core Game Features
1. **Interactive Quiz System**
   - Multiple-choice questions about world locations
   - Real-time feedback on answers
   - Progressive difficulty levels
   - Timer-based challenges

2. **Smart Scoring System**
   - Base points for correct answers
   - Streak bonuses for consecutive correct answers
   - Time-based bonuses for quick responses
   - Penalties for incorrect answers

3. **User Progress Tracking**
   - Score persistence across sessions
   - Game history tracking
   - Performance statistics
   - Achievement system

4. **Social Features**
   - WhatsApp sharing integration
   - Challenge friends functionality
   - Share scores and achievements

### 🎨 UI/UX Features
1. **Modern Design**
   - Clean and intuitive interface
   - Responsive layout for all devices
   - Smooth animations and transitions
   - Loading states and progress indicators

2. **Interactive Elements**
   - Particle effects for celebrations
   - Confetti animations for achievements
   - Progress bars and timers
   - Interactive buttons and cards

3. **User Experience**
   - Clear navigation
   - Intuitive game flow
   - Error handling and feedback
   - Loading states and transitions

## 📁 Project Structure
```
globetrotter-challenge/
├── frontend/                 # Frontend React application
│   ├── public/              # Static files
│   │   ├── index.html       # HTML template
│   │   ├── assets/          # Static assets
│   │   └── styles/          # CSS/SCSS files
│   ├── src/                 # Source files
│   │   ├── components/      # React components
│   │   ├── contexts/        # React contexts
│   │   ├── hooks/           # Custom hooks
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   └── utils/           # Utility functions
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
│
├── backend/                 # Backend Node.js application
│   ├── src/                # Source files
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   └── utils/          # Utility functions
│   ├── package.json         # Backend dependencies
│   └── vercel.json          # Vercel configuration
│
├── .gitignore              # Git ignore file
└── README.md              # Project documentation
```

## 🚀 Installation Guide

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4.4 or higher)

### Clone the Repository
```bash
# Clone the repository
git clone https://github.com/shuklaAlkesh/Globetrotter-Challenge.git

# Navigate to project directory
cd Globetrotter-Challenge
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:5000/api" > .env

# Start development server
npm run dev
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cat > .env << EOL
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:5173
EOL

# Start server
npm run dev
```

## 📦 Technology Stack

### Frontend
- **React**: UI library for building interactive interfaces
- **Material-UI**: Component library for consistent design
- **React Router**: Client-side routing
- **Axios**: HTTP client for API requests
- **Framer Motion**: Animation library
- **React Particles**: Background effects
- **Canvas Confetti**: Celebration animations

### Backend
- **Node.js**: Runtime environment
- **Express**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication
- **Express Rate Limit**: API protection

## 🎮 Game Flow

1. **User Registration**
   - Create account
   - Set username

2. **Game Start**
   - Select difficulty
   - View instructions
   - Start timer

3. **Gameplay**
   - Answer questions
   - Earn points
   - Build streaks
   - Track progress

4. **Game End**
   - View final score
   - Share results
   - Save progress
   - Start new game

## 🔒 Security Features

1. **Authentication**
   - JWT-based auth
   - Secure password storage
   - Session management

2. **Data Protection**
   - Input validation
   - XSS prevention
   - CSRF protection

## 🎯 Future Enhancements

1. **Planned Features**
   - Multiplayer mode
   - More difficulty levels
   - Additional game modes
   - Enhanced social features

2. **Technical Improvements**
   - Performance optimization
   - Enhanced error handling
   - Additional security measures
   - Improved analytics

## 🎉 Conclusion

Globetrotter Challenge is more than just a game - it's an engaging platform that combines education, entertainment, and social interaction. By challenging players to identify global landmarks and learn interesting facts about different locations, it promotes cultural awareness and geographical knowledge in an enjoyable way.

The project demonstrates modern web development practices, featuring:
- A robust full-stack architecture
- Real-time gameplay mechanics
- Secure user authentication
- Responsive and intuitive UI/UX
- Social sharing capabilities

Whether you're a developer looking to contribute, a player seeking to test your knowledge, or an educator wanting to make geography fun, Globetrotter Challenge offers something for everyone. Join us in making global exploration exciting and accessible!

Happy Traveling! 🌎✈️




