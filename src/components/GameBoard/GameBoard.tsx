import React, {PureComponent, createRef} from 'react';
import './GameBoard.css';
import {gameService} from 'Services/GameService'

export default class GameBoard extends PureComponent {
  private _canvas = createRef<HTMLCanvasElement>();

  props = {
    onComplete: ()=>{}
  }

  componentDidMount() {
    gameService.start(this._canvas.current);
  }

  componentDidUnMount() {
    gameService.stop();
  }

  render() {
    return (
      <div  className="game">
        <canvas className="canvas" ref={this._canvas}></canvas>
        <div  className="correct">Correct: <span>0</span></div>
        <div  className="errors">Error: <span>0</span></div>
        <div  className="missed">Missed: <span>0</span></div>
      </div>
    );
  }
}
