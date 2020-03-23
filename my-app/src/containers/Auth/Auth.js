import React from 'react';
import { signUpUser, signInUser, signOutUser } from './actions';
import { connect } from 'react-redux';

import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';
import {
  getActiveUser,
} from './selectors';

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
    const {signUpUser, signInUser, activeUser, signOutUser} = this.props;

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
          activeUser
            ?
            <AccountDashBoard
              signOutUser={signOutUser}
              activeUser={activeUser}
              // userBooks={userBooks}
              // userFavoriteBooks={userFavoriteBooks}
              // userReadBooks={userReadBooks}
            />
            :
            authForm
        }

      </div>
    );
  }
}

const mapStateToProps = state => {
  const activeUser = getActiveUser(state);
  return {activeUser};
};

export default connect(
  mapStateToProps,
  {
    signUpUser,
    signInUser,
    signOutUser
  }
)(Auth);
