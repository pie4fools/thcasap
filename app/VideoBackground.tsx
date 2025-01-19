// components/VideoBackground.tsx
import Video from 'next-video';
// components/BackgroundVideo.tsx
import React from "react";
import Logo from "/thcasaplogo.svg";

const VideoBackground: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/vidbackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black/7.5 text-white">
      <img src='/thcasaplogo.png' />
        <h1 className="text-4xl font-bold"></h1>
      </div>
    </div>
  );
};

export default VideoBackground;
