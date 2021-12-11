import styled from "styled-components";
import {Link} from 'react-scroll';
//import {MdArrowDropDown, MdArrowDropDownCircle} from 'react-icons/md'


export const HeroContainer = styled.div`
    background: black; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    padding: 0 30px; 
    height: 1000px; 
    position: relative;
    z-index: 1; 
    border-style: solid;
    border-width: 20px;
    border-color: black;
`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 1000px;
    height: 1000px;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 40%;
    left: 50%;
    align-items: center;

    @media screen and (max-width: 750px){
        width: 600px;
        height: 600px;
        top: 45%;
    }

    
` 


export const HeroP2 = styled.p`
    margin-top: 16rem; 
    position: relative;
    top: 1rem;
    color: white; 
    font-size: 24px; 
    text-align: center;
    max-width: 600px; 
    font-family: 'Poppins', sans-serif;

    @media screen and (max-width: 768px) 
    {
        font-size: 22px; 
    }

    @media screen and (max-width: 480px)
    {
        font-size: 18px; 
    }
`

//button style 
export const ButtonWrapper = styled.div`
    position: relative; 
    height: 40px;
    width: 120px;
    justify-self: center;
    margin: auto;
    top: 1rem;
    border-radius: 40px; 
    background-color: #98f5e1;
    display: block;
    z-index: 5;

    &:hover{
        background-color: #b9fbc0;
        cursor: pointer;
        color: black;
        transition: 1s ease;

    }

`

export const Button = styled(Link)`
    font-family: 'Poppins', sans-serif;
    color: black;
    text-decoration: none;
    justify-content: center;
    text-align: center;
    margin-left: 1.6rem;
    position: relative;
    top: 0.3rem;

    &:hover{
        cursor: pointer;
        color: black;

    }
    
`

//progress bar 

export const HeroPBarContainer = styled.div`
    position: relative; 
    height: 5px;
    width: 350px;
    border-radius: 50px; 
    border: 1px; 
    background: black;
`
export const HeroPBar = styled.div`
    background: white;
    border-radius: 20px; 
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.2; 
    height: 100%; 
    width: 0; 
    transition: 3s ease; 
`

/* export const HeroBtnWrapper = styled.div`
    margin-top: 32px; 
    display: flex;
    flex-direction: column;
    align-items: center; 
`
export const ArrowDown = styled(MdArrowDropDown)`
    margin-left: 8px;
    font-size: 20px; 
` 

export const ArrowCircleDown = styled(MdArrowDropDownCircle)`
    margin-left: 8px;
    font-size: 20px; 
`
 */