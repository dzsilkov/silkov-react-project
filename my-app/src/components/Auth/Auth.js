import React from 'react';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import AccountDashBoard from '../AcoountDashBoard/AccountDashBoard';
import './Auth.css';

export class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialUser: {
        firstName: '',
        lastName: '',
        email: 'test@test.com',
        password: '00000',
      },
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
    const {isLoggedIn, initialUser} = this.state;
    const {
      signUpUser,
      signInUser,
      activeUser,
      signOutUser,
      authUserToken,
      allBooksLength,
      readBooksLength,
      favouriteBooksLength
    } = this.props;

    const authForm = isLoggedIn
      ? <SignIn
        initialUser={initialUser}
        handleChangeLoggedIn={this.handleChangeLoggedIn}
        signInUser={signInUser}/>

      : <SignUp
        initialUser={initialUser}
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
              allBooksLength={allBooksLength}
              readBooksLength={readBooksLength}
              favouriteBooksLength={favouriteBooksLength}
            />
            :
            authForm
        }

      </div>
    );
  }
}