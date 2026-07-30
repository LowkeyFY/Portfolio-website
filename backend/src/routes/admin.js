const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const sql = require('../db');
const requireAuth = require('../middleware/auth');

router.post('/login', (req, res) => {
  const { password } = req.body;
  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Invalid password' });
  }
  const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '12h' });
  res.json({ token });
});

router.get('/messages', requireAuth, async (req, res) => {
  try {
    const messages = await sql`SELECT * FROM "Message" ORDER BY "createdAt" DESC`;
    res.json(messages);
  } catch (err) {
    console.error('MESSAGES ROUTE ERROR:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
