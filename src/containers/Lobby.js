import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import subscribeToGames from '../actions/games/subscribe'
import createGame from '../actions/games/create'
import joinGame from '../actions/games/join'
import subscribeToUsers from '../actions/users/subscribe'
import DirectionsBoat from 'material-ui/svg-icons/maps/directions-boat'
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
                    <div>
                      { game.playerIds.length < 2 &&
                        <Link to={"/game/" + `${game._id}`}>
                          <RaisedButton
                          onClick={() => {this.props.joinGame(game._id)}}
                          label="Battle Now!"
                          labelPosition="before"
                          secondary={true}
                          icon={<DirectionsBoat />} />
                        </Link>
                      }
                    </div>
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
export default connect(mapStateToProps, { subscribeToGames, createGame, joinGame })(Lobby)
