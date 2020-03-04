import React from 'react'

export default function MetronomeButtons({sound, selectedBPM}) {


  function playSound(){
    sound.play();
  }

  
  return (
    <section>
      <button onClick={playSound}></button>
      <button></button>
    </section>
  )
}

