// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import store, { history } from './store'

import App from './App'
import ChatRoom from './containers/ChatRoom'
import Lobby from './containers/Lobby'
import SignUp from './containers/SignUp'
import SignIn from './containers/SignIn'

import {
  ROOT_PATH,
  CHAT_PATH,
  USER_SIGN_UP_PATH,
  USER_SIGN_IN_PATH,
} from './routes'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={ROOT_PATH} component={App}>
        <IndexRoute component={Lobby} />
        <Route path={CHAT_PATH} component={ChatRoom} />
        <Route path={USER_SIGN_UP_PATH} component={SignUp} />
        <Route path={USER_SIGN_IN_PATH} component={SignIn} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
