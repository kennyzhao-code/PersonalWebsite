import styled from 'styled-components'

export const LanguageContainer = styled.div`
    width: 100%;
    background: #F5F5DC; 
    color: #000; 
    padding: 5rem calc((100vw - 1300px) /2); 
    height: 50%;
    
`

export const LanguageDescription = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
    font-family: 'Poppins', sans-serif;     
    text-align: start; 
    position: relative;
    margin-left: 7rem;
    padding-left: 2rem; 
    bottom: 1rem;
    font-size: clamp(1.5rem, 5vw, 2rem); 
    font-weight: bold; 
    font-size: 20px;
    color: #b19cd9; 
    letter-spacing: 1.4px; 
    text-transform: uppercase;
`



export const LanguageContentWrapper = styled.div`
    display: flex;
    position: relative;
    bottom: 17rem;    
    margin-left: 4rem;


    @media screen and (max-width: 1000px){
        bottom: 15rem;
        margin-left: 5rem;

    }

    @media screen and (max-width: 768px){
        bottom: 0;
        top: -5rem;

    }

    @media screen and (max-width: 480px){
        top: 0rem;
        right: 1rem;
    }

`

export const LanguageRowContainer = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-gap: 4rem;
    width: 1000px; 
    margin: 0 auto; 

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }


`

//progress bar 

export const PBarContainer = styled.div`
    position: relative; 
    height: 10px;
    width: 350px;
    border-radius: 50px; 
    border: 1px; 
    background: #DEDBDB;


    p{
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
        font-family: 'Poppins', sans-serif;
        position: relative;
        bottom: 2.5rem;
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
    background: #88A1BD;
    border-radius: 20px; 
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0; 
    height: 100%; 
    width: 0; 
    transition: 4s ease; 
`
export const PBarCss = styled.div`
    background: #ff6961;
    border-radius: 20px; 
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0; 
    height: 100%; 
    width: 0; 
    transition: 4s ease; 
`

export const PBarJava = styled.div`
    background: #FAC898;
    border-radius: 20px; 
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0; 
    height: 100%; 
    width: 0; 
    transition: 4s ease; 
`

export const PBarJavaScript = styled.div`
    background: #FDFD96;
    border-radius: 20px; 
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0; 
    height: 100%; 
    width: 0; 
    transition: 4s ease; 
`