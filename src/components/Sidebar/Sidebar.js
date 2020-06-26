import React from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";


class Sidebar extends React.Component {
    openNav = () => {
        document.getElementById("mySidebar").style.width = "250px";
    }
      
      /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    closeNav = () => {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

    render(){
        return (
            <div>
                <div id="mySidebar" className="sidebar">
                    <a className="closebtn pointer" style={{"color":"white"}} onClick={this.closeNav}>&times;</a>
                    <Link to="/dashboard" className="pointer">Dashboard</Link>
                    <Link to="/request_items" className="pointer">Request Items</Link>
                    <Link to="/request_list" className="pointer">Request List</Link>
                    <Link to="/items_management" className="pointer">Items Management</Link>
                    <Link to="/history" className="pointer">History</Link>
                </div>
    
                <div id="main">
                    <button className="openbtn grow f3" onClick={this.openNav}>Click &#9776;</button>
                </div>
            </div>
        )
    }

}

export default Sidebar;