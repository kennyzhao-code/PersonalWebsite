import styled from 'styled-components'
import {colors} from '../globals/colors'
//progress bar 

export const PBarContainer = styled.div`
    position: relative; 
    height: 15px;
    width: 700px;
    border-radius: 50px; 
    border: 1px; 
    background: #DEDBDB;
    margin-top: 80px;
    


    p{
        font-family: 'OktaNeueLight', sans-serif;
        font-weight: bold;
        position: relative;
        font-size: 1.5rem;
        bottom: 3.3rem;
        color: ${colors.mainPurple};
    }

    @media screen and (max-width: 900px)
    {
        width: 250px;
    }

    @media screen and (max-width: 768px)
    {
        width: 450px;
    }

    @media screen and (max-width: 570px)
    {
        width: 300px;
    }

    @media screen and (max-width: 480px)
    {
        width: 250px;
    }
`
export const PBar = styled.div`
    background: ${colors.mainGreen};
    border-radius: 20px; 
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0; 
    height: 100%; 
    width: 0; 
    transition: 4s ease;
    
`

export const PBarC = styled.div`
    background: ${colors.mainRed};
    border-radius: 20px; 
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0; 
    height: 100%; 
    width: 0; 
    transition: 4s ease; 
`

export const PBarCss = styled.div`
    background: ${colors.mainPurple};
    border-radius: 20px; 
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0; 
    height: 100%; 
    width: 0; 
    transition: 4s ease; 
`

export const PBarJavaScript = styled.div`
    background: ${colors.mainBlue};
    border-radius: 20px; 
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0; 
    height: 100%; 
    width: 0; 
    transition: 4s ease; 
`