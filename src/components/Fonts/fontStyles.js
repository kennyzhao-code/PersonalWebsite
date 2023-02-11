import { createGlobalStyle } from "styled-components";
import OktaNeueBold1 from '../Fonts/OktaNeue-BlackItalic.woff';
import OktaNeueBold2 from '../Fonts/OktaNeue-BlackItalic.woff2';
import OktaNeueBold3 from '../Fonts/OktaNeue-BlackItalic.eot';
import OktaNeueBold4 from '../Fonts/OktaNeue-BlackItalic.ttf';
import OktaNeueBold5 from '../Fonts/OktaNeue-BlackItalic.svg';


import OktaNeueLight1 from '../Fonts/OktaNeue-UltraLight.woff';
import OktaNeueLight2 from '../Fonts/OktaNeue-UltraLight.woff2';
import OktaNeueLight3 from '../Fonts/OktaNeue-UltraLight.eot';
import OktaNeueLight4 from '../Fonts/OktaNeue-UltraLight.ttf';
import OktaNeueLight5 from '../Fonts/OktaNeue-UltraLight.svg';


const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'OktaNeueBold';
        src: url(${OktaNeueBold1}) format('woff');
        src: url(${OktaNeueBold2}) format('woff2');
        src: url(${OktaNeueBold3}) format('eot');
        src: url(${OktaNeueBold4}) format('truetype');
        src: url(${OktaNeueBold5}) format('svg');

    }

    @font-face {
        font-family: 'OktaNeueLight';
        src: url(${OktaNeueLight1}) format('woff');
        src: url(${OktaNeueLight2}) format('woff2');
        src: url(${OktaNeueLight3}) format('eot');
        src: url(${OktaNeueLight4}) format('truetype');
        src: url(${OktaNeueLight5}) format('svg');

    }

`

export default FontStyles;