import styled from 'styled-components';
import { COLOURS } from 'styling';

export const Container = styled.div`
    display: grid;
    grid-template-columns: minmax(15rem, 35rem);
    grid-template-rows: auto 1fr;
    border: 1px solid ${COLOURS.lightGrey};
    transition: 0.4s;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 0 3px ${COLOURS.darkPurple};
    }
`;

export const ImageWrapper = styled.div``;

export const TextContent = styled.div`
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
`;

export const ArticleMainText = styled.div`
    align-self: flex-start;
    display: grid;
    grid-gap: 1rem;
`;

export const ArticleInfo = styled.div`
    align-self: end;
    color: ${COLOURS.darkGrey};
    font-size: 0.9rem;
`;
