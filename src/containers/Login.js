import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'

import Loader from '../components/Loader';

import { PageHeader, Button, Row, Col, Grid, FormControl, ControlLabel } from 'react-bootstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      username: "",
      password: ""
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.auth);

    if (nextProps.auth.userLogin.isSuccess) {
      this.props.history.push('/home')
    }
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
      <Grid>
        <PageHeader>
          HRMS
                </PageHeader>
        <Row className="show-grid">
          <Col xs={12} md={4}  >
          </Col>
          <Col xs={12} md={4}  >
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

              {!loader ? <Button type="submit" className="top-20 margin-left-100 width-150" bsStyle="primary" bsSize="large">
                Login
              </Button>
                :
                <Loader />}
            </form>
          </Col>
          <Col xs={12} md={4}  >
          </Col>
        </Row>
      </Grid>
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