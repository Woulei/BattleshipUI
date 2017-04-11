import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import signUp from '../actions/user/sign-up'

class SignUp extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const user = {
        name: this.refs.name.getValue(),
        email: this.refs.email.getValue(),
        password: this.refs.password.getValue()
      }
      this.props.signUp(user)
    }
  }

  validateAll() {
    return this.validateName() &&
      this.validateEmail() &&
      this.validatePassword() &&
      this.validatePasswordConfirmation()
  }

  validateName() {
    const { name } = this.refs

    if (name.getValue().length > 1) {
      this.setState({
        nameError: null
      })
      return true
    }

    this.setState({
      nameError: 'Please provide your name'
    })
    return false
  }

  validateEmail() {
    const { email } = this.refs

    if (email.getValue().match(/^[a-z0-9.\_-]+@[a-z0-9.\_-]+\.[a-z0-9.\_-]+$/)) {
      this.setState({
        emailError: null
      })
      return true
    }

    if (email.getValue() === '') {
      this.setState({
        emailError: 'Please provide your email address'
      })
      return false
    }

    this.setState({
      emailError: 'Please provide a valid email address'
    })
    return false
  }

  validatePassword() {
    const { password, passwordConfirmation } = this.refs

    if (password.getValue().length < 6) {
      this.setState({
        passwordError: 'Password is too short'
      })
      return false
    }

    if (password.getValue().match(/[a-zA-Z]+/) && password.getValue().match(/[0-9]+/)) {
      this.setState({
        passwordError: null
      })
      return true
    }

    this.setState({
      passwordError: 'Password should contain both letters and numbers'
    })
    return false
  }

  validatePasswordConfirmation() {
    const { password, passwordConfirmation } = this.refs

    if (password.getValue() === passwordConfirmation.getValue()) {
      this.setState({
        passwordConfirmationError: null
      })
      return true
    }

    this.setState({
      passwordConfirmationError: 'Passwords do not match'
    })
    return false
  }

  render() {
    return (
      <Paper style={{ padding: 48, width: 500, margin: '50px auto' }} zDepth={1}>
        <h1>SignUp</h1>

        <TextField fullWidth={true} ref="name" onChange={this.validateName.bind(this)} hintText="Your name..." errorText={this.state.nameError} />
        <TextField fullWidth={true} ref="email" onChange={this.validateEmail.bind(this)} hintText="Your email address" errorText={this.state.emailError} />
        <TextField fullWidth={true} ref="password" type="password" onChange={this.validatePassword.bind(this)} hintText="Your password" errorText={this.state.passwordError} />
        <TextField fullWidth={true} ref="passwordConfirmation" type="password" onChange={this.validatePasswordConfirmation.bind(this)} hintText="Your password, again" errorText={this.state.passwordConfirmationError} />

        <div style={{ margin: '24px 0 0', textAlign: 'right' }}>
        <Link to={'/users/sign-in'}>
          <RaisedButton
            label="Sign In"
            secondary={true}
            style={{ marginRight: '1rem' }} />
        </Link>
          <RaisedButton label="Sign Up" primary={true} onClick={this.submitForm.bind(this)} />
        </div>
      </Paper>
    )
  }
}

export default connect(null, { signUp })(SignUp)
