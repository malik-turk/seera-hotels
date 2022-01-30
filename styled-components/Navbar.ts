import styled from 'styled-components';

import { HeaderProps } from '../type/LayoutProps';

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    height: 80px;

    img {
        filter: invert(1);
    }
`;

export const Title = styled.span`
    font-weight: 500;
    font-size: 18px;
    text-transform: uppercase;
    margin-left: 10px;
    color: #FFF;
`;

export const Header = styled.header<HeaderProps>`
    width: 100%;

    ${(props) => props.darkTheme ? `color: #FFF` : `filter: invert(1)`}
`;
