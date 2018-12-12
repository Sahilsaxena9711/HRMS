import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    render() {
        return (
            <div className="topnav" id="myTopnav">
                <Link to>HRMS</Link>
                <Link to="/home">Home</Link>
                <Link to="/usermonthly">Monthly Summary</Link>
                <Link onClick={(e) => sessionStorage.removeItem('username')} to="/" >Logout</Link>
                <a className="icon" onClick={() => this.myFunction()}>
                <span className="white-ham glyphicon glyphicon-menu-hamburger" />
                </a>
            </div>
        )
    }
}

export default NavBar;