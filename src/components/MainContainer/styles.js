import styled from 'styled-components';
import { QUERIES } from 'styling';

export const Container = styled.div`
    display: grid;
    justify-self: center;
    max-width: ${QUERIES.maxWidth};
`;

export const LoaderContainer = styled.div`
    padding-top: 2rem;
`;
