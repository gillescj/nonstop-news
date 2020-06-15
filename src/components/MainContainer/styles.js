import styled from 'styled-components';
import { QUERIES } from '../../styling';

export const Container = styled.div`
    display: grid;
    justify-self: center;
    grid-template-columns: minmax(auto, ${QUERIES.maxWidth});
    background: orange;
`;
