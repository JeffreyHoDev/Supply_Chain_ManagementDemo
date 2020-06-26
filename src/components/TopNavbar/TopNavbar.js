import React from 'react';
import './TopNavbar.css';
import Sidebar from '../Sidebar/Sidebar';
import '../Sidebar/Sidebar.css'
import { Link } from 'react-router-dom';

const TopNavbar = (props) => {
        return(
            <header className=" w-100 ph3 pv3 pv4-ns ph4-m ph5-l head">
            <div>
                <div className=" f2 fw6 link dim dib mr3 pointer ma2 center logo">
                    <Link to="/dashboard">Supply Chain Management ver2.0</Link>
                </div>
                <nav className="f6 fw6 ttu tracked center topnav name pointer">
                    <Link className="f3 fw6 link dim dib mr3 pointer ma2 center Name" title="Home" to="/dashboard">{`Hi!`}</Link>
                </nav>
            </div>
                <Sidebar/>
            </header>
        )
}

export default TopNavbar;