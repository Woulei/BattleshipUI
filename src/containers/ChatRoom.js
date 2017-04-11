import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import subscribeToMessages from '../actions/messages/subscribe'
import subscribeToUsers from '../actions/users/subscribe'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import postMessage from '../actions/messages/post'
import ChatMessage from '../components/ChatMessage'

class ChatRoom extends PureComponent {
  constructor() {
    super()

    this.state = {
      message: ''
    }
  }

  componentWillMount() {
    this.props.subscribeToMessages()
    this.props.subscribeToUsers()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.messages.length === this.props.messages.length) return

    console.debug(this.refs.chat.scrollTop, this.refs.chat.scrollHeight)
    this.refs.chat.scrollTop = this.refs.chat.scrollHeight
  }

  submitMessage() {
    const message = this.refs.message.getValue().trim()
    if (message === '') return
    this.props.postMessage(message)
    this.setState({
      message: ''
    })
  }

  checkForEnter(event) {
    if (event.keyCode === 13) {
      this.submitMessage()
    }
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value,
    })
  }

  render() {
    return (
      <div style={{ padding: 24, paddingBottom: 206, maxHeight: '100%', width: '100%' }}>
        <div ref="chat" style={{ maxHeight: '100%', overflowY: 'auto', width: '100%' }}>
          { this.props.messages.map((msg, index) => {
            return (
              <ChatMessage key={index} message={msg} />
            )
          })}
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '90%', padding: 24 }}>
          <div style={{ margin: '24px 0 0', textAlign: 'right' }}>
            <TextField
              hintText="Message Field"
              fullWidth={true}
              ref="message"
              value={this.state.message}
              onChange={this.updateMessage.bind(this)}
              onKeyUp={this.checkForEnter.bind(this)}
              multiLine={true} />

            <RaisedButton disabled={this.props.loading} label="Shut up" primary={true} onClick={this.submitMessage.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ messages, loading }) => ({ messages, loading })
export default connect(mapStateToProps, { subscribeToMessages, postMessage, subscribeToUsers })(ChatRoom)
