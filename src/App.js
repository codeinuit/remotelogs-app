import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { useHistory } from 'react-router-dom'
import { render } from '@testing-library/react';

class App extends React.Component {

  render() {
    if (this.props.auth.credentials.token === '') {
      this.props.history.push('/login')
    }
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}


function mapStateToProps(state) {
  return {
      auth : state.authentificationReducer,
  };
}

const mapDispatchToProps = function (dispatch) {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
