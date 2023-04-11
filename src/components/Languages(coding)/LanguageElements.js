import styled from 'styled-components';
import {colors} from '../globals/colors';
import '../globals/font.css';

//progress bar styles
export const PBarContainer = styled.div`
    position: relative; 
    height: 15px;
    width: 700px;
    border-radius: 50px; 
    border: 1px; 
    background: #DEDBDB;
    margin-top: 80px;
    transition: 0.375s;

    @media screen and (max-width: 1700px)
    {
        transition: 0.375s;
        width: 600px;
    }

    @media screen and (max-width: 1350px)
    {
        transition: 0.375s;
        width: 430px;
    }

    @media screen and (max-width: 1100px)
    {
        transition: 0.375s;
        width: 450px;
    }

    @media screen and (max-width: 480px)
    {
        transition: 0.375s;
        width: 300px;
    }
    


    p{
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
        position: relative;
        font-size: 1.5rem;
        bottom: 3.3rem;
        color: ${colors.mainPurple};
    }

`;
 
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
    
`;

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
`;

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
`;

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
`;