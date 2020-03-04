import React from 'react'
import './MetronomeButtons.css'

export default function MetronomeButtons({sound, selectedBPM}) {

  let soundInterval = null;


  function handlePlayClick(){
    clearInterval(soundInterval)
    soundInterval = setInterval(function(){sound.play()}, parseInt(60000/selectedBPM).toFixed(0))
  
  }

  function handleStopClick(){
    clearInterval(soundInterval)
  }

  
  return (
    <section className="button-container">
      <button className="button-style" onClick={handlePlayClick}><i class="fas fa-play fa-4x"></i></button>
      <button className="button-style" onClick={handleStopClick}><i class="fas fa-stop fa-4x"></i></button>
    </section>
  )
}

