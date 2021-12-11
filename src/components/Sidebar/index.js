import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBarText } from './SidebarElement'
import { IoHome, IoPersonCircleSharp, IoFlash } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";

//onClick={toggle} inside sidebar link will make it so that when you click it will close the nav automatically

const Sidebar = ({isOpen, toggle}) => {

    /*
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    */
    return (
        <SidebarContainer isOpen={isOpen}>

            <SidebarWrapper>
                <SidebarMenu>

                    <SidebarLink to = 'hero' smooth = 'linear' duration = {500} spy = {true} exact ='true' offset = {-500} >
                        <IoHome style={{display: 'block', marginLeft: '11px', marginTop: '11px'}}/>
                        <SideBarText className ='text1'>Home</SideBarText>
                    </SidebarLink>

                    <SidebarLink to = 'aboutMe' smooth = 'linear' duration = {500} spy = {true} exact ='true' offset = {50}>
                        <IoPersonCircleSharp style={{display: 'block', marginLeft: '11px', marginTop: '11px'}}/>
                        <SideBarText className ='text1'>About Me</SideBarText>
                    </SidebarLink>

                    <SidebarLink to = 'experiences' smooth = 'linear' duration = {500} spy = {true} exact ='true' offset = {-200}> 
                        <IoIosPaper style={{display: 'block', marginLeft: '11px', marginTop: '11px'}}/>
                        <SideBarText className ='text1'>Experiences</SideBarText>
                    </SidebarLink>

                    <SidebarLink to = 'skillsHobbies' smooth = 'linear' duration = {500} spy = {true} exact ='true' >
                        <IoFlash style={{display: 'block', marginLeft: '11px', marginTop: '11px'}}/>
                        <SideBarText className ='text1'>Skills/Hobbies</SideBarText>
                    </SidebarLink>

                    <SidebarLink to = 'projects' smooth = 'linear' duration = {500} spy = {true} exact ='true' offset = {50}>
                        <AiFillProject style={{display: 'block', marginLeft: '11px', marginTop: '11px'}}/>
                        <SideBarText className ='text1'>Projects</SideBarText>
                    </SidebarLink>

                </SidebarMenu>


            </SidebarWrapper>

            <Icon onClick={toggle}>
                <CloseIcon style ={{color: 'black'}}/>
            </Icon>

        </SidebarContainer>
    )
}

export default Sidebar
