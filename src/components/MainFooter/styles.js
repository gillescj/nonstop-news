import styled from 'styled-components';
import { QUERIES, COLOURS } from 'styling';

export const Container = styled.footer`
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
    justify-items: space-between;
    width: 100%;
    color: white;
    background: linear-gradient(${COLOURS.darkPurple}, ${COLOURS.lightPurple});
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
    grid-template-rows: repeat(3, minmax(0.5rem, 1rem));
    h4 {
        justify-self: start;
        cursor: pointer;
        color: hsl(250, 0%, 85%);
        &:hover {
            color: white;
        }
    }
    @media (${QUERIES.medium}) {
        grid-template-rows: repeat(4, 1rem);
    }
    @media (${QUERIES.small}) {
        display: none;
    }
`;
