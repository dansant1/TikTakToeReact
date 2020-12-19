import React, { Component } from 'react';
import Board from './Board';

export class App extends Component {
   render() {
      return (
         <div className="game">
           <div className="game-board">
             <Board/>
           </div>
         </div>
      );
   }
}