import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar'
import './ChatMessage.sass'

class ChatMessage extends PureComponent {
  render() {
    const { user, message } = this.props

    return (
      <div className="message">
        <Avatar src={user.gravatar} style={{ flex: '1 40px', maxWidth: '40px' }} />
        <div className="content">
          <h4>{ user.name }</h4>
          <p>{ message.text }</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }, { message }) => {
  return {
    user: users.filter((user) => {
      return (user._id === message.authorId)
    })[0] || {}
  }
}

export default connect(mapStateToProps)(ChatMessage)
