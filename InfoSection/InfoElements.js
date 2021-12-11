import styled from "styled-components"

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#F5F5DC' : 'black')};

    @media screen and (max-width: 768px){
        padding: 100px 0; 
    }
`

export const InfoWrapper = styled.div`
    display: grid; 
    z-index: 1; 
    height: 900px; 
    width: 100%; 
    max-width: 1100px; 
    margin-right: auto; 
    margin-left: auto; 
    padding: 0 24px; 
    justify-content: center; 
    position: relative;
    bottom: 7rem;
`

export const InfoRow = styled.div`
    display: grid;
    margin-left: 50px;
    grid-auto-columns: minmax(auto, 1fr); 
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )}; 

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px; 
    padding: 0 15px; 
    grid-area: col1; 
`

export const Column2 = styled.div`
    margin-bottom: 15px; 
    padding: 0 15px; 
    grid-area: col2; 
`

export const TextWrapper = styled.div`
    max-width: 500px; 
    padding-top: 50px; 
    padding-bottom: 0; 
`

export const TopLine = styled.p`
    color: #b19cd9; 
    font-size: 20px; 
    position: relative;
    line-height: 16px; 
    font-weight: 700; 
    letter-spacing: 1.4px; 
    text-transform: uppercase;
    top: 5rem;
    padding: 5rem calc((100vw - 1300px) /2);
    margin-left: 2rem;

    @media screen and (max-width: 768px){
        top: 0;
    }

`


export const Subtitle = styled.p`
    max-width: 440px; 
    margin-bottom: 35px;
    margin-top: 24px; 
    font-size: 18px; 
    line-height: 24px; 
    color: ${({darkText}) => (darkText ? 'white' : 'black')}; 
`

export const Subtitle2 = styled.p`
    max-width: 440px; 
    margin-bottom: 35px;
    margin-top: 24px; 
    font-size: 18px; 
    line-height: 24px; 
    color: ${({darkText}) => (darkText ? 'white' : 'black')}; 
`


export const ImgWrap = styled.div`
    max-width: 555px; 
    height: 100%
`

export const Img = styled.img`
    width: 30rem;
    margin: 0 0 10px -50px;
    padding-right: 0;

`


export const AboutMeIcons = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 240px; 
    margin-bottom: 30px;
`

//icons 

export const AboutMeIconsLinkInsta = styled.a`
    color: #f08080;
    font-size: 30px; 

    &:hover {
        color: #ffc7ad;
    }
`
export const AboutMeIconsLinkLink = styled.a`
    color: #71a5de;
    font-size: 30px; 

    &:hover {
        color: #bee1e6;
    }
`
export const AboutMeIconsLinkGit = styled.a`
    color: #9381ff;
    font-size: 30px; 
    
    &:hover {
        color: #bdb2ff;
    }
`
export const AboutMeIconsLinkDis = styled.a`
    color: #84dcc6;
    font-size: 30px; 

    &:hover {
        color: #a5ffd6;
    }
`


