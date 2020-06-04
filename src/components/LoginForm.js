import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUserInputChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordInputChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form
        onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text"
              onChange={(event) => this.handleUserInputChange(event)}
              value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password"
              onChange={(event) => this.handlePasswordInputChange(event)}
              value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">
            Log in
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
