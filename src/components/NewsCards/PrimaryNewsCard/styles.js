import styled from 'styled-components';
import { COLOURS } from '../../../styling';

export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(15rem, 35rem);
    border: 1px solid ${COLOURS.lightGrey};
`;

export const TextContent = styled.div`
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
`;
