const express = require('express');
const {
  getRecentTracks,
  getTopSongs,
  getTopPodcasts,
  getPlaylists,
} = require('../controllers/youtubeController');

const router = express.Router();

router.get('/recent-tracks', getRecentTracks);
router.get('/top-songs', getTopSongs);
router.get('/top-podcasts', getTopPodcasts);
router.get('/playlists', getPlaylists);

module.exports = router;
