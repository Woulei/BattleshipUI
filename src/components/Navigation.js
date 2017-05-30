import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'
import signOut from '../actions/user/sign-out';
import { connect } from 'react-redux'


import {
  ROOT_PATH,
  CHAT_PATH,
  GAME_PAGE_PATH,
} from '../routes'

class Navigation extends PureComponent {
  constructor() {
    super()

    this.state = { open: false }
  }

  logOut(user) {
    event.preventDefault()
    console.log('logOut gets called');
    this.props.signOut(user)
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    })
  }



  render() {

    const appBarStyle = {
      backgroundColor: '#D32F2F',
      zDepth: 'none'
    }

    return (
      <div>
        <AppBar style={appBarStyle}
          title="BattleShip"
          onLeftIconButtonTouchTap={this.toggleMenu.bind(this)}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={ this.props.signedIn ? <FlatButton label="Sign Out" onClick={this.logOut.bind(this)} /> : null }
          color="transparent"
        />
        <Drawer open={this.state.open}>
          <div style={{ paddingTop: 80 }}>
            <Link to={ROOT_PATH} onTouchTap={this.toggleMenu.bind(this)}>
              <MenuItem>Lobby</MenuItem>
            </Link>
            <Link to={CHAT_PATH} onTouchTap={this.toggleMenu.bind(this)}>
              <MenuItem>Chat</MenuItem>
            </Link>
          </div>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser._id)
})
export default connect(mapStateToProps, { signOut })(Navigation)
