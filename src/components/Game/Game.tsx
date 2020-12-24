import React, { PureComponent } from 'react';
import GameStart from 'Components/GameStart';
import GameBoard from 'Components/GameBoard';

enum GameState {
  start,
  board,
  complete,
  error,
}

export default class Game extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      gameState: GameState.start,
    };
  }

  onStart = () => {
      this.setState({ gameState: GameState.board });
  };

  onComplete = () => {
      this.setState({ gameState: GameState.complete });
  };

  onError = () => {
      this.setState({ gameState: GameState.error });
  };

  render() {
      const { gameState } = this.state;
      switch (gameState) {
      case GameState.start:
        // заглушка
        return (<GameStart onComplete={this.onStart} />);
      case GameState.board:
        return (<GameBoard onComplete={this.onComplete} />);
      case GameState.complete:
        // заглушка
        return (<GameStart onComplete={this.onStart} />);
      case GameState.error:
        // заглушка
        return (<GameStart onComplete={this.onStart} />);
      }
  }
}
