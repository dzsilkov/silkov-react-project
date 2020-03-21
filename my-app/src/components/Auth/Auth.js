import React from 'react';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';



class Auth extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const auth = true;
    return (
      <div>
        <div className="auth">
        {!auth ? <SignIn/> : <SignUp/>}
        </div>
      </div>
    );
  }
}

export default Auth;

