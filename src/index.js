import React from 'react';
import ReactDOM from 'react-dom';
import Q from './assets/Q.mp3';
import W from './assets/W.mp3';
import E from './assets/E.mp3';
import A from './assets/A.mp3';
import S from './assets/S.mp3';
import D from './assets/D.mp3';
import Z from './assets/Z.mp3';
import X from './assets/X.mp3';
import C from './assets/C.mp3';
import './index.css';

const mapita = new Map();
mapita.set('Q', Q);
mapita.set('W', W);
mapita.set('E', E);
mapita.set('A', A);
mapita.set('S', S);
mapita.set('D', D);
mapita.set('Z', Z);
mapita.set('X', X);
mapita.set('C', C);

class Keys extends React.Component {
  handleClick = nameKey => {
    const audio = new Audio(mapita.get(nameKey));
    audio.volume = 1;
    audio.play();
    this.props.changeSoundName(this.props.let);
  }

  render() {
    return (
      <button onClick={() => this.handleClick(this.props.let)} className="key">
        {this.props.let}
      </button>
    )
  }
}

class Board extends React.Component {
  state = { currSoundName: 'Press key' }

  changeSoundName = (soundName) => {
    this.setState({ currSoundName: soundName });
  }


  componentDidMount () {
    window.addEventListener('keydown', key => {      
      const KEY = key.key.toUpperCase();
      if (mapita.has(KEY)) new Audio(mapita.get(KEY)).play();
    });
  }

  render() {
    return (
      <div className="all">
        <div className="app">
          <div className="app-board">
            <div className="board">
              <Keys let="Q" changeSoundName={this.changeSoundName} />
              <Keys let="W" changeSoundName={this.changeSoundName} />
              <Keys let="E" changeSoundName={this.changeSoundName} />
              <Keys let="A" changeSoundName={this.changeSoundName} />
              <Keys let="S" changeSoundName={this.changeSoundName} />
              <Keys let="D" changeSoundName={this.changeSoundName} />
              <Keys let="Z" changeSoundName={this.changeSoundName} />
              <Keys let="X" changeSoundName={this.changeSoundName} />
              <Keys let="C" changeSoundName={this.changeSoundName} />
            </div>
            <div className="text">
              <p className="sound-name"> {this.state.currSoundName} </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);