import React from "react";
import {  NavLink, Outlet } from "react-router-dom";

function HostLayout() {
    const activeStyle = {
        fontWeight:"bold" ,
        textDecoration: "underline",
        color: "#161616",
    }
    return(
        <>
        <nav className="host-nav">
            <NavLink 
                style={({isActive}) => isActive ? activeStyle : null} 
                to="/host"
                end
            >
                Dashboard

            </NavLink>
            

            <NavLink 
                style={({isActive}) => isActive ? activeStyle : null} 
                to="/host/income"
            >
                Income

            </NavLink>
             

            <NavLink 
                style={({isActive}) => isActive ? activeStyle : null} 
                to="/host/vans"
            >
               Vans

            </NavLink>

            <NavLink 
                style={({isActive}) => isActive ? activeStyle : null} 
                to="/host/reviews"
            >
                Reviews

            </NavLink>
           

        </nav>
        <Outlet/>
        </>
    )
}
export default HostLayout