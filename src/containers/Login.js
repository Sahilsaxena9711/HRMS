import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import {Link} from 'react-router-dom';

import Loader from '../components/Loader';
import { Button, Row, Col, FormControl, ControlLabel } from 'react-bootstrap';
import ErrorSuccess from '../components/ErrorSuccess';
import Nav from '../components/Nav';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      username: "",
      password: "",
      message: "",
      popup: false,
      code: ""
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.auth);
    
    if (nextProps.auth.userLogin.isSuccess) {
      const t = this;
      setTimeout(function(){
        t.props.history.push('/home')
      },100);
    } else if (nextProps.auth.userLogin.isError) {
      if(nextProps.auth.userLogin.data.message == undefined){
        this.setState({
          message: "Internal server error",
          code: "1",
          popup: true,
          loader: false,
        })
      }else{
        this.setState({
          message: nextProps.auth.userLogin.data.message,
          code: nextProps.auth.userLogin.data.error,
          popup: true,
          loader: false,
        })
      }
    }
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({
      popup: false
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      loader: true
    })
    let data = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.userLoginRequest(data);
  }

  render() {
    const { username, password, loader } = this.state;
    return (
      <div>
        <Nav />
        <Row className="show-grid">

          <Col smOffset={4} xsOffset={1} mdOffset={4} md={4} xs={3} sm={4}  >
            <form onSubmit={(e) => this.onSubmit(e)}>
              <ControlLabel className="top-20">Username</ControlLabel>
              <FormControl
                type="text"
                value={username}
                placeholder="Enter Username"
                onChange={(e) => this.setState({ username: e.target.value })}
              />
              <ControlLabel className="top-20">Password</ControlLabel>
              <FormControl
                type="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <Row>
                <Col smOffset={3} xsOffset={3} mdOffset={4} >
                  {!loader ?
                    <Button type="submit" className="top-20 width-150" bsStyle="primary" bsSize="large">
                      Login
              </Button>
                    :
                    <Loader />}
                </Col>
              </Row>
              <Row className="top-20">
                <Col smOffset={3} xsOffset={3} mdOffset={4} >
                  <p className="p-login-signup">or <Link to="/signup">Signup</Link></p>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
        {this.state.popup ? <ErrorSuccess popup={this.state.popup} code={this.state.code} message={this.state.message} closeModal={(e) => this.closeModal(e)} /> : null}
      </div>
    )
  }
}

export function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);