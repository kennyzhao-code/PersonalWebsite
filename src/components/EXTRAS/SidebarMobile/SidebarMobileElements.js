import styled from "styled-components";
import { ImCross } from "react-icons/im";
import {Link as LinkS } from "react-scroll"



export const SidebarMobileContainer = styled.aside`
    position: fixed;
    z-index: 999; 
    height: 50%;
    background-color: black;
    height: 100vh;
    display: grid; 
    align-items: center; 
    top: 0; 
    left: 0; 
    transition: 0.3s ease-in-out;
    opacity: ${({isOpenMobile }) => (isOpenMobile ? "100%" : "0")}; 
    left: ${({isOpenMobile }) => (isOpenMobile ? "0" : "-100%")}; 


    @media screen and (min-width: 768px) {
        left: -100%;
    }
`

export const CloseMobileIcon = styled(ImCross)`
    color: white; 
    font-size: 30px;
`

export const IconMobile = styled.div`
    position: absolute;
    background: transparent;
    cursor: pointer;
    outline: none; 
    display: flex; 
    opacity: .3; 
    top: 30px;
    margin-left: 30px;

    &:hover {
        opacity: 1;
    }
`


export const SidebarMobileWrapper = styled.div`
    color: white; 
`

export const SidebarMobileMenu = styled.ul`
    display: grid; 
    grid-template-colums: 1fr; 
    grid-template-rows: repeat(6, 66px); 
    text-align: center; 
    position: relative;
    top: 5rem;
`


export const SidebarMobileLink = styled(LinkS)`
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out; 
    color: #fff; 
    cursor: pointer;
    background-color: #3B3B38;
    width: 250px;
    height: 50px;
    border-radius: 100px;
    position: relative;
    right: 2rem;
    bottom: 3rem;

    &:hover {
        color: #3B3B38;
        background-color: #D3D3D3;
    }

    .text1 {
        display: flex;
        color: white;
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

    &:hover .text1 {
        color: #3B3B38;
    }

    &.active{
        border-bottom: 5px solid #b19cd9; 
    }

`

export const SideBarMobileText = styled.h1`
    display: none;
`

