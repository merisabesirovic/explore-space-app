import React from "react";
import ReactPlayer from "react-player";
import "./Home.css"; // Import the CSS file for styling

const videoUrl =
  "https://res.cloudinary.com/dp7iyoyad/video/upload/v1686872267/video_ft3ufd.mp4";

export default function Home() {
  return (
    <div className="video-container">
      <ReactPlayer
        url={videoUrl}
        playing={true}
        controls={false}
        width="100%"
        height="100%"
        loop
      />
      <div className="text-overlay">
        <h2 className="mars-title">Explore space with us!</h2>
      </div>
    </div>
  );
}
