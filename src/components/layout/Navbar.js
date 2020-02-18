import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import './Navbar.css';

const Navbar = props => {
  const { auth } = props;
  //console.log(auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="navigation__block">
      <div className="container mx-auto">
        <ul className="flex justify-end">
          <li className="ml-20">Link</li>
          <li className="ml-20">Link</li>
          <li className="ml-20">Link</li>
          {auth.isLoaded && links}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
