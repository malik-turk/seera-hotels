import styled from 'styled-components';

import { FullScreenImageProps } from '../type/LayoutProps';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
`;

export const FullScreenImage = styled.div<FullScreenImageProps>`
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: -1;
    top: 0;
    left: 0;

    img {
        opacity: 0.2;
    }

    ${(props) => props.bgColor && `
        background-color: ${props.bgColor};
    `}
`;

export const Button = styled.button`
    outline: 0;
    height: 40px;
    width: auto;
    transition: background-color 200ms ease;
    cursor: pointer;
    border-radius: 2px;
    font-weight: 500;
    color: #000;
    background-color: #FFF;
    border: solid 2px #C1C1C1;
    text-transform: uppercase;
    padding: 0 10px;

    :hover {
        border: solid 2px #000;
        color: #FFF;
        background-color: #000;
    }
`;
