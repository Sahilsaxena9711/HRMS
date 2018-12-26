import React from 'react';
import {Link} from 'react-router-dom';

class SideBar extends React.Component {
     openNav() {
        
        document.getElementById("mySideNav").style.left = " 0px";
        document.getElementById("mySideNav").style.width = " 250px";
      }
      closeNav() {
        document.getElementById("mySideNav").style.left = "-265px";
        // $('.sideNav').addClass(closeMenu);
      }
       myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
        // document.getElementById("mySideNav").style.margin = "50px";
      }
    render() {
        return (
            // <div className="sideBar">
            //     <div id="mySideNav" className="sideNav">
            //         <span className="closeMenuBtn"onClick={() => this.closeNav()}>&times;</span>
            //             <div className="menuItems">
            //                 <a href="#"> Today's Attendance</a>
            //                 <a href="#">Monthly Attendance</a>
            //                 <a href="#">Leaves</a>
            //                  {/* <div className="dropdown">
            //                     <button onClick={() => this.myFunction()} className="dropbtn">Dropdown</button>
            //                     <div id="myDropdown" className="dropdown-content">
            //                         <a href="#">Home</a>
            //                         <a href="#">About</a>
            //                         <a href="#">Contact</a>
            //                         </div>
            //                     </div> */}
                                
            //                 <a href="#">My Profile</a>
            //                 <a href="">Logout</a>
            //             </div>
            //     </div>
            //     <button onClick={() => this.openNav()} className="menuIcon">
            //     <span className="sr-only">Toggle Navigation</span>
            //         <span className="icon-bar"></span>
            //         <span className="icon-bar"></span>
            //         <span className="icon-bar"></span>
            //     </button> 
            // </div>
            <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
            <ul className="nav sidebar-nav">
                <li className="sidebar-brand">
                    <a href="#">
                       Brand
                    </a>
                </li>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">Team</a>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Works <span className="caret"></span></a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="dropdown-header">Dropdown heading</li>
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li><a href="#">Separated link</a></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="https://twitter.com/maridlcrmn">Follow me</a>
                </li>
            </ul>
        </nav>
        )
    }
}

export default SideBar;