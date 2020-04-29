import React from 'react';
import { connect } from 'react-redux'
import { 
    Button, 
    Form, 
    Container, 
    Row, 
    Col,
    Alert 
} from "react-bootstrap";
import { login} from '../actions/authentificationActions'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
          }
    }

    displayAlert() {
        if (this.props.auth.error !== "" &&
            this.props.auth.type === "AUTH_LOGIN_FAILED")
            return(
                <Alert variant={"danger"}>
                    {this.props.auth.error}
                </Alert>
            )
    }

    submit = (event) => {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password)
      }

    render() {
        if (this.props.auth.type === "AUTH_LOGIN_SUCCESS") {
            this.props.history.push('/');
        }
        
        return(
            <Container>
                <Row className="row">
                     <Col xs={5}>
                        <Form onSubmit={this.submit}>
                            <h2>Login</h2>
                            <hr />
                            <Form.Group controlId="userform">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" onChange={i => {this.setState({username: i.target.value})}}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={i => {this.setState({password: i.target.value})}} />
                            </Form.Group>
                            
                            {this.displayAlert()}
                            
                            <Button variant="primary" type="submit" > Submit </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
    )}
}

function mapStateToProps(state) {
    return {
        auth : state.authentificationReducer,
    };
  }
  
  const mapDispatchToProps = function (dispatch) {
      return {
        login: (email, password) => dispatch(login(email, password))
      }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
