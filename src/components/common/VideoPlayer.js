import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import { VscMute } from "react-icons/vsc";
import { VscUnmute } from "react-icons/vsc";

const VideoPlayer = ({ image, trailer }) => {
  const [showImage, setShowImage] = useState(true);
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef();
  const [mute, setMute] = useState(localStorage.getItem("muted") === "1");

  const handleMute = () => {
    const value = localStorage.getItem("muted");
    if (value === "1") {
      localStorage.setItem("muted", "0");
      setMute(false);
    } else {
      localStorage.setItem("muted", "1");
      setMute(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
      setPlaying(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-zinc-900">
      <div
        className={`
          absolute top-0 bg-center bg-cover bg-no-repeat transition-all duration-700 ease-out 
          ${showImage ? "opacity-100 z-10" : " opacity-0 z-0"} w-full h-full
        `}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {!showImage && (
        <div className="relative">
          <ReactPlayer
            ref={playerRef}
            style={{ borderRadius: "5px", transition: "opacity 0.5s" }}
            width="100%"
            height="97%"
            url={trailer}
            playing={playing}
            loop={true}
            muted={mute}
          />
          <button
            onClick={handleMute}
            className="absolute bottom-3 right-3 p-[6px] border text-white/50 border-white/50 hover:text-white hover:border-white rounded-[50%] transition-none"
          >
            {mute ? <VscMute size={12} /> : <VscUnmute size={12} />}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
