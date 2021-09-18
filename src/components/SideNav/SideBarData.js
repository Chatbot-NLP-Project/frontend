import React from 'react';
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'side-nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile />,
        cName: 'side-nav-text'
    }
]