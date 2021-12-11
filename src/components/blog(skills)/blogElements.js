import styled from "styled-components"

export const BlogContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #F5F5DC; 

    @media screen and (max-width: 1000px)
    {
        height: 1500px; 
    }

    @media screen and (max-width: 768px)
    {
        height: 2300px; 
    }

    @media screen and (max-width: 480px)
    {
        height: 2300px; 
    }

`
//grid-template-columns: 1fr, the amount of fr will determine the items in each row

export const BlogWrapper = styled.div`
    max-width: 1000px; 
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    align-items: center; 
    grid-gap: 16px;
    padding: 0 50px;     
    justify-content: center;



    @media screen and (max-width: 1000px)
    {
        grid-template-columns: 1fr 1fr; 
    }

    @media screen and (max-width: 768px)
    {
        grid-template-columns: 1fr; 
        padding: 0 20px; 
    }
`


export const BlogIcon = styled.img`
    height: 160px; 
    width: 160px; 
    margin-bottom: 10px; 
`

export const BlogH1 = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem; 
    color: #b19cd9;
    margin-bottom: 5rem; 
    font-weight: bold;
    letter-spacing: 1.4px; 
    text-transform: uppercase;
    font-size: 20px;
    position: relative; 
    top: 3rem;
    margin-left: 2rem;
    padding: 5rem calc((100vw - 1300px) /2);

    @media screen and (max-width: 480px)
    {
        font-size: 2rem; 
    }
`

export const BlogH2 = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
    font-family: 'Poppins', sans-serif;
    font-size: 2rem; 
    margin-top: 25px;
    font-weight: bold;
    color: #3D3D3D;
`



