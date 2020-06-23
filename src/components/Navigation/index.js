import React from 'react';
import { Container, ListContainer, Logo, DropdownContainer } from './styles';

const Navigation = () => {
    return (
        <Container>
            <Logo>Nonstop News</Logo>
            <ListContainer>
                <li>Business</li>
                <li>Entertainment</li>
                <li>Health</li>
                <li>Science</li>
                <li>Sports</li>
                <li>Technology</li>
            </ListContainer>
            <DropdownContainer value={'General'}>
                <option>General</option>
                <option>Business</option>
                <option>Entertainment</option>
                <option>Health</option>
                <option>Science</option>
                <option>Sports</option>
                <option>Technology</option>
            </DropdownContainer>
        </Container>
    );
};

export default Navigation;
