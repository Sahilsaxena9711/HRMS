import React from "react";


import SideBar from "../components/sideBar";
import Calendar from 'react-calendar';


class Attendence extends React.Component {
   
    render() {
        return (
            <div>
                <SideBar />
                    <div className="calender">
                        <Calendar />
                </div>
            </div>
        )
    }
}


export default Attendence;