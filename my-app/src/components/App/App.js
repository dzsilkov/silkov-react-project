import React from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { connect } from 'react-redux';
import { getAuth } from '../../redux/actions/auth';
import { getActiveUser, getIsAuthUser, getIsFetching } from '../../redux/selectors/selectors';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';

class App extends React.Component {

  componentDidMount() {
    const {getAuth} = this.props;
    getAuth();
  }

  render() {
    const {activeUser, isAuth, isFetching} = this.props;

    return (
      <div className="wrapper">
        <header>
          <NavBar
            activeUser={activeUser}
          />
        </header>
        <main>
          <Main
            isAuth={isAuth}
          />
        </main>
        <footer>
          <Footer/>
          <Spinner active={isFetching}/>
          <Error/>
        </footer>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const activeUser = getActiveUser(state);
  const isAuth = getIsAuthUser(state);
  const isFetching = getIsFetching(state);
  return {activeUser, isAuth, isFetching};
};

export default connect(
  mapStateToProps,
  {
    getAuth
  }
)(App);
