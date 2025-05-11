
# 🌍 Globetrotter Challenge

A fun and interactive travel-themed guessing game where players test their knowledge of world landmarks and locations. Explore the world through beautiful images and challenging questions while competing with friends and climbing the leaderboard!

## 📱 Pages Overview

### Home Page
- **Welcome Section**: Engaging introduction with animated globe
- **Quick Start**: Play Now button for immediate gameplay
- **Feature Highlights**: 
  - Interactive gameplay
  - Global leaderboard
  - Achievement system
  - Social sharing
- **How to Play**: Quick guide for new players
- **Recent Achievements**: Showcase top players

### User Profile
- **Registration Form**: 
  - Username input
  - Age verification
  - Profile creation
- **Stats Display**:
  - Total games played
  - Highest score
  - Average score
  - Success rate
- **Achievement Badges**:
  - Streak master
  - Speed demon
  - Geography expert
  - Social butterfly

### Game Board
- **Question Display**:
  - Location image
  - Multiple choice options
  - Timer countdown
  - Current score
- **Game Controls**:
  - Skip question option
  - Pause game
  - Exit game
- **Progress Bar**:
  - Questions completed
  - Remaining questions
  - Current streak

### Leaderboard
- **Global Rankings**:
  - Top 100 players
  - Weekly champions
  - Monthly masters
- **Filter Options**:
  - All time
  - This week
  - This month
- **Player Stats**:
  - Total score
  - Games played
  - Win rate
  - Best streak

### Achievements
- **Badge Collection**:
  - First game completed
  - Perfect score
  - 10-game streak
  - Social sharer
- **Progress Tracking**:
  - Unlocked achievements
  - In progress
  - Locked achievements
- **Rewards**:
  - Special titles
  - Profile badges
  - Bonus points

### About Page
- **Game Story**: How Globetrotter was created
- **Team Information**: Meet the developers
- **Contact Details**: Get in touch
- **Version History**: Latest updates
- **Privacy Policy**: User data protection
- **Terms of Service**: Game rules and guidelines

## 🎮 Features

### Core Game Features
- **User Registration**: Create your profile with username and age
- **Interactive Gameplay**: Guess locations based on images and clues
- **Score System**: 
  - Base points for correct answers
  - Streak bonuses for consecutive correct answers
  - Time bonus for quick responses
- **Timer**: 30-second countdown for each question
- **Progress Tracking**: Monitor correct and incorrect answers
- **Game Statistics**: View your performance metrics

### Social Features
- **Challenge Friends**: Share game invites via WhatsApp
- **Leaderboard**: Compare scores with other players
- **Share Results**: Post your achievements on social media
- **Friend System**: Add and compete with friends
- **Global Chat**: Discuss strategies and achievements

### UI/UX Features
- **Responsive Design**: Works on desktop and mobile devices
- **Material UI**: Modern and clean interface
- **Animations**: Smooth transitions and visual feedback
- **Confetti Effects**: Celebration animations for achievements
- **Dark/Light Mode**: Choose your preferred theme
- **Sound Effects**: Engaging audio feedback
- **Loading States**: Smooth loading transitions

## 📁 Project Structure

```
globetrotter/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Game/       # Game-related components
│   │   │   ├── Profile/    # User profile components
│   │   │   ├── Leaderboard/# Leaderboard components
│   │   │   └── Common/     # Shared components
│   │   ├── contexts/       # React contexts
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── styles/        # CSS and style files
│   │   └── utils/         # Utility functions
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
│
├── backend/                # Node.js backend server
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   └── utils/         # Utility functions
│   └── package.json       # Backend dependencies
│
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```
4. Start development server:
   ```bash
   npm run dev
   ```

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CORS_ORIGIN=http://localhost:5173
   ```
4. Start server:
   ```bash
   npm run dev
   ```

## 🛠️ Technologies Used

### Frontend
- React
- Material-UI
- React Router
- Axios
- Framer Motion
- React Confetti
- React Icons
- React Share
- React Particles

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication
- CORS
- Express Rate Limit
- Bcrypt

## 🌐 Deployment

### Frontend
- Deployed on Vercel
- URL: https://globetrotter-travel-guessing-game-alpha.vercel.app/

### Backend
- Deployed on Vercel
- Environment variables configured in Vercel dashboard

## 🎯 Game Rules

1. **Registration**
   - Create a profile with username and age
   - Profile required to start playing
   - One account per user

2. **Gameplay**
   - Each round shows an image of a location
   - 30 seconds to guess the correct location
   - Multiple choice answers provided
   - Score based on:
     - Correct answer: 10 points
     - Streak bonus: 5 points per 3 correct answers
     - Time bonus: Up to 5 points for quick answers
   - Skip option available (limited uses)

3. **Scoring**
   - Correct answer: +10 points
   - Streak bonus: +5 points (every 3 correct answers)
   - Time bonus: Up to +5 points
   - Wrong answer: -5 points
   - Minimum score: 0 points

4. **Achievements**
   - First Game: Complete your first game
   - Perfect Score: Get all answers correct
   - Speed Demon: Answer within 5 seconds
   - Streak Master: Maintain a 10-game streak
   - Social Butterfly: Share 5 games

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by travel and geography education
- Built with ❤️ for the coding community
- Special thanks to the open-source community
