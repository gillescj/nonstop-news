import styled from 'styled-components';
import { QUERIES, COLOURS } from 'styling';

export const Container = styled.footer`
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
    justify-items: space-between;
    width: 100%;
    color: white;
    background: ${COLOURS.darkPurple};
`;

export const Attribution = styled.div`
    border-bottom: 1px solid white;
    padding-bottom: 1rem;
    text-align: center;
    a {
        font-weight: bold;
    }
`;

export const CountryContainer = styled.div`
    display: grid;
    padding: 1rem;
    grid-row-gap: 1rem;
    grid-auto-flow: column;
    grid-template-rows: repeat(8, minmax(0.5rem, 1rem));
    @media (${QUERIES.medium}) {
        grid-template-rows: repeat(10, 1rem);
    }
    @media (${QUERIES.smallMedium}) {
        display: none;
    }
`;
