import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/nav'
function Layout() {
    return(
        <div>
            <Outlet/>
            <Nav/>
        </div>
        
    )
}
export default Layout