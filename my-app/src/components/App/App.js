import React from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { connect } from 'react-redux';
import { authenticateUser } from '../../containers/Auth/actions';
import { getActiveUser, getIsLoggedIn } from '../../containers/Auth/selectors';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {authenticateUser} = this.props;
    authenticateUser();
  }

  render() {
    const {activeUser, isLoggedIn} = this.props;

    return (
      <div className="wrapper">
        <header>
          <NavBar
            isLoggedIn={isLoggedIn}
            authUser={activeUser}
          />
        </header>
        <main>
          <Main
            authUser={activeUser}
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
  const activeUser = getActiveUser(state);
  const isLoggedIn = getIsLoggedIn(state);
  return {activeUser, isLoggedIn};
};

export default connect(
  mapStateToProps,
  {
    authenticateUser
  }
)(App);
