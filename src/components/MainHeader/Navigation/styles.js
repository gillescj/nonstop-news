import styled from 'styled-components';
import { QUERIES, COLOURS } from 'styling';
import arrowLightSVG from 'assets/images/svgs/arrow-light.svg';
import arrowDarkSVG from 'assets/images/svgs/arrow-dark.svg';

export const Container = styled.nav`
    display: grid;
    grid-gap: 0.5rem;
    width: 100%;
    grid-template-columns: auto 1fr;
`;

export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    align-self: center;
    position: relative;
    text-decoration: none;
    &:hover {
        &:before {
            visibility: visible;
            transform: scaleX(1);
        }
    }
    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: white;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
    }
    @media (${QUERIES.small}) {
        font-size: 1.25rem;
    }
`;

export const SectionsContainer = styled.div`
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: 1fr auto;
`;

export const CategoryList = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    font-weight: bold;
    li {
        padding: 0 1rem;
        font-size: 1rem;
        cursor: pointer;
        position: relative;
        text-decoration: none;
        &:hover {
            &:before {
                visibility: visible;
                transform: scaleX(1);
            }
        }
        &:before {
            content: '';
            position: absolute;
            width: calc(100% - 2rem);
            height: 2px;
            bottom: 0;
            background: white;
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.2s ease-in-out;
        }
    }
    @media (${QUERIES.medium}) {
        display: none;
    }
`;

const Dropdown = styled.select`
    overflow: hidden;
    border: 2px solid white;
    font-weight: bold;
    background: url(${arrowLightSVG}) no-repeat 95%;
    -moz-appearance: none;
    -webkit-appearance: none;
    color: white;
    font-size: 1rem;
    padding-left: 4px;
    padding-right: 14px;
    min-height: 2rem;
    cursor: pointer;
    optgroup,
    option {
        font-weight: normal;
        color: black;
        padding: 1rem;
    }
    &:hover {
        background: url(${arrowDarkSVG}) no-repeat 95%, white;
        color: ${COLOURS.darkPurple};
        border: 2px solid ${COLOURS.lightPurple};
    }
`;

export const CategoryDropdown = styled(Dropdown)`
    display: none;
    justify-self: end;
    @media (${QUERIES.medium}) {
        display: block;
    }
    @media (${QUERIES.small}) {
        display: none;
    }
`;

export const CountryDropdown = styled(Dropdown)`
    justify-self: end;
    max-width: 8rem;
    @media (${QUERIES.small}) {
        display: none;
    }
`;

export const SectionDropdown = styled(Dropdown)`
    display: none;
    justify-self: end;
    max-width: 7rem;
    @media (${QUERIES.small}) {
        display: block;
    }
`;
