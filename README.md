# 🌍 Globetrotter Challenge

Welcome to Globetrotter, a fun, interactive, and AI-powered full-stack web app that challenges your knowledge of famous global destinations. Players guess locations from cryptic clues and images, unlock fun facts, compete with friends, and climb global leaderboards.

## 🎮 Live Demo
- Frontend: [https://globetrotter-travel-guessing-game-alpha.vercel.app/](https://globetrotter-travel-guessing-game-alpha.vercel.app/)

## 🚀 What is Globetrotter?
Globetrotter is a travel-themed guessing game that offers:

-Cryptic clues and images of global landmarks

-Fun trivia after every answer

-Score-based gameplay with streak bonuses

-Social features to challenge and compete with friends
-A beautifully animated, responsive, and modern UI/UX

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

## 🛠️ Technical Implementation

### Frontend Architecture
1. **React Components**
   - Modular component structure
   - Reusable UI components
   - Custom hooks for game logic
   - Context API for state management

2. **State Management**
   - React Context for global state
   - Local state for component-specific data
   - Persistent storage with localStorage
   - Real-time score updates

3. **Routing**
   - React Router for navigation
   - Protected routes for authenticated users
   - Dynamic route handling
   - Smooth page transitions

### Backend Architecture
1. **API Structure**
   - RESTful API design
   - JWT authentication
   - Rate limiting for security
   - Error handling middleware

2. **Database**
   - MongoDB for data storage
   - Mongoose for data modeling
   - User data persistence
   - Game state management

3. **Security**
   - JWT-based authentication
   - Password hashing
   - CORS protection
   - Rate limiting

## 🚀 Setup Instructions

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
VITE_API_URL=http://localhost:5000/api

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
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:5173

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
   - Choose avatar

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

3. **API Security**
   - Rate limiting
   - Request validation
   - Error handling

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
