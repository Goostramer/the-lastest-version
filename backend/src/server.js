require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
const encryptedData = new Map();

// Basic routes
app.post('/api/encryption/store', (req, res) => {
  const { data } = req.body;
  const id = Date.now().toString();
  encryptedData.set(id, data);
  res.json({ id });
});

// Start server
// Status endpoint
app.get('/api/status', (req, res) => {
  res.status(200).json({ status: 'running' });
});

// Generic fallback handlers for auth and encryption routes
app.use('/api/auth', (req, res) => {
  res.status(200).json({ message: 'Auth service available in fallback mode', fallbackMode: true });
});

app.use('/api/encryption', (req, res) => {
  res.status(200).json({ message: 'Encryption service available in fallback mode', fallbackMode: true });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});
