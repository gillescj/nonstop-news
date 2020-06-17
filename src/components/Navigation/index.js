import React from 'react';
import { Container, ListContainer, Logo } from './styles';

const Navigation = () => {
    return (
        <Container>
            <ListContainer>
                <li>
                    <Logo>Nonstop News</Logo>
                </li>
                <li>Business</li>
                <li>Entertainment</li>
                <li>Health</li>
                <li>Science</li>
                <li>Sports</li>
                <li>Technology</li>
            </ListContainer>
        </Container>
    );
};

export default Navigation;
