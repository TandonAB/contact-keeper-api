const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

// model
const User = require('../models/User');
const Contact = require('../models/Contact');

// @route   GET /api/contacts
// @desc    Get all usres contacts
// @access  Private
router.get('/', authMiddleware, async (req, res) => {
  try {
    const contacts = await Contact.find({
      user: req.user.id,
    }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/contacts
// @desc    Add new contact
// @access  Private
router.post(
  '/',
  [
    authMiddleware,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('phone', 'Phone is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT /api/contacts/:id
// @desc    Update a contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update a contact');
});

// @route   DELETE /api/contacts/:id
// @desc    Delete a contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete a contact');
});

module.exports = router;
