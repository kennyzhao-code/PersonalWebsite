import React from 'react'
import {SidebarMobileContainer, CloseMobileIcon, SidebarMobileWrapper, SidebarMobileMenu, SidebarMobileLink, SideBarMobileText, IconMobile } from './SidebarMobileElements'
import { IoHome, IoPersonCircleSharp, IoFlash } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";

const SidebarMobile = ({isOpenMobile, toggleMobile}) => {
    return (
        <SidebarMobileContainer isOpenMobile={isOpenMobile}>

            <SidebarMobileWrapper>

                    <IconMobile onClick = {toggleMobile}>
                        <CloseMobileIcon/>
                    </IconMobile>


                <SidebarMobileMenu>

                    <SidebarMobileLink onClick = {toggleMobile} to = 'hero' smooth = 'linear' duration = {500} spy = {true} exact ='true' offset = {-500} >
                        <IoHome style={{display: 'block', marginLeft: '11px', marginTop: '11px'}}/>
                        <SideBarMobileText className ='text1'>Home</SideBarMobileText>
                    </SidebarMobileLink>

                    <SidebarMobileLink onClick = {toggleMobile} to = 'aboutMe' smooth = 'linear' duration = {500} spy = {true} exact ='true' offset = {50}>
                        <IoPersonCircleSharp style={{display: 'block', marginLeft: '11px', marginTop: '11px'}}/>
                        <SideBarMobileText className ='text1'>About Me</SideBarMobileText>
                    </SidebarMobileLink>

                    <SidebarMobileLink onClick = {toggleMobile} to = 'experiences' smooth = 'linear' duration = {500} spy = {true} exact ='true' offset = {-200}> 
                        <IoIosPaper style={{display: 'block', marginLeft: '11px', marginTop: '11px'}}/>
                        <SideBarMobileText className ='text1'>Experiences</SideBarMobileText>
                    </SidebarMobileLink>

                    <SidebarMobileLink onClick = {toggleMobile} to = 'skillsHobbies' smooth = 'linear' duration = {500} spy = {true} exact ='true' >
                        <IoFlash style={{display: 'block', marginLeft: '11px', marginTop: '11px'}}/>
                        <SideBarMobileText className ='text1'>Skills/Hobbies</SideBarMobileText>
                    </SidebarMobileLink>

                    <SidebarMobileLink onClick = {toggleMobile} to = 'projects' smooth = 'linear' duration = {500} spy = {true} exact ='true' offset = {50}>
                        <AiFillProject style={{display: 'block', marginLeft: '11px', marginTop: '11px'}}/>
                        <SideBarMobileText className ='text1'>Projects</SideBarMobileText>
                    </SidebarMobileLink>

                </SidebarMobileMenu>


            </SidebarMobileWrapper>
        </SidebarMobileContainer>
    )
}

export default SidebarMobile
