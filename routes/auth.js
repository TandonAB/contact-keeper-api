const express = require('express');
const router = express.Router();

// @route   GET /api/auth
// @desc    Get the logged in users
// @access  Private
router.get('/', (req, res) => {
  res.send('Get Logged in Users');
});

// @route   POST /api/auth
// @desc    Auth user and get token
// @access  Public
router.post('/', (req, res) => {
  res.send('Log in User');
});

module.exports = router;
