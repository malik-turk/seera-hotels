import styled from "styled-components";

import { device } from './device';

export const HotelsWrapper = styled.section`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #F1F2F8;
`;

export const HotelsContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: calc(500vh - 130px);

    @media ${device.tablet} {
        flex-direction: column;
    }
`;

export const SideNav = styled.aside`
    flex: 0.30;
    padding: 40px 10px 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const Main = styled.main`
    background-color: green;
    flex: 1;
`;

export const HotelNameInput = styled.div`
    position: relative;
    height: 40px;
    position: sticky;
    top: 0;

    input {
        height: 100%;
        width: calc(100% - 32px);
        outline: 0;
        border: none;
        border-radius: 5px;
        padding-left: 30px;
    }
`;

export const ImageContainer = styled.figure`
    position: absolute;
    left: 5px;
    top: 14px;
    margin: 0;
`

export const RangeContainer = styled.div`
    margin-top: 40px;
    position: sticky;
    top: 80px;
`
