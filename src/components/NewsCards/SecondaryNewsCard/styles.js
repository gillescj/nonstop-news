import styled from 'styled-components';
import { COLOURS } from '../../../styling';

export const Container = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: minmax(5rem, 18rem);
    align-items: space-between;
    font-size: 0.9rem;
    padding: 1rem;
    max-width: 18rem;
    border: 1px solid ${COLOURS.lightGrey};
`;

export const SubContent = styled.div`
    display: grid;
    grid-template-columns: auto;
    img {
        max-width: 8rem;
        justify-self: center;
    }
`;

export const TextContent = styled.div`
    display: grid;
`;
