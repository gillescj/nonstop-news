import React from 'react';
import {
    Container,
    ImageWrapper,
    TextContent,
    ArticleMainText,
    ArticleInfo,
} from './styles';
import faker from 'faker';

const SecondaryNewsCard = ({
    sourceName = 'FXStreet',
    author = 'Yohay Elam',
    title = faker.lorem.sentences(Math.floor(Math.random() * 3) + 1),
    publishedAt = '2020-06-16T06:07:43Z',
    url = 'https://www.fxstreet.com/news/forex-today-double-stimulus-talk-downs-dollar-ahead-of-powells-power-play-us-retail-sales-202006160607',
    id,
    urlToImage = faker.image.image(),
}) => {
    return (
        <Container>
            <ImageWrapper>
                <img src={urlToImage} alt={title} />
            </ImageWrapper>
            <TextContent>
                <ArticleMainText>
                    <h3>{title}</h3>
                </ArticleMainText>
                <ArticleInfo>
                    <div>{author}</div>
                    <div>{sourceName}</div>
                    <div>{publishedAt}</div>
                </ArticleInfo>
            </TextContent>
        </Container>
    );
};

export default SecondaryNewsCard;
