// Home.js
import React, { useState, useEffect } from "react";
import PlayBar from "../components/PlayBar"; // Import PlayBar component
import { useAuth } from "../context/AuthContext"; // Import useAuth hook
import { fetchRecentTracks, fetchTopSongs, fetchTopPodcasts, fetchPlaylists } from "../services/youTubeMusicService"; // Import YouTube API service
import "../styles/Home.css";
import "../styles/Sidebar.css";
import "../styles/MainContent.css";

const scrollContainer = (direction, containerRef) => {
  if (direction === "left") {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  } else {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  }
};

const ScrollButton = ({ direction, onClick }) => (
  <button
    className={`scroll-button scroll-button-${direction}`}
    onClick={onClick}
  >
    {direction === "left" ? (
      <i className="bx bx-chevron-left" />
    ) : (
      <i className="bx bx-chevron-right" />
    )}
  </button>
);

const PlaceholderItem = ({ onPlayPause, isPlaying, trackId, currentTrack, name, artist, thumbnail }) => {
  return (
    <div className="card">
      <div className="card__image" style={{ backgroundImage: `url(${thumbnail})` }}>
        <button className="play-button" onClick={onPlayPause}>
          {isPlaying && currentTrack === trackId ? (
            <i className="bx bx-pause" />
          ) : (
            <i className="bx bx-play" />
          )}
        </button>
      </div>
      <div className="card__content">
        <p className="name">{name}</p>
        <p className="artist">{artist}</p>
      </div>
    </div>
  );
};

const MainContent = ({ onPlayPause, isPlaying, currentTrack }) => {
  const [recentTracks, setRecentTracks] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const recentSectionRef = React.useRef(null);
  const topSongsSectionRef = React.useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recentTracksData = await fetchRecentTracks();
        setRecentTracks(recentTracksData);
        const topSongsData = await fetchTopSongs();
        setTopSongs(topSongsData);
      } catch (error) {
        console.error("Error fetching data from YouTube Music API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-content">
      <section className="greeting">
        <h1>Welcome Back!</h1>
        <p>Discover new music and enjoy your favorites from YouTube Music.</p>
      </section>

      <section className="recent-section">
        <div className="sub-heading">
          <h2>Recently Played</h2>
          <div className="head-button">
            <ScrollButton
              direction="left"
              onClick={() => scrollContainer("left", recentSectionRef)}
            />
            <ScrollButton
              direction="right"
              onClick={() => scrollContainer("right", recentSectionRef)}
            />
          </div>
        </div>
        <div className="container scroll" ref={recentSectionRef}>
          {recentTracks.map((track) => (
            <PlaceholderItem
              key={track.id}
              onPlayPause={() => onPlayPause(track.id)}
              isPlaying={isPlaying}
              trackId={track.id}
              currentTrack={currentTrack}
              name={track.title}
              artist={track.channelTitle}
              thumbnail={track.thumbnail.url}
            />
          ))}
        </div>
      </section>

      <section className="top-songs-section">
        <div className="sub-heading">
          <h2>Top Songs</h2>
          <div className="head-button">
            <ScrollButton
              direction="left"
              onClick={() => scrollContainer("left", topSongsSectionRef)}
            />
            <ScrollButton
              direction="right"
              onClick={() => scrollContainer("right", topSongsSectionRef)}
            />
          </div>
        </div>
        <div className="container scroll" ref={topSongsSectionRef}>
          {topSongs.map((song) => (
            <PlaceholderItem
              key={song.id}
              onPlayPause={() => onPlayPause(song.id)}
              isPlaying={isPlaying}
              trackId={song.id}
              currentTrack={currentTrack}
              name={song.title}
              artist={song.channelTitle}
              thumbnail={song.thumbnail.url}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const Home = () => {
  const { user } = useAuth(); // Get user from AuthContext

  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (trackId) => {
    if (currentTrack === trackId) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(trackId);
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    // Logic to handle the next track
  };

  const handlePrev = () => {
    // Logic to handle the previous track
  };

  return (
    <div className="home">
      <MainContent
        onPlayPause={handlePlayPause}
        isPlaying={isPlaying}
        currentTrack={currentTrack}
      />
      <PlayBar
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default Home;
