import styled from "styled-components"

export const ProjectContainer = styled.div`
    width: 100%;
    background: #F5F5DC; 
    color: #000; 
    padding: 5rem calc((100vw - 1300px) /2); 
    height: 100%;   
    
`

export const Description = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
    font-family: 'Poppins', sans-serif;     
    text-align: start; 
    position: relative;
    margin-left: 0;
    padding-left: 2rem; 
    top: 20rem;
    font-weight: bold; 
    font-size: 20px;
    color: #b19cd9; 
    letter-spacing: 1.4px; 
    text-transform: uppercase;

    @media screen and (max-width: 480px){
        top: 23.5rem;
    }

`

export const ContentWrapper = styled.div`
    margin-top: 25rem;
    display: grid;
    padding: 0 2rem; 
`

export const ProjectRow = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    margin-bottom: 5rem; 

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr; 
    }

    @media screen and (max-width: 480px){
        height: 30%;
    }
`

export const Project = styled.div`
    padding-top: 1rem; 
    padding-right: 2rem; 

    h3 {
        margin-bottom: 1rem; 
        font-size: 1.5rem;
        position: relative;
        right: 3px;
        color: black;
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
        font-family: 'Poppins', sans-serif;     
    }

    p{
        color: black; 
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
        font-family: 'Poppins', sans-serif;     
    }
`

export const Images = styled.img`
    border-radius: 10px; 
    height: 90%; 
    width: 100%;

    &:hover {
        transform: scale(1.02); 
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 950px){
        height: 250px;
        width: 400px;
    } 

    @media screen and (max-width: 768px){
        margin-top: 3rem; 
        height: 75%
    }

    @media screen and (max-width: 480px){
        height: 75%;
        width: 100%;
    }
`

export const IconLinks = styled.a`
    color: white;
    font-size: 24px; 
    color: black;
    margin-left: 7.7px;
    margin-bottom: 4.9px;

    &:hover {
        color: black;
    }
`

export const IconsWrapper = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 100px; 
    margin-bottom: 30px;
`

export const IconsDiv = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 40px; 
    height: 40px;
    background-color: #C3B1E1;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`

/*
export const FinalText = styled.a`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
    font-family: 'Poppins', sans-serif;     
    font-size: 24px;
    padding-left: 2rem;
    padding-top: 2rem;
    color: black;
    text-decoration: none;
    position: relative;
    top: 2.5rem;

    &:hover {
        cursor: pointer;
        color: purple;
    }
`

*/

