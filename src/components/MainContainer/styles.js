import styled from 'styled-components';
import { QUERIES } from 'styling';
import SecondaryNewsCard from '../NewsCards/SecondaryNewsCard';

export const Container = styled.div`
    display: grid;
    justify-self: center;
    grid-gap: 1rem;
    padding: 1rem;
    max-width: ${QUERIES.maxWidth};
    grid-template-columns: minmax(15rem, 35rem) minmax(5rem, 18rem) minmax(5rem, 18rem);
`;

export const SecondaryNewsCardContainer = styled.div`
    display: grid;
    grid-gap: 1rem;
`;
