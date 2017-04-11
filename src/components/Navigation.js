import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router'

import {
  ROOT_PATH,
  CHAT_PATH,
} from '../routes'

export default class Navigation extends PureComponent {
  constructor() {
    super()

    this.state = { open: false }
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div>
        <AppBar
          title="Shut Up Chat"
          onLeftIconButtonTouchTap={this.toggleMenu.bind(this)}
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
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
