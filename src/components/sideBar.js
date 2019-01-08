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
          <div className="menu top-25">
          <div classNAme="container">
            <div className="row">
            <div className="col-md-12 col-sm-12">
            <div className="col-md-3">
            </div>
              <div className="col-md-9 menuItems">
                <a href="#"><span className="glyphicon glyphicon-home"></span><label>HOME</label></a>
                <a href="#"><span className="	glyphicon glyphicon-calendar"></span><label>ATTENDENCE</label></a>
                <a href="#"><span className="	glyphicon glyphicon-list-alt"></span><label>LEAVES</label></a>
                </div>
              {/* <div className="col-md-3 menuItems">
              </div>
              <div className="col-md-3 menuItems">
              </div> */}
            </div>
            </div>
          </div>
            
          </div>

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
            

        )
    }
}

export default SideBar;