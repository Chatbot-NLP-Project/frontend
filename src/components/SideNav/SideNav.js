import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SideBarData";
import './SideNav.css';
import { IconContext } from "react-icons";

function SideNav() {

    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = () => setSidebar(!sidebar);
    
    return(
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="sidenav">
            <Link to="#" className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar ? "side-nav-menu active" : "side-nav-menu"}>
            <ul className="side-nav-menu-items" onClick={showSidebar}>
                <li className="sidenavbar-toggle">
                    <Link to="#" className="side-menu-bars" Profile>
                     <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item,  index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default SideNav;