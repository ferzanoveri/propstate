import React from 'react';
import "./App.css"
import NewComp from './Components/NewComp';
import Classprops from './Classprops';
import Functionprops from './Functionprops'

class App extends React.Component {

  styles={
    fontStyle: "bold",
    color: "teal"
  };

  render() {
    return (
      <div className='App'>
        <h1 style={this.styles}>Welcome</h1>
        <NewComp />
        <Classprops name="Ferza" place="Jakarta">
          <p>Child Component</p>
        </Classprops>
        <Classprops name="Dany" place="Depok">
          <button>Click</button>
        </Classprops>
        <Classprops name="Junez" place="Batam"/>
        <Functionprops name="Agfi" place="Jakarta"/>
      </div>
    );
  }
}

export default App;

