import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { useHistory } from 'react-router-dom'
import { render } from '@testing-library/react';
import { ListGroup } from 'react-bootstrap'
import { getLogs } from './actions/systemInfoActions';

class App extends React.Component {

  componentDidMount() {
    if (this.props.auth.credentials.token === '') {
      this.props.history.push('/login')
    }
    this.props.getLogs(this.props.auth.credentials.token)
  }

  displayList(truc) {
    if (typeof truc !== 'undefined')
    {
      return (
        <div>
          {truc.map((item, index) => (
            <ListGroup.Item key={index}>{item}</ListGroup.Item>
          ))}
        </div>
      );
    }
    
  }

  render() {
    return (
    <ListGroup>
      {this.displayList(this.props.systeminfo.logs)}
    </ListGroup>
  );
  }
}


function mapStateToProps(state) {
  return {
      systeminfo : state.systemInfoReducer,
      auth : state.authentificationReducer
  };
}

const mapDispatchToProps = function (dispatch) {
    return {
      getLogs: (token) => dispatch(getLogs(token))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
