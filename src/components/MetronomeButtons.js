import React from 'react'

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
    <section>
      <button onClick={handlePlayClick}></button>
      <button onClick={handleStopClick}></button>
    </section>
  )
}

