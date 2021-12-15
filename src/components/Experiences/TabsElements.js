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
    height: 1100px; 
    position: relative;
    z-index: 0; 
    background: #F5F5DC;
    margin: auto;
    height: 100%;
    width: 75%;
    bottom: 280px;

    @media screen and (max-width: 768px){
        bottom: 120px;
    }

    @media screen and (max-width: 480px){
        height: 1000px;
        bottom: 190px;
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
    bottom: 200px;

    @media screen and (max-width: 768px){
        bottom: 0;
    }

    @media screen and (max-width: 480px){
        bottom: 0;
        top: 3rem;
    }

`

export const TabText = styled.h1`
    color: black;
    font-size: 20px;
    font-weight: bold;
    display: inline-block;
    position: relative;
`

//img styling 


export const ImgOhsea = styled.img`
    margin-top: 1.5rem;
    width: 50px;
    display: inline-block;
    margin-left: 1.3rem;
    position: relative;

    @media screen and (max-width: 768px){
        margin-left: 0;
    }

    

    @media screen and (max-width: 620px){
        margin-top: 51px;
        max-width: 100px;
        right: 0.8rem;
        
    }

    @media screen and (max-width: 480px){
        max-width: 130px;
        right: 1.6rem;
        margin-top: 53px;
    }

`

export const ImgAvgl = styled.img`
    margin-top: 1.3rem;
    width: 50px;
    display: inline-block;
    margin-left: 2rem;
    position: relative;

    @media screen and (max-width: 768px){
        margin-left: 0;
        margin-bottom: 1.7rem;
    }
    
    @media screen and (max-width: 620px){
        margin-top: 49px;
        max-width: 100px;
        right: 0.5rem;
    }

    @media screen and (max-width: 480px){
        max-width: 130px;
        right: 1.3rem;
        margin-top: 50px;
    }


`

export const ImgPetcs = styled.img`
    margin-top: 1.3rem;
    width: 38px;
    display: inline-block;
    margin-left: 0.7rem;
    border-radius: 10px;
    position: relative;

    @media screen and (max-width: 768px){
        margin-left: 0;
        margin-bottom: 2.02rem;
    }

    @media screen and (max-width: 620px){
        margin-top: 50px;
        border-radius: 5px;
        max-width: 100px;
        right: 0.2rem;
        
    }

    @media screen and (max-width: 480px){
        max-width: 130px;
        right: 0.9rem;
        margin-top: 50px;
    }

`

export const ImgTmc = styled.img`
    margin-top: 1.3rem;
    width: 38px;
    display: inline-block;
    margin-left: 1.8rem;
    border-radius: 6px;
    position: relative;

    @media screen and (max-width: 768px){
        margin-left: 0;
        margin-bottom: 2.1rem;
    }

    
    @media screen and (max-width: 620px){
        margin-top: 50px;
        border-radius: 5px;
        max-width: 100px;
        right: 0.2rem;
    }

    @media screen and (max-width: 480px){
        max-width: 130px;
        right: 0.9rem;
        margin-top: 50px;
    }
`