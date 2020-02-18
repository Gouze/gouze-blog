import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

export class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5>LoginPage</h5>
          <div className="form-controller">
            <label htmlFor="email">E-Mail</label>
            <input onChange={this.handleChange} type="text" name="email" id="email" />
          </div>
          <div className="form-controller">
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChange} type="password" name="password" id="password" />
          </div>
          <button>Login</button>
          <div className="text-red-500">{authError ? <p>{authError}</p> : null}</div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
