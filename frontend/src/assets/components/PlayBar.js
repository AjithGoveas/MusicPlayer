import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import '../styles/PlayerBar.css';

const PlayBar = ({ currentTrack, isPlaying, onPlayPause, onNext, onPrev }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMiniPlayer, setIsMiniPlayer] = useState(false);
    const [player, setPlayer] = useState(null); // YouTube player instance

    useEffect(() => {
        if (currentTrack) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [currentTrack]);

    const handlePlayPause = () => {
        if (player) {
            if (isPlaying) {
                player.pauseVideo();
            } else {
                player.playVideo();
            }
        }
        onPlayPause();
    };

    const handleNext = () => {
        onNext();
    };

    const handlePrev = () => {
        onPrev();
    };

    const toggleMiniPlayer = () => {
        setIsMiniPlayer(!isMiniPlayer);
    };

    const onPlayerReady = (event) => {
        setPlayer(event.target); // Set the player instance
        if (isPlaying) {
            event.target.playVideo();
        }
    };

    const onPlayerStateChange = (event) => {
        // Update play/pause state based on YouTube player
        if (event.data === 1) {
            onPlayPause(true); // Playing
        } else if (event.data === 2) {
            onPlayPause(false); // Paused
        }
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className={`playbar ${isMiniPlayer ? 'mini' : ''}`}>
            <div className="track-info">
                <span>{currentTrack.title}</span>
                <span>{currentTrack.artist}</span>
            </div>
            <div className="youtube-player">
                {currentTrack.youtubeId && (
                    <YouTube
                        videoId={currentTrack.youtubeId} // Pass the YouTube video ID
                        opts={{
                            height: isMiniPlayer ? '90' : '390',
                            width: isMiniPlayer ? '160' : '640',
                            playerVars: {
                                autoplay: 1, // Auto-play video on load
                            },
                        }}
                        onReady={onPlayerReady}
                        onStateChange={onPlayerStateChange}
                    />
                )}
            </div>
            <div className="controls">
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
                <button onClick={handleNext}>Next</button>
            </div>
            <button className="mini-toggle" onClick={toggleMiniPlayer}>
                {isMiniPlayer ? 'Expand' : 'Mini Player'}
            </button>
        </div>
    );
};

export default PlayBar;
