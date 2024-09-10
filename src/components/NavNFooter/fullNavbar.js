/* Imports */
import React, {useState} from 'react';
import { IoHome, IoPersonCircleSharp, IoFlash } from "react-icons/io5";
import { AiFillProject, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";
import styled from "styled-components";
import {Link as LinkS } from "react-scroll";
import {MdArrowForwardIos} from 'react-icons/md';
import {colors} from '../globals/colors';

//onClick={toggle} inside sidebar link will make it so that when you click it will close the nav automatically

/* Main */
const Navbar = () => {

    //toggles states for navbar
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    /*
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    */
    return (

        <Nav>
            <NavbarContainer>
        
                <FullIcon onClick={toggle}>
                    <MdArrowForwardIos />
                </FullIcon>


        <SidebarContainer isOpen={isOpen} onClick={toggle}>

            <SidebarWrapper>
                <SidebarMenu>

                    <SidebarLink color = {colors.navHomeDark} background = {colors.navHome} border = {`2.5px solid ${colors.navHomeDark}`} activeClass = "active" to = 'hero' smooth = 'easeInCubic' duration = {500} spy = {true} exact ='true' offset = {-500} >
                        <IoHome />
                        {/*<SideBarText className ='text1'>Home</SideBarText>*/}
                    </SidebarLink>

                    <SidebarLink color = {colors.navIntroDark} background = {colors.navIntro} border = {`2.5px solid ${colors.navIntroDark}`} activeClass = "active" to = 'aboutMe' smooth = 'easeInCubic' duration = {500} spy = {true} exact ='true' >
                        <IoPersonCircleSharp />
                        {/*<SideBarText className ='text1'>About Me</SideBarText>*/}
                    </SidebarLink>

                    <SidebarLink color = {colors.navHobbiesDark} background = {colors.navHobbies} border = {`2.5px solid ${colors.navHobbiesDark}`} activeClass = "active" to = 'hobbies' smooth = 'easeInCubic' duration = {500} spy = {true} exact ='true' offset = {-100}> 
                        <IoFlash />
                        {/*<SideBarText className ='text1'>Hobbies</SideBarText>*/}
                    </SidebarLink>

                    <SidebarLink color = {colors.navProjectDark} background = {colors.navProject} border = {`2.5px solid ${colors.navProjectDark}`} activeClass = "active" to = 'projects' smooth = 'easeInCubic' duration = {500} spy = {true} exact ='true' offset = {-100}>
                        <AiOutlineFundProjectionScreen />
                        {/*<SideBarText className ='text1'>projects</SideBarText>*/}
                    </SidebarLink>

                    <SidebarLink color = {colors.navSkillsDark} background = {colors.navSkills} border = {`2.5px solid ${colors.navSkillsDark}`} activeClass = "active" to = 'skills' smooth = 'easeInCubic' duration = {500} spy = {true} exact ='true' offset = {-100}>
                        <AiFillProject />
                        {/*<SideBarText className ='text1'>Experiences</SideBarText>*/}
                    </SidebarLink>

                    <SidebarLink color = {colors.navContactDark} background = {colors.navContact} border = {`2.5px solid ${colors.navContactDark}`} activeClass = "active" to = 'contact' smooth = 'easeInCubic' duration = {500} spy = {true} exact ='true' >
                        <MdContactMail />
                        {/*<SideBarText className ='text1'>Contact</SideBarText>*/}
                    </SidebarLink>

                </SidebarMenu>

            </SidebarWrapper>

        </SidebarContainer>



        </NavbarContainer>
    </Nav>
    )
};

export default Navbar

/* Styles */
//top controls where the sidebar comes from, in this case from the top
const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    transition: 0.375s ease;
    visibility: ${({isOpen }) => (isOpen ? "visible" : "hidden")};
    translate: ${({isOpen }) => (isOpen ? "0" : "-60% 0")};
    scale: ${({isOpen }) => (isOpen ? "1" : "0")}; 
    opacity: ${({isOpen }) => (isOpen ? "100%" : "0")}; 
   /* border: 1px solid blue; */
    margin-left: 5rem;
    width: 370px;
    height: 80px;

    @media screen and (max-width: 768px) {
        width: 60px;
        height: 450px;
        margin-left: 0.9rem;
        margin-top: 3.5rem;
        translate: ${({isOpen }) => (isOpen ? "0" : "0 -50%")};
    }
`;

const SidebarWrapper = styled.div`
   /* border: 1px solid red; */ 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const SidebarMenu = styled.div`
    display: grid; 
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 1.5rem;
    text-align: center; 
   /* border: 1px solid black;*/

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-row-gap: 1.5rem;

    }
`;

const SidebarLink = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.375s;
    color: ${(props) => props.color || '#000'}; /* Default color is black if not provided */
    background: ${(props) => props.background|| '#000'}; /* Default color is black if not provided */
    border: ${(props) => props.border || '2.5px solid #000'}; /* Default color is black if not provided */
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    position: relative;


    &.active {
        color: #fff;
    }
`;

//nav 
const Nav = styled.nav`
    height: 0.1px; 
    display: flex; 
    font-size: 1rem; 
    position: fixed; 
    top: 0; 
    z-index: 99;

    @media screen and (max-width: 960px)
    {
        transition: 0.8s all ease; 
    }
`;

const NavbarContainer = styled.div`
    display: flex; 
    justify-content: space-between; 
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px; 
    max-width: 1100px;
    transition: 0.375s;

    @media screen and (max-width: 768px) {
        transition: 0.375s;
        justify-content: center;
    }
`;

const FullIcon = styled.div`
        display: block;
        top: 1rem; 
        font-size: 1.8rem; 
        cursor: pointer; 
        margin-left: 1.4rem;
        position: relative; 
        opacity: 0.5;
        margin-top: 0.6rem;
        transition: 0.375s;
        color: ${colors.mainPurple};
        right: 0.9rem;
    
        &:hover {
            opacity: 1;
        }


        @media screen and (max-width: 768px) {
            transition: 0.375s;
            rotate: 90deg;
            margin-left: 0rem; 
            top: 0;
            position: relative;
       }
`;


//styles for text
/*width: 250px;*/


/*
    &:hover .text1 {
        display: flex;
        color: black;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
        opacity: 1;
    }
    */


/**
const CloseIcon = styled(IoIosArrowUp)`
color: #fff; 
` 

const SideBarText = styled.h1`
    display: none;
`*/

