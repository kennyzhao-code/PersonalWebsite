import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
    font-family: 'Poppins', sans-serif;
    border-radius: 50px; 
    background: #BEE5B0'; 
    white-space: nowrap; 
    color: #010606;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex; 
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none; 
    z-index: 5;

    &:hover {
        transition: all 0.5s ease-in-out;
        background: #fff; 
        color: black;
`   
