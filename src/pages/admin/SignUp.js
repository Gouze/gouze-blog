import React, { Component } from 'react';

export class SignIn extends Component {
  state = {
    email: '',
    password: '',
    nickname: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.email);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5>SignIn</h5>
          <div className="form-controller">
            <label htmlFor="nickname">E-Mail</label>
            <input onChange={this.handleChange} type="text" name="nickname" id="nickname" />
          </div>
          <div className="form-controller">
            <label htmlFor="email">E-Mail</label>
            <input onChange={this.handleChange} type="text" name="email" id="email" />
          </div>
          <div className="form-controller">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
