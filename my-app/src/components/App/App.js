import React from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { connect } from 'react-redux';
import { authenticateUser } from '../../containers/Auth/actions';
import { getAuthUser, getIsLoggedIn } from '../../containers/Auth/selectors';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {authenticateUser} = this.props;
    authenticateUser();
  }

  render() {
    const {authUser, isLoggedIn} = this.props;

    return (
      <div className="wrapper">
        <header>
          <NavBar
            isLoggedIn={isLoggedIn}
            authUser={authUser}
          />
        </header>
        <main>
          <Main
            authUser={authUser}
            isLoggedIn={isLoggedIn}
          />
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const authUser = getAuthUser(state);
  const isLoggedIn = getIsLoggedIn(state);
  return {authUser, isLoggedIn};
};

export default connect(
  mapStateToProps,
  {
    authenticateUser
  }
)(App);
