import styled from 'styled-components';
import { COLOURS } from 'styling';

export const Container = styled.a`
    display: grid;
    align-items: start;
    cursor: pointer;
`;

export const TextContent = styled.div`
    display: grid;
    grid-gap: 0.5rem;
`;

export const ArticleTitle = styled.h3`
    font-size: 1rem;
    &:hover {
        color: ${COLOURS.darkPurple};
    }
`;

export const ArticleInfo = styled.div`
    color: ${COLOURS.darkGrey};
    font-size: 0.9rem;
`;
