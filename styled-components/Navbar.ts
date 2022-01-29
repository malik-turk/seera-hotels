import styled from 'styled-components';

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    padding-top: 40px;

    img {
        filter: invert(1);
    }
`;

export const Title = styled.span`
    font-weight: 500;
    font-size: 18px;
    text-transform: uppercase;
    margin-left: 10px;
`;

export const Header = styled.header`
    background: rgb(0,0,0);
    background: linear-gradient(
                    180deg,
                    rgba(0,0,0,1) 0%,
                    rgba(0,0,0,0.38) 52%,
                    rgba(0,0,0,0) 83%,
                    rgba(0,0,0,0) 100%
                );
    position: fixed;
    width: 100%;
`;
