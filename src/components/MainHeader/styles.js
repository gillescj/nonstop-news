import styled from 'styled-components';
import { QUERIES, COLOURS } from 'styling';

export const Container = styled.header`
    display: grid;
    justify-content: center;
    grid-template-columns: minmax(1rem, ${QUERIES.maxWidth});
    background: ${COLOURS.darkPurple};
    box-shadow: 0 1px 2px 0 hsla(206, 6%, 25%, 0.3), 0 2px 6px 2px hsla(206, 6%, 25%, 0.3);
`;

export const HeaderContent = styled.div`
    display: flex;
    padding: 1rem;
    color: white;
    align-content: center;
`;
