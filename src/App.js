import React, {Fragment} from 'react';
import './App.css';
import MetronomeContainer from './containers/MetronomeContainer'

function App() {
  return (
    <section className="main-container">
      <h1>Metronome</h1>
      <MetronomeContainer/>
    </section>
  );
}

export default App;
