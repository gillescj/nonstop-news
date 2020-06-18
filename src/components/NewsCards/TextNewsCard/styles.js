import styled from 'styled-components';
import { QUERIES, COLOURS } from 'styling';

export const Container = styled.div`
    display: grid;
    padding: 1rem;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, minmax(10rem, 25rem));
    border: 1px solid ${COLOURS.lightGrey};
    @media (${QUERIES.smallMedium}) {
        grid-template-columns: repeat(2, minmax(10rem, 25rem));
    }
    @media (${QUERIES.small}) {
        grid-template-columns: repeat(1, minmax(10rem, 25rem));
    }
`;
