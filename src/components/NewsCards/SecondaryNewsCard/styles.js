import styled from 'styled-components';
import { COLOURS, QUERIES } from 'styling';

export const Container = styled.a`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: minmax(5rem, 30rem);
    align-items: space-between;
    font-size: 0.9rem;
    padding: 1rem;
    max-width: 30rem;
    border: 1px solid ${COLOURS.lightGrey};
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 0 3px ${COLOURS.darkPurple};
    }
`;

export const ImageWrapper = styled.div`
    max-width: 12rem;
    max-height: 12rem;
    justify-self: center;
    overflow: hidden;
    @media (${QUERIES.small}) {
        max-height: 100%;
        max-width: 100%;
    }
`;

export const TextContent = styled.div`
    display: grid;
    grid-gap: 1rem;
`;

export const ArticleMainText = styled.div`
    align-self: start;
    display: grid;
    grid-gap: 1rem;
`;

export const ArticleInfo = styled.div`
    align-self: end;
    color: ${COLOURS.darkGrey};
    font-size: 0.9rem;
`;
