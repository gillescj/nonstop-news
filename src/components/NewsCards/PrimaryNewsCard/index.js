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
    id,
    sourceName,
    author,
    title,
    publishedAt,
    url,
    urlToImage,
    description,
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
