import React from "react";
import "../styles/Loader.css";

const Loader = () => {
  return (
    <div className="loading-wave">
      <div className="loading-bar" />
      <div className="loading-bar" />
      <div className="loading-bar" />
      <div className="loading-bar" />
    </div>
    // <div class="card">
    //   <div class="loader">
    //     <p>loading</p>
    //     <div class="words">
    //       <span class="word">tracks</span>
    //       <span class="word">playlists</span>
    //       <span class="word">albums</span>
    //       <span class="word">genres</span>
    //       {/* <span class="word">artists</span> */}
    //       <span class="word">tracks</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Loader;
