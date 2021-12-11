import styled from "styled-components";
import {IoIosArrowUp} from "react-icons/io"
import {Link as LinkS } from "react-scroll"

//top controls where the sidebar comes from, in this case from the top
export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999; 
    height: 50%;
    display: grid; 
    align-items: center; 
    top: 0; 
    left: 0; 
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen }) => (isOpen ? "100%" : "0")}; 
    top: ${({isOpen }) => (isOpen ? "0" : "-100%")}; 


    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const CloseIcon = styled(IoIosArrowUp)`
    color: #fff; 
`

export const Icon = styled.div`
    position: absolute;
    bottom: 9rem;
    background: transparent;
    font-size: 2rem; 
    cursor: pointer;
    outline: none; 
    display: flex; 
    opacity: .3; 
    margin-left: 31.5px;

    &:hover {
        opacity: 1;
    }
`


export const SidebarWrapper = styled.div`
    color: white; 
`

export const SidebarMenu = styled.ul`
    display: grid; 
    grid-template-colums: 1fr; 
    grid-template-rows: repeat(6, 55px); 
    text-align: center; 

`


export const SidebarLink = styled(LinkS)`
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out; 
    color: #fff; 
    cursor: pointer;
    background-color: #3B3B38;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    position: relative;
    right: 2rem;
    bottom: 3rem;
    transition: width 0.2s;

    &:hover {
        transition: 0.2 ease-in-out;
        width: 250px;
        color: #3B3B38;
        background-color: #D3D3D3;
    }

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

    &.active{
        border-bottom: 5px solid #b19cd9; 
    }

`

export const SideBarText = styled.h1`
    display: none;
`

