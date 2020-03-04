import React, { Fragment } from 'react'

function MetronomeSlider ({selectedBPM, onBPMSelected}){

  function handleChange(event){
    onBPMSelected(parseInt(event.target.value));
  }


  return(
    <Fragment>
      <h2>{selectedBPM} BPM</h2>
      <input onChange={handleChange} type="range" min="40" max="220" value={selectedBPM} />
    </Fragment>
  )
}

export default MetronomeSlider