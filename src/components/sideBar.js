import React from 'react';
import {Link} from 'react-router-dom';

class SideBar extends React.Component {
     openNav() {
        document.getElementById("mySideNav").style.width = "250px";
      }
      closeNav() {
        document.getElementById("mySideNav").style.width = "0";
      }
    render() {
        return (
            <div className="sideBar">
                <div id="mySideNav" className="sideNav">
                    <a onClick={() => this.closeNav()}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
                <span onClick={() => this.openNav()}>&#9776;</span> 
            </div>
        )
    }
}

export default SideBar;