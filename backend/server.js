const express = require('express');
const axios = require('axios');
const cors = require('cors');
const youtubeRoutes = require('./routes/youtubeRoutes');
require('dotenv').config(); // Load environment variables from .env file

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/youtube', youtubeRoutes);

app.get('/auth', (req, res) => {
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=profile%20email`;
  res.redirect(authUrl);
});

app.get('/callback', async (req, res) => {
  const { code } = req.query;
  try {
    const response = await axios.post('https://oauth2.googleapis.com/token', {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      code,
      grant_type: 'authorization_code',
    });
    const { access_token, refresh_token } = response.data;
    // Store tokens securely (e.g., in a database)
    res.json({ access_token, refresh_token });
  } catch (error) {
    console.error('Error exchanging code for tokens:', error);
    res.status(500).send('Authentication failed');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});