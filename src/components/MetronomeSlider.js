import React, { Fragment } from 'react'
import './MetronomeSlider.css'

function MetronomeSlider ({selectedBPM, onBPMSelected}){

  function handleChange(event){
    onBPMSelected(parseInt(event.target.value));
  }


  return(
    <Fragment>
      <h4>{selectedBPM} BPM</h4>
      <input classname="slider" onChange={handleChange} type="range" min="40" max="220" value={selectedBPM} />
    </Fragment>
  )
}

export default MetronomeSlider