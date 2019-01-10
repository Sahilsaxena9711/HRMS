import React from "react";


import SideBar from "../components/sideBar";


class Leaves extends React.Component {
   
    render() {
        return (
            <div>
               <SideBar />
               <form className="leaveForm"> 
               <h1>Apply For Leave</h1>
               <ul className="pad0">
                   <li><input type="date" className="dateInput"/></li>
                   <li><select className="dropDown">
                    <option value="books">Sick</option>
                    <option value="html">Casual</option>                    
                    </select></li>
                   <li><textarea placeholder="Reason" className="messageBox top-35"></textarea></li>
               </ul>
                    
                    <button type="button" className="btnBlue top-20">Apply</button>
                    
                    
                </form>
            </div>
        )
    }
}


export default Leaves;