import styled from "styled-components";

import { device } from './device';

export const HomeWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    flex-direction: column;
`;

export const DatePickerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    color: #000;
    height: 64px;
    padding: 0 10px 0 40px;
    border-radius: 32px;

    @media ${device.tablet} {
        flex-direction: column;
        height: auto;
        background: none;
        padding: 0;
    }
`;

export const DatePickerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow: hidden;

    input,
    .react-datepicker-wrapper,
    .react-datepicker__input-container {
        height: 100%;
    }

    .react-datepicker-wrapper {
        @media ${device.tablet} {
            width: 50%;
        }
    }

    input {
        outline: 0;
        padding: 0;
        border: none;
        font-weight: 500;
        border-radius: 32px;
        padding-left: 20px;
        cursor: pointer;

        :hover {
            background-color: #c5c5c5;
        }
    }

    :not( :last-child ) {
        margin-right: 50px;

        @media ${device.tablet} {
            margin-right: 0;
        }
    }

    .date-picker-label {
        margin-right: 10px;
        font-weight: 500;
    }

    @media ${device.tablet} {
        background-color: #FFF;
        height: 42px;
        width: 100%;
        border-radius: 32px;
        margin-bottom: 10px;
    }
`;

export const SearchButton = styled.button`
    background-color: #000;
    color: #fff;
    border: none;
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    cursor: pointer;
    transition: opacity 200ms ease;

    img {
        filter: invert(1);

        @media ${device.tablet} {
            filter: unset;
        }
    }

    :hover {
        opacity: 0.8;
    }

    @media ${device.tablet} {
        background-color: #FFF;
    }
`;

export const Heading = styled.h1`
    margin: 0;
    font-weight: 500;
`;

export const Paragraph = styled.p`
    margin: 10px 0 20px;
`;
