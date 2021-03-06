import React, { PureComponent } from 'react'
import './Game.sass'
import { connect } from 'react-redux'
import Grid from './Grid'

class Game extends PureComponent {

  renderStatus(game, playerIndex) {
    var winner = Number(game.winner)
    if (winner >= 0) {
      if (winner === playerIndex) {
        return (
          <h2 className="winner">"You won the game!"</h2>
        )
      }
      return (<h2 className="winner">"The enemy has won"</h2>)
    }

    if (game.turn === this.props.currentUser._id) {
      return (
        <h2 className="winner">{"Please make your move"}</h2>
      )
    } else {
      return (
        <h2 className="winner">{"Wait for the opponent to make a move"}</h2>
      )
    }
  }

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
        { this.renderStatus(game, playerIndex) }
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
