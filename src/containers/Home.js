import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'

import Loader from '../components/Loader';

import { Button, Grid, Row, Col, Panel } from 'react-bootstrap';
import ErrorSuccess from "../components/ErrorSuccess";
import NavBar from "../components/NavBar";
import {getDate, getTime, getMonth} from '../constants/index';
import SideBar from "../components/sideBar";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            exitTime: "",
            totalTime: "",
            entryTime: "",
            date: getDate(),
            popup: false,
            code: "",
            message: "",
            overTime: "",
            lateSwipe: "",
            lessTime: ""
        }
    }

    componentWillMount() {
        console.log(sessionStorage.getItem('username'));

        if (sessionStorage.getItem('username') == null) {
            this.props.history.push('/')
        }
        this.props.todayRequest(getDate());
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.attendance.today.isSuccess) {
            this.setState({
                loader: false,
                entryTime: nextProps.attendance.today.data.data.entryTime == null ? "" : nextProps.attendance.today.data.data.entryTime,
                exitTime: nextProps.attendance.today.data.data.exitTime == null ? "" : nextProps.attendance.today.data.data.exitTime,
                totalTime: nextProps.attendance.today.data.data.totaltime == null ? "" : nextProps.attendance.today.data.data.totaltime,
                overTime: nextProps.attendance.today.data.data.overtime == null ? "" : nextProps.attendance.today.data.data.overtime,
                lateSwipe: nextProps.attendance.today.data.data.lateswipetime == null ? "" : nextProps.attendance.today.data.data.lateswipetime,
                lessTime: nextProps.attendance.today.data.data.lesstime == null ? "" : nextProps.attendance.today.data.data.lesstime,
            })
        } else if (nextProps.attendance.today.isLoading) {
            this.setState({
                loader: true
            })
        } else if (nextProps.attendance.today.isError) {
            this.setState({
                loader: false,
                message: nextProps.attendance.today.data.message,
                code: nextProps.attendance.today.data.error,
                // popup: true,
            })
        }
        if (nextProps.attendance.swipe.isSuccess) {
            this.setState({
                entryTime: nextProps.attendance.swipe.data.data.entryTime == null ? "" : nextProps.attendance.swipe.data.data.entryTime,
                exitTime: nextProps.attendance.swipe.data.data.exitTime == null ? "" : nextProps.attendance.swipe.data.data.exitTime,
                totalTime: nextProps.attendance.swipe.data.data.totaltime == null ? "" : nextProps.attendance.swipe.data.data.totaltime,
                overTime: nextProps.attendance.swipe.data.data.overtime == null ? "" : nextProps.attendance.swipe.data.data.overtime,
                lateSwipe: nextProps.attendance.swipe.data.data.lateswipetime == null ? "" : nextProps.attendance.swipe.data.data.lateswipetime,
                lessTime: nextProps.attendance.swipe.data.data.lesstime == null ? "" : nextProps.attendance.swipe.data.data.lesstime,
                loader: false,
                message: nextProps.attendance.swipe.data.message,
                code: nextProps.attendance.swipe.data.error,
                popup: true,
            })
        } else if (nextProps.attendance.swipe.isError) {
            this.setState({
                loader: false,
                message: nextProps.attendance.swipe.data.message,
                code: nextProps.attendance.swipe.data.error,
                popup: true,
            })
        } else if (nextProps.attendance.swipe.isLoading) {
            this.setState({
                loader: true
            })
        }
    }

    

    markAttendance(e) {
        e.preventDefault();
        let data = {
            date: getDate(),
            time: getTime(),
            month: getMonth(),
        }
        this.setState({
            loader: true
        })
        this.props.swipeRequest(data);
    }

    closeModal(e) {
        e.preventDefault();
        this.setState({
            popup: false
        })
    }


    render() {
        const { loader } = this.state;
        return (
            <div>
               <SideBar />
                {/* <NavBar /> */}
                <div className="container">
                    <div className="">
                     <div className="col-md-12">
                            <div className="topTime">
                            
                            </div>
                        </div>
                        <div className="col-md-12 swipeBtn">
                            {!loader ? <Button type="button" onClick={(e) => this.markAttendance(e)} className="top-20 width-150" bsStyle="primary" bsSize="large">
                                {this.state.entryTime != "" ? "Swipe Out" : "Swipe In"}
                            </Button>
                                :
                                <Loader />}
                        </div>
                        
                    </div>
                </div>
                <div className="container">
                    <div className="mainKeys">
                        <div className="row firstRow">
                            <div className="col-md-12">
                                <div className="col-md-4">
                                    <div className="sixBoxes">
                                        <h3>Entry Time<br/></h3>
                                        <h5>{this.state.entryTime == "" ? "Not Available" : this.state.entryTime}</h5>
                                    </div>
                                    
                                </div>
                                <div className="col-md-4">
                                    <div className="sixBoxes">
                                        <h3>Exit Time<br /></h3>
                                        <h5>{this.state.exitTime == "" ? "Not Available" : this.state.exitTime}</h5>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="sixBoxes">
                                        <h3>Total Time<br /></h3>
                                        <h5>{this.state.totalTime == "" ? "Not Available" : this.state.totalTime}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row secondRow">
                            <div className="col-md-12">
                                <div className="col-md-4">
                                    <div className="sixBoxes">
                                        <h3>Left Time<br/></h3>
                                        <h5>{this.state.lessTime == "" ? "Not Available" : this.state.lessTime}</h5>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="sixBoxes">
                                        <h3>Late Swipe in Time <br /></h3>
                                        <h5>{this.state.lateSwipe == "" ? "Not Available" : this.state.lateSwipe}</h5>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="sixBoxes">
                                        <h3>Over Time <br /></h3>
                                        <h5>{this.state.overTime == "" ? "Not Available" : this.state.overTime}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                {/* <Row className="show-grid">
                    <Col smOffset={5} xsOffset={4} mdOffset={5} className="text-center" >
                        {!loader ? <Button type="button" onClick={(e) => this.markAttendance(e)} className="top-20 width-150" bsStyle="primary" bsSize="large">
                            {this.state.entryTime != "" ? "Swipe Out" : "Swipe In"}
                        </Button>
                            :
                            <Loader />}
                    </Col>
                </Row> */}
                {/* <Row className="top-20" >
                    <Col smOffset={4} xsOffset={1} mdOffset={4} md={4} xs={3} sm={4}  >
                        {this.state.loader ? <Loader /> : <Panel bsStyle="primary" className="text-center">
                            <Panel.Heading >
                                <Panel.Title componentClass="h3">Today's Summary</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>Entry Time : {this.state.entryTime == "" ? "Not Available" : this.state.entryTime}</Panel.Body>
                            <Panel.Body>Exit Time : {this.state.exitTime == "" ? "Not Available" : this.state.exitTime}</Panel.Body>
                            <Panel.Body>Total Time : {this.state.totalTime == "" ? "Not Available" : this.state.totalTime}</Panel.Body>
                            <Panel.Body>Left Time : {this.state.lessTime == "" ? "Not Available" : this.state.lessTime}</Panel.Body>
                            <Panel.Body>Over Time : {this.state.overTime == "" ? "Not Available" : this.state.overTime}</Panel.Body>
                            <Panel.Body>Late Swipe-In Time : {this.state.lateSwipe == "" ? "Not Available" : this.state.lateSwipe}</Panel.Body>
                        </Panel>}
                    </Col>
                </Row> */}
                {this.state.popup ? <ErrorSuccess popup={this.state.popup} code={this.state.code} message={this.state.message} closeModal={(e) => this.closeModal(e)} /> : null}
            </div>
        )
    }
}

export function mapStateToProps(state) {
    return {
        attendance: state.attendance
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);