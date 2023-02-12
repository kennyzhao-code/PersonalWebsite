import { createGlobalStyle } from "styled-components";
import OktaNeueBold1 from '../Fonts/OktaNeue-BlackItalic.woff';
import OktaNeueBold2 from '../Fonts/OktaNeue-BlackItalic.woff2';
import OktaNeueBold4 from '../Fonts/OktaNeue-BlackItalic.ttf';
import OktaNeueBold5 from '../Fonts/OktaNeue-BlackItalic.svg';


import OktaNeueLight1 from '../Fonts/OktaNeue-UltraLight.woff';
import OktaNeueLight2 from '../Fonts/OktaNeue-UltraLight.woff2';
import OktaNeueLight4 from '../Fonts/OktaNeue-UltraLight.ttf';
import OktaNeueLight5 from '../Fonts/OktaNeue-UltraLight.svg';


const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'OktaNeueBold';
        src: url(${OktaNeueBold1}) format('woff'),
             url(${OktaNeueBold2}) format('woff2'),
             url(${OktaNeueBold5}) format('svg'),
             url(${OktaNeueBold4}) format('truetype');

    }

    @font-face {
        font-family: 'OktaNeueLight';
        src: url(${OktaNeueLight1}) format('woff'),
             url(${OktaNeueLight2}) format('woff2'),
             url(${OktaNeueLight5}) format('svg'),
             url(${OktaNeueLight4}) format('truetype');


    }

`

export default FontStyles;