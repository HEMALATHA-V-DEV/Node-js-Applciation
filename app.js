const express = require('express');
const path = require('path');
const quizRoutes = require('./routes/quizRoutes');

const app = express();

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/quiz', quizRoutes);

// Serve the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

module.exports = app;
