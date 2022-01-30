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
        min-height: 100%;
    }
`;

// SideNav
export const SideNav = styled.aside`
    flex: 0.30;
    padding: 40px 10px 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    @media ${device.desktop} {
        margin-right: 20px;
    }
`;

export const HotelNameInput = styled.div`
    position: relative;
    height: 40px;
    position: sticky;
    top: 40px;

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
    top: 120px;

    .price-filter-label {
        margin-bottom: 10px;
        display: inline-block;
    }
`

// Main Content
export const Main = styled.main`
    padding: 40px 10px 0;
    flex: 1;
`;

export const SortBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFF;
    padding: 5px;

    span {
        margin-right: 5px;
    }

    button:first-child {
        margin-right: 5px;
    }
`;

export const HotelCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 40px -5px 0;
`;

export const HotelCard = styled.div`
    background-color: #FFF;
    flex: calc(50% - 40px);
    padding: 15px;
    margin: 5px;

    div:not( :first-child ) {
        margin-top: 10px;
    }

    .card-item-key {
        font-weight: 500;
    }
`;
