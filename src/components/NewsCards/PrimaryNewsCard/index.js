import React from 'react';
import { Container, ImageWrapper, TextContent } from './styles';
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
                <img src={placeholderImage} alt="gg" />
            </ImageWrapper>
            <TextContent>
                <h3>{title}</h3>
                <p>{description}</p>
                <div>{author}</div>
                <div>{publishedAt}</div>
            </TextContent>
        </Container>
    );
};

export default PrimaryNewsCard;
