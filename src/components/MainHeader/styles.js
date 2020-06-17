import styled from 'styled-components';
import { QUERIES, COLOURS } from 'styling';

export const Container = styled.header`
    box-shadow: 0 1px 2px 0 hsla(206, 6%, 25%, 0.3), 0 2px 6px 2px hsla(206, 6%, 25%, 0.3);
`;

export const OuterBanner = styled.div`
    padding: 0.5rem;
    background: ${COLOURS.lightPurple};
`;

export const MiddleBanner = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: minmax(1rem, ${QUERIES.maxWidth});
    background: ${COLOURS.darkPurple};
`;

export const HeaderContent = styled.div`
    display: flex;
    padding: 1rem;
    color: white;
    align-content: center;
`;
