import React, {useState}from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../NavBar'
import SidebarMobile from '../SidebarMobile'

const NavSideTogether = () => {
    //normal sidebar
    const [isOpen, setIsOpen] = useState(false)
    //mobile sidebar
    const [isOpenMobile, setIsOpenMobile] = useState(false)

    //setting true or false
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggleMobile = () => {
        setIsOpenMobile(!isOpenMobile)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <SidebarMobile isOpenMobile={isOpenMobile} toggleMobile={toggleMobile} />
            <Navbar toggle = {toggle} toggleMobile={toggleMobile} /> 
        </>
    )
}

export default NavSideTogether
