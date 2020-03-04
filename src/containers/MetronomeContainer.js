import React, {Component, Fragment} from 'react'
import MetronomeSlider from '../components/MetronomeSlider'
import MetronomeButtons from '../components/MetronomeButtons'

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
      <Fragment>
        <h1>Container</h1>
        <MetronomeSlider selectedBPM={this.state.selectedBPM} onBPMSelected={this.handleBPMSelected} />
        <MetronomeButtons sound={this.state.sound} selectedBPM={this.state.selectedBPM} />
      </Fragment>
    )
  }
}

export default MetronomeContainer