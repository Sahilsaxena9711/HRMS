import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import {Link} from 'react-router-dom';

import Loader from '../components/Loader';
import { Button, Row, Col, FormControl, ControlLabel } from 'react-bootstrap';
import ErrorSuccess from '../components/ErrorSuccess';
import Nav from '../components/Nav';
import loginIcon from '../assets/login.png'

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
        <div className="container-fluid">
        <Row className="show-grid loginScreen">
          <div className="loginForm">
          <div className="col-md-6">
            <form onSubmit={(e) => this.onSubmit(e)}>
            <img src={loginIcon} />
              <h2>LOGIN</h2>
              <div className="loginDetails">
        
                {/* <ControlLabel className="top-20">Username</ControlLabel> */}
                <FormControl className="inputText top-30"
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
                
                
                {/* <ControlLabel className="top-20">Password</ControlLabel> */}
                <FormControl
                  type="password" className="inputPassword top-35"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                
              </div>
              <Row>
                <div className="col-md-12">
                  {!loader ?
                    <Button type="submit" className="top-20 width-150" bsStyle="primary" bsSize="large">
                      Login
              </Button>
                    :
                    <Loader />}
                </div>
              </Row>
              <Row className="top-20">
                <div className="col-md-12 signUpLink">
                  <p className="p-login-signup">or <Link to="/signup">Signup</Link></p>
                </div>
              </Row>
            </form>
            </div>
          </div>
        </Row>
        </div>
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