
---
``` JavaScript
// controllers/userController.js

const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ username, email, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const validPassword = await user.checkPassword(password);

    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Implement authentication logic (e.g., generate JWT token)

    res.status(200).json({ message: 'Login successful', user: user.toObject() });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};

// Example of an isAdmin middleware
exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next(); // User is an admin, proceed to the next middleware
  } else {
    res.status(403).json({ message: 'Access denied. You are not an admin.' });
  }
};

```
---