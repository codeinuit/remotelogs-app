import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { ListGroup, Container, Row, Col } from 'react-bootstrap'
import { getLogs, getSysName } from './actions/systemInfoActions';

class App extends React.Component {

  componentDidMount() {
    if (this.props.auth.credentials.token === '') {
      this.props.history.push('/login')
    }
    else {
      this.props.getLogs(this.props.auth.credentials.token)
      this.props.getSysName(this.props.auth.credentials.token)
    }
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
    else {
      return(
        <div></div>
      )
    }
  }

  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h3>{this.props.systeminfo.name}</h3>
            <ListGroup>
              {this.displayList(this.props.systeminfo.logs)}
            </ListGroup>
          </Col>
        </Row>
      </Container>
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
      getLogs: (token) => dispatch(getLogs(token)),
      getSysName: (token) => dispatch(getSysName(token))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
