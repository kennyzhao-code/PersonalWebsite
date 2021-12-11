import styled from 'styled-components'
import {Link} from 'react-scroll'

export const FooterContainer = styled.footer`
    background-color: black;
`

export const FooterWrap = styled.div`
    padding: 48px 24px; 
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto; 
`

export const FooterLinksContainer = styled.div`
    display: flex; 
    justify-content: center;

    @media screen and (max-width: 840px)
    {
        padding-top: 32px; 
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    max-width: 1100px;
    margin: 40px auto 0 auto; 
    margin-right: 1.5rem;

`

export const FooterLinkItems = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    width: 800px; 

    @media screen and (max-width: 840px)
    {
        grid-template-columns: 1fr;
        text-align: center;
        margin-left: 25px;
    }
`



export const FooterLink = styled(Link)`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
    font-family: 'Poppins', sans-serif;
    color: #fff; 
    text-decoration: none; 
    margin-bottom: 0.5rem; 
    font-size: 20px; 

    &:hover {
        color: #98f5e1; 
        transition: 0.3s ease-out; 
        cursor: pointer;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px; 
    width: 100%; 
`

export const SocialMediaWrap = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    max-width: 1100px;
    margin: 40px auto 0 auto; 

    @media screen and (max-width: 820px)
    {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
    font-family: 'Poppins', sans-serif;
    color: #fff; 
    justify-self: start; 
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem; 
    display: flex; 
    align-items: center; 
    margin-bottom: 16px; 
    font-weight: bold; 

    &:hover {
        color: #98f5e1;
    }

`

export const WebsiteRights = styled.small`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
    font-family: 'Poppins', sans-serif;
    color: #fff;
    margin-bottom: 16px; 

`

export const SocialIcons = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 240px; 
    margin-bottom: 30px;

`


//icons 

export const SocialIconLinkInsta = styled.a`
    color: #f08080;
    font-size: 30px; 

    &:hover {
        color: #ffc7ad;
    }
`
export const SocialIconLinkLink = styled.a`
    color: #71a5de;
    font-size: 30px; 

    &:hover {
        color: #bee1e6;
    }
`
export const SocialIconLinkGit = styled.a`
    color: #9381ff;
    font-size: 30px; 
    
    &:hover {
        color: #bdb2ff;
    }
`
export const SocialIconLinkDis = styled.a`
    color: #84dcc6;
    font-size: 30px; 

    &:hover {
        color: #a5ffd6;
    }
`

