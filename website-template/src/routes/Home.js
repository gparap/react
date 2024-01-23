/* (c) 2024 gparap */
import React from 'react'
import Video from '../assets/videos/video-home.mp4';

function Home() {
  return (
    <div className='container'>
      <div className='container-home'>

        {/* Play a video */}
        <video src={Video} loop muted autoPlay
          playsInline        // Allow video to play inline on iOS devices
          crossOrigin="anonymous"  // Specify CORS handling for the video
        />

        {/* Welcoming content */}
        <div className="container-home-content">
          <h1>Welcome to React Website Template</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula
            odio eget est ullamcorper ultrices. Curabitur vehicula, nisl id suscipit
            tincidunt, urna libero fermentum nisi, vel commodo ex lectus sed felis.
            In hac habitasse platea dictumst. Suspendisse potenti. Nunc vehicula
            sodales vestibulum. Sed vel diam non mauris gravida tincidunt. Nam
            vulputate risus eu dapibus laoreet. Integer non feugiat nunc. Quisque
            malesuada ipsum nec risus rhoncus feugiat. Vivamus ultricies, ipsum ut
            ullamcorper fermentum, elit elit rhoncus lacus, id lacinia metus odio non
            justo. ...
          </p>
        </div>

      </div>
    </div>
  )
}

export default Home