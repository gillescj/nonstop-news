import styled from 'styled-components';
import { QUERIES } from 'styling';

export const Container = styled.div`
    display: grid;
    justify-content: center;
    grid-gap: 1rem;
    padding: 1rem;
    grid-template-columns: minmax(15rem, 35rem) minmax(15rem, 20rem) minmax(15rem, 20rem);
    @media (${QUERIES.medium}) {
        grid-template-columns: minmax(15rem, 30rem) minmax(15rem, 20rem);
    }
    @media (${QUERIES.small}) {
        grid-template-columns: minmax(15rem, 30rem);
    }
`;

export const SecondaryNewsCardContainer = styled.div`
    display: grid;
    grid-gap: 1rem;
    justify-content: center;
    justify-items: center;
    /* justify-self: center; */
    @media (${QUERIES.medium}) {
        grid-template-columns: repeat(2, minmax(15rem, 30rem));
        grid-column: 1 / span 2;
    }
    @media (${QUERIES.small}) {
        grid-template-columns: minmax(15rem, 30rem);
        grid-column: 1;
    }
`;
