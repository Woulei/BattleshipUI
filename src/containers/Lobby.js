import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import subscribeToGames from '../actions/games/subscribe'
import createGame from '../actions/games/create'
import joinGame from '../actions/games/join'
import subscribeToUsers from '../actions/users/subscribe'
import './Lobby.sass'

class Lobby extends PureComponent {
  componentWillMount() {
    this.props.subscribeToGames()
  }

  renderCreateGameButton() {
    return <RaisedButton
      onTouchTap={this.props.createGame}
      label="Create Game"
      primary={true} />
  }

  renderJoinGameButton() {
    return <RaisedButton
      onTouchTap={this.props.joinGame}
      label="Join"
      primary={true} />
  }

  render() {
    return (
      <div className="games lobby">
        <h1>Lobby</h1>

        { this.props.games.length === 0 ?
          <div className="no-results">
            <h2>No Games yet! Feel free to create one!</h2>
            { this.renderCreateGameButton() }
          </div> :
          <div className="games list">
            <div className="actions">
              { this.renderCreateGameButton() }
            </div>

            { this.props.games.map((game) => {
              return (
                <Paper
                  zDepth={1}
                  style={{ padding: '12px 24px' }}>
                    <h4>{ game.title }</h4>
                    { game.playerIds.length < 2 && <button onClick={() => {this.props.joinGame(game._id)}}>Join</button> }
                </Paper>
              )
            })}
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ games }) => ({ games })
export default connect(mapStateToProps, { subscribeToGames, createGame, joinGame, subscribeToUsers })(Lobby)
