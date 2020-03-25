import React from 'react';
import { connect } from 'react-redux';
import { signUpUser, signInUser, signOutUser } from './../User/actions';
import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';
import AccountDashBoard from '../../components/AcoountDashBoard/AccountDashBoard';
import { getActiveUser, getAuthUserToken } from '../../redux/selectors/selectors';


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
    const {signUpUser, signInUser, activeUser, signOutUser, authUserToken} = this.props;

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
          authUserToken
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
  const authUserToken = getAuthUserToken(state);
  return {activeUser, authUserToken};
};

export default connect(
  mapStateToProps,
  {
    signUpUser,
    signInUser,
    signOutUser
  }
)(Auth);


