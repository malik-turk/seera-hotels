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
