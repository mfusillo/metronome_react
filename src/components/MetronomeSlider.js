import React from 'react'

function MetronomeSlider ({selectedBPM, onBPMSelected}){

  function handleChange(event){
    onBPMSelected(event.target.value)
  }


  return(
    <section>
      <h2>{selectedBPM}</h2>
      <input onChange={handleChange} type="range" min="40" max="220" value={selectedBPM} />
    </section>
  )
}

export default MetronomeSlider