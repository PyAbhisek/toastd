import React from 'react';
import mute from "../component/Assets/no-sound.png"
import unmute from "../component/Assets/audio.png"
import playLogo from "../component/Assets/play.png"
const VideoControls = ({ postId, videoState, onMuteToggle, onPlayToggle }) => {
  return (
    <>
      <button
        onClick={() => onMuteToggle(postId)}
        className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/75"
      >
        <img
          src={videoState?.isMuted ? mute : unmute}
          alt={videoState?.isMuted ? "Unmute" : "Mute"}
          className="w-6 h-6"
        />
      </button>
      <button
        onClick={() => onPlayToggle(postId)}
        className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/75"
      >
        <img
          src={playLogo}
          alt={videoState?.isPlaying ? "Pause" : "Play"}
          className={`w-6 h-6`}
         
        />
      </button>
    </>
  );
};

export default VideoControls;