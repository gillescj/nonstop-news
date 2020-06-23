import styled from 'styled-components';
import { QUERIES, COLOURS } from 'styling';
import arrowSVG from 'assets/images/svgs/arrow.svg';

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
`;

export const SectionsContainer = styled.div`
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: 1fr auto;
    @media (${QUERIES.small}) {
        justify-items: center;
        justify-content: center;
    }
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
        &:hover {
            text-decoration: underline;
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
    background: url(${arrowSVG}) no-repeat 95%;
    -moz-appearance: none;
    -webkit-appearance: none;
    color: white;
    font-size: 1rem;
    padding-left: 4px;
    padding-right: 14px;
    cursor: pointer;
    optgroup,
    option {
        font-weight: normal;
        color: black;
        padding: 1rem;
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
    max-width: 8rem;
    @media (${QUERIES.small}) {
        display: block;
    }
`;
