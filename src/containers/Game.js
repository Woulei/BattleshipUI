import React, { PureComponent } from 'react'
import './Game.sass'
import { connect } from 'react-redux'
import Grid from './Grid'

class Game extends PureComponent {
  render() {
    const game = this.props.games[0] // change 0 to game index
    const opponentName = game.players[0].name // change 0 to 1
    const playerName = game.players[0].name
    const opponentBoard = game.board[1]
    const playerBoard = game.board[0]

    return (
      <div className="game">
        <h1>{game.title}</h1>
        <div className="board">
          <h3>{opponentName}</h3>
          <div className="opponent-grid">
            <Grid board={opponentBoard} />
          </div>
        </div>
        <div className="board">
          <h3>{playerName}</h3>
          <div className="player-grid">
            <Grid board={playerBoard} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ games }) => ({ games })
export default connect(mapStateToProps)(Game)
