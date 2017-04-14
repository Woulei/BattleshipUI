import React, { PureComponent } from 'react'
import './Game.sass'
import { connect } from 'react-redux'
import Grid from './Grid'

class Game extends PureComponent {
  render() {
    const gameId = this.props.params.id
    const game = this.props.games.filter((game) => {if (game._id === gameId) return game })[0]
    const opponentIndex = (game.playerIds[0] === this.props.currentUser._id) ? 1 : 0
    const playerIndex = (opponentIndex === 1) ? 0 : 1
    const opponentName = game.players[opponentIndex].name // change 0 to 1
    const playerName = game.players[playerIndex].name
    const opponentBoard = game.board[opponentIndex]
    const playerBoard = game.board[playerIndex]

    return (
      <div className="game">
        <h1>{game.title}</h1>
        <div className="board opponent">
          <h3>{opponentName}</h3>
          <div className="opponent-grid">
            <Grid board={opponentBoard} gameId={gameId} opponent={true} />
          </div>
        </div>
        <div className="board player">
          <h3>{playerName}</h3>
          <div className="player-grid">
            <Grid board={playerBoard} gameId={gameId} opponent={false} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ games, currentUser }) => ({ games, currentUser })
export default connect(mapStateToProps)(Game)
