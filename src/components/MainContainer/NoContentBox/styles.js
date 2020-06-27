import styled from 'styled-components';
import { COLOURS } from 'styling';

export const Container = styled.div`
    display: grid;
    padding: 1rem;
    padding-top: 2rem;
    grid-template-columns: minmax(15rem, 35rem);
`;

export const Content = styled.div`
    box-shadow: 0 1px 2px 0 hsla(206, 6%, 25%, 0.3), 0 2px 6px 2px hsla(206, 6%, 25%, 0.3);
`;

export const Header = styled.header`
    width: 100%;
    padding: 0.75rem;
    color: white;
    font-weight: bold;
    text-align: center;
    background: ${COLOURS.lightPurple};
`;

export const Message = styled.p`
    border: 1px solid ${COLOURS.lightGrey};
    padding: 1rem;
`;
