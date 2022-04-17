import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /* Monsterrat Regular */
    @font-face {
        font-family: 'Montserrat';
        font-weight: 400;
        font-style: normal;
        src: url('/fonts/Montserrat-Regular.woff2') format('woff2'),
            url('/fonts/Montserrat-Regular.woff') format('woff');
    }

    /* Monsterrat medium */
    @font-face {
        font-family: 'Montserrat';
        font-weight: 500;
        font-style: normal;
        src: url('/fonts/Montserrat-Medium.woff2') format('woff2'),
            url('/fonts/Montserrat-Medium.woff') format('woff');
    }

    /* Montserrat SemiBold */
    @font-face {
        font-family: 'Montserrat';
        font-weight: 600;
        font-style: normal;
        src: url('/fonts/Montserrat-SemiBold.woff2') format('woff2'),
            url('/fonts/Montserrat-SemiBold.woff') format('woff');
    }

    /* Montserrat Bold */
    @font-face {
        font-family: 'Montserrat';
        font-weight: 700;
        font-style: normal;
        src: url('/fonts/Montserrat-Bold.woff2') format('woff2'),
            url('/fonts/Montserrat-Bold.woff') format('woff');
    }   

    /* Bitter regular */
    @font-face {
        font-family: 'Bitter';
        font-weight: 400;
        font-style: normal;
        src: url('/fonts/Bitter-Regular.woff2') format('woff2'),
            url('/fonts/Bitter-Regular.woff') format('woff');
    }


    body {
        font-family: ${(props) => props.theme.font.family.default};
        font-size: ${(props) => props.theme.font.size.default};
        line-height: ${(props) => props.theme.font.lineHeight.default};
        color: ${(props) => props.theme.color.text};
    }

    h1 {
        font-family: ${(props) => props.theme.font.family.headline};
        font-weight: 400;
        font-size: ${(props) => props.theme.font.size.headline};
        color: black;
    }

    a {
        text-decoration: none;
    }
`;
