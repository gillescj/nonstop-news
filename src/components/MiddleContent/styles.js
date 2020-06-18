import styled from 'styled-components';
import { QUERIES } from 'styling';

export const Container = styled.div`
    display: grid;
    justify-content: center;
    grid-gap: 1rem;
    padding: 1rem;
`;

export const PrimaryNewsCardsContainer = styled.div`
    display: grid;
    justify-content: center;
    padding: 1rem;
    grid-gap: 1rem;
    grid-template-columns: repeat(4, minmax(15rem, 25rem));
    @media (${QUERIES.medium}) {
        grid-template-columns: repeat(2, minmax(15rem, 25rem));
    }
    @media (${QUERIES.small}) {
        grid-template-columns: repeat(1, minmax(15rem, 30rem));
    }
`;
