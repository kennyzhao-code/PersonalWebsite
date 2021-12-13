import styled from "styled-components";


export const Nav = styled.nav`
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
`

export const NavbarContainer = styled.div`
    display: flex; 
    justify-content: space-between; 
    height: 80px;
    z-index: 1;
    width: 100%
    padding: 0 24px; 
    max-width: 1100px;
 
`

export const FullIcon = styled.div`
        display: block;
        top: 1rem; 
        font-size: 1.8rem; 
        cursor: pointer; 
        color: black; 
        margin-left: 31.5px;
        position: relative; 
        opacity: 0.3;
    
        &:hover {
            opacity: 1;
        }

        @media screen and (max-width: 768px){
            display: none;
        }
`

export const MobileIcon = styled.div`
        display: none;

        @media screen and (max-width: 768px){
            display: block;
            top: 1rem; 
            font-size: 1.5rem; 
            cursor: pointer; 
            color: white; 
            position: relative; 
            color: black;
            opacity: 0.3;
            margin-left: 31.5px;
        }

        &:hover{
            opacity: 1;
        }
`



