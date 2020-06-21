import React from 'react';
import { Container } from './styles';
import faker from 'faker';

const TextNewsCardItem = ({
    article = {
        title: faker.lorem.sentences(Math.floor(Math.random() * 3) + 1),
        url:
            'https://www.fxstreet.com/news/forex-today-double-stimulus-talk-downs-dollar-ahead-of-powells-power-play-us-retail-sales-202006160607',
    },
}) => {
    return (
        <Container>
            <a href={article.url} rel="noopener noreferrer" target="_blank">
                {article.title}
            </a>
        </Container>
    );
};

export default TextNewsCardItem;
