import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import subscribeToGames from '../actions/games/subscribe'
import createGame from '../actions/games/create'
import joinGame from '../actions/games/join'
import removeGame from '../actions/games/remove'
import subscribeToUsers from '../actions/users/subscribe'
import DirectionsBoat from 'material-ui/svg-icons/maps/directions-boat'
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import Warning from 'material-ui/svg-icons/alert/warning'
import NotInterested from 'material-ui/svg-icons/av/not-interested'
import './Lobby.sass'

const removeStyle = {
  marginLeft: 10,
};

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

    const paperStyle = {
      padding: 48,
      width: 400,
      margin: '50px auto',
    }

    return (
      <div className="games lobby">
        <div className="video">
          <ReactPlayer url='https://youtu.be/RQK6hH5-nwU?t=39'
            playing
            width='100%'
            height='500'
            loop='true'
          />
        </div>
        <h1>BattleShip Lobby</h1>

        { this.props.games.length === 0 ?
          <div className="no-results">
            <h2>No Games yet! Feel free to create one!</h2>
            { this.renderCreateGameButton() }
          </div> :
          <div className="games list">
            <div className="actions">
              { this.renderCreateGameButton() }
            </div>

            { this.props.games.map((game, index) => {
              return (
                <Paper key={index}
                  zDepth={1}
                  style={{ padding: '12px 24px' }}>
                    <h4>{ game.title }</h4>
                    <div>
                      { game.playerIds.length < 2 && game.playerIds.indexOf(this.props.currentUser._id) === -1 &&
                          <RaisedButton
                          onClick={() => {this.props.joinGame(game._id)}}
                          label="Join the battle!"
                          labelPosition="before"
                          secondary={true}
                          icon={<PersonAdd />} />
                      }
                      { game.playerIds.length === 2 && game.playerIds.indexOf(this.props.currentUser._id) >= 0 &&
                        <Link to={"/game/" + `${game._id}`}>
                          <RaisedButton
                          label="Take command!"
                          labelPosition="before"
                          default={true}
                          backgroundColor='dodgerblue'
                          labelColor='white'
                          icon={<DirectionsBoat />} />
                        </Link>
                      }
                      { game.playerIds.indexOf(this.props.currentUser._id) >= 0 && game.playerIds.length < 2 &&
                        <RaisedButton
                        label="Waiting for an enemy to join the battle"
                        labelPosition="before"
                        disabled={true}
                        icon={<Warning />} />
                      }
                      { game.playerIds.indexOf(this.props.currentUser._id) >= 0 &&
                        <RaisedButton
                        onClick={() => {this.props.removeGame(game._id)}}
                        label="Leave the game"
                        labelPosition="before"
                        primary={true}
                        style={ removeStyle }
                        icon={<NotInterested />} />
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

const mapStateToProps = ({ games, currentUser }) => ({ games, currentUser })
export default connect(mapStateToProps, { subscribeToGames, createGame, joinGame, removeGame })(Lobby)
