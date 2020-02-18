import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
const SignedInLinks = props => {
  return (
    <React.Fragment>
      <li className="ml-20" onClick={props.signOut}>
        Logout
      </li>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
