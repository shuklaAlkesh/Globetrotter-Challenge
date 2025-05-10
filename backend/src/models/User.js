const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  challengeCode: {
    type: String,
    default: null
  },
  score: {
    type: Number,
    default: 0
  }
}, { 
  timestamps: true,
  strict: false 
});

// Drop all existing indexes
mongoose.connection.on('connected', async () => {
  try {
    await mongoose.connection.db.collection('users').dropIndexes();
    console.log('All indexes dropped from users collection');
  } catch (error) {
    console.log('No indexes to drop or error dropping indexes:', error.message);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
