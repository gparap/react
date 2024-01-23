/* (c) 2022 gparap */
import React from 'react'
import Video from '../assets/videos/video-home.mp4';

function Home() {
  return (
    <div className='container'>
      <h1>Home Route</h1>
      <div className='container-home'>

        {/* Play a video */}
        <video src={Video} loop muted autoPlay
          playsInline        // Allow video to play inline on iOS devices
          crossOrigin="anonymous"  // Specify CORS handling for the video
        />
        
      </div>
    </div>
  )
}

export default Home