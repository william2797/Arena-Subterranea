
import React from 'react';
import ReactPlayer from 'react-player';
import './Footer.css'

const VideoFooter = () => {
  return (
    <footer className='footer'>
      <ReactPlayer
        url= "https://www.youtube.com/watch?v=UmPFTUHdAyU"
        width="100%"
        height="100%"
        controls={true}
        loop={true}
        className='react-player'
      />

    
    </footer>
  );
};

export default VideoFooter;
