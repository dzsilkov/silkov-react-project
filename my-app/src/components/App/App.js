import React from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { connect } from 'react-redux';
import { getAuth } from '../../redux/actions/auth';
import { getActiveUser } from '../../redux/selectors/selectors';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {getAuth} = this.props;
    getAuth();
  }

  render() {
    const {activeUser} = this.props;

    return (
      <div className="wrapper">
        <header>
          <NavBar
            activeUser={activeUser}
          />
        </header>
        <main>
          <Main
            activeUser={activeUser}
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
  return {activeUser};
};

export default connect(
  mapStateToProps,
  {
    getAuth
  }
)(App);
