import styled from 'styled-components';
import { COLOURS } from 'styling';

export const Container = styled.h3`
    font-size: 1rem;
    cursor: pointer;
    &:hover {
        color: ${COLOURS.darkPurple};
    }
`;
