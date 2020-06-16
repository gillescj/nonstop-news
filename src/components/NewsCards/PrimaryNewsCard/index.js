import React from 'react';
import {
    Container,
    ImageWrapper,
    TextContent,
    ArticleMainText,
    ArticleInfo,
} from './styles';
import placeholderImage from '../../../assets/images/placeholder-image.jpg';

const PrimaryNewsCard = ({
    sourceName = 'FXStreet',
    author = 'Yohay Elam',
    title = "Forex Today: Double stimulus talk downs dollar ahead of Powell's power-play, US retail sales",
    description = `Here is what you need to know on Tuesday, June 16: The market mood is \"risk-on\" once again, as the Federal Reserve announced buying corporate bonds an`,
    publishedAt = '2020-06-16T06:07:43Z',
    url = 'https://www.fxstreet.com/news/forex-today-double-stimulus-talk-downs-dollar-ahead-of-powells-power-play-us-retail-sales-202006160607',
    id,
    urlToImage,
}) => {
    return (
        <Container>
            <ImageWrapper>
                <img src={placeholderImage} alt={title} />
            </ImageWrapper>
            <TextContent>
                <ArticleMainText>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </ArticleMainText>
                <ArticleInfo>
                    <div>{author}</div>
                    <div>{publishedAt}</div>
                </ArticleInfo>
            </TextContent>
        </Container>
    );
};

export default PrimaryNewsCard;
