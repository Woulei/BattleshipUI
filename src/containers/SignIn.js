import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import signIn from '../actions/user/sign-in'

class SignIn extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  submitForm(event) {
    event.preventDefault()
    const user = {
      email: this.refs.email.getValue(),
      password: this.refs.password.getValue()
    }
    this.props.signIn(user)
  }

  render() {
    return (
      <Paper style={{ padding: 48, width: 500, margin: '50px auto' }} zDepth={1}>
        <h1>SignIn</h1>

        <TextField fullWidth={true} ref="email" hintText="Your email address" errorText={this.state.emailError} />
        <TextField fullWidth={true} ref="password" type="password" hintText="Your password" errorText={this.state.passwordError} />

        <div style={{ margin: '24px 0 0', textAlign: 'right' }}>
          <Link to={'/users/sign-up'}>
            <RaisedButton
              label="Sign Up"
              secondary={true}
              style={{ marginRight: '1rem' }} />
          </Link>
          <RaisedButton label="Sign In" primary={true} onClick={this.submitForm.bind(this)} />
        </div>
      </Paper>
    )
  }
}

export default connect(null, { signIn })(SignIn)
