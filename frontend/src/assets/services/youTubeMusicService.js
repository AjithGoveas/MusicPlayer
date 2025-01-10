import axios from 'axios';

/**
 * Fetch recent tracks the user has played.
 * @returns {Promise<Array>} List of recent tracks with id, name, and artist.
 */
export const fetchRecentTracks = async () => {
  try {
    const response = await axios.get('/api/youtube/recent-tracks');
    return response.data.items.map(item => ({
      id: item.id,
      name: item.snippet.title,
      artist: item.snippet.channelTitle,
    }));
  } catch (error) {
    console.error('Error fetching recent tracks:', error);
    return [];
  }
};

/**
 * Fetch the top songs from YouTube.
 * @returns {Promise<Array>} List of top songs with id, name, and artist.
 */
export const fetchTopSongs = async () => {
  try {
    const response = await axios.get('/api/youtube/top-songs');
    return response.data.items.map(item => ({
      id: item.id,
      name: item.snippet.title,
      artist: item.snippet.channelTitle,
    }));
  } catch (error) {
    console.error('Error fetching top songs:', error);
    return [];
  }
};

/**
 * Fetch top podcasts available on YouTube.
 * @returns {Promise<Array>} List of top podcasts with id, name, and channel.
 */
export const fetchTopPodcasts = async () => {
  try {
    const response = await axios.get('/api/youtube/top-podcasts');
    return response.data.items.map(item => ({
      id: item.id,
      name: item.snippet.title,
      channel: item.snippet.channelTitle,
    }));
  } catch (error) {
    console.error('Error fetching top podcasts:', error);
    return [];
  }
};

/**
 * Fetch playlists based on a specific category.
 * @param {string} category - The playlist category (e.g., "pop", "chill").
 * @returns {Promise<Array>} List of playlists with id, name, and description.
 */
export const fetchPlaylists = async (category) => {
  try {
    const response = await axios.get('/api/youtube/playlists', {
      params: { category },
    });
    return response.data.items.map(item => ({
      id: item.id,
      name: item.snippet.title,
      description: item.snippet.description,
    }));
  } catch (error) {
    console.error('Error fetching playlists:', error);
    return [];
  }
};
