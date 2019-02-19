import { createGlobalStyle } from 'styled-components'
import media from './components/shared/media';

const GlogalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Source Sans Pro';
    }

    h1, h2, h3, h4, h5, p {
        margin: 0;
    }

    h1 {
        font: 600 50px 'Overpass';

        ${media.tablet`
            font-size: 42px;
        `}
    }

    h2 {
        font: 600 42px 'Overpass';
    }

    h3 {
        font: 600 26px 'Overpass';
    }

    h4 {
        font: 600 22px 'Overpass';
    }

    h5 {
        font: 400 18px 'Source Sans Pro';
    }

    p {
        line-height: 26px;
    }
    
    button {
        padding: 0;
    }

    ul, hr {
        padding: 0;
        margin: 0;
    }
    
    :target {
        padding-top: 100px;
        margin-top: -100px;
    }
`;

export default GlogalStyle;