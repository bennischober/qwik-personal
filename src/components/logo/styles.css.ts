import { style, styled } from 'styled-vanilla-extract/qwik';
import colors from 'tailwindcss/colors';

export const logoClass = style({
    width: "100%",
    height: "100%",
    ':hover polygon': {
        fillOpacity: "0.1 !important",
        fill: `${colors.orange[500]} !important`,
    },
    cursor: "pointer",
});

export const StyledDiv = styled.div`
        width: 64px;
        height: 64px;
        `;