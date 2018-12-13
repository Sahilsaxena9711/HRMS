import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import {Link} from 'react-router-dom';

import Loader from '../components/Loader';
import { Button, Row, Col, FormControl, ControlLabel } from 'react-bootstrap';
import ErrorSuccess from '../components/ErrorSuccess';
import Nav from '../components/Nav';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            username: "",
            password: "",
            name: "",
            email: "",
            message: "",
            popup: false,
            code: ""
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.userSignup.isSuccess) {
            this.props.history.push('/')
        } else if (nextProps.auth.userSignup.isError) {
            this.setState({
                message: nextProps.auth.userSignup.data.message,
                code: nextProps.auth.userSignup.data.error,
                popup: true,
                loader: false,
            })
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
            password: this.state.password,
            name: this.state.name,
            email: this.state.email
        }
        this.props.userSignupRequest(data);
    }

    render() {
        const { username, password, email, name, loader } = this.state;
        return (
            <div>
                <Nav />
                <div className="container-fluid">
                <Row className="show-grid loginScreen">
                 <div className="loginForm">
                    <div className="col-md-6">
                        <form onSubmit={(e) => this.onSubmit(e)}>
                        <div className="inputIcon">
                            <div className="glyphicon glyphicon-user"></div>
                            <FormControl className="inputText top-30"
                                type="text"
                                value={name}
                                placeholder="Enter Full Name"
                                onChange={(e) => this.setState({ name: e.target.value })}
                            />
                            </div>

                            <div className="inputIcon">
                                <div className="glyphicon glyphicon-envelope"></div>
                            <FormControl className="inputText top-30"
                                type="email"
                                value={email}
                                placeholder="Enter Email"
                                onChange={(e) => this.setState({ email: e.target.value })}
                            />
                            </div>
                            
                            <div className="inputIcon">
                                <div className="glyphicon glyphicon-phone"></div>
                            <FormControl className="inputText top-30"
                                type="text"
                                value={username}
                                placeholder="Enter Username"
                                onChange={(e) => this.setState({ username: e.target.value })}
                            />  
                            </div>

                            {/* <ControlLabel className="top-20">Password</ControlLabel> */}
                            <div className="inputIcon">
                                <div className="glyphicon glyphicon-lock"></div>
                                <FormControl className="inputPassword top-35"
                                    type="password"
                                    value={password}
                                    placeholder="Enter Password"
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                />
                            </div>

                            <Row>
                            <div className="col-md-12">
                                    {!loader ? <Button type="submit" className="top-20 width-150" bsStyle="primary" bsSize="large">
                                        Signup
              </Button>
                                        :
                                        <Loader />}
                                </div>
                            </Row>
                            <Row  className="top-20">
                                <div className="col-md-12 signUpLink">
                                    <p  className="p-login-signup">or <Link to="/">Login</Link></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);