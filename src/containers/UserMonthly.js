import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'
import _ from 'lodash';
// import Loader from '../components/Loader';
import { Table, Row, Col, Grid } from 'react-bootstrap';
import NavBar from "../components/NavBar";
import {getDate, daysInMonth, getMonthCount, getTime, getMonth, getYear} from '../constants/index';

class UserMonthly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monthlyData: [],
            daysInMonth: "",
            blocks: []
        }
    }

    componentWillMount() {
        if(sessionStorage.getItem('username') == null){
            this.props.history.push('/')
        }
        this.setState({
            daysInMonth: daysInMonth(getMonthCount(), getYear()) 
        })
        let block = [];
        let count = {"count": ""}
        console.log( daysInMonth(getMonthCount(), getYear()));
        for(let i = 0; i<daysInMonth(getMonthCount(), getYear()); i++){
            count.count = i
           block.push(count);
        }
        console.log(block);
        this.props.userMonthRequest(getMonth());

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.attendance.userMonth.isSuccess) {
            this.setState({
                monthlyData: _.sortBy(nextProps.attendance.userMonth.data.data, 'date')
            })
        }
    }

    render() {
        console.log(this.state.daysInMonth);
        
        return (
            <div>   
                {/* <NavBar /> */}
                <Row >
                    <Col smOffset={4} xsOffset={1} mdOffset={4} md={4} xs={3} sm={4} >
                       {/* {this.state.monthlyData.length == 0  ? <Loader/>
                        : <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Entry Time</th>
                                    <th>Exit Time</th>
                                    <th>Total Time</th>
                                    <th>Over Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.monthlyData.length == 0 ?  null : this.state.monthlyData.map((data,key) =>(<tr key={key}>
                                    <td>{data.date}</td>
                                    <td>{data.entryTime}</td>
                                    <td>{data.exitTime}</td>
                                    <td>{data.totaltime}</td>
                                    <td>{data.overtime == null ? "00:00:00" : data.overtime}</td>
                                </tr>))}
                            </tbody>
                        </Table>} */}
                        <h1></h1>
                    </Col>
                </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserMonthly);