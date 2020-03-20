import React from 'react';
import './AuthStatus.css';

const AuthStatus = (props) => {

const name = 'Guest';
  return (
    <div className="authStatus">
      {name}
    </div>
  );
};

export default AuthStatus;
