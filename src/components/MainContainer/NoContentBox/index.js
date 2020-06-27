import React from 'react';
import { Container, Content, Header, Message } from './styles';

const NoContentBox = () => {
    return (
        <Container>
            <Content>
                <Header>No News Found!</Header>
                <Message>
                    We couldn't find any articles. Please try a different category or
                    country.
                </Message>
            </Content>
        </Container>
    );
};

export default NoContentBox;
