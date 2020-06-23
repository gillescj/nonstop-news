import styled from 'styled-components';
import { QUERIES, COLOURS } from 'styling';
import arrowSVG from 'assets/images/svgs/arrow.svg';

export const Container = styled.nav`
    display: grid;
    grid-gap: 0.5rem;
    width: 100%;
    grid-template-columns: auto 1fr auto;
`;

export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const CategoryList = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    font-weight: bold;
    li {
        padding: 0 1rem;
        font-size: 1rem;
    }
    @media (${QUERIES.medium}) {
        display: none;
    }
`;

export const CategoryDropdown = styled.select`
    display: none;
    overflow: hidden;
    justify-self: end;
    border: 2px solid white;
    font-weight: bold;
    background: url(${arrowSVG}) no-repeat 95%;
    -moz-appearance: none;
    -webkit-appearance: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    option {
        border: solid 2px white;
        font-weight: normal;
        padding: 1rem;
    }
    @media (${QUERIES.medium}) {
        display: flex;
    }
`;

export const CountryDropdown = styled.select`
    /* display: none; */
    overflow: hidden;
    justify-self: end;
    border: 2px solid white;
    font-weight: bold;
    background: url(${arrowSVG}) no-repeat 95%;
    -moz-appearance: none;
    -webkit-appearance: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    option {
        border: solid 2px white;
        font-weight: normal;
        padding: 1rem;
    }
`;
