const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for DevOps quiz page
app.get('/devops', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'devops.html'));
});

// Route for AWS quiz page
app.get('/aws', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'aws.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
