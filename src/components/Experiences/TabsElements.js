import styled from "styled-components"


export const MasterTab = styled.div`
    width: 100%;
    height: 700px;
    background: #F5F5DC;
    position relative;

    @media screen and (max-width: 480px){
        height: 800px;
    }
`

export const TabContainer = styled.div`
    display: flex; 
    align-items: center; 
    height: 800px; 
    position: relative;
    z-index: 0; 
    background: #F5F5DC;
    margin: auto;
    height: 100%;
    width: 75%;
    bottom: 250px;

    @media screen and (max-width: 900px) {
        bottom: 40px;
    }

    @media screen and (max-width: 480px){
        bottom: 100px;
        height: 1000px;
    }
`

export const TabH1 = styled.h1`
    color: #b19cd9; 
    text-transform: uppercase;
    letter-spacing: 1.4px; 
    font-weight: 700; 
    font-size: 20px; 
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
    font-family: 'Poppins', sans-serif;
    position: relative;
    z-index: 1;
    margin-left: 2rem;
    padding: 5rem calc((100vw - 1300px) /2);

`