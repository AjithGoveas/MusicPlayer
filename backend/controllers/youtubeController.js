const axios = require('axios');

// Load environment variables
require('dotenv').config();

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

/**
 * Fetch recent tracks (simulate user history).
 */
const getRecentTracks = async (req, res) => {
  try {
    // Simulate an API call or database for user history
    const recentTracks = [
      { id: '1', snippet: { title: 'Track 1', channelTitle: 'Artist 1' } },
      { id: '2', snippet: { title: 'Track 2', channelTitle: 'Artist 2' } },
    ];
    res.json({ items: recentTracks });
  } catch (error) {
    console.error('Error fetching recent tracks:', error);
    res.status(500).json({ message: 'Error fetching recent tracks' });
  }
};

/**
 * Fetch top songs from YouTube Music category.
 */
const getTopSongs = async (req, res) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&part=snippet&videoCategoryId=10&maxResults=10&key=${YOUTUBE_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching top songs:', error);
    res.status(500).json({ message: 'Error fetching top songs' });
  }
};

/**
 * Fetch top podcasts from a specific YouTube playlist.
 */
const getTopPodcasts = async (req, res) => {
  try {
    const playlistId = 'PL9tY0BWXOZFtF_F6YpD5FT3tF4XTiAsqk'; // Replace with a podcast playlist ID
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=${YOUTUBE_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching top podcasts:', error);
    res.status(500).json({ message: 'Error fetching top podcasts' });
  }
};

/**
 * Fetch playlists based on a category or keyword.
 */
const getPlaylists = async (req, res) => {
  try {
    const { category } = req.query;
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        category
      )}+playlist&type=playlist&maxResults=10&key=${YOUTUBE_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching playlists:', error);
    res.status(500).json({ message: 'Error fetching playlists' });
  }
};

module.exports = {
  getRecentTracks,
  getTopSongs,
  getTopPodcasts,
  getPlaylists,
};
