import { createGlobalStyle } from "styled-components";
import OktaNeueBold1 from '../Fonts/OktaNeue-BlackItalic.woff';
import OktaNeueBold2 from '../Fonts/OktaNeue-BlackItalic.woff2';
import OktaNeueLight1 from '../Fonts/OktaNeue-UltraLight.woff';
import OktaNeueLight2 from '../Fonts/OktaNeue-UltraLight.woff2';


const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'OktaNeueBold';
        src: url(${OktaNeueBold1}) format('woff');
        src: url(${OktaNeueBold2}) format('woff2');
    }

    @font-face {
        font-family: 'OktaNeueLight';
        src: url(${OktaNeueLight1}) format('woff');
        src: url(${OktaNeueLight2}) format('woff2');
    }

`

export default FontStyles;