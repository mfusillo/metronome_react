import React, {Component} from 'react'
import MetronomeSlider from '../components/MetronomeSlider'
import MetronomeButtons from '../components/MetronomeButtons'
import './MetronomeContainer.css'

class MetronomeContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      sound: new Audio('http://www.soundjay.com/button/beep-07.wav'),
      selectedBPM: 100
    }
  }

  handleBPMSelected = (bpm) => {
    this.setState({selectedBPM: bpm})
  }


  render(){
    return(
      <section className="metronome-container">
        <MetronomeSlider selectedBPM={this.state.selectedBPM} onBPMSelected={this.handleBPMSelected} />
        <MetronomeButtons sound={this.state.sound} selectedBPM={this.state.selectedBPM} />
      </section>
    )
  }
}

export default MetronomeContainer