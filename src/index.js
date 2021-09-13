import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function sound (props) {
  <audio src={props.sound}></audio>
}

class Keys extends React.Component {

  handleKeyUp = event => {
    console.log(event.target);
  }

  changeName = () => {
    sound(this.props.sound);
    this.props.changeSoundName(this.props.let);
  }

  render () {
    return (
      <button onClick={this.changeName} className="key">
        {this.props.let}
      </button>
    )
  }
}

class Board extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      currSoundName: 'add'
    }
  }

  changeSoundName = (soundName) => {
    this.setState({currSoundName: soundName});
  }

  render () {
    return (
      <div className="app-board">
        <div className="board">
          <Keys let="Q" sound="MUSIC" changeSoundName={this.changeSoundName}/>
          <Keys let="W" sound="MUSIC" changeSoundName={this.changeSoundName}/>
          <Keys let="E" sound="MUSIC" changeSoundName={this.changeSoundName}/>
          <Keys let="A" sound="MUSIC" changeSoundName={this.changeSoundName}/>
          <Keys let="S" sound="MUSIC" changeSoundName={this.changeSoundName}/>
          <Keys let="D" sound="MUSIC" changeSoundName={this.changeSoundName}/>
          <Keys let="Z" sound="MUSIC" changeSoundName={this.changeSoundName}/>
          <Keys let="X" sound="MUSIC" changeSoundName={this.changeSoundName}/>
          <Keys let="C" sound="MUSIC" changeSoundName={this.changeSoundName}/>
        </div>
        <div className="text">
          <p className="sound-name"> {this.state.currSoundName} </p>
        </div>
      </div>
    )
  }
}

class App extends React.Component {

  constructor () {
    this.state = {
      
    }
  }

  handleKeyUp = event => {
    
  }

  render () {
    return (
      <div className="app" onKeyUp={this.handleKeyUp}>
        <Board />
      </div>
    )
  }
}

ReactDOM.render (
  <div className="all"> <App/> </div>,
  document.getElementById('root')
);