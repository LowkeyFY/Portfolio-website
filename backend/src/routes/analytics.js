const express = require('express');
const router = express.Router();
const sql = require('../db');

// Public: record a page view
router.post('/pageview', async (req, res) => {
  try {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
    const userAgent = req.headers['user-agent'] || null;
    const { path = '/' } = req.body;

    await sql`
      INSERT INTO "PageView" (ip, "userAgent", path)
      VALUES (${ip}, ${userAgent}, ${path})
    `;

    res.status(201).json({ success: true });
  } catch (err) {
    console.error('Analytics error:', err);
    res.status(500).json({ error: 'Failed to record view' });
  }
});

module.exports = router;
