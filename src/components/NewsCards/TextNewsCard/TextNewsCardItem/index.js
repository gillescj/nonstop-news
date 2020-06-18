import React from 'react';
import { Container } from './styles';
import faker from 'faker';

const TextNewsCardItem = ({ newsItem }) => {
    // return <h3>{newsItem.title}</h3>;
    return (
        <Container>{faker.lorem.sentences(Math.floor(Math.random() * 3) + 1)}</Container>
    );
};

export default TextNewsCardItem;
