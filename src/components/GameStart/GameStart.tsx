import React, {PureComponent} from 'react';
import './GameStart.css';

export default class GameStart extends PureComponent {
  props = {
    onComplete: ()=>{}
  }

  render() {
     const {onComplete} = this.props;

     return (
         <button onClick={onComplete}>
             Click me to start
         </button>
     );
   }
}
