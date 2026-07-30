const express = require('express');
const router = express.Router();
const sql = require('../db');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are required' });
  }
  try {
    const [saved] = await sql`
      INSERT INTO "Message" (name, email, message)
      VALUES (${name}, ${email}, ${message})
      RETURNING id
    `;
    res.status(201).json({ success: true, id: saved.id });
  } catch (err) {
    console.error('CONTACT ROUTE ERROR:', err);
    res.status(500).json({ error: 'Something went wrong saving your message' });
  }
});

module.exports = router;
