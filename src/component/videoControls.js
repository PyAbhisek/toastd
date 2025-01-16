import React from 'react';
import {Volume2 ,VolumeOff  } from 'lucide-react';

const VideoControls = ({ postId, videoState}) => {
  return (
    <>
      <button
        onClick={() =>  (postId)}
        className="p-2 rounded-full  top-0 left-0 bg-gray-800/50 hover:bg-gray-800/75"
      >
      {videoState?.isMuted ? <VolumeOff className="text-white"/> : <Volume2  className="text-white" />}
      </button>
      
    </>
  );
};

export default VideoControls;