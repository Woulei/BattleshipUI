import React, { PureComponent } from 'react'
import './Game.sass'

const playerOneCells = [
  1,1,1,1,1,1,1,1,1,1,
  1,1,1,1,1,3,3,3,1,1,
  1,1,3,1,1,1,1,1,1,1,
  1,1,1,1,3,1,1,1,1,1,
  1,1,1,1,3,1,1,1,3,1,
  1,1,1,1,1,1,1,1,3,1,
  1,1,1,1,1,1,1,1,3,1,
  1,1,1,1,1,1,1,1,3,1,
  1,3,3,3,3,3,1,1,1,1,
  1,1,1,1,1,1,1,1,1,1
];

const playerTwoCells = [
  1,1,1,1,1,1,1,1,1,1,
  1,1,1,1,1,3,3,3,1,1,
  1,1,3,1,1,1,1,1,1,1,
  1,1,1,1,3,1,1,1,1,1,
  1,1,1,1,3,1,1,1,3,1,
  1,1,1,1,1,1,1,1,3,1,
  1,1,1,1,1,1,1,1,3,1,
  1,1,1,1,1,1,1,1,3,1,
  1,3,3,3,3,3,1,1,1,1,
  1,1,1,1,1,1,1,1,1,1
];

class Game extends PureComponent {

  renderGrid(player) {
    switch (player) {
      case "two":
        return playerTwoCells.map((cell, index) => {
          console.log(cell);
          return (<div key={index} className={`cell status${cell}`}>{index + 1}</div>)
        })
      default:
      return playerOneCells.map((cell, index) => {
        return (<div key={index} className={`cell status${cell}`}>{index + 1}</div>)
      })
    }
  }

  render() {
    return (
      <div className="game">
        <h1>Game</h1>
        <div className="board">
          <h2>Opponent Grid</h2>
          <div className="opponent-grid">
            { this.renderGrid("two") }
          </div>
        </div>
        <div className="board">
          <h2>Your Grid</h2>
          <div className="player-grid">
            { this.renderGrid("one") }
          </div>
        </div>

      </div>
    )
  }
}
export default Game
