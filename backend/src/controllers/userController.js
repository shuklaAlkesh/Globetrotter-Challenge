const User = require('../models/User');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { username, name, age } = req.body;
    
    // Create user with minimal data
    const user = new User({
      username: username || `user_${Date.now()}`,
      name: name || 'Anonymous',
      age: age || 0,
      score: 0
    });

    const savedUser = await user.save();
    console.log('Created new user:', savedUser);
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

// Update user score
exports.updateUserScore = async (req, res) => {
  try {
    const { userId } = req.params;
    const { score } = req.body;

    console.log('Updating score for user:', userId, 'New score:', score);

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: { score: score } },
      { new: true, runValidators: true }
    );

    if (!user) {
      console.log('User not found:', userId);
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('Score updated successfully:', user);
    res.json(user);
  } catch (error) {
    console.error('Error updating score:', error);
    res.status(500).json({ message: 'Error updating score' });
  }
}; 