import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer,  FullIcon, MobileIcon} from "./NavbarElements"

const Navbar = ({ toggle, toggleMobile }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>

                <FullIcon onClick={toggle}>
                    <IoIosArrowDown />
                </FullIcon>

                <MobileIcon onClick={toggleMobile}>
                    <FaBars />
                </MobileIcon>



            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
