import styled from 'styled-components';
import { COLOURS } from 'styling';

export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(15rem, 35rem);
    grid-template-rows: min-content 1fr;
    border: 1px solid ${COLOURS.lightGrey};
`;

export const ImageWrapper = styled.div``;

export const TextContent = styled.div`
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
`;
