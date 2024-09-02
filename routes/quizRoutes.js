const express = require('express');
const router = express.Router();

// Sample API route to get quiz questions
router.get('/:topic', (req, res) => {
  const { topic } = req.params;

  // You can dynamically load questions from a database
  res.json({ topic });
});

module.exports = router;
