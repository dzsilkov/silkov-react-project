import React from 'react';
import { signUpUser, signInUser, signOutUser } from './actions';
import { connect } from 'react-redux';

import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';
import { getAuthUser } from './selectors';
import AccountDashBoard from '../../components/AcoountDashBoard/AccountDashBoard';


class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };

    this.handleChangeLoggedIn = this.handleChangeLoggedIn.bind(this);
  }

  handleChangeLoggedIn() {
    this.setState(prevState => {
      const newIsLoggedIn = !prevState.isLoggedIn;
      return ({
        isLoggedIn: newIsLoggedIn
      });
    });
  }

  render() {
    const {isLoggedIn} = this.state;
    const {signUpUser, signInUser, authUser, signOutUser} = this.props;

    const authForm = isLoggedIn
      ? <SignIn
        handleChangeLoggedIn={this.handleChangeLoggedIn}
        signInUser={signInUser}/>

      : <SignUp
        signUpUser={signUpUser}
        handleChangeLoggedIn={this.handleChangeLoggedIn}
      />;

    return (
      <div className="auth">
        {
          authUser
            ?
            <AccountDashBoard
              signOutUser={signOutUser}
              authUser={authUser}
            />
            :
            authForm
        }

      </div>
    );
  }
}

const mapStateToProps = state => {
  const authUser = getAuthUser(state);
  return {authUser};
};

export default connect(
  mapStateToProps,
  {
    signUpUser,
    signInUser,
    signOutUser
  }
)(Auth);
