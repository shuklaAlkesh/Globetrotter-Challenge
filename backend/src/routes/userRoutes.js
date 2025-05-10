const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/', userController.createUser);

// Update user score
router.put('/:userId/score', userController.updateUserScore);

module.exports = router; 